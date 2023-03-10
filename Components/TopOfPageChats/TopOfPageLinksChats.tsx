import { faBell, faHome, faMessage, faVideo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'
import LogOutButtonChats from './LogOutButtonChats'
import LogOutButton from './LogOutButtonChats'
import ProfilePageLinkChats from './ProfilePageLinkChats'
import ProfilePageLink from './ProfilePageLinkChats'


interface props
{
    userId:string
}

function TopOfPageLinksChats({userId}:props) {
  return (

    <div className='w-2/5 pl-48 h-full flex items-center justify-around'>
                 <Link href={"/Main"}><FontAwesomeIcon className='w-9 h-12 text-blue-100 hvr-shrink cursor-pointer'  icon={faHome} /></Link>
                 <Link href={`/Messeages/${userId}`}><FontAwesomeIcon className='w-9 h-12 text-blue-100 hvr-shrink cursor-pointer'  icon={faMessage} /></Link>
                <FontAwesomeIcon className='w-9 h-12 text-blue-100 hvr-shrink cursor-pointer'  icon={faVideo} />
                <ProfilePageLinkChats/>
                <FontAwesomeIcon className='w-9 h-12 text-blue-100 hvr-shrink cursor-pointer'  icon={faBell} />
                <LogOutButtonChats/>
    </div>

  )
}

export default TopOfPageLinksChats