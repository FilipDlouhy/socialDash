import { User } from '@prisma/client'
import React from 'react'

interface props{
    searchedUser:User
}

function SearchResult({searchedUser}:props) {
  return (
    <div  className='hover:shadow-none duration-300 cursor-pointer searchReslutShadow my-3 w-11/12 mx-auto  h-16 flex items-center justify-around'>
        {  searchedUser.img &&<img src={searchedUser.img} className='w-14 h-14 rounded-full'></img>}
        <p className='text-xl font-semibold'>{searchedUser.userName}</p>
    </div>
  )
}

export default SearchResult