"use client"
import { mainContext } from '@/models'
import { faComment, faHeart, faThumbsUp,faPaperPlane, faEye } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Post, User } from '@prisma/client'
import axios from 'axios'
import { useSession } from 'next-auth/react'
import React, { useEffect, useState,useContext } from 'react'

interface POST{
    user: User, post: Post 
  }

interface props{
    liked:boolean,
    totalLikes:number ,
    setTotalLikes:React.Dispatch<React.SetStateAction<number >>,
    userId:string,
    setLiked:React.Dispatch<React.SetStateAction<boolean>>,
   postId:string 
   totalComments:number
}

function PostLikeAndShowComments({totalComments,postId,setLiked,userId,totalLikes,setTotalLikes,liked}:props) {
  const {handleOpenModalPost} = useContext(mainContext)
    const session = useSession()
    const {post} = useContext(mainContext)
    const {setPost} = useContext(mainContext)

    function likeComment() {
        if (session.data?.user?.name) {
          axios.post(`/api/likePost/${session.data?.user?.name}`, { postId: postId })
          let allLikes = post?.post.post.likes ?? []
          allLikes.push(session.data?.user?.name)
          if (post && post.post.post.id === postId) {
            const newPost: POST ={post:{
              id: post?.post.post.id,
              created_at: post?.post.post.created_at,
              description: post?.post.post.description,
              title: post?.post.post.title,
              img: post?.post.post.img,
              userId: post?.post.post.userId,
              placeFrom: post?.post.post.placeFrom,
              likes: allLikes
            },user:post.post.user}
            setPost({ post: newPost, postComments: post.postComments })             
        }
        setLiked(true)
        setTotalLikes(totalLikes + 1)
        }
      }

function unLikeComment ()
    {
        if (session.data?.user?.name) {
            axios.post(`/api/unLikePost/${session.data?.user?.name}`, { postId:postId  })
            let allLikes: string[] = []
            post?.post.post.likes.map((like)=>{
                if(like!==session.data?.user?.name )
                {
                    allLikes.push(like)
                }
            })
            if (post && post.post.post.id === postId) {
              const newPost: POST ={post:{
                id: post?.post.post.id,
                created_at: post?.post.post.created_at,
                description: post?.post.post.description,
                title: post?.post.post.title,
                img: post?.post.post.img,
                userId: post?.post.post.userId,
                placeFrom: post?.post.post.placeFrom,
                likes: allLikes
              },user:post.post.user}
              setPost({ post: newPost, postComments: post.postComments })             

          }
          setLiked(false)
          setTotalLikes(totalLikes - 1)
          }

    }
  return (
    <div className='w-1/2 h-full flex justify-around items-center'>
        <FontAwesomeIcon onClick={()=>{liked ?unLikeComment() : likeComment()}} className={liked ?'duration-200 w-8 h-8 text-red-600 mx-5 hvr-pop cursor-pointer':'duration-200 w-8 h-8 text-blue-100 mx-5 hvr-pop cursor-pointer'}  icon={ liked ?faHeart :faThumbsUp} />
        <FontAwesomeIcon className='w-8 h-8 text-blue-100 mx-5 hvr-pop cursor-pointer'onClick={()=>{handleOpenModalPost( false,userId,postId,totalComments) 
           }}  icon={faEye} />
        <FontAwesomeIcon className='w-8 h-8 text-blue-100 mx-5 hvr-pop cursor-pointer'  icon={faPaperPlane} />
    </div>
  )
}

export default PostLikeAndShowComments