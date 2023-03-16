"use client"
import { faArrowRight,faGear, faHeart, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React,{useState,useContext,useEffect,useRef} from 'react'
import { mainContext } from '@/models';
import axios from 'axios';
import { Post, Tweet, User } from '@prisma/client';
import Link from 'next/link';
import ShowFollowModalUser from './ShowFollowModalUser';

interface props
{
    userId:string
}


interface FollowModalUser
{
    userId:string
    img:string
    friends:number
    follows:number
    followers:number
    posts:number
    tweets:number
    userName:string
    videos:number
}



function ShowFollowsModal({userId}:props) { 
 const {showFollows}  = useContext(mainContext)
 const {setShowFollows} = useContext(mainContext)   
 const [followData,setFollowData] = useState<FollowModalUser[]>()


  const handleCloseModal = () => {
    setShowFollows(false)
  };
  useEffect(()=>{


        axios.post("http://localhost:3000/api/getUserFollowing",{userId:userId}).then((res)=>{
            setFollowData(res.data)
        })

  },[showFollows])


  return (
          <div>
    
        {showFollows && (
            <div className="modal-overlay" onClick={handleCloseModal}>

                    <div className="ModalFollows modalCommentScroll flex items-start justify-center flex-wrap " onClick={(e) => e.stopPropagation()}>
                            {followData&&followData.map((user)=>{
                                return <ShowFollowModalUser followData={followData} setFollowData={setFollowData} userId={userId} user={user}/>
                            })}
                    </div>
            </div>
      )}
    </div>
  )
}

export default ShowFollowsModal