import { db } from '@/firebaseconfig';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import React, { useState } from 'react'

interface props
{
    chatId:string
    userId:string
}

function SendMesseage({chatId,userId}:props) {
    const  [input,setInput] = useState<string>()

    const createMessage = async (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
        await addDoc( collection(db,"chats",chatId,"messeages"), {
          text: input,
          sender: userId,
          type:"message",
          timestamp: serverTimestamp()
        })
        setInput("");
      }
  return (
    <div className='w-full h-28 flex '>
            <div className='w-full h-full flex items-center sm:justify-center'>
                <input value={input} onChange={(e)=>{setInput(e.target.value)}} className=' ChatsShadow w-full sm:w-2/4 bg-transparent rounded-lg text-center text-2xl text-white font-semibold  h-16'></input>
        </div> 



            <div className='w-1/3 h-full flex items-center justify-end pr-10 lg:pr-32'>
            <FontAwesomeIcon onClick={(e)=>{createMessage(e)}} className='w-12 h-12 cursor-pointer hover:scale-90 duration-300  text-white' icon={faPaperPlane}/>

        </div>                                   
    </div>
  )
}

export default SendMesseage