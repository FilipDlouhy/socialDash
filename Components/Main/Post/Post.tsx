"use client"
import React, { use, useEffect, useState,useContext } from 'react'
import "../../../lib/fontawsome"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome,faIdCard,faMapLocation,faArrowRight, faThumbsUp, faComment,faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { Post, PostComment, User } from '@prisma/client';
import PostCreateComment from './PostCreateComment';
import axios from 'axios';
import PostLikeAndShowComments from './PostLikeAndShowComments';
import PostModal from "./PostModal"
import { mainContext } from '@/models';
import PostDisplayComments from './PostDisplayComments';
interface Comment
{
    text:string,
    userId:string,
    userImg:string,
    postId:String
    userName:String
}

interface post{
    user: User, post: Post 
  }

interface props{
    Post:post,
    user:User
}

function Post({Post,user}:props) {

    const [totalComments,setTotalComments] = useState<number>(0)
    const [totalLikes,setTotalLikes] = useState<number>(0)
    const {post} = useContext(mainContext)
    const [liked,setLiked] = useState<boolean>(false)
    const [comments,setComments] = useState<Comment[]>([])



    useEffect(()=>{
        if(!post)
        {
            axios.post(`/api/getPostComments`,{postId:Post.post.id}).then((res)=>{
                setComments(res.data.postComments)
                setTotalComments(res.data.totalNumberOfComments)
                setTotalLikes(Post.post.likes.length)
                if(Post.post.likes.includes(user.id))
                {
                    setLiked(true)
                }
                else
                {
                    setLiked(false)
                }
            })
        }


   
        if(post &&post.post.post.id === Post.post.id && post.postComments && post.postComments?.length > comments.length )
        {
            let count = 1;
            let arr: Comment[] = []
            post.postComments.map((comment, index) => {
              if (count < 7) {
                arr.push(comment)
              }
                count++;
              })
            setComments(arr)
            setTotalComments(post.postComments.length)
        }    
        if(post &&post.post.post.id === Post.post.id && post.post.post.likes.includes(user.id))
        {
            setLiked(true)
            setTotalLikes(post.post.post.likes.length)
        }  
        if(post &&post.post.post.id === Post.post.id && post.post.post.likes.includes(user.id) === false )
        {
            setLiked(false)
            setTotalLikes(post.post.post.likes.length)
        }
    },[post])

    function getWordStr(str:string) {
        return str?.split(/\s+/).slice(0, 15).join(" ");
        }

 return (
    
    <div className='Post my-10'>
                
                
        <div className='h-20 w-full flex items-center '>
            <div className='flex items-center shadow-md hover:scale-105 hover:shadow-none duration-150 cursor-pointer h-full w-56 pl-4'>
                {user.img && <img src={user.img} className=' cursor-pointer w-16 h-16 rounded-full'></img>}
                <div className= ' pl-4 flex flex-col w-32 justify-start items-start'>
                    <p className='cursor-pointer text-sm  text-white font-semibold '>From {Post.user.userName}</p>
                    <p className='text-white text-xs font-medium'>Post From: {Post.post.placeFrom}</p>
                </div>
            </div>


            <h1 className='ml-7 text-xl text-white font-bold'>{Post.post.title}</h1>
        </div>

        <div className='w-full h-3/5'>
            { Post.post.img &&<img src={Post.post.img} className=' duration-200 w-full h-full'></img>}
        </div>


        <div className='w-full shadow-md h-16 flex justify-start items-center'>

            <PostLikeAndShowComments totalComments={totalComments} postId={Post.post.id} setLiked={setLiked} userId={Post.user.id} totalLikes ={totalLikes} setTotalLikes ={setTotalLikes} liked={liked} />

            <div className='w-1/2 h-full flex  justify-around items-center'>
                <div className='w-1/2  hover:scale-90 duration-200 cursor-pointer h-full flex shadow-lg flex-col justify-center items-center'>
                    <p className=' text-xl text-white font-semibold'>Likes</p>
                    <p className=' text-xl text-white font-semibold'>{totalLikes}</p>
                </div>

                <div className='w-1/2 hover:scale-90 duration-200 cursor-pointer  h-full flex shadow-lg  flex-col justify-center items-center'>
                    <p className=' text-xl text-white font-semibold'>Comments</p>
                    <p className=' text-xl text-white font-semibold'>{totalComments}</p>
                </div>
            </div>

        </div>


        <div className='w-full py-4  h-14 px-2  '>
            <p className='text-white text-sm'><span className='font-bold'>{user.userName}</span>: {getWordStr(Post.post.description)}</p>    
        </div> 


       <PostDisplayComments comments={comments}/>     


        <PostCreateComment postId={Post.post.id} comments={comments} setComments={setComments}  totalComments={totalComments} setTotalComments={setTotalComments}   user={user}/>
     
    </div>
  )
}

export default Post