import React from 'react'
import TweetComment from './TweetComment'

interface props{
    comments:comment[]
    userId:string 
  }
  
  interface comment {
    text    :  String ,
    userId  :  String ,
    tweetId  : String,
    userName : String
}

function TweetDisplayComments({userId,comments}:props) {

    function renderComments() {
        return comments?.map((comment, index) => {

         
            return <TweetComment  userId={userId} key={index} comment={comment} />;
   
        });
      }
  return (
    <div className='w-full h-24 flex flex-wrap'>
        {renderComments()}
</div>
  )
}

export default TweetDisplayComments