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
        <textarea onChange={(e)=>{setText(e.target.value)}} className="text-white font-semibold text-lg ChatDeleteBtn focus:border-none focus:outline-none  text-center bg-emerald-400 w-40 lg:w-80 h-40 rounded flex items-center justify-center resize-none "></textarea>
        <div className="w-full flex h-16 justify-around items-center flex-row-reverse mt-10">


        <FontAwesomeIcon onClick={()=>{like()}} className={Liked ? "md:w-12 w-8 h-8 md:h-12 mx-2 text-red-700 duration-300 cursor-pointer hover:scale-90 " : "duration-300 cursor-pointer hover:scale-90 md:w-12 w-8 h-8 md:h-12  mx-2 text-white"  }icon={faHeart}/>   


        <button onClick={()=>{addComment()}}  className={AddingComment ? " w-44 2xl:w-64 h-10 hvr-shrink bg-red-600 text-xs md:text-lg font-semibold  ChatDeleteBtn my-8 text-white" :" w-44 2xl:w-64 h-10 hvr-shrink bg-cyan-300 text-xs md:text-lg font-semibold  ChatDeleteBtn my-8 text-white" }>{AddingComment ? "Adding Comment": "Add Comment"}</button>
    </div>

</div>

  )
}

export default VideoAddCommentsAndLikes