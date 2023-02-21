import React from 'react'

function ProfilePagePost() {
  return (
    <div className='ProfilePagePost my-4'>
        <div className='w-full h-1/2'>
            <img className='w-full h-full'></img>
        </div>

        <div className='w-full h-1/2'>
            <div className='w-full h-1/3 p-2'>
                <p className='text-sm font-medium text-white text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat minima tenetur et expedita molestias! Eaque.</p>
            </div>
            
            <div className='w-full flex items-center justify-around  h-1/3 p-2'>
                <button className='w-32 text-white font-medium hover:scale-105 duration-200 cursor-pointer  h-7 shadow-md flex items-center justify-center'>Comments</button>
                <button className='w-32 text-white font-medium hover:scale-105 duration-200 cursor-pointer  h-7 shadow-md flex items-center justify-center'>Likes</button>
            </div>
            
            <div className='w-full  flex items-center justify-around h-1/3 p-2'>
                <button className='w-32 text-white font-medium hover:scale-105 duration-200 cursor-pointer  h-7 shadow-md flex items-center justify-center'>Update</button>
                <button className='w-32 text-white font-medium hover:scale-105 duration-200 cursor-pointer  h-7 shadow-md flex items-center justify-center'>Delete</button>                    
            </div>
            
        </div>
</div>
  )
}

export default ProfilePagePost