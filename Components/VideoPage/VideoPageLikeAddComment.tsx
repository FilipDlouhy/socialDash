import { faArrowRight, faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'



interface props{
    text:string
    addComment(): void
    like():void
    liked:boolean
    setText: (value: React.SetStateAction<string>) => void
}

function VideoPageLikeAddComment({setText,addComment,liked,like,text}:props) {
  return (
    <div className='w-full h-1/6 flex items-center justify-around'>
    <input value={text} onChange={(e)=>{setText(e.target.value)}}  maxLength={252}  className='w-56 bg-transparent modalCommentShadow  font-medium text-center  hover:shadow-lg  text-white h-8 duration-200 focus:shadow-xl  focus:outline-none' placeholder='Send a comment....'></input>
    <FontAwesomeIcon onClick={()=>{addComment()}}   className='w-10 h-10 text-blue-100 mx-5 hvr-pop cursor-pointer'  icon={faArrowRight} />
    <FontAwesomeIcon onClick={()=>{like()}}   className={liked ? 'w-10 h-10 text-red-600 mx-5 hvr-pop cursor-pointer duration-200  ' :' duration-200  w-10 h-10 text-blue-100 mx-5 hvr-pop cursor-pointer'  } icon={faHeart} />
</div>  
  )
}

export default VideoPageLikeAddComment