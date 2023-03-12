

"use client"
import { faArrowRight,faGear, faHeart, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React,{useState,useContext,useEffect,useRef} from 'react'
import { mainContext } from '@/models';
import axios from 'axios';
import { useCollection } from 'react-firebase-hooks/firestore';
import { collection } from 'firebase/firestore';
import { db } from '@/firebaseconfig';
import SendPostTweetFriend from './SendPostTweetFriend';





interface props
{
    userId:string
    friendsToChat:friendWithImg[]
}
interface friendWithImg{
    id: string;
    userName: string; 
    img: string  | null
  }

function SendPostToFriendsOrTweetsModal({friendsToChat,userId}:props) {  
    const {showSendPostTweet} =  useContext(mainContext)
    const {setShowSendPostTweet} =  useContext(mainContext)
    const handleCloseModal = () => {
        setShowSendPostTweet(false);
    };
    const [snapshot,loading,error] = useCollection(collection(db,"chats"))
    const chats = snapshot?.docs.map((chat)=>{{return {id:chat.id,...chat.data()}}})

        
    const chatList = () => {
        return (
          <div className="w-2/5 h-2/3 flex justify-center overflow-x-hidden overflow-y-auto   bg-white"  onClick={(e) => e.stopPropagation()}>
            {chats?.map((chat) => {
              return friendsToChat.map((friend) => {
                // @ts-ignore
                if (chat.users.includes(friend.id) && chat.users.includes(userId)) {
                  return (
                    <SendPostTweetFriend userId={userId} chatId={chat.id} friend={friend}
                    />  
                  );
                }
                return null;
              });
            })}
          </div>
        );
      };

  return (
          <div>
    
      {showSendPostTweet && (
        <div className="modal-overlay" onClick={handleCloseModal}>
            {chatList()}
        </div>
      )}
    </div>
  )
}

export default SendPostToFriendsOrTweetsModal