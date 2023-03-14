import { Tweet, User, Video } from '@prisma/client'
import Link from 'next/link'
import React from 'react'
interface video{
    user: friendWithImg, video: Video 
  }
  
  interface friendWithImg{
    id: string;
    userName: string; 
    img: string  | null
  }

interface props {
    video:video
    userId:string
}

function FriendModalVideo({userId,video}:props) {

  return (
    <Link href={`/VideoPage/${video.video.id}/${userId}`} className='flex items-center justify-center w-60 h-60 hover:shadow-none duration-300 cursor-pointer mx-3 my-2 friendProfileShadow'>
        <video src={video.video.video} autoPlay loop style={{ width: '100%', height: '100%', objectFit: 'cover' }}></video>
    </Link>
  )
}

export default FriendModalVideo