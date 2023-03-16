"use client"
import { mainContext } from '@/models'
import { User } from '@prisma/client'
import React, { useContext, useState } from 'react'
interface storyData
{
  type:string,
  user:User,
  id:string,
  createdAt:Date
}
interface props{
    story:storyData
}

function Story({story}:props) {
  const [loading,setLoading] = useState<boolean>()
  const {handleOpenModalPost} = useContext(mainContext)
  const {handleOpenModalTweet} = useContext(mainContext)
  const {setStory} = useContext(mainContext)
  function loadStory() {
    setLoading(true);
    setTimeout(() => {
      setStory(true)
      if(story.type === "post")
        { 
          handleOpenModalPost(true,story.user.id,story.id,undefined)
        }
        else
        {
          handleOpenModalTweet(true,story.user.id,story.id,undefined)
        }
      setLoading(false);
    }, 1500);
  }


  return (
    <div onClick={()=>{loadStory()}} className={loading ? ' hvr-pop cursor-pointer w-16 h-16  2xl:h-24 2xl:w-24 rounded-full':' border-4 border-white hvr-pop cursor-pointer w-16 h-16  2xl:h-24  2xl:w-24 rounded-full' }>
        <div className={loading ? 'load  w-full h-full absolute' : '  w-full h-full absolute'}>
        </div>
        {story?.user.img &&   <img src={story?.user.img} className='w-full h-full rounded-full'></img>}

    </div>
  )
}

export default Story