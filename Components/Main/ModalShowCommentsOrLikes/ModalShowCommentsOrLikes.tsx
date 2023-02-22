"use client"
import { faArrowRight,faGear, faHeart, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React,{useState,useContext,useEffect,useRef} from 'react'
import { mainContext } from '@/models';
import axios from 'axios';
import ModalLike from './ModalLike';
import ModalShowLikes from './ModalShowLikes';
import ModalShowPostComments from './ModalShowPostComments';
import { PostComment, TweetComment } from '@prisma/client';
import ModalTweetComment from './ModalTweetComment';
import ModalShowTweetComments from './ModalShowTweetComments';


interface like{
    userName: string,userId:string,userImg:string 
}




function ModalShowCommentsOrLikes() {  
    const {showModalLikesAndComments} = useContext(mainContext)
    const {showLikesAndCommentsData} = useContext(mainContext)
    const {setShowModalLikesAndComments} = useContext(mainContext)
    const [Postcomments,setPostComments] = useState<PostComment[]>([])
    const [TweetComments,setTweetComments] = useState<TweetComment[]>([])
    const [likes,setLikes] = useState<like[]>([])
    const handleCloseModal = () => {
        setShowModalLikesAndComments(false);
    };
    function renderLikesAndComments() {
        if (showLikesAndCommentsData?.LikesOrComments) {
          return <ModalShowLikes likes={likes} />;
        } else {
            if(showLikesAndCommentsData?.type === "post")
            {
                return <ModalShowPostComments comments={Postcomments} />;
            }
            else
            {
                return <ModalShowTweetComments  comments={TweetComments} />;
            }
        }
      }
    useEffect(()=>{
        
        if(showLikesAndCommentsData?.type === "post" )
        {
            if(showLikesAndCommentsData.LikesOrComments)
            {
                axios.post("/api/getPostModalLikes",{postId:showLikesAndCommentsData?.id}).then((res)=>{
                    setLikes(res.data)
                })
            }
            else
            {
               axios.post("/api/getPostModalCommentsOnly",{postId:showLikesAndCommentsData?.id}).then((res)=>{
                setPostComments(res.data)
                })
            }

        }
        else
        {
            if(showLikesAndCommentsData?.LikesOrComments)
            {
                axios.post("/api/getTweetModalLikes",{tweetId:showLikesAndCommentsData?.id}).then((res)=>{
                    console.log(res.data)
                    setLikes(res.data)
                })
            }
            else
            {
               axios.post("/api/getTweetModalCommentsOnly",{tweetId:showLikesAndCommentsData?.id}).then((res)=>{
                console.log(res.data)
                    setTweetComments(res.data)
                })
            }
        }



    },[showLikesAndCommentsData])

  return (
          <div>
    
      {showModalLikesAndComments && (
        <div className="modal-overlay" onClick={handleCloseModal}>
            <div className="ShowLikesComments" onClick={(e) => e.stopPropagation()}>
              {   renderLikesAndComments() }
            </div>
        </div>
      )}
    </div>
  )
}

export default ModalShowCommentsOrLikes