import Link from 'next/link'
import React from 'react'

interface props
{
    text:string
    type:string
    userId:string  
}

function UserMessage({text,type,userId}:props) {


  if(type === "link")
  {  
    return (
    <div className='w-full h-20 my-1 flex justify-start'>
         <div className='rounded-2xl  mx-4 bg-emerald-300 h-full w-72 flex items-center flex-col  justify-center '>
            <Link href={text+userId}  className='break-words whitespace-normal text-white font-medium  text-center flex justify-center items-center '>{text}</Link>     
        </div>
    </div>
    )
  }
  else
  {
    return (
      <div className='w-full h-20 my-1 flex justify-start'>
           <div className='rounded-2xl  mx-4 bg-emerald-300 h-full w-72 flex items-center flex-col  justify-center '>
              <p className='break-words whitespace-normal text-white font-medium flex justify-center items-center '>{text}</p>     
          </div>
      </div>
    )
  }
}

export default UserMessage