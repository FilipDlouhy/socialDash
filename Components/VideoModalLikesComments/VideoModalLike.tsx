import Link from 'next/link';
import React from 'react'

interface friendWithImg{
    id: string;
    userName: string; 
    img: string  | null
  }
  interface props{
    like:friendWithImg
    userId:string
  }

function VideoModalLike({like,userId}:props) {
  return (
    <Link href={userId === like.id ?`/ProfilePage/${userId}`:`/UserPage/${like.id}/${userId}`} className=' hover:shadow-none cursor-pointer duration-300 w-52 m-4 h-52 ChatDeleteBtn flex flex-col items-center justify-around'>
        {like.img &&<img src={like.img} className='w-36 h-36 rounded-full'></img>}
        <p className='text-xl font-semibold'>{like.userName}</p>
    </Link>
  )
}

export default VideoModalLike