"use client"
import React, { use, useEffect, useState,useContext } from 'react'
import "../../../../lib/fontawsome"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome,faIdCard,faMapLocation,faArrowRight, faThumbsUp, faComment,faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { Post, PostComment, User } from '@prisma/client';
import PostCreateComment from './PostCreateComment';
import axios from 'axios';
import PostLikeAndShowComments from './PostLikeAndShowComments';
import PostModal from "./PostModal"
import { mainContext } from '@/models';
import PostDisplayComments from './PostDisplayComments';
import PostShowLikesAndComments from './PostShowLikesAndComments';
import PostUserProfile from './PostUserProfile';
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
            post.postComments.map((comment) => {
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
                <PostUserProfile post={Post} userId={user.id}/>

            <h1 className='ml-7 text-xl text-white font-bold'>{Post.post.title}</h1>
        </div>

        <div className='w-full h-3/5'>
            { Post.post.img &&<img src={Post.post.img} className=' duration-200 w-full h-full'></img>}
        </div>


        <div className='w-full shadow-md h-16 flex justify-start items-center'>

            <PostLikeAndShowComments totalComments={totalComments} postId={Post.post.id} setLiked={setLiked} userId={Post.user.id} totalLikes ={totalLikes} setTotalLikes ={setTotalLikes} liked={liked} />

            <PostShowLikesAndComments postId={Post.post.id} totalComments={totalComments}  totalLikes={totalLikes}/>

        </div>


        <div className='w-full py-4  h-14 px-2  '>
            <p className='text-white text-sm'><span className='font-bold'>{user.userName}</span>: {getWordStr(Post.post.description)}</p>    
        </div> 


         <PostDisplayComments userId={user.id} comments={comments}/>     


        <PostCreateComment postId={Post.post.id} comments={comments} setComments={setComments}  totalComments={totalComments} setTotalComments={setTotalComments}   user={user}/>
     
    </div>
  )
}

export default Post