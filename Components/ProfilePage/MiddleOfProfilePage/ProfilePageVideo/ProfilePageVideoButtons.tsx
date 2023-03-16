"use client"
import { mainContext } from '@/models'
import axios from 'axios'
import Link from 'next/link'
import React,{useContext} from 'react'

interface props{
    videoId:string
    userId:string
}

function ProfilePageVideoButtons({  userId,videoId}:props) {
    const {setShowVideoLikesComments} = useContext(mainContext)
    const {setShowModalLikesAndCommentsData} = useContext(mainContext)
    
  return (
    <div className='w-full flex justify-around items-start h-1/6'>
        <button onClick={()=>{
        setShowVideoLikesComments(true)
        setShowModalLikesAndCommentsData({id:videoId,type:"video",LikesOrComments:false})}} className=' text-xs sm:text-base w-1/4 shadow-md hover:scale-90 duration-200 text-white font-medium h-full'>Comments</button>
        <button onClick={()=>{
        setShowVideoLikesComments(true)
        setShowModalLikesAndCommentsData({id:videoId,type:"video",LikesOrComments:true})}} className=' text-xs sm:text-base w-1/4 shadow-md hover:scale-90 duration-200 text-white font-medium h-full'>Likes</button>
        <Link href={`/UpdateVideo/${videoId}/${userId}`} className='flex items-center text-xs sm:text-base justify-center w-1/4 shadow-md hover:scale-90 duration-200 text-white font-medium h-full'>Update</Link>
        <button onClick={(e)=>{
            (e.target as HTMLElement).parentElement?.parentElement?.remove();
            axios.post("http://localhost:3000/api/videoDelete",{videoId:videoId});
        }} className='  text-xs sm:text-base w-1/4 shadow-md hover:scale-90 duration-200 text-white font-medium h-full'>Delete</button>
  </div>
  )
}

export default ProfilePageVideoButtons


//