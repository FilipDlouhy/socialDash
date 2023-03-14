import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'


interface props{
    setText: (value: React.SetStateAction<string>) => void
    like(): void
    Liked:boolean
    addComment(): void
    AddingComment:boolean
    }

function VideoAddCommentsAndLikes({AddingComment,Liked,addComment,like,setText}:props) {
  return (
    <div className="w-full h-2/4 flex flex-col justify-end items-center px-4">
        <textarea onChange={(e)=>{setText(e.target.value)}} className="text-white font-semibold text-lg ChatDeleteBtn focus:border-none focus:outline-none  text-center bg-emerald-400  w-80 h-40 rounded flex items-center justify-center resize-none "></textarea>
        <div className="w-full flex h-16 justify-around items-center flex-row-reverse mt-10">


        <FontAwesomeIcon onClick={()=>{like()}} className={Liked ? "w-12 h-12 text-red-700 duration-300 cursor-pointer hover:scale-90 " : "duration-300 cursor-pointer hover:scale-90 w-12 h-12 text-white"  }icon={faHeart}/>   


        <button onClick={()=>{addComment()}}  className={AddingComment ? " w-64 h-10 hvr-shrink bg-red-600 text-lg font-semibold  ChatDeleteBtn my-8 text-white" :" w-64 h-10 hvr-shrink bg-cyan-300 text-lg font-semibold  ChatDeleteBtn my-8 text-white" }>{AddingComment ? "Adding Comment": "Add Comment"}</button>
    </div>

</div>

  )
}

export default VideoAddCommentsAndLikes