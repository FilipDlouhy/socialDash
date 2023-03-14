"use client"
import { Video } from '@prisma/client'
import React,{useState} from 'react'
import UpdateVideoForm from './UpdateVideoForm'
import UpdateVideoVideo from './UpdateVideoVideo'

interface videoUpdate {
    video:Video
    videoCommentsLength:number
  }

  interface props{
    video:videoUpdate
    userId:string
}

function UpdateVideoContainer({userId,video}:props) {
    const [Description,setDescription] = useState<string>(video.video.description)
    const [VideoNew,setVideoNew] = useState<any>()
    const [VideoNewFile,setVideoNewFile] = useState<any>()
    const [Category,setCategory] = useState<string>(video.video.Category)
    
    
return (
<div className='w-full h-4/5 flex'>
    <UpdateVideoForm setVideoNewFile={setVideoNewFile} Description={Description} setDescription={setDescription} setVideoNew={setVideoNew} Category={Category} setCategory={setCategory}/> 
    <UpdateVideoVideo VideoNewFile={VideoNewFile} userId={userId} Description={Description} VideoNew={VideoNew} video={video}  Category={Category}/>
</div>
)
}
export default UpdateVideoContainer