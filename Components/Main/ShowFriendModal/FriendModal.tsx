"use client"
import { faArrowRight,faGear, faHeart, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React,{useState,useContext,useEffect,useRef} from 'react'
import { mainContext } from '@/models';
import axios from 'axios';
import { Post, Tweet, User } from '@prisma/client';
import FriendModalPost from './FriendModalPost';
import FriendModalTweet from './FriendModalTweet';
import { useSession } from 'next-auth/react';
import FriendModalFriendData from './FriendModalFriendData';
import FriendModalFriend from './FriendModalFriend';
import FriendModalAddRemoveFriendButton from './FriendModalAddRemoveFriendButton';


interface post{
    user: User, post: Post 
}
interface tweet{
    user: User, tweet: Tweet 
}

interface numberStatsUser{
    tweets:number,
    posts:number,
    friends:number
}
interface props
{
  friends:User[]| undefined
  setFriends:React.Dispatch<React.SetStateAction<User[] | undefined>>
  user:User
}

function FriendModal({user,friends,setFriends}:props) { 
  const {showModalFriend} = useContext(mainContext)
  const {friend} = useContext(mainContext)
  const {setShowModalFriend} = useContext(mainContext)
  const [User,setUser] = useState<User>()
  const [userNumbers,setUserNumbers] = useState<numberStatsUser>()
  const [data,setData] = useState< (tweet | post )[]>()
  const [renderCondition,setRenderCondition] = useState<string>("default")
  const [inFriendList,setInFriendList] = useState<boolean>(false)
  const session = useSession()
  const handleCloseModal = () => {
    setShowModalFriend(false)
  };

  function renderModalData() {
    if(renderCondition === "default")
    {
        return (
            <>
              {data?.map((data) => {
                if ("post" in data) {
                  return <FriendModalPost post={data} key={data.post.id} />;
                } else if ("tweet" in data) {
                  return <FriendModalTweet tweet={data} key={data.tweet.id} />;
                } else {
                  return null;
                }
              })}
            </>
          );
    }
    else if (renderCondition === "posts")
    {
        return (
            <>
              {data?.map((data) => {
                if ("post" in data) {
                  return <FriendModalPost post={data} key={data.post.id} />;
                } else if ("tweet" in data) {
                  return null;
                } else {
                  return null;
                }
              })}
            </>
          );
    }
    else if (renderCondition === "tweets")
    {
        return (
            <>
                {data?.map((data) => {
                if ("post" in data) {
                    return null;
                } else if ("tweet" in data) {
                  return <FriendModalTweet tweet={data} key={data.tweet.id} />;
                } else {
                  return null;
                }
              })}
            </>
          );
    }
    else if (renderCondition === "friends")
    {
        return (
            <>
                {User?.friends.map((id)=>{
                  friends?.map((Friend)=>{
                    if(Friend.id === id)
                    {
                      return  <FriendModalFriend user={User}/>

                    }
                  })
                  if(id ===user.id)
                  {
                    return  <FriendModalFriend user={user}/>
                  }
                })}
            </>
          );
    }
  }
  useEffect(()=>{
    if(User?.id !== friend)
    {      
        setRenderCondition("default")
        setData(undefined)
        setUser(undefined)
        setUserNumbers(undefined)
        axios.post("/api/getFriend",{userId:friend}).then((res)=>{
        
            setData(res.data.data)
            setUser(res.data.user)
            let friendsArray:string[] = res.data.user.friends
           if(session.data?.user?.name&&friendsArray.includes(session.data?.user?.name) === false)
           {
                setInFriendList(false)
           }
           else
           {
                setInFriendList(true)  
           }
            setUserNumbers(res.data.numbersData)
        })
    }

  },[friend])



  return (
          <div>
    
        {showModalFriend && (
            <div className="modal-overlay" onClick={handleCloseModal}>

                    <div className="ModalFriend " onClick={(e) => e.stopPropagation()}>
                        <div className='w-full flex h-2/5 shadow-xl'>
                            

                            <FriendModalFriendData userNumbers={userNumbers} setRenderCondition={setRenderCondition} user={User}/>
                            
                            <div className='w-1/3 flex items-start pt-10 justify-center h-full'>
                              <FriendModalAddRemoveFriendButton User={User} friends={friends} inFriendList={inFriendList} setFriends={setFriends} setInFriendList={setInFriendList}/>
                            </div>

                        </div>    
                        
                        <div className='w-full h-3/5 modalCommentScroll p-2 flex items-start flex-wrap justify-start'>
                        {renderModalData()}            
                        </div>  
                

                    </div>
            </div>
      )}
    </div>
  )
}

export default FriendModal