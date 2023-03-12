"use client"
import { mainContext } from '@/models'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React,{useContext} from 'react'


interface props
{
    postId:string
}

function PostSendLink({postId}:props) {
    const {setShowSendPostTweet} =  useContext(mainContext)
    const {setLink} =  useContext(mainContext)
  return (
    <FontAwesomeIcon onClick={()=>{
        setShowSendPostTweet(true)
        setLink(`/PostPage/${postId}/`)
    }} className='w-8 h-8 text-blue-100 mx-5 hvr-pop cursor-pointer'  icon={faPaperPlane} />
  )
}

export default PostSendLink