import React from 'react'
interface friendWithImg{
    id: string;
    userName: string; 
    img: string  | null
}

interface props
{
    user:friendWithImg
    index:number
    currentVideoIndex:number
}


function VideoProfile({currentVideoIndex,index,user}:props) {
  return (
    <div  className={` videoProfile h-32 flex ${index === currentVideoIndex ? 'active' : ''}`} style={{ width: '340px', margin: '0 20px', transform: `translateX(-${currentVideoIndex * 111}%)` }}>
            <div className="w-1/3 h-full flex items-center justify-center">
            { user.img && <img src={user.img} className="w-24 h-24 rounded-full hover:scale-90 duration-300 cursor-pointer"  />}
            </div>
            <div className="w-2/3 h-full flex text-lg font-semibold text-white items-center justify-center">
            <p>{user.userName}</p>
            </div>
    </div>
  )
}

export default VideoProfile