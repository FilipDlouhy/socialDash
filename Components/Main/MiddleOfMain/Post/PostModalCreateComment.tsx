"use client"
import { mainContext } from '@/models'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { PostComment, User } from '@prisma/client'
import axios from 'axios'
import { useSession } from 'next-auth/react'
import React,{useState,useContext} from 'react'
import uuid from 'react-uuid'




interface props{user:User}
function PostModalCreateComment({user}:props) {
        const {post} = useContext(mainContext)
        const {setPost} = useContext(mainContext)
        const [comment,setComment] = useState<string>()
        function addComment ()
        {
    
          if(post &&comment &&user.img){
            let id = uuid()
            const newComment: PostComment = {
              id: id, // assign a unique id to the comment
              text: comment,
              userId: user.id,
              userImg: user.img,
              postId: post.post.post.id,
              userName: user.userName,
              created_at: new Date() // set the current timestamp
            };
    
             axios.post("/api/CreatePostComment",newComment).then((res)=>{
              if(res.data.message==="OK" )
              {
                let oldComents = post.postComments
                oldComents?.unshift(newComment)
                setPost({post:post.post,postComments:oldComents})
              }
             })   
    
          }
    
        }
  return (
    <div className='w-full h-1/2  my-4 flex items-center justify-around'>                
        <input maxLength={252}  value={comment} onChange={(e)=>{
          console.log(user)
          setComment(e.target.value)}}  className='w-52 bg-transparent modalCommentShadow text-black font-light text-center  hover:shadow-lg duration-200 focus:shadow-xl  focus:outline-none' placeholder='Send a comment....'></input>
        <FontAwesomeIcon onClick={()=>{addComment()}} className='w-6 h-6 text-black mx-5 hvr-pop cursor-pointer'  icon={faArrowRight} />
    </div>
  )
}

export default PostModalCreateComment