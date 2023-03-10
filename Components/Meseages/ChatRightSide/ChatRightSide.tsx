import { db } from '@/firebaseconfig';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { collection, orderBy, query } from 'firebase/firestore';
import React from 'react'
import { useCollectionData } from 'react-firebase-hooks/firestore';
import ChatRightSideFriendProfile from './ChatRightSideFriendProfile'
import FriendsMessege from './FriendsMessege';
import SendMesseage from './SendMesseage';
import UserMessage from './UserMessage';


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
    userId:string
    chat:CHAT
}

function ChatRightSide({chat,userId}:props) {
    const q= query( collection(db,"chats",chat.chatId,"messeages"),orderBy("timestamp"))

    const [messeages]= useCollectionData(q)
    function getMesseages()
    {
        return messeages?.map((messeage)=>{
             if(messeage.sender===userId)
             {
                return  <UserMessage text={messeage.text}/>
             }  
             else
             {
                return <FriendsMessege text={messeage.text}/>
             } 
        })
    }

      

  return (

    <div className='w-3/4     h-full'>

        <div className='w-full h-32 flex pb-1  justify-center border-b-2 border-white '>
            <ChatRightSideFriendProfile friend={chat.friend}/>
        </div>

        <div className='w-full h-full '>
            <div className='w-full h-4/6  overflow-x-hidden overflow-y-auto '>
                {getMesseages()}
            </div>
        

            <div className='w-full h-2/6 flex items-start border-t-2 border-white'>
                <SendMesseage userId={userId} chatId={chat.chatId}/>
            </div>

            
        </div>

    </div>
  )
}

export default ChatRightSide