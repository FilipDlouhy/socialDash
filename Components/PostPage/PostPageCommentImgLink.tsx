"use client"
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React from 'react'

interface props{
    img:string,
    imgUserId:string
}

function PostPageCommentImgLink({img,imgUserId}:props) {
    const session = useSession()
    const router = useRouter()
  return (
    <div onClick={()=>{
        if(imgUserId === session.data?.user?.name)
        {
          router.push(`/ProfilePage/${ session.data?.user?.name}`)
        }
        else
        {
          router.push(`/UserPage/${imgUserId}/${session.data?.user?.name}`)
        }
      }} className='h-full w-1/4 flex items-center justify-center'>
        {img &&<img src={img} className='md:w-16 w-9 h-9 md:h-16 hover:scale-105 duration-200 cursor-pointer rounded-full'></img>}
</div>
  )
}

export default PostPageCommentImgLink