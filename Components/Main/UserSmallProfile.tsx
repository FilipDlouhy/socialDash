import React,{useEffect} from 'react'
import "../../lib/fontawsome"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faHome,faIdCard,faMapLocation,faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { User } from '@prisma/client'



interface props{
    user:User,
    numberOfUserPosts:number,
    numberOfUserTweets:number
  }

 function UserSmallProfile({numberOfUserTweets,user,numberOfUserPosts}:props) {
    const date = user?.created_at?.toString().slice(0,10)
  return (
    <div className='UserSmallProfile p-1'>
                <div className='w-full h-24 flex items-center justify-around' >
          {user.img && <img src={user.img} className='w-20 h-20 rounded-full'></img>}

          <div className='flex flex-col justify-around items-center h-full'>
              <p className='text-white text-xl font-semibold'>{user.userName}</p>
              <p className='text-white text-sm font-medium'>Member since {date}  </p>
          </div>

          <Link href={"/ProfilePage"}><FontAwesomeIcon className='w-9 h-9 text-blue-100 hvr-shrink cursor-pointer'  icon={faIdCard} /></Link>

      </div>

      <div className='w-full h-32 flex flex-col mt-4 justify-around items-center'>

          <div className='w-96  flex justify-between px-6 items-center'>
              <p className='font-semibold text-lg text-white'>From {user.placeToLive}</p>
              <FontAwesomeIcon className='w-10 h-10 text-blue-100  cursor-pointer'  icon={faMapLocation} />
          </div>
          <div  className='w-96  flex justify-between px-6 items-center'>
              <p className='font-semibold text-lg text-white'>sadasdxsad</p>
              <FontAwesomeIcon className='w-10 h-10 text-blue-100 cursor-pointer'  icon={faBriefcase} />
          </div>

      </div>

      <div className='w-full h-24 flex justify-around items-center'>
          <div className='flex flex-col justify-center items-center'>
              <p className='font-semibold text-xl text-white'>Posts</p>
              <p className='font-medium text-white'>{numberOfUserPosts}</p>
          </div>

          <div className='flex flex-col justify-center items-center'>
              <p className='font-semibold text-xl text-white'>Videos</p>
              <p className='font-medium text-white'>555</p>
          </div>

          <div className='flex flex-col justify-center items-center'>
              <p className='font-semibold text-xl text-white'>Tweets</p>
              <p className='font-medium text-white'>{numberOfUserTweets}</p>
          </div>


      </div>

      <p className='text-center text-xl font-bold text-white'>Recently added Friends</p>


      <div className='w-full h-28 flex flex-wrap mb-3'> 
          <div className='w-1/2 h-1/2 flex justify-around items-center  '>
              <img className='w-12 h-12 rounded-full'></img>
              <p className='text-white font-semibold text-sm'>SADAD</p>
          </div>

          <div className='w-1/2 h-1/2 flex justify-around items-center  '>
              <img className='w-12 h-12 rounded-full'></img>
              <p className='text-white font-semibold text-sm'>SADAD</p>
          </div>

          <div className='w-1/2 h-1/2 flex justify-around items-center  '>
              <img className='w-12 h-12 rounded-full'></img>
              <p className='text-white font-semibold text-sm'>SADAD</p>
          </div>
          <div className='w-1/2 h-1/2 flex justify-around items-center  '>
              <img className='w-12 h-12 rounded-full'></img>
              <p className='text-white font-semibold text-sm'>SADAD</p>
          </div>

      </div>


      <div className='w-full justify-around  flex h-12'> 

      <Link href={"/CreatePost"} className='w-1/4 UserProfBTNBG flex items-center justify-center  hvr-pop font-bold text-white text-sm rounded-lg'>Create Post</Link>
      <Link href={"/CreateTweet"}className='w-1/4 UserProfBTNBG  hvr-pop   flex items-center justify-center font-bold text-white text-sm rounded-lg'>Create Tweet</Link>
      <Link href={"/CreateVideo"} className='w-1/4 UserProfBTNBG  hvr-pop flex items-center justify-center  font-bold text-white text-sm rounded-lg'>Upload Video</Link>

      </div>
    </div>
  )
}

export default UserSmallProfile