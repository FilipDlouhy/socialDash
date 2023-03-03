import React from 'react'

function ProfilePageRightColors() {
  return (
    <div className='ProfilePageBackgroundChange my-6'>
        <p className='w-full h-12 font-semibold flex items-center justify-center text-white text-xl'>Change Background Color</p>
        <div className='w-full h-4/6 flex justify-center items-start flex-wrap '>
            <div className=' background1 w-16 h-16  hover:scale-110 duration-200 cursor-pointer  rounded-sm m-2'>

            </div>

            <div className=' background2 w-16 h-16 hover:scale-110 duration-200 cursor-pointer rounded-sm  m-2'>

            </div>

            <div className=' background3 w-16 h-16 hover:scale-110 duration-200 cursor-pointer  rounded-sm m-2'>

            </div>

            <div className=' background4 w-16 h-16 hover:scale-110 duration-200 cursor-pointer rounded-sm  m-2'>

            </div>

            <div className=' background5 w-16 h-16 hover:scale-110 duration-200 cursor-pointer  rounded-sm m-2'>

            </div>
        </div>
    </div>
  )
}

export default ProfilePageRightColors