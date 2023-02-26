"use client"
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { User } from '@prisma/client'
import axios from 'axios'
import React,{useState} from 'react'

interface comment {
    text    :  String ,
    userId  :  String ,
    tweetId  : String,
    userName : String
}

interface props{
    user:User,
    tweetId:String,
    totalComments:number ,
    setTotalComments:React.Dispatch<React.SetStateAction<number >>,
    comments:comment[] ,
    setComments:React.Dispatch<React.SetStateAction<comment[]>>
}

function TweetCreateComment({comments,setComments,totalComments,setTotalComments,user,tweetId}:props) {
    const [text,setText] =useState<string>()

    function addComment ()
    {
      if(text &&user.img){
        const newComment :comment ={
          text:text,userId:user.id,tweetId:tweetId,userName:user.userName
        }

         axios.post("/api/createTweetComment",newComment).then((res)=>{
          if(res.data.message==="OK" )
          {
              let arr:comment[] = []
              arr.push(newComment)
              let count = 1
              comments?.map((comment=>{
                if(count<4)
                {
                  arr.push(comment)
                }
                count++
            }))

              setComments([])
              setComments(arr)
              setTotalComments(totalComments+1)   
              setText("") 
         }})  

      }
    }

  return (
    <div>
        <input maxLength={252}  value={text} onChange={(e)=>{setText(e.target.value)}} className='focus:outline-1 focus:outline-white  duration-200 text-center  h-6 w-60 bg-transparent mx-5 shadow-md text-white font-medium text-xs ' ></input>
        <FontAwesomeIcon onClick={()=>{addComment()}} className='w-5 h-8 text-blue-100 hvr-shrink cursor-pointer'  icon={faArrowRight} />
    </div> 
 )
}

export default TweetCreateComment