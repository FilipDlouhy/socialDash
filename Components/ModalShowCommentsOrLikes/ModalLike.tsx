import Link from 'next/link'
import React from 'react'
interface like{
  userName: string,userId:string,userImg:string 
}

interface props
{
  like:like
  userId:string

}


function ModalLike({userId,like}:props) {
  return (
    <Link href={userId === like.userId ?`/ProfilePage/${userId}`:`/UserPage/${like.userId}/${userId}`} className='w-1/3 flex justify-around flex-col items-center  h-36 hover:shadow-none cursor-pointer duration-200 ShowsLikesCommentsShadow '> 
        <img src={like?.userImg} className='h-24 w-24 rounded-full'></img>
        <p className='text-lg font-bold'>{like?.userName}</p>
    </Link>
  )
}

export default ModalLike