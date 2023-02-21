import React from 'react'
import ProfilePagePost from './ProfilePagePost'
import ProfilePageTweet from './ProfilePageTweet'
import ProfilePageVideo from './ProfilePageVideo'

function MiddleOfPRofilePage() {
  return (
    <div className='w-2/4 h-full flex justify-around items-center flex-wrap  px-4'>

        <ProfilePagePost/>
        <ProfilePageTweet/>
        <ProfilePageVideo/>

    </div>
  )
}

export default MiddleOfPRofilePage