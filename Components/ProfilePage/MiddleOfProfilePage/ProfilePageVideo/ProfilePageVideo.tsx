import { Video } from '@prisma/client';
import React from 'react'
import ProfilePageVideoButtons from './ProfilePageVideoButtons';
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
 video:video
 userId:string
}
function ProfilePageVideo({ video,userId }: props) {
  return (
    <div className='ProfilePageTweet ProfilePageTweetShadow my-4 h-full'>
      <div className='w-full h-5/6'>
        <video src={video.video.video} loop autoPlay style={{ width: '100%', height: '100%', objectFit: 'cover' }}></video>
      </div>

      <ProfilePageVideoButtons userId={userId} videoId={video.video.id}/>

    </div>
  )
}

export default ProfilePageVideo;