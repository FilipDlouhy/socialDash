import { User } from '@prisma/client'
import Link from 'next/link'
import React from 'react'

interface props{
    searchedUser:User
    userId:string

}

function SearchResult({userId,searchedUser}:props) {
  return (
    <Link href={userId === searchedUser.id ?`/ProfilePage/${userId}`:`/UserPage/${searchedUser.id}/${userId}`} className='hover:shadow-none duration-300 cursor-pointer searchReslutShadow my-3 w-11/12 mx-auto px-2  h-16 flex items-center justify-between'>
        {  searchedUser.img &&<img src={searchedUser.img} className='w-14 h-14 rounded-full'></img>}
        <p className='text-xl font-semibold'>{searchedUser.userName}</p>
    </Link>
  )
}

export default SearchResult