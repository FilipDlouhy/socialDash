import React from 'react'
import "../../lib/fontawsome"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket,faLightbulb, faMonument,faUser,faLandmark,faSearch,faHome,faMessage,faVideo,faBell,faSun } from "@fortawesome/free-solid-svg-icons";
import { useSession } from 'next-auth/react';
import LogOutButton from './LogOutButton';
import Link from 'next/link';

 function TopOfPage() {
  return (
    <div className='w-full h-20 flex  '>
        <div className='w-2/5 h-full flex items-center'>
            <p className='font-bold text-2xl text-white'>Historia pro omnibus ubique</p>
        </div>

        <div className='w-1/5 h-full flex items-center justify-center'>
        <div className="search-box">
            <button className="btn-search"> <FontAwesomeIcon className='w-7 mx-auto'  icon={faSearch} /></button>
            <input type="text" className="input-search" placeholder="Type to Search..."></input>
        </div>
        </div>

        <div className='w-2/5 pl-48 h-full flex items-center justify-around'>
            <Link href={"/Main"}><FontAwesomeIcon className='w-9 h-12 text-blue-100 hvr-shrink cursor-pointer'  icon={faHome} /></Link>
           <FontAwesomeIcon className='w-9 h-12 text-blue-100 hvr-shrink cursor-pointer'  icon={faMessage} />
            <FontAwesomeIcon className='w-9 h-12 text-blue-100 hvr-shrink cursor-pointer'  icon={faVideo} />
            <Link href={"/ProfilePage"}><FontAwesomeIcon className='w-9 h-12 text-blue-100 hvr-shrink cursor-pointer'  icon={faUser} /></Link>
            <FontAwesomeIcon className='w-9 h-12 text-blue-100 hvr-shrink cursor-pointer'  icon={faBell} />
            <LogOutButton/>
        </div>



    </div>
  )
}

export default TopOfPage