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
        <div className='w-11/12 h-24 md:flex-row flex-col flex mx-auto my-4'>
                <div className='h-1/2 md:h-full w-full md:w-1/4 flex items-center justify-center'>
                    {user.img && <img src={user.img} className=' lg:w-20 w-14 h-14 lg:h-20 hover:scale-105 duration-200 cursor-pointer rounded-full'></img>}
                </div>
                <div className='h-1/2 md:h-full w-full md:w-3/4 flex items-center justify-around '>
                    <p className=' text-center font-semibold text-white text-xs md:text-sm lg:text-lg'>{user.userName}</p>
                    <p className=' text-center font-semibold text-white text-xs md:text-sm lg:text-lg'>From {form} </p>
                </div>

            </div>

    </div>

  )
}

export default PostPageProfile