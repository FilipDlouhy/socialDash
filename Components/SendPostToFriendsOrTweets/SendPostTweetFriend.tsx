"use client"
import { db } from '@/firebaseconfig';
import { mainContext } from '@/models';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import React ,{useState,useEffect,useContext} from 'react'

interface friendWithImg{
    id: string;
    userName: string; 
    img: string  | null
  }
interface props{
    friend:friendWithImg
    chatId:string
    userId:string
}

function SendPostTweetFriend({friend,chatId,userId}:props) {
    const [show,setShow] = useState<boolean>(true)
    const {link} = useContext(mainContext)
    const {showSendPostTweet} = useContext(mainContext)
    useEffect(()=>{
        setShow(true)
    },[showSendPostTweet])


    async function  sendLink ()
    {
        await addDoc( collection(db,"chats",chatId,"messeages"), {
            text: link,
            sender: userId,
            type:"link",
            timestamp: serverTimestamp()
          })
          setShow(false)
    }
  



    if(show)
    {
        return (
            <div className='w-64 h-64 ChatDeleteBtn m-3'>
                {friend.img && <img src={friend.img} className='w-full h-1/2'></img>}
                <div className='w-full  h-1/2 flex flex-col items-center justify-around'>
                    <p className='text-xl font-semibold'>{friend.userName}</p>
                        <button onClick={()=>{sendLink()}} className='w-44 rounded font-semibold text-white hover:w-52 duration-200 cursor-pointer h-8 bg-emerald-400'>Send Messeage</button>
                </div>
            </div>
          )
    }
    else
    {
        return (
            <div className='w-64 h-64 ChatDeleteBtn m-3'>
                {friend.img && <img src={friend.img} className='w-full h-1/2'></img>}
                <div className='w-full  h-1/2 flex flex-col items-center justify-around'>
                    <p className='text-xl font-semibold'>{friend.userName}</p>
                </div>
            </div>
          )
    }


}

export default SendPostTweetFriend