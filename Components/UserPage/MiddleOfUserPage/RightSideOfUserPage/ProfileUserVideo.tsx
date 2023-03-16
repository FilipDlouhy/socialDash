import { mainContext } from '@/models'
import { Video } from '@prisma/client'
import React,{useContext} from 'react'
import UserProfilePageVideoButtons from './UserProfilePageVideoButtons'

interface props{
  video:Video
  userId:string
}
function ProfileUserVideo({video,userId}:props) {

  return (
    <div style={{ width: '400px', height: '500px' }}  className=' ProfilePageTweetShadow my-4'>
        <div className='w-full h-5/6'>
          <video src={video.video}  style={{ width: '100%', height: '100%', objectFit: 'cover' }}></video>
        </div>
        <UserProfilePageVideoButtons userId={userId} video={video}/>
    </div>
  )
}

export default ProfileUserVideo