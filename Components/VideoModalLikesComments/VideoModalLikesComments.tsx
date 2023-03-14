"use client"
import { faArrowRight,faGear, faHeart, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React,{useState,useContext,useEffect,useRef} from 'react'
import { mainContext } from '@/models';
import axios from 'axios';
import { VideoComment } from '@prisma/client';
import VideoModalLike from './VideoModalLike';
import VideoModalComment from './VideoModalComment';

interface props
{
    userId:string
}
interface friendWithImg{
    id: string;
    userName: string; 
    img: string  | null
  }

function VideoModalLikesComments({userId}:props) {  
    const {showVideoLikesComments} = useContext(mainContext)
    const {setShowVideoLikesComments} = useContext(mainContext)
    const {showLikesAndCommentsData} = useContext(mainContext)
    const [likes,setLikes] = useState<friendWithImg[]>([])
    const [comments,setComments] = useState<VideoComment[]>([])


    useEffect(()=>{
        //Likes
        if(showLikesAndCommentsData?.LikesOrComments)
        {
            axios.post("http://localhost:3000/api/getLikesVideos",{videoId:showLikesAndCommentsData.id}).then((res)=>{
                setLikes(res.data)
            })
        }
        else if(showLikesAndCommentsData?.LikesOrComments === false)
        {
            axios.post("http://localhost:3000/api/getCommentsVideos",{videoId:showLikesAndCommentsData.id}).then((res)=>{
                setComments(res.data)
            })
        }


    },[showLikesAndCommentsData])

    const handleCloseModal = () => {
        setShowVideoLikesComments(false);
    };




    function render() {
        if (showLikesAndCommentsData?.LikesOrComments) {
          return likes.map((like) => {
            return <VideoModalLike userId={userId}  like={like}/>;
          });
        } else if (showLikesAndCommentsData?.LikesOrComments === false) {
          return comments.map((comment) => {
            return <VideoModalComment userId={userId}  comment={comment}/>;
          });
        }
      }



  return (
          <div>
    
      {showVideoLikesComments && (
        <div className="modal-overlay" onClick={handleCloseModal}>
            <div className="VideoModal bg-white flex justify-center overflow-x-hidden overflow-y-auto flex-wrap" onClick={(e) => e.stopPropagation()}>
                {render()}
            </div>  
        </div>
      )}
    </div>
  )
}

export default VideoModalLikesComments