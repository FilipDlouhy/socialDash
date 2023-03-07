"use client"
import { mainContext } from '@/models'
import React, { useContext } from 'react'

function UserSmallProfileShowFollowersBTN() { 
    const {setShowFollowers} = useContext(mainContext)   
  return (
    <button onClick={()=>{setShowFollowers(true)}} className='w-2/5 UserProfBTNBG  h-10 flex items-center justify-center  hvr-pop font-bold text-white  text-sm mx-3 rounded-lg'>See who follows you</button>
  )
}

export default UserSmallProfileShowFollowersBTN