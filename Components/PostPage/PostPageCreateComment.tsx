"use client"
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { PostComment, User } from '@prisma/client'
import axios from 'axios'
import { useSession } from 'next-auth/react'
import React ,{useState}from 'react'
import uuid from 'react-uuid'

interface props {
    comments: PostComment[] 
    setComments: React.Dispatch<React.SetStateAction<PostComment[] >>
    user:User,
    postId:string
}


function PostPageCreateComment({postId,user,comments,setComments}:props) {
    const [Comment, setComment] = useState<string>("")    
    function addComment(){

        let arr:PostComment[] =[]
        const id = uuid()
        const date = new Date()
  
            if(user.img)
            {
                const newComment:PostComment ={
                        text:Comment,userId:user.id,userImg:user.img,postId:postId,userName:user.userName,id:id,created_at:date
                    } 
                    axios.post("/api/CreatePostComment",newComment).then((res)=>{
                        if(res.data.message==="OK" ){
                            arr.push(newComment)
                            comments.map((comment)=>{arr.push(comment)})
                            setComments(arr)
                            setComment("")
                        }
                    })

            }

 

    }
  return (
    <div className='w-full flex-col md:flex-row h-2/3 md:h-1/2 flex items-center justify-around'>
        <input value={Comment} maxLength={252} onChange={(e)=>{setComment(e.target.value)
        }}   className='w-32 md:w-40 lg:w-64 bg-transparent modalCommentShadow  font-medium text-center  hover:shadow-lg text-sm  lg:text-xl text-white h-10 duration-200 focus:shadow-xl  focus:outline-none' placeholder='Send a comment....'></input>
        <FontAwesomeIcon  onClick={()=>{addComment()}} className='w-8 h-8  lg:w-12 lg:h-12 text-blue-100 mx-5 hvr-pop cursor-pointer'  icon={faArrowRight} />
    </div>
  )
}

export default PostPageCreateComment