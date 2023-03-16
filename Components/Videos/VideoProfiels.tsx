import { Video } from '@prisma/client';
import React from 'react'
import VideoProfile from './VideoProfile'

interface friendWithImg {
    id: string;
    userName: string;
    img: string | null;
    }
interface video {
    user: friendWithImg;
    video: Video;
    }
interface props
{
    slideshowWidth:number
    Videos:video[]| undefined
    currentVideoIndex:number
    userId:string
}
function VideoProfiels({ userId,Videos,currentVideoIndex,slideshowWidth}:props) {
  return (
    <div className="w-11/12 h-36   overflow-x-hidden ">
        <div style={{ width: `${slideshowWidth}px` }} className="w-full h-full flex   overflow-x-hidden ">
        {Videos && Videos.map((video, index) => (
            <VideoProfile userId={userId}  currentVideoIndex={currentVideoIndex}  index={index}  user={video.user}  />
            ))}
        </div>
    </div>
  )
}

export default VideoProfiels