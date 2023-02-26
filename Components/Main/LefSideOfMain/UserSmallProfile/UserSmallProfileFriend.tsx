"use client"
import React, { useContext } from 'react'
import { User } from '@prisma/client'
import { mainContext } from '@/models'

interface props {
    user:User

}

function UserSmallProfileFriend({user}:props) {
  const {setFriend} = useContext(mainContext)
  const {setShowModalFriend} = useContext(mainContext)
  return (

    <div  onClick={()=>{
      setFriend(user.id)
      setShowModalFriend(true)
    }} className='friendProfileShadow w-2/5  h-1/3 hover:shadow-none duration-300 cursor-pointer flex mb-1 justify-between py-2 px-4 items-center  '>
       {user.img&& <img src={user.img} className='w-12 h-12 rounded-full'></img>}
        <p className='text-white font-semibold text-xs'>{user.userName}</p>
    </div>
  )
}

export default UserSmallProfileFriend