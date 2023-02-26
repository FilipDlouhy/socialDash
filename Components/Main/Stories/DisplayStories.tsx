"use client"
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { User } from '@prisma/client'
import React, { useEffect, useState } from 'react'
import Story from './Story'

interface storyData
{
  type:string,
  user:User,
  id:string,
  createdAt:Date
}

interface props{
    stories:storyData[]
}


function DisplayStories({stories}:props) {
  const [number,setNumber] = useState<number>(0)
  const [animate,setAnimate] = useState<boolean>(false)
  function storyDisplay() {
    const displayedStories = [];
  
    for (let i = number; i < number + 3; i++) {
      const storyIndex = i % stories.length;
      displayedStories.push(<Story story={stories[storyIndex]} />);
    }
  
    return displayedStories;
  }
  useEffect(()=>{
    setAnimate(true)

    setTimeout(()=>{
      setAnimate(false)
     },100)
 
  },[number])
  return (
    <div className='w-full flex px-32'>

    <FontAwesomeIcon onClick={()=>{
      if(number -3  < 0 )
      {
        setNumber(stories.length )
      }
      else
      {
        setNumber(number -1)
      }
    }} className='w-8 h-12 text-blue-100 mx-5 hvr-pop cursor-pointer'  icon={faArrowLeft} />

          <div className={animate ? 'w-5/6  opacity-0' :'story-animation w-5/6 justify-around flex px-4'}>
                  {
                    storyDisplay()
                  }
          </div>

    <FontAwesomeIcon onClick={()=>{
      if(number +3 > stories.length)
      {
        setNumber(0)
      }
      else
      {
        setNumber(number + 1)
      }
    }}  className='w-8 h-12 text-blue-100 mx-5 hvr-pop cursor-pointer'  icon={faArrowRight} />

</div> 
  )
}

export default DisplayStories

/*


   
*/