"use client"
import { db } from '@/firebaseconfig';
import { deleteDoc, doc } from 'firebase/firestore';
import React from 'react'
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
interface props
{
    setChat: React.Dispatch<React.SetStateAction<CHAT | undefined>>
    chatId:string
}

function ChatDeleteBTN({setChat,chatId}:props) {
    const userDocRef = doc(db, 'chats', chatId);

    function deleteChat()
    {
        deleteDoc(userDocRef)
        .then(() => {
            setChat(undefined)
        })
        .catch((error) => {
            console.error('Error deleting document: ', error);
        });
    }


  return (
    <div className='w-36 md:w-56 h-full mr-10 flex items-center justify-center'>
        <button onClick={()=>{deleteChat()}} className='cursor-pointer rounded text-xl text-white font-medium hover:shadow-none duration-200 w-full  h-12 ChatDeleteBtn'>Delete Chat</button>
    </div>
  )
}

export default ChatDeleteBTN