import VideoPageContainer from '@/Components/VideoPage/VideoPageContainer';
import { async } from '@firebase/util';
import { Video, VideoComment } from '@prisma/client';
import axios from 'axios';
import React from 'react'
interface Props {
    params: {
      videoId: string
      userId:string
    };
  }




  interface video{
    user: friendWithImg, video: Video 
}
interface friendWithImg{
    id: string;
    userName: string; 
    img: string  | null
}

  async function getVideo(videoId: string) {
    const videos = await axios.post("http://localhost:3000/api/getVideo",{videoId:videoId})
    return videos.data
  }
  async function getVideoComments (videoId: string) {
    
    const comments = await axios.post("http://localhost:3000/api/getVideoComments",{videoId:videoId})
    return comments.data

  }
  async function getUser(userId:string) {
    const user = await axios.get(`http://localhost:3000/api/getUser/${userId}`)
    return user.data
   }

async function page({params:{userId,videoId}}:Props) {
    const video:video = await getVideo(videoId)
    const videoComments:VideoComment[] = await getVideoComments(videoId)
    const User = await getUser(userId)
  return (
    <VideoPageContainer user={User} userId={userId} video={video} videoComments={videoComments}/>
  )
}

export default page