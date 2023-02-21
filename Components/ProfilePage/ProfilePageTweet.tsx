import React from 'react'

function ProfilePageTweet() {
  return (
    <div className='ProfilePageTweet my-4'>
        <div className='ProfilePageTweetShadow w-full h-2/3'>
            <p className='h-12 flex items-center justify-center text-white text-lg font-semibold '>TITLEVOLE</p>
            
            <p className='w-full px-2 text-center font-medium text-white text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, omnis quibusdam! Vel atque sapiente sequi placeat labore impedit inventore dolorum? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error optio doloribus dignissimos libero voluptatum nobis, aspernatur magnam unde tempora at!</p>

            <div className='w-full h-1/3 py-1 px-4'>
                
                <div className='w-full flex items-center justify-around  1/2 p-2'>
                    <button className='w-32 text-white font-medium hover:scale-105 duration-200 cursor-pointer  h-6 shadow-md flex items-center justify-center'>Comments</button>
                    <button className='w-32 text-white font-medium hover:scale-105 duration-200 cursor-pointer  h-6 shadow-md flex items-center justify-center'>Likes</button>
                </div>
                
                <div className='w-full  flex items-center justify-around h-1/2 p-2'>
                    <button className='w-32 text-white font-medium hover:scale-105 duration-200 cursor-pointer  h-6 shadow-md flex items-center justify-center'>Update</button>
                    <button className='w-32 text-white font-medium hover:scale-105 duration-200 cursor-pointer  h-6 shadow-md flex items-center justify-center'>Delete</button>                    
                </div>

            </div>    


        </div>
    </div>
  )
}

export default ProfilePageTweet