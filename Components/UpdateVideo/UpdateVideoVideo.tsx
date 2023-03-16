import { Video } from '@prisma/client'
import React from 'react'
import UpdateVideoBTN from './UpdateVideoBTN'
interface videoUpdate {
    video:Video
    videoCommentsLength:number
  }

interface  props{
    Description:string
    VideoNew:any
    Category:string
    video:videoUpdate
    userId:string
    VideoNewFile:any
    setUpdating: React.Dispatch<React.SetStateAction<boolean>>

}

function UpdateVideoVideo({setUpdating,VideoNewFile,userId,Category,Description,VideoNew,video}:props) {
  return (
    <div className='w-1/2 h-full flex flex-col items-center justify-center'>
        <div className='w-4/6 h-5/6  ChatDeleteBtn'>
        <div className='w-full h-2/3'>
            <video controls autoPlay loop src={VideoNew ? VideoNew : video.video.video} style={{ width: '100%', height: '100%', objectFit: 'cover' }}></video>
        </div>
        <div className='w-full h-1/3'>
            <div className='w-full h-1/2 flex items-center justify-around'>
                <textarea value={Description}  className='text-white font-semibold  resize-none p-4 text-center  w-full h-full rounded-md bg-transparent ' ></textarea>
            </div>
            <div className='w-full h-1/2 flex items-center justify-around'>
                <p className='text-xl font-semibold text-white'>Category: {Category}</p>
                <p className='text-xl font-semibold text-white'>Comments: {video.videoCommentsLength}</p>
                <p className='text-xl font-semibold text-white'>Likes: {video.video.likes.length}</p>
            </div>
        </div>
        </div>
        <UpdateVideoBTN setUpdating={setUpdating} VideoNewFile={VideoNewFile} userId={userId} Category={Category} Description={Description} VideoNew={VideoNew} video={video}/>
 </div>
  )
}

export default UpdateVideoVideo