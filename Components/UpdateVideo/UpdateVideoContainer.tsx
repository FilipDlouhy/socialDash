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
    const [Updating,setUpdating] = useState<boolean>(false)
    
    if(Updating)

    {return (
        <div className='flex h-screen w-screen items-center justify-center'>
        <div className="loading">
            <div className="loading__letter">U</div>
            <div className="loading__letter">p</div>
            <div className="loading__letter">d</div>
            <div className="loading__letter">a</div>
            <div className="loading__letter">t</div>
            <div className="loading__letter">i</div>
            <div className="loading__letter">n</div>
            <div className="loading__letter">g</div>
            <div className="loading__letter">.</div>
            <div className="loading__letter">.</div>
        </div>
    </div>)
    }else
    {
        return (
            <div className='w-full h-4/5 flex'>
                <UpdateVideoForm setVideoNewFile={setVideoNewFile} Description={Description} setDescription={setDescription} setVideoNew={setVideoNew} Category={Category} setCategory={setCategory}/> 
                <UpdateVideoVideo setUpdating={setUpdating} VideoNewFile={VideoNewFile} userId={userId} Description={Description} VideoNew={VideoNew} video={video}  Category={Category}/>
            </div>
            )
    }
    

}
export default UpdateVideoContainer