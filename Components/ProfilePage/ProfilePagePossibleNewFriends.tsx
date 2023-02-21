import React from 'react'

function ProfilePagePossibleNewFriends() {
  return (
    <div className='ProfilePagePossibleFriends my-6'>
        <p className='w-full h-12 font-semibold flex items-center justify-center text-white text-xl'>Possible new Friends</p>

        <div className='h-5/6 flex items-start justify-center flex-wrap '>
            <div className='w-24 h-24 m-3 hover:scale-110 duration-200 cursor-pointer shadow-md'>
                <img className='h-3/4 w-full'></img>
                <p className='w-full h-1/4 text-sm text-white font-semibold flex items-center justify-center'>KOKOT</p>
            </div>
            
        </div>

    </div>
  )
}

export default ProfilePagePossibleNewFriends