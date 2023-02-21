"use client"
import { mainContext } from '@/models'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { User } from '@prisma/client'
import axios from 'axios'
import React, { useState,useContext } from 'react'

interface Comment
{
    text:string,
    userId:string,
    userImg:string,
    postId:String,
    userName:String
}

interface props{
  user:User,
  totalComments: number  ,
  setTotalComments:React.Dispatch<React.SetStateAction<number >>,
  comments:Comment[] ,
  setComments:React.Dispatch<React.SetStateAction<Comment[] >>
  postId:string,
}

function PostCreateComment({postId,comments,setComments,user,totalComments,setTotalComments}:props) {
  const [comment,setComment] = useState<string>()
  function addComment ()
    {
      if(comment &&user.img){
        const newComment :Comment ={
          text:comment,userId:user.id,userImg:user.img,postId:postId,userName:user.userName
        }

         axios.post("/api/CreatePostComment",newComment).then((res)=>{
          if(res.data.message==="OK" )
          {
          

              let arr:Comment[] = []
              arr.push(newComment)
              comments?.map((comment=>{arr.push(comment)}))
              setComments([])
              setComments(arr)
   
              setTotalComments(totalComments+1)
     
            
         }})  

      }
    }
  return (
    <div className='w-full h-10 flex justify-around items-center'>
        <input  value={comment} onChange={(e)=>{setComment(e.target.value)}} className='w-96 bg-transparent shadow-md text-white font-light text-center  hover:shadow-lg duration-200 focus:shadow-xl  focus:outline-none' placeholder='Send a comment....'></input>
        <FontAwesomeIcon onClick={(e)=>{
          e.preventDefault()
          addComment()
          setComment(" ")
        }} className='w-6 h-6 text-blue-100 mx-5 hvr-pop cursor-pointer'  icon={faArrowRight} />
   </div>
  )
}

export default PostCreateComment