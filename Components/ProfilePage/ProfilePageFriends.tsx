import React from 'react'

function ProfilePageFriends() {
  return (
    <div className='ProfilePageFriends'>
        <div className='w-2/3 h-7 mb-3 mx-auto text-center text-white font-normal text-xl border-b-2'>
            <p>Your Friends</p>
        </div>


        <div className='w-full h-4/5 flex flex-wrap items-start justify-center'>
            <div className='w-44 h-44 m-3 hover:scale-95 duration-300 cursor-pointer bg-black'>

            </div>
            
        </div>

        <div className='w-full h-14 flex items-center justify-end pr-6'>
            <button className='w-40 h-7 flex justify-center items-center hover:scale-110 duration-150 cursor-pointer font-medium text-lg  text-white shadow-md rounded-md'>See All Friends </button>
        </div>    

    </div>
  )
}

export default ProfilePageFriends