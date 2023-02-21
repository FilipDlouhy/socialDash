import React from 'react'
import ProfilePageFriends from './ProfilePageFriends'
import ProfilePageUserProfile from './ProfilePageUserProfile'

function LeftSideOfProfilePage() {
  return (
    <div className='w-1/4 flex flex-col items-center  mt-10 '>
        <ProfilePageUserProfile/>
        <ProfilePageFriends/>
    </div>
  )
}

export default LeftSideOfProfilePage