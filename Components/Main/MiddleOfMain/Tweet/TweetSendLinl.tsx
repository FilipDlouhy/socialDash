"use client"
import { mainContext } from '@/models'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React ,{useContext}from 'react'


interface props
{
    tweetId:string
}


function TweetSendLinl({tweetId}:props) {
    const {setShowSendPostTweet} =  useContext(mainContext)
    const {setLink} =  useContext(mainContext)

  return (
    <FontAwesomeIcon onClick={()=>{
        setShowSendPostTweet(true)
        setLink(`/TweetPage/${tweetId}/`)
    }} className='w-6 h-8 text-blue-100 hvr-shrink cursor-pointer'  icon={faPaperPlane} />
  )
}

export default TweetSendLinl