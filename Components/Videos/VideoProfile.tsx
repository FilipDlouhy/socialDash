import Link from 'next/link';
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
    userId:string
}


function VideoProfile({userId,currentVideoIndex,index,user}:props) {
  return (
    <Link  href={userId === user.id ?`/ProfilePage/${userId}`:`/UserPage/${user.id}/${userId}`} className={` flex-col lg:flex-row items-center  videoProfile h-32 flex ${index === currentVideoIndex ? 'active' : ''}`} style={{ width: '340px', margin: '0 20px', transform: `translateX(-${currentVideoIndex * 111}%)` }}>
            <div className=" pl-7 lg:pl-0 w-full lg:w-1/3 h-full  justify-start flex items-center lg:justify-center">
            { user.img && <img src={user.img} className="lg:w-24 w-16 h-16 lg:h-24 rounded-full hover:scale-90 duration-300 cursor-pointer"  />}
            </div>
            <div className=" pl-7 lg:pl-0 w-full lg:w-2/3 h-full flex text-lg font-semibold text-white items-center justify-start lg:justify-center">
            <p>{user.userName}</p>
            </div>
    </Link>
  )
}

export default VideoProfile