import React from 'react'
import "../../lib/fontawsome"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket,faLightbulb, faMonument,faUser,faLandmark,faSearch,faHome,faMessage,faVideo,faBell,faSun, faDroplet } from "@fortawesome/free-solid-svg-icons";
import { useSession } from 'next-auth/react';
import LogOutButton from './LogOutButtonChats';
import Link from 'next/link';
import ProfilePageLink from './ProfilePageLinkChats';
import TopOfPageLinks from './TopOfPageLinksChats';
import TopOfPageLinksChats from './TopOfPageLinksChats';

interface props{
    showSearch:boolean
    userId:string
}

 function TopOfPageChats({userId,showSearch}:props) {
  return (
    <div className='w-full h-20   '>
        <div className='w-full h-20 flex justify-between '>
            <div className='w-2/5 h-full flex items-center'>
                <p className='font-bold text-3xl text-white ml-11'>Social Dash <FontAwesomeIcon className='w-9 mx-10 h-12 text-blue-100 hvr-shrink cursor-pointer'  icon={faDroplet} /></p>
            </div>

            <TopOfPageLinksChats userId={userId}/>
        </div>



    </div>
  )
}

export default TopOfPageChats