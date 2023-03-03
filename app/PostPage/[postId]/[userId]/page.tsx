import PostPagePost from '@/Components/PostPage/PostPagePost';
import { Post, PostComment, User } from '@prisma/client';
import axios from 'axios';
import React from 'react'
interface Props {
    params: {
      postId: string
      userId:string
    };
  }
  interface post{
    user: User, post: Post 
}
async function getPost(  postId: string) {
  const post= await  axios.post("http://localhost:3000/api/getPostPostPage",{postId:postId})
  return post.data
} 
async function getPostComments(  postId: string) {
    const postComments= await  axios.post("http://localhost:3000/api/getPostPostPageComments",{postId:postId})
    return postComments.data
  } 
  
  async function getUser(userId:string) {
    const user = await axios.get(`http://localhost:3000/api/getUser/${userId}`)
    return user.data
   }
   

async function page({params:{postId,userId}}:Props) {
    const post:post = await getPost(postId)
    const user:User = await getUser(userId)
    const postComments:PostComment[] = await getPostComments(postId)
  return (
    <div className='w-full h-screen flex items-center justify-center'>
            <PostPagePost user={user} post={post} postComments={postComments}/>
    </div>
  )
}

export default page