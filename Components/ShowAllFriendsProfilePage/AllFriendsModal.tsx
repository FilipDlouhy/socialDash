"use client"
import { faArrowRight,faGear, faHeart, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React,{useState,useContext,useEffect,useRef} from 'react'
import { mainContext } from '@/models';
import axios from 'axios';
import Friend from './Friend';
import { User } from '@prisma/client';

interface friend{
    userId:string,
    userImg:string,
    userName:string
}

interface props{
    userId:string
}

function AllFriendsModal({userId}:props) { 
    const {seeAllFriends} = useContext(mainContext)
    const {setSeeAllFriends} = useContext(mainContext)
    const [friends,setFriends] = useState<friend[]>()
    const handleCloseModal = () => {
        setSeeAllFriends(false);
    };
    
    useEffect(()=>{
        if(friends === undefined){
            axios.post("http://localhost:3000/api/getProfilePageFriendsModal",{userId:userId}).then((res)=>{
                setFriends(res.data)
            })
        }
    },[seeAllFriends])

  return (
          <div>
    
        {seeAllFriends && (
            <div className="modal-overlay" onClick={handleCloseModal}>

                    <div className="ModalAllFriendends modalCommentScroll flex-wrap flex items-start justify-center" onClick={(e) => e.stopPropagation()}>
                        {friends?.map((friend)=>{
                            return <Friend friend={friend}/>
                        })}
                    </div>
            </div>
      )}
    </div>
  )
}

export default AllFriendsModal