"use client"
import { mainContext } from '@/models'
import { Video } from '@prisma/client'
import Link from 'next/link'
import React ,{useContext} from 'react'



interface props{
    video:Video
    userId:string
  }
function UserProfilePageVideoButtons({video,userId}:props) {
    const {setShowVideoLikesComments} = useContext(mainContext)
    const {setShowModalLikesAndCommentsData} = useContext(mainContext)
  return (
        <div className='w-full flex justify-around items-start h-1/6'>
            <button   onClick={()=>{
                setShowVideoLikesComments(true)
                setShowModalLikesAndCommentsData({id:video.id,type:"video",LikesOrComments:false})}}className='w-1/4 shadow-md hover:scale-90 duration-200 text-white font-medium text-xs sm:text-base   h-full'>Comments</button>
            <Link href={`/VideoPage/${video.id}/${userId}`} className='w-2/4 flex items-center justify-center shadow-md hover:scale-90 duration-200 text-white font-medium  text-xs sm:text-base h-full'>See Whole Video</Link>
            <button onClick={()=>{
                setShowVideoLikesComments(true)
                setShowModalLikesAndCommentsData({id:video.id,type:"video",LikesOrComments:true})}} className='w-1/4  text-xs sm:text-base  shadow-md hover:scale-90 duration-200 text-white font-medium  h-full'>Likes</button>
    </div>
  )
}

export default UserProfilePageVideoButtons