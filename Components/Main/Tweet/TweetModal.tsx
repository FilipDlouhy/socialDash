"use client"
import { faArrowRight,faGear, faHeart, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React,{useState,useContext,useEffect,useRef} from 'react'
import { mainContext } from '@/models';
import axios from 'axios';
import { Tweet, TweetComment, User } from '@prisma/client';
import TweetModalCreateComment from './TweetModalCreateComment';
import TweetModalComment from './TweetModalComment';
import TweetModalLike from './TweetModalLike';
  


interface props{user:User}

function TweetModal({user}:props) {  
  const {Tweet} = useContext(mainContext)
  const {setShowModalTweet} = useContext(mainContext)
  const {showModalTweet} = useContext(mainContext)
  const [comments,setComments] = useState<TweetComment[]>()
  const handleCloseModal = () => {
    setShowModalTweet(false);
  };

  useEffect(()=>{
    console.log(Tweet)
    setComments(Tweet?.tweetComments)
  },[Tweet])

  return (
          <div>
    
      {showModalTweet && (
        <div className="modal-overlay" onClick={handleCloseModal}>
                  <div className="TweetModal flex" onClick={(e) => e.stopPropagation()}>
                        <div className='w-2/3 h-full'>
                          <p className='w-full h-full p-2  font-semibold text-lg flex items-center justify-center '>{Tweet?.tweet.tweet.description}</p>
                  </div>
                <div className='w-1/3 border-l-2 border-black h-full'>


                <div className='w-full h-14 border-b-2 flex justify-between items-center border-black'>
                            <div className='w-36 flex items-center justify-around h-full'>
                              {Tweet?.tweet.user.img && <img src={Tweet?.tweet.user.img} className='w-11  h-11 rounded-full'></img>}
                              <p className='text-xs font-semibold'>{Tweet?.tweet.user.userName}</p>
                            </div>

                            <div className='w-16 flex items-center justify-center h-full'>
                              <p className='text-xs font-semibold'>{Tweet?.tweet.tweet.historicalPeriod} Period</p>
                            </div>

                            <div className='w-16 flex items-center justify-between h-full'>
                              <FontAwesomeIcon  className='w-5 h-6 text-black mx-5 hvr-pop cursor-pointer'  icon={faGear} />
                            </div>

                </div>
                      
                <div className='w-full h-4/5 modalCommentScroll  border-b-2 border-black'>

                {comments && comments.map((comment)=>{
                    return <TweetModalComment comment={comment}/>
                  }) }

                </div>


                      
                <div className='w-full h-20'>
                  <TweetModalLike/>
                <TweetModalCreateComment user={user} />


                </div>



                </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default TweetModal