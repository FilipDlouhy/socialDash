import { User } from '@prisma/client'
import React from 'react'

interface props
{
    user:User
    form:string
}

function PostPageProfile({form,user}:props) {
  return (
    <div className='w-full h-24 border-b-2 border-white '>
        <div className='w-11/12 h-24 flex mx-auto my-4'>
                <div className='h-full w-1/4 flex items-center justify-center'>
                    {user.img && <img src={user.img} className='w-20 h-20 hover:scale-105 duration-200 cursor-pointer rounded-full'></img>}
                </div>
                <div className='h-full w-3/4 flex items-center justify-around '>
                    <p className=' text-center font-semibold text-white text-lg'>{user.userName}</p>
                    <p className=' text-center font-semibold text-white text-lg'>From {form} </p>
                </div>

            </div>

    </div>

  )
}

export default PostPageProfile