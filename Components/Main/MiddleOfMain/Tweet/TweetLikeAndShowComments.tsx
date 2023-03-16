"use client"
import { mainContext } from '@/models'
import { faComment, faEye, faHeart, faPaperPlane, faSeedling, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Tweet, User } from '@prisma/client'
import axios from 'axios'
import { useSession } from 'next-auth/react'
import React,{useEffect, useState,useContext} from 'react'
import TweetSendLinl from './TweetSendLinl'

interface props{
    liked:boolean,
    totalLikes:number ,
    setTotalLikes:React.Dispatch<React.SetStateAction<number >>,
    userId:string,
    setLiked:React.Dispatch<React.SetStateAction<boolean>>,
    tweetId:string 
    totalComments:number
}
interface tweet{
    user: User, tweet: Tweet 
  }


function TweetLikeAndShowComments({setLiked,userId,totalLikes,setTotalLikes,tweetId,liked,totalComments}:props) {
    const session = useSession()
    const {handleOpenModalTweet} = useContext(mainContext)
    const {Tweet} = useContext(mainContext)
    const {setTweet} = useContext(mainContext)
    
    function likeComment() {
        if (session.data?.user?.name) {
          axios.post(`/api/likeTweet/${session.data?.user?.name}`, { tweetId: tweetId })
          let allLikes = Tweet?.tweet.tweet.likes ?? []
          allLikes.push(session.data?.user?.name)
          if (Tweet && Tweet.tweet.tweet.id === tweetId) {
            const newTweet: Tweet ={
              id: Tweet.tweet.tweet.id,
              created_at: Tweet.tweet.tweet.created_at,
              description:   Tweet.tweet.tweet.description,
              title: Tweet.tweet.tweet.title,
              userId: Tweet.tweet.tweet.userId,
              theme:  Tweet.tweet.tweet.theme,
              likes: allLikes
            }
            setTweet({ tweet:{tweet:newTweet,user:Tweet.tweet.user},tweetComments:Tweet.tweetComments })         
        }
        setLiked(true)
        setTotalLikes(totalLikes + 1)
        }
      }

function unLikeComment ()
    {
        if (session.data?.user?.name) {
            axios.post(`/api/unLikeTweet/${session.data?.user?.name}`, { tweetId: tweetId })
            let allLikes:string[] = []
            Tweet?.tweet.tweet.likes.map((like)=>{
                if(like!==session.data?.user?.name )
                {
                    allLikes.push(like)
                }
            })
            if (Tweet && Tweet.tweet.tweet.id === tweetId) {
              const newTweet: Tweet ={
                id: Tweet.tweet.tweet.id,
                created_at: Tweet.tweet.tweet.created_at,
                description:   Tweet.tweet.tweet.description,
                title: Tweet.tweet.tweet.title,
                userId: Tweet.tweet.tweet.userId,
                theme:  Tweet.tweet.tweet.theme,
                likes: allLikes
              }
              setTweet({ tweet:{tweet:newTweet,user:Tweet.tweet.user},tweetComments:Tweet.tweetComments })             
          }
          setLiked(false)
          setTotalLikes(totalLikes - 1)
          }
    }
  return (
    <div className='w-52 flex items-center justify-around'>            
        <FontAwesomeIcon onClick={()=>{liked ?unLikeComment() : likeComment()}} className={liked ?'duration-200 w-6 h-8 text-red-600 mx-5 hvr-pop cursor-pointer':'duration-200 w-6 h-8 text-blue-100 mx-5 hvr-pop cursor-pointer'}  icon={ liked ?faHeart :faThumbsUp} />
        <FontAwesomeIcon className= '  hidden xl:block w-6 h-8 text-blue-100  hvr-shrink cursor-pointer' onClick={()=>{handleOpenModalTweet(false,userId.toString(),tweetId.toString(),totalComments)}}  icon={faEye} />
        <TweetSendLinl tweetId={tweetId}/>
    </div>
  )
}

export default TweetLikeAndShowComments