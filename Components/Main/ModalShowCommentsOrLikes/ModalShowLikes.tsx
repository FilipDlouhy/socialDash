import React from 'react'
import ModalLike from './ModalLike'
interface like{
  userName: string,userId:string,userImg:string 
}

interface props{
  likes:like[]  
}

function ModalShowLikes({likes}:props) {
  return (
    <div className='w-full py-1 flex justify-start items-start flex-wrap h-full'>
      { likes?.map((like)=>{
        return <ModalLike like={like}/>
      })}
    </div>
  )
}

export default ModalShowLikes