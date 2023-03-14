import React from 'react'


interface props
{
    setRender: React.Dispatch<React.SetStateAction<string>>

}

function UserPageProfileSetRenderButtons({setRender}:props) {
  return (
    <div className='w-full h-20 flex justify-center items-center'>   
        <button onClick={()=>{setRender("post")}} className='flex items-center justify-center h-9 w-1/3 shadow-lg text-white font-semibold hover:scale-90 cursor-pointer duration-200'>Show only Posts</button>
        <button onClick={()=>{setRender("video")}}  className='h-9 w-1/3 shadow-lg flex items-center justify-center text-white font-semibold hover:scale-90 cursor-pointer duration-200'>Show only Videos</button>
        <button onClick={()=>{setRender("tweet")}} className='h-9 w-1/3 shadow-lg flex items-center justify-center text-white font-semibold hover:scale-90 cursor-pointer duration-200'>Show only Tweets</button>
    </div>
  )
}

export default UserPageProfileSetRenderButtons