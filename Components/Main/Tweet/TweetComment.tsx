import React from 'react'

interface props{
  comment:comment
}
interface comment {
  text    :  String ,
  userId  :  String ,
  tweetId  : String,
  userName : String
}
function TweetComment({comment}:props) {
  function getWordStr(str:String) {
    return str?.split(/\s+/).slice(0, 15).join(" ");
    }
  return (
    <div className='flex postCommentShadow duration-200 hover:scale-90 cursor-pointer w-1/2 h-1/2'>

        <div className='h-full w-full flex justify-between px-6 items-center '>
            {comment?.userName &&<p className='text-xs font-semibold text-white'>{comment?.userName}</p>}
            <p className='text-xs font-medium text-white'>{getWordStr(comment?.text)}</p>
        </div>
</div>
  )
}

export default TweetComment