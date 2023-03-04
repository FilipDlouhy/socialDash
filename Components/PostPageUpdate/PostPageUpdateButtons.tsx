"use client"
import { faArrowCircleLeft, faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'


interface props{
    userId:string
    Title:string
    Category:string
    ImgNew:any
    postId:string
    setErrorText:React.Dispatch<React.SetStateAction<string>>
    }

function PostPageUpdateButtons({setErrorText,postId,userId,Title,Category,ImgNew}:props) {
    const router = useRouter()
async function updatePost() {
    if(ImgNew)
    {
        const formData = new FormData();

        formData.append('file', ImgNew);
    
        formData.append('upload_preset', 'historia-invicta');
        const data = await fetch('https://api.cloudinary.com/v1_1/dnhqwtuev/image/upload', {
            method: 'POST',
            body: formData
          }).then(r => r.json())
      
          let img =data.secure_url;
          const updatePost ={
            Title:Title,
            Category:Category,
            ImgNew:img,
            postId:postId 
          }
         
        axios.post("http://localhost:3000/api/updatePostWithImg",updatePost).then((res)=>{
            if(res.data.message === "OK")
            {
                router.push(`/ProfilePage/${userId}`)
            }
            else
            {
                setErrorText("Something went wrong try again")
            }
        })  
    }
    else
    {

          const updatePost ={
            Title:Title,
            Category:Category,
            postId:postId 
          }
         
        axios.post("http://localhost:3000/api/updatePostWithNoImg",updatePost).then((res)=>{
            if(res.data.message === "OK")
            {
                router.push(`/ProfilePage/${userId}`)
            }
            else
            {
                setErrorText("Something went wrong try again")
            }
        })  
    }
    

}

  return (
 <div className='w-full h-28 flex items-center justify-around'>
        <Link href={`/ProfilePage/${userId}`}><FontAwesomeIcon  className='w-12 h-12 text-blue-100 hvr-shrink cursor-pointer'  icon={faArrowCircleLeft} /></Link>
    <FontAwesomeIcon onClick={()=>{updatePost()}} className='w-12 h-12 text-blue-100 hvr-shrink hover:text-green-500 duration-300 cursor-pointer'  icon={faCircleCheck} />
  </div>

  )
}

export default PostPageUpdateButtons