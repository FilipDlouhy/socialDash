import Link from 'next/link'
import React from 'react'

interface props {
    userId:string
}

function ProfilePageUserProfileLinks({userId}:props) {
  return (
        <div>
            <div className='w-full  h-20 flex justify-around items-center'>
            
            <button className='w-44 h-9 flex justify-center items-center hover:scale-110 duration-150 cursor-pointer font-medium text-lg  text-white shadow-md rounded-md'>Delete Profile</button>
            <Link href={`UpdateProfile/${userId}`} className='w-44 h-9 flex justify-center items-center hover:scale-110 duration-150 cursor-pointer font-medium text-lg  text-white shadow-md rounded-md'>Update Profile</Link>
            </div>

            <div className='w-full h-20 flex justify-center items-center'>
            <Link href={"/CreatePost"} className='flex items-center justify-center h-9 w-1/3 shadow-lg text-white font-semibold hover:scale-90 cursor-pointer duration-200'>Create Post</Link>
            <Link href={""} className='h-9 w-1/3 shadow-lg flex items-center justify-center text-white font-semibold hover:scale-90 cursor-pointer duration-200'>Create Video</Link>
            <Link href={"/CreateTweet"} className='h-9 w-1/3 shadow-lg flex items-center justify-center text-white font-semibold hover:scale-90 cursor-pointer duration-200'>Create Tweet</Link>
            </div>
        </div>

  )
}

export default ProfilePageUserProfileLinks