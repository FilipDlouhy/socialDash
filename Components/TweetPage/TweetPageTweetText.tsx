import React from 'react'

interface props{
    tweetText:string
}

function TweetPageTweetText({tweetText}:props) {
  return (
    <div className='w-2/3 h-full flex items-center justify-center px-4'>
        <p className='text-center font-semibold text-white'>{tweetText}</p>
    </div>
  )
}

export default TweetPageTweetText