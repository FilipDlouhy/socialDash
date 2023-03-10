"use client"
import { faArrowRight,faGear, faHeart, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React,{useState,useContext,useEffect,useRef} from 'react'
import { mainContext } from '@/models';
import axios from 'axios';
import ChatFriend from './ChatFriend';
import { useCollection } from 'react-firebase-hooks/firestore';
import { collection } from 'firebase/firestore';
import { db } from '@/firebaseconfig';


interface props
{
    userId:string
    friends:friendWithImg[]
}

interface friendWithImg{
    id: string;
    userName: string; 
    img: string  | null
}
function CreateChatModal({userId,friends}:props) { 
const [Friends,setFriends] =useState<friendWithImg[]>([])    
const {showCreateChat} = useContext(mainContext)
const {setShowCreateChat} = useContext(mainContext)
const [snapshot,loading,error] = useCollection(collection(db,"chats"))
const chats = snapshot?.docs.map((chat)=>{{return {id:chat.id,...chat.data()}}})

    useEffect(()=>{
      
            let arr:friendWithImg[] =[]
            friends.map((friend)=>{
                let isCreated = false
                chats?.map((chat)=>{
                    // @ts-ignore
                    if(chat.users.includes(friend.id))
                    {
                        isCreated = true
                    }
                })   
    
                if(isCreated === false)
                {
                    arr.push(friend)
                }
            
            })
            setFriends(arr)
       

    },[showCreateChat])

    const handleCloseModal = () => {
        setShowCreateChat(false);
    };


  return (
    <div>
    
      {showCreateChat && (
        <div className="modal-overlay" onClick={handleCloseModal}>
            <div className="w-2/5 h-3/5 bg-white overflow-x-hidden overflow-y-auto  flex items-center justify-center flex-wrap" onClick={(e) => e.stopPropagation()}>
                {Friends?.map((friend)=>{
                    return <ChatFriend  userId={userId} friend={friend}/>
                })}
            </div>
        </div>
      )}
    </div>
  )
}

export default CreateChatModal