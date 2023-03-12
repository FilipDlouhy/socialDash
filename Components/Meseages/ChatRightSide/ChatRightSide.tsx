import { db } from '@/firebaseconfig';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { collection, orderBy, query } from 'firebase/firestore';
import React, { useEffect, useRef, useState } from 'react'
import { useCollectionData } from 'react-firebase-hooks/firestore';
import ChatDeleteBTN from './ChatDeleteBTN';
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
    setChat: React.Dispatch<React.SetStateAction<CHAT | undefined>>

}

function ChatRightSide({setChat,chat,userId}:props) {
    const q= query( collection(db,"chats",chat.chatId,"messeages"),orderBy("timestamp"))
    const scrollableRef = useRef<HTMLDivElement>(null);
    const [messeages]= useCollectionData(q)
    const [isScrolledUp, setIsScrolledUp] = useState(false);

    function getMesseages()
    {
        return messeages?.map((messeage)=>{
             if(messeage.sender===userId)
             {
                return  <UserMessage  userId={userId} type={messeage.type} text={messeage.text}/>
             }  
             else
             {
                return <FriendsMessege userId={userId} type={messeage.type} text={messeage.text}/>
             } 
        })
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
          if (scrollableRef.current && !isScrolledUp) {
            scrollableRef.current.scrollTop = scrollableRef.current.scrollHeight;
          }
        }, 1000);
    
        return () => clearInterval(intervalId);
    }, [isScrolledUp]);

    function handleScroll() {
        if (scrollableRef.current) {
            setIsScrolledUp(scrollableRef.current.scrollTop < (scrollableRef.current.scrollHeight - scrollableRef.current.offsetHeight));
        }
    }
    
  return (

    <div className='w-3/4     h-full'>

        <div className='w-full h-32 flex pb-1  justify-between border-b-2 border-white '>
            <ChatRightSideFriendProfile userId={userId} friend={chat.friend}/>
            <ChatDeleteBTN chatId={chat.chatId}  setChat={setChat}/>
        </div>

        <div className='w-full h-full '>
            <div   ref={scrollableRef} className='scroll-smooth duration-300 w-full h-4/6  overflow-x-hidden overflow-y-auto ' onScroll={handleScroll}>
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