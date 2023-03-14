import UpdateVideoContainer from '@/Components/UpdateVideo/UpdateVideoContainer';
import { Video } from '@prisma/client';
import axios from 'axios';
import Link from 'next/link'
import React from 'react'

interface videoUpdate {
  video:Video
  videoCommentsLength:number
}


interface Props {
  params: {
    videoId: string
    userId:string
  };
}



async function getVideoToUpdate(videoId:string) {
  const video = await   axios.post("http://localhost:3000/api/getVideoToUpdate",{videoId:videoId})
  return video.data
} 


async function page({params:{userId,videoId}}:Props) {
  const video:videoUpdate = await getVideoToUpdate(videoId)
  return (
    <div className='w-full h-screen '>
      <div className='w-full h-40 px-20 flex items-center justify-start '>
        <Link   href={`/ProfilePage/${userId}`} className='w-72 h-10 bg-[#09a3e0] rounded-sm flex items-center justify-center font-bold text-white text-xl hover:scale-95 duration-300 cursor-pointer  hover:bg-[#36f011]'>Go Back</Link>
      </div>
      <UpdateVideoContainer userId={userId} video={video}/>
      
    </div>
  )
}

export default page