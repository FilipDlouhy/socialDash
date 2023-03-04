"use client"
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { TweetComment, User } from '@prisma/client'
import axios from 'axios'
import React,{useState} from 'react'
import uuid from 'react-uuid'

interface props
{
    user:User
    Comments:TweetComment[] 
    setComments: React.Dispatch<React.SetStateAction<TweetComment[] >>
    tweetId:string
}

function TweetPageCreateComment({tweetId,Comments,setComments,user}:props) {
    const [comment,setComment] = useState<string>()


function addComment(){
    if( comment?.length &&comment?.length > 1)
    {
        let id =uuid()
        let date =new Date()
        const newComment:TweetComment ={
             userId:user.id,tweetId:tweetId,userName:user.userName,created_at:date,id:id,text:comment
          }
      
           axios.post("/api/createTweetComment",newComment).then((res)=>{
            if(res.data.message === "OK")
            {
              let  arr =[]
              arr.push(newComment)
              Comments.map((comment)=>{arr.push(comment)})  
              setComments(arr)
            }
           })
          
    }

}



return (
    <div className='w-full h-16 flex items-center justify-around'>
        <input  onChange={(e)=>{setComment(e.target.value)}} maxLength={252}  className='w-56 bg-transparent modalCommentShadow  font-medium text-center  hover:shadow-lg  text-white h-8 duration-200 focus:shadow-xl  focus:outline-none' placeholder='Send a comment....'></input>
        <FontAwesomeIcon onClick={()=>{addComment()}}  className='w-10 h-10 text-blue-100 mx-5 hvr-pop cursor-pointer'  icon={faArrowRight} />
</div>

  )
}

export default TweetPageCreateComment