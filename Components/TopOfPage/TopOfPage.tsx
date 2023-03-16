import React from 'react'
import "../../lib/fontawsome"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket,faLightbulb, faMonument,faUser,faLandmark,faSearch,faHome,faMessage,faVideo,faBell,faSun, faDroplet } from "@fortawesome/free-solid-svg-icons";
import { useSession } from 'next-auth/react';
import LogOutButton from './LogOutButton';
import Link from 'next/link';
import SearchResults from './SearchResults';
import SearchInput from './SearchInput';
import ProfilePageLink from './ProfilePageLink';
import TopOfPageLinks from './TopOfPageLinks';

interface props{
    showSearch:boolean
    userId:string
}

 function TopOfPage({userId,showSearch}:props) {
  return (
    <div className='w-full h-20   '>
        <div className='w-full h-20 flex justify-between flex-row-reverse lg:flex-row '>
            <div className='hidden lg:w-2/5 h-full lg:flex items-center'>
                <p className='font-bold text-3xl text-white ml-11'>Social Dash <FontAwesomeIcon className='w-9 mx-10 h-12 text-blue-100 hvr-shrink cursor-pointer'  icon={faDroplet} /></p>
            </div>

            <div className=' w-1/5 lg:w-1/5 h-full flex items-center justify-end lg:justify-center'>
                <SearchInput userId={userId} showSearch={showSearch}/>
            </div>

            <TopOfPageLinks userId={userId}/>
        </div>



    </div>
  )
}

export default TopOfPage