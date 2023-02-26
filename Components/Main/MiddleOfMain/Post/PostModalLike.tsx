"use client"
import { mainContext } from '@/models'
import { faHeart, faPaperPlane, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Post, User } from '@prisma/client'
import axios from 'axios'
import { useSession } from 'next-auth/react'
import React ,{useState,useEffect,useContext}from 'react'

interface POST{
    user: User, post: Post 
  }

function PostModalLike() {
        const session = useSession()
        const {post} = useContext(mainContext)
        const {setPost} = useContext(mainContext)
        const [liked,setLiked] = useState<boolean>(false)
        useEffect(()=>{
            if(session.data?.user?.name && post?.post.post.likes.includes(session.data?.user?.name))
            {
                setLiked(true)
            }
        },[post])
        function likeComment() {
            if (session.data?.user?.name) {
              axios.post(`/api/likePost/${session.data?.user?.name}`, { postId: post?.post.post.id })
              let allLikes = post?.post.post.likes ?? []
              allLikes.push(session.data?.user?.name)
              if (post) {
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
                setLiked(true)
            }
            }
          }

    function unLikeComment ()
        {
            if (session.data?.user?.name) {
                axios.post(`/api/unLikePost/${session.data?.user?.name}`, { postId: post?.post.post.id })
                let allLikes: string[] = []
                post?.post.post.likes.map((like)=>{
                    if(like!==session.data?.user?.name )
                    {
                        allLikes.push(like)
                    }
                })
                if (post) {
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
                  setLiked(false)
              }
              }

        }
  return (
    <div className='w-full h-1/2 flex items-center justify-around'>
        <FontAwesomeIcon onClick={()=>{liked ?unLikeComment() : likeComment()}} className={liked ?'duration-200 w-8 h-8 text-red-600 mx-5 hvr-pop cursor-pointer':'duration-200 w-8 h-8 text-black mx-5 hvr-pop cursor-pointer'}  icon={ liked ?faHeart :faThumbsUp} />
        <FontAwesomeIcon className='w-6 h-6 text-black mx-5 hvr-pop cursor-pointer'  icon={faPaperPlane} />

    </div>
  )
}

export default PostModalLike