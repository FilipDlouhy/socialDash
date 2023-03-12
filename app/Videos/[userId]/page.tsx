import TopOfPage from '@/Components/TopOfPage/TopOfPage'
import VideosContainer from '@/Components/Videos/VideosContainer'
import { faArrowCircleLeft, faArrowCircleRight, faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { User } from '@prisma/client'
import axios from 'axios'
import { userAgent } from 'next/server'
import React,{useState,useRef} from 'react'

interface props {
  params: {
    userId: string
  }
}

async function getVideos (userId:string) {
    const videos = await axios.post("http://localhost:3000/api/getVideos/",{userId:userId})
    return videos.data
}



async function getUser(userId:string) {
    const user = await axios.get(`http://localhost:3000/api/getUser/${userId}`)
    return user.data
   }
 async function page({ params: { userId } }: props) {
    const videos = await getVideos(userId)
    const user:User =await getUser(userId)

    return (
      <VideosContainer user={user} userId={userId} videos={videos}/>
    )

}

export default page