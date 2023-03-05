import React from 'react'
import ModalComment from './ModalPostComment'
import { PostComment, TweetComment } from '@prisma/client';
import ModalTweetComment from './ModalTweetComment';

interface props{
  comments:TweetComment[]
}

function ModalShowTweetComments({comments}:props) {
  return (
    <div className='w-full py-1 h-full'>
        {comments.map((comment)=>{
          return <ModalTweetComment comment={comment}/>
        })}
    </div>
  )
}

export default ModalShowTweetComments