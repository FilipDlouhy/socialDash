"use client"
import { faArrowCircleLeft, faArrowRight, faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { User, Video, VideoComment } from '@prisma/client'
import axios from 'axios'
import Link from 'next/link'
import React,{useState,useEffect} from 'react'
import uuid from 'react-uuid'
import VideoPageComment from './VideoPageComment'
import VideoPageLikeAddComment from './VideoPageLikeAddComment'

interface video{
    user: friendWithImg, video: Video 
}
interface friendWithImg{
    id: string;
    userName: string; 
    img: string  | null
}
interface props{
    videoComments:VideoComment[]
    userId:string
    video:video
    user:User
}


function VideoPageContainer({user,videoComments,userId,video}:props) {

    const [comments,setComments] = useState<VideoComment[]>(videoComments)
    const [liked,setLiked] = useState<boolean>(false)
    const [text,setText] = useState<string>("")
    useEffect(()=>{
        if(video.video.likes.includes(userId))
        {
            setLiked(true)
        }
    },[])


    function addComment() {
        if(text.length > 1 ) 
        {
            let date= new Date()
            let id = uuid()
            if(user.img)
            {
                let newComment:VideoComment={
                    created_at:date,id:id,postId:video.video.id,text:text,userId:user.id,userImg:user.img,userName:user.userName
                }
                let arr = comments
                arr?.push(newComment)
                setComments(arr)
                setText("")
                axios.post("http://localhost:3000/api/createVideoComment",newComment)
                
            }

        }
        
    }

    function like()
    {
        if(liked)
        {
            setLiked(false)

                    axios.post("http://localhost:3000/api/unLikeVideo",{postId:video.video.id,userId:userId})



        }
        else
        {
            setLiked(true)
    
                    axios.post("http://localhost:3000/api/likeVideo",{postId:video.video.id,userId:userId})
             
        }

    }


  return (
    <div className='w-full h-screen flex-col items-center justify-center'>


        <div className='w-full  h-40 flex items-center px-28 '>
        <Link className='mr-72' href={`/ProfilePage/${userId}`}><FontAwesomeIcon  className='w-12 h-12 text-blue-100 hvr-shrink cursor-pointer'  icon={faArrowCircleLeft} /></Link>

        </div>

    <div className='w-11/12 2xl:w-3/5 h-3/4 mx-auto ChatDeleteBtn flex'>
        <div className='w-2/3 h-full'>

            <video src={video.video.video} autoPlay controls loop style={{ width: '100%', height: '100%', objectFit: 'cover' }}></video>
        </div>

        <div className='w-1/3 h-full border-l-2 border-white'>

            <div className='w-full h-1/6 md:flex-row  flex-col items-center flex'>
                <div className='w-1/2 h-full flex items-center justify-center'>
                    {video.user.img&& <img  src={video.user.img} className='lg:w-24 w-12 h-12 md:w-16 md:h-16 lg:h-24 rounded-full'></img>}
                </div>

                <div className='w-1/2 h-full flex items-center justify-center '>
                    <p className='text-xs md:text-sm lg:text-lg font-medium text-white'>{video.user.userName}</p>
                </div>
            </div>

            <div className='w-full border-y-2 border-white h-4/6 overflow-x-hidden overflow-y-auto'>
                {comments.map((comment)=>{
                    return <VideoPageComment comment={comment}/>
                })}

            </div>
                <VideoPageLikeAddComment addComment={addComment} like={like} liked={liked} setText={setText} text={text}/>
        </div>

    </div>
    
</div>
  )
}

export default VideoPageContainer