"use client"
import { db } from '@/firebaseconfig'
import { mainContext } from '@/models'
import { addDoc, collection } from 'firebase/firestore'
import React, { useContext } from 'react'
import { useCollection } from 'react-firebase-hooks/firestore'

interface props{
    friendId:string
    userId:string
}

function ChatFriendCreateChatBTN({friendId,userId}:props) {
    const [snapshot,loading,error] = useCollection(collection(db,"chats"))
    const {setShowCreateChat} = useContext(mainContext)

   async function createChat (e: React.MouseEvent<HTMLButtonElement, MouseEvent>)
    {
        await addDoc(collection(db, "chats"), { users: [userId, friendId] })
           // @ts-ignore
        e.target.parentElement.parentElement.remove()
        setShowCreateChat(false)
    }
  return (
     <button onClick={(e)=>{createChat(e)}} className='w-44 h-8 font-semibold rounded text-lg text-white bg-cyan-400'>Create Chat</button>
  )
}

export default ChatFriendCreateChatBTN

/*
        

*/