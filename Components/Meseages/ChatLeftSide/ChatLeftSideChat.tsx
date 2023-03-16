import { faComments } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
interface friendWithImg{
    id: string;
    userName: string; 
    img: string  | null
}

interface props
{
    setChat: React.Dispatch<React.SetStateAction<CHAT | undefined>>
    friend:friendWithImg
    chatId:string
    userId:string
}

interface CHAT
{
    chatId:string
    friend:friendWithImg
}
function ChatLeftSideChat({setChat,friend,chatId,userId}:props) {
  return (
    <div className='w-full h-36 flex-col items-center md:flex-row md:h-24 ChatShadow flex my-2 hover:shadow-none duration-200 '>
        <div className='h-full w-3/4 flex items-center justify-center '>
            <p className='text-lg sm:text-xl font-medium text-white'>Chat with {friend.userName}</p>
        </div>
        <div className='h-full w-1/4 flex items-center justify-center'>
            <FontAwesomeIcon onClick={()=>{
                setChat({chatId:chatId,friend:friend})
            }} className='w-10 h-10 cursor-pointer hover:scale-90 duration-300  text-white' icon={faComments}/>
        </div>

    </div>

  )
}

export default ChatLeftSideChat