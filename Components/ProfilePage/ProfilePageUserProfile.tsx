import React from 'react'

function ProfilePageUserProfile() {
  return (
    <div className='ProfilePageUserProfile  p-3'>

      <div className='w-full h-1/2 flex justify-around items-center'>
        <img className='w-28 h-28 rounded-full'></img>

        <div className='w-72 h-full '>
            <div className='w-full h-1/2 flex items-center justify-between px-3'>

                <p className='font-medium text-sm text-white'>Name: AUGUSTUS</p>
                <p className='font-medium text-sm text-white'>From: AHMERICA</p>

            </div>
            <div className='w-full h-1/2 flex items-center justify-between px-3'>


                <p className='font-medium text-sm text-white'>Contributions: 666</p>
                <p className='font-medium text-sm text-white'>Friends: 400</p>

            </div>
        </div>  

      </div>

      <div className='w-full  h-20 flex justify-around items-center'>
      
        <button className='w-44 h-9 flex justify-center items-center hover:scale-110 duration-150 cursor-pointer font-medium text-lg  text-white shadow-md rounded-md'>Delete Profile</button>
        <button className='w-44 h-9 flex justify-center items-center hover:scale-110 duration-150 cursor-pointer font-medium text-lg  text-white shadow-md rounded-md'>Update Profile</button>
      </div>

      <div className='w-full h-20 flex justify-center items-center'>
        <button className='h-9 w-1/3 shadow-lg text-white font-semibold hover:scale-90 cursor-pointer duration-200'>Create Post</button>
        <button className='h-9 w-1/3 shadow-lg text-white font-semibold hover:scale-90 cursor-pointer duration-200'>Create Video</button>
        <button className='h-9 w-1/3 shadow-lg text-white font-semibold hover:scale-90 cursor-pointer duration-200'>Create Tweet</button>
      </div>
    </div>
  )
}

export default ProfilePageUserProfile