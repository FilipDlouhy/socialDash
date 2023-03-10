"use client"
import { mainContext } from '@/models'
import { faComments, faPenSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useEffect, useState } from 'react'
import {useCollection} from "react-firebase-hooks/firestore"
import { collection, query } from 'firebase/firestore'
import { db } from '@/firebaseconfig'
import ChatLeftSideChat from './ChatLeftSideChat'

interface friendWithImg{
    id: string;
    userName: string; 
    img: string  | null
}

interface CHAT
{
  chatId:string
  friend:friendWithImg
}
interface props{
    userId:string
    friends:friendWithImg[]
    setChat: React.Dispatch<React.SetStateAction<CHAT | undefined>>
}


function ChatLeftSide({setChat,friends,userId}:props) {
    const {setShowCreateChat} = useContext(mainContext)
    const [snapshot,loading,error] = useCollection(collection(db,"chats"))
    const chats = snapshot?.docs.map((chat)=>{{return {id:chat.id,...chat.data()}}})

    
    const chatList = () => {
      return (
        <div>
          {chats?.map((chat) => {
            return friends.map((friend) => {
              // @ts-ignore
              if (chat.users.includes(friend.id) && chat.users.includes(userId)) {
                return (
                  <ChatLeftSideChat
                    setChat={setChat}
                    userId={userId}
                    friend={friend}
                    chatId={chat.id}
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
        <div className='w-1/4 ChatsShadow h-full'>
            <div className='w-full h-32 flex border-b-2 border-white'>
                <div className='h-full w-3/4 flex items-center justify-center'>
                    <p className='text-3xl font-semibold text-white'>Your Chats</p>
                </div>
                <div className='h-full w-1/4 flex items-center justify-center'>
                    <FontAwesomeIcon onClick={()=>{setShowCreateChat(true)}} className='w-12 h-12 cursor-pointer hover:scale-90 duration-300 text-white' icon={faPenSquare}/>
                </div>
            </div>
            <div className='w-full overflow-x-hidden overflow-y-auto h-full flex flex-col'>
                    {chatList()}
            </div>
        </div>
    )
}

export default ChatLeftSide;