import React from 'react'
import ModalComment from './ModalPostComment'
import { PostComment, TweetComment } from '@prisma/client';
import ModalTweetComment from './ModalTweetComment';

interface props{
  comments:TweetComment[]
  userId:string

}

function ModalShowTweetComments({userId,comments}:props) {
  return (
    <div className='w-full py-1 h-full'>
        {comments.map((comment)=>{
          return <ModalTweetComment userId={userId} comment={comment}/>
        })}
    </div>
  )
}

export default ModalShowTweetComments