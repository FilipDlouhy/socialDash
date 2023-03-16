import { faBell, faHome, faMessage, faVideo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'
import LogOutButton from './LogOutButton'
import ProfilePageLink from './ProfilePageLink'


interface props
{
    userId:string
}

function TopOfPageLinks({userId}:props) {
  return (

    <div className=' w-3/5 lg:w-2/5 pl-6 lg:pl-48 h-full flex items-center justify-between sm:justify-around'>
                <Link href={"/Main"}><FontAwesomeIcon className=' w-7 h-9 xl:w-9 xl:h-12 text-blue-100 hvr-shrink cursor-pointer'  icon={faHome} /></Link>
                <Link href={`/Messeages/${userId}`}><FontAwesomeIcon className=' w-7 h-9 xl:w-9 xl:h-12 text-blue-100 hvr-shrink cursor-pointer'  icon={faMessage} /></Link>
                <Link href={`/Videos/${userId}`}><FontAwesomeIcon className=' w-7 h-9 xl:w-9 xl:h-12 text-blue-100 hvr-shrink cursor-pointer'  icon={faVideo} /></Link>
                <ProfilePageLink/>
                <LogOutButton/>
    </div>

  )
}

export default TopOfPageLinks 