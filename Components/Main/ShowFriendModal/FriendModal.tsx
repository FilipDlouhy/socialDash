"use client"
import { faArrowRight,faGear, faHeart, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React,{useState,useContext,useEffect,useRef} from 'react'
import { mainContext } from '@/models';
import axios from 'axios';
import { Post, Tweet, User, Video } from '@prisma/client';
import FriendModalPost from './FriendModalPost';
import FriendModalTweet from './FriendModalTweet';
import { useSession } from 'next-auth/react';
import FriendModalFriendData from './FriendModalFriendData';
import FriendModalFriend from './FriendModalFriend';
import FriendModalAddRemoveFriendButton from './FriendModalAddRemoveFriendButton';
import FriendModalFollowUnfollowButton from './FriendModalFollowUnfollowButton';
import Link from 'next/link';
import FriendModalVideo from './FriendModalVideo';

interface video{
  user: friendWithImg, video: Video 
}

interface friendWithImg{
  id: string;
  userName: string; 
  img: string  | null
}

interface post{
    user: User, post: Post 
}
interface tweet{
    user: User, tweet: Tweet 
}

interface numberStatsUser{
  tweets:number,
  posts:number,
  videos:number
  friends:number
  followers:number
  following:number
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
  const [Friend,setFriend] = useState<User>()
  const [userNumbers,setUserNumbers] = useState<numberStatsUser>()
  const [data,setData] = useState< (tweet | post  | video)[]>()
  const [renderCondition,setRenderCondition] = useState<string>("default")
  const [inFriendList,setInFriendList] = useState<boolean>(false)
  const session = useSession()
  const [FriendFriends,setFriendFriends] = useState<friendWithImg[]>([])
  const [isFollowing,setIsFollowing] = useState<boolean>(false)
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
                  return <FriendModalPost userId={user.id}  post={data} key={data.post.id} />;
                } else if ("tweet" in data) {
                  return <FriendModalTweet  userId={user.id} tweet={data} key={data.tweet.id} />;

                } 
                else if("video" in data)
                {
                  return <FriendModalVideo userId={user.id} video={data} />
                }                
                else {
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
                  return <FriendModalPost userId={user.id} post={data} key={data.post.id} />;
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
                  return <FriendModalTweet userId={user.id} tweet={data} key={data.tweet.id} />;
                } else {
                  return null;
                }
              })}
            </>
          );
    }
    else if (renderCondition === "videos")
    {
        return (
            <>
                {data?.map((data) => {
                if ("post" in data) {
                    return null;
                } else if("video" in data)
                  {
                    return <FriendModalVideo userId={user.id} video={data} />
                  } 
                  else {
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
              {FriendFriends?.map((friend)=>{
                if(Friend?.friends.includes(friend.id))
                {
                  return <FriendModalFriend userId={user.id} user={friend}/>
                }
              })}
            </>
          );
    }
    else if (renderCondition === "followers")
    {
        return (
            <>
              {FriendFriends?.map((friend)=>{
                if(Friend?.followers.includes(friend.id))
                {
                  return <FriendModalFriend userId={user.id} user={friend}/>
                }
              })}
            </>
          );
    }
    else if (renderCondition === "following")
    {
        return (
            <>
              {FriendFriends?.map((friend)=>{
                if(Friend?.following.includes(friend.id))
                {
                  return <FriendModalFriend userId={user.id} user={friend}/>
                }
              })}
            </>
          );
    }
  }
  useEffect(()=>{
    if(Friend?.id !== friend)
    {      
        setRenderCondition("default")
        setData(undefined)
        setFriend(undefined)
        setUserNumbers(undefined)
        axios.post("/api/getFriend",{userId:friend}).then((res)=>{
        
            setData(res.data.data)
            setFriend(res.data.user)
           if(session.data?.user?.name&&res.data.user.friends.includes(session.data?.user?.name) === false)
           {
                setInFriendList(false)
           }
           else
           {
                setInFriendList(true)  
           }
           if(res.data.user.followers.includes(user.id))
           {
            setIsFollowing(true)  
          }
           else
           {
            setIsFollowing(false)  
           }
            setUserNumbers(res.data.numbersData)
            setFriendFriends(res.data.firendsWithImg)

        })
    }

  },[friend])



  return (
          <div>
    
        {showModalFriend && (
            <div className="modal-overlay" onClick={handleCloseModal}>

                    <div className="ModalFriend " onClick={(e) => e.stopPropagation()}>
                        <div className='w-full flex h-3/5 lg:h-2/5 shadow-xl'>
                            

                            <FriendModalFriendData userNumbers={userNumbers} setRenderCondition={setRenderCondition} user={Friend}/>
                            
                            <div className='w-1/3 flex flex-col items-center  justify-around   h-full'>
                              <FriendModalAddRemoveFriendButton user={user} userNumbers={userNumbers} setUserNumbers={setUserNumbers} setFriend={setFriend}   FriendFriends={FriendFriends} setFriendFriends={setFriendFriends} User={Friend} friends={friends} inFriendList={inFriendList} setFriends={setFriends} setInFriendList={setInFriendList}/>
                              <FriendModalFollowUnfollowButton userNumbers={userNumbers} setUserNumbers={setUserNumbers} setFriend={setFriend} isFollowing={isFollowing} setIsFollowing={setIsFollowing}  FriendFriends={FriendFriends} setFriendFriends={setFriendFriends} user={user} Friend={Friend}/>
                              <Link href={`/UserPage/${Friend?.id}/${user.id}`} className=' py-2 text-center w-20 text-xs md:text-base md:w-44 xl:w-64 h-11 xl:text-xl   font-semibold text-slate-50 hvr-radial-out3'>Go to Profile Page</Link>
                            </div>

                        </div>    
                        
                        <div className='w-full h-2/5 lg:h-3/5 modalCommentScroll p-2 flex items-start flex-wrap justify-start'>
                        {renderModalData()}            
                        </div>  
                

                    </div>
            </div>
      )}
    </div>
  )
}

export default FriendModal