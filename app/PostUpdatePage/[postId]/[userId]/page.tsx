import PostPageUpdateContainer from '@/Components/PostPageUpdate/PostPageUpdateContainer';
import PostPageUpdateForm from '@/Components/PostPageUpdate/PostPageUpdateForm';
import PostPageUpdatePost from '@/Components/PostPageUpdate/PostPageUpdatePost';
import { faArrowCircleLeft, faCircleCheck, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Post } from '@prisma/client';
import axios from 'axios';
import React from 'react'
interface Props {
  params: {
    postId: string
    userId:string
  };
}
interface postData{
  post:Post 
  totalComents:number
}

async function getPost(postId:string){
   const post = await axios.post("http://localhost:3000/api/getPostForUpdate",{postId:postId})
   const postData:postData ={
    post:post.data.post,totalComents:post.data.totalComments
   }
   return postData
  } 

 async function page({params:{userId,postId}}:Props) {
  const post = await getPost(postId)
  return (
    <PostPageUpdateContainer userId={userId} post={post}/>
  )
}

export default page