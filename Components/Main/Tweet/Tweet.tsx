
"use client"
import React,{useEffect, useState,useContext} from 'react'
import "../../../lib/fontawsome"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faHome,faIdCard,faMapLocation,faArrowRight, faThumbsUp, faComment, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import PostComment from '../Post/PostComment';
import TweetComment from './TweetComment';
import { Tweet, User } from '@prisma/client';
import TweetCreateComment from './TweetCreateComment';
import axios from 'axios';
import TweetLikeAndShowComments from './TweetLikeAndShowComments';
import TweetModal from './TweetModal';
import { mainContext } from '@/models';
import TweetDisplayComments from './TweetDisplayComments';

interface props{
    tweet:tweet,
    user:User
}
interface tweet{
    user: User, tweet: Tweet 
  }

  
interface comment {
    text    :  String ,
    userId  :  String ,
    tweetId  : String,
    userName : String
}

function Tweet({user,tweet}:props) {
    const [totalComments,setTotalComments] = useState<number>(0)
    const [totalLikes,setTotalLikes] = useState<number>(0)
    const [liked,setLiked] = useState<boolean>(false)
    const [comments,setComments] = useState<comment[]>([])
    const {Tweet} = useContext(mainContext)

    useEffect(()=>{
        if(!Tweet)
        {
            axios.post(`/api/getTweetComments`,{tweetId:tweet.tweet.id}).then((res)=>{
                setComments(res.data.tweetComments)
                setTotalComments(res.data.totalNumberOfComments)
                setTotalLikes(tweet.tweet.likes.length)
                if(tweet.tweet.likes.includes(user.id))
                {
                    setLiked(true)
                }
                else
                {
                    setLiked(false)
                }
            })
        }


   
        if(Tweet &&Tweet.tweet.tweet.id=== Tweet.tweet.tweet.id && Tweet.tweetComments &&  comments && Tweet.tweetComments?.length > comments?.length )
        {
            let count = 1;
            let arr: comment[] = []
            Tweet.tweetComments.map((comment, index) => {
              if (count < 5) {
                arr.push(comment)
              }
                count++;
              })
            setComments(arr)
            setTotalComments(Tweet.tweetComments.length)
        }    
        if(Tweet &&Tweet.tweet.tweet.id === tweet.tweet.id && Tweet.tweet.tweet.likes.includes(user.id))
        {
            setLiked(true)
            setTotalLikes(Tweet.tweet.tweet.likes.length)
        }  
        if(Tweet &&Tweet.tweet.tweet.id === tweet.tweet.id && Tweet.tweet.tweet.likes.includes(user.id) === false )
        {
            setLiked(false)
            setTotalLikes(Tweet.tweet.tweet.likes.length)
        }
    },[Tweet])
  return (
    <div className='Tweet  rounded-lg my-10 '>
                
        <div className='w-full shadow-md   h-14 flex items-center justify-start ' >
            <div className='flex pl-2 h-full shadow-md hover:scale-90 duration-150 cursor-pointer items-center '>
                {tweet.user.img &&  <img src={tweet.user.img} className= 'cursor-pointer rounded-full w-10 h-10'></img>}
                <div className=' ml-3 flex    w-36 flex-col justify-center items-center'>
                    <p className= 'w-full cursor-pointer text-start text-white font-semibold text-lg'>{tweet.user.userName}</p>
                    <p className= 'w-full text-white  text-start text-sm font-light'>Tweet from {tweet.tweet.historicalPeriod}</p>
                </div>
            </div>

            <h1  className='flex items-center justify-center ml-2 w-44 text-white font-bold text-2xl'>{tweet.tweet.title}</h1>
            
            <div className='ml-1 w-52 flex h-full'>
                <div className='hover:scale-90 duration-200 cursor-pointer shadow-md w-1/2 h-full flex flex-col items-center justify-around'>
                    <p  className=' font-semibold text-white'>Likes</p>
                    <p className=' font-semibold text-white'>{totalLikes}</p>
                </div>
                <div className='hover:scale-90 duration-200 cursor-pointer  shadow-md w-1/2 h-full flex flex-col items-center justify-around'>
                    <p  className=' font-semibold text-white'>Comments</p>
                    <p className=' font-semibold text-white'>{totalComments}</p>
                </div>
            </div>

        </div>

        <div className='w-full h-56 my-1 p-2 flex items-center justify-center'>
            <p className='text-white text font-medium text-normal'>{tweet.tweet.description}</p>
        </div>

        <TweetDisplayComments comments={comments}/>

        <div className='w-full  h-10 mt-2 flex justify-around items-center'>

            <TweetCreateComment  tweetId={tweet.tweet.id} comments={comments} setComments={setComments}  totalComments={totalComments} setTotalComments={setTotalComments}   user={user} />
           
            <TweetLikeAndShowComments liked={liked} totalLikes={totalLikes} setTotalLikes={setTotalLikes} userId={user.id} setLiked={setLiked} tweetId={tweet.tweet.id} totalComments={totalComments}/>


        </div>
      

    </div>   
  )
}

export default Tweet