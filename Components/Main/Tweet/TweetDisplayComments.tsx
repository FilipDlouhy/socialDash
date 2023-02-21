import React from 'react'
import TweetComment from './TweetComment'

interface props{
    comments:comment[] 
  }
  
  interface comment {
    text    :  String ,
    userId  :  String ,
    tweetId  : String,
    userName : String
}

function TweetDisplayComments({comments}:props) {

    function renderComments() {
        return comments?.map((comment, index) => {

         
            return <TweetComment key={index} comment={comment} />;
   
        });
      }
  return (
    <div className='w-full h-24 flex flex-wrap'>
        {renderComments()}
</div>
  )
}

export default TweetDisplayComments