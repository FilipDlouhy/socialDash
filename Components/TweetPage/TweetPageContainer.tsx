"use client"
import { faArrowCircleLeft, faArrowRight, faHeart, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Tweet, TweetComment, User } from '@prisma/client'
import Link from 'next/link'
import React,{useState,useEffect} from 'react'
import TweetPageCreateComment from './TweetPageCreateComment'
import TweetPageTweetComment from './TweetPageTweetComment'
import TweetPageTweetLike from './TweetPageTweetLike'
import TweetPageTweetText from './TweetPageTweetText'
import TweetPageUserProfile from './TweetPageUserProfile'
  interface tweet{
    user: User, tweet: Tweet 
}

interface props{
    tweet:tweet
    user:User
    tweetComments:TweetComment[]
}

function TweetPageContainer({tweet,user,tweetComments}:props) {
    const [Liked,setLiked] = useState<boolean>(false)
    const [Comments,setComments] = useState<TweetComment[]>([])
    useEffect(()=>{
        setComments(tweetComments)
        if(tweet.tweet.likes.includes(user.id))
        {
            setLiked(true)
        }
        else
        {
            setLiked(false)
        }

    },[])
  return (
    <div className='w-full px-8 h-screen flex items-center flex-col justify-center'> 
            <div className='w-full h-14'>
                <Link className='mr-72' href={`/ProfilePage/${user.id}`}><FontAwesomeIcon  className='w-12 h-12 text-blue-100 hvr-shrink cursor-pointer'  icon={faArrowCircleLeft} /></Link>
            </div>


            <div className='TweetPageTweet flex'>

                <TweetPageTweetText tweetText={tweet.tweet.description} />

                <div  className=' border-l-2 border-white w-1/3 h-full'>

                    <TweetPageUserProfile tweetUser={tweet.user}/>

                    <div className='w-full h-4/6 modalCommentScroll border-b-2 border-white'>
                        {
                            Comments?.map((comment)=>{
                                return    <TweetPageTweetComment comment={comment}/>
                            })
                        }
                    </div>

                    <div className='w-full h-32'>
                        
                        <TweetPageTweetLike liked={Liked} setLiked={setLiked} userId={user.id} tweetId={tweet.tweet.id}/>
                        
                        <TweetPageCreateComment tweetId={tweet.tweet.id} user={user} Comments={Comments} setComments={setComments} />
                    </div>


                </div>



            </div>


    </div>
  )
}

export default TweetPageContainer