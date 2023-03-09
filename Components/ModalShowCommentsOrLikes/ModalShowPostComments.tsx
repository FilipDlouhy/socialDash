import React from 'react'
import ModalComment from './ModalPostComment'
import { PostComment } from '@prisma/client';

interface props{
  comments:PostComment[]
  userId:string

}

function ModalShowComments({comments,userId}:props) {
  return (
    <div className='w-full py-1 h-full'>
        {comments.map((comment)=>{
          return <ModalComment userId={userId} comment={comment}/>
        })}
    </div>
  )
}

export default ModalShowComments