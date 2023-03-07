"use client"
import { mainContext } from '@/models'
import React, { useContext } from 'react'

function UserSmallProfileShowFollowingBTN() {
    const {setShowFollows} = useContext(mainContext)
  return (
    <button onClick={()=>{setShowFollows(true)}} className='w-2/5 UserProfBTNBG  h-10 flex items-center justify-center  hvr-pop font-bold text-white  text-sm mx-3 rounded-lg'>See what are you following</button>
  )
}

export default UserSmallProfileShowFollowingBTN