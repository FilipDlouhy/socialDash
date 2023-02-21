import React from 'react'

function ProfilePageVideo() {
  return (
    <div className='ProfilePageTweet ProfilePageTweetShadow my-4'>
        <div className='w-full h-5/6'>
            <img className='w-full h-full '></img>
        </div>
        <div className='w-full flex justify-around items-start h-1/6'>
            <button className='w-1/4 shadow-md hover:scale-90 duration-200 text-white font-medium   h-full'>Comments</button>
            <button className='w-1/4  shadow-md hover:scale-90 duration-200 text-white font-medium  h-full'>Likes</button>
            <button className='w-1/4  shadow-md hover:scale-90 duration-200 text-white font-medium  h-full'>Update</button>
            <button className='w-1/4 shadow-md hover:scale-90 duration-200   text-white font-medium h-full'>Delete</button>
        </div>
    </div>
  )
}

export default ProfilePageVideo