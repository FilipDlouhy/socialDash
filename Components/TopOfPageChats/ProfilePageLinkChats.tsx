"use client"
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

function ProfilePageLinkChats() {
    const session = useSession()
    console.log(session.data?.user?.name)
  return (
    <Link href={`/ProfilePage/${session.data?.user?.name}`}><FontAwesomeIcon className='w-7 h-9 xl:w-9 xl:h-12 text-blue-100 hvr-shrink cursor-pointer'  icon={faUser} /></Link>

  )
}

export default ProfilePageLinkChats