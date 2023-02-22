import React from 'react'
interface like{
  userName: string,userId:string,userImg:string 
}

interface props
{
  like:like
}


function ModalLike({like}:props) {
  return (
    <div className='w-1/3 flex justify-around flex-col items-center  h-36 hover:shadow-none cursor-pointer duration-200 ShowsLikesCommentsShadow '> 
        <img src={like?.userImg} className='h-24 w-24 rounded-full'></img>
        <p className='text-lg font-bold'>{like?.userName}</p>
    </div>
  )
}

export default ModalLike