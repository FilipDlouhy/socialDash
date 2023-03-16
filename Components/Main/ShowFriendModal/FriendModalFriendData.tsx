import { User } from '@prisma/client'
import React from 'react'

interface numberStatsUser{
  tweets:number,
  posts:number,
  videos:number
  friends:number
  followers:number
  following:number
}
interface props
{
    user:User | undefined,
    setRenderCondition:React.Dispatch<React.SetStateAction<string>>
    userNumbers:numberStatsUser | undefined
}

function FriendModalFriendData({user,setRenderCondition,userNumbers}:props) {
  return (
    <div className='w-2/3 flex items-center justify-around h-full'>
        { user?.img && <img onClick={()=>{setRenderCondition("default")}} src={user.img} className= 'hidden xs:block hover:scale-95 duration-300 cursor-pointer w-28 h-28 md:w-40 md:h-40 lg:w-56 lg:h-56 rounded-full'>
        </img>}

        <div className='w-72 lg:w-96 h-full flex flex-col justify-around items-center'>

            <div className='w-full md:h-1/3 flex justify-around items-center flex-wrap'>
                <p  onClick={()=>{setRenderCondition("default")}} className='w-40 h-10 flex items-center justify-center font-medium shadow-xl '>{user?.userName}</p>
                <p className='w-40 h-10  hidden md:flex items-center justify-center font-medium  shadow-xl'>{user?.created_at.toString().slice(0,10)}</p>
                <p className='w-40 h-10  hidden md:flex items-center justify-center font-medium  shadow-xl'>From:{user?.placeToLive}</p>
            
            </div>

            <div className='w-full h-2/3 md:h-1/2 flex justify-around items-center flex-wrap'>
                <p onClick={()=>{setRenderCondition("friends")}} className='hover:shadow-none duration-300 cursor-pointer w-40 h-9 flex items-center justify-center font-medium  shadow-xl'>Friends: {userNumbers?.friends}</p>
                <p onClick={()=>{setRenderCondition("followers")}} className='hover:shadow-none duration-300 cursor-pointer w-40 h-9 md:flex items-center justify-center font-medium  shadow-xl hidden'>Followers: {userNumbers?.followers}</p>
                <p onClick={()=>{setRenderCondition("following")}} className='hover:shadow-none duration-300 cursor-pointer w-40 h-9 md:flex items-center justify-center font-medium  shadow-xl  hidden'>Following: {userNumbers?.following}</p>
                <p onClick={()=>{setRenderCondition("posts")}} className='hover:shadow-none duration-300 cursor-pointer w-40 h-9 flex items-center justify-center font-medium  shadow-xl'>Posts: {userNumbers?.posts}</p>
                <p onClick={()=>{setRenderCondition("tweets")}} className='hover:shadow-none duration-300 cursor-pointer w-40 h-9 flex items-center justify-center font-medium  shadow-xl'>Tweets: {userNumbers?.tweets}</p>
                <p onClick={()=>{setRenderCondition("videos")}} className='hover:shadow-none duration-300 cursor-pointer w-40 h-9 flex items-center justify-center font-medium  shadow-xl'>Videos: {userNumbers?.videos }</p>
            
            </div>

        </div>

 </div>
  )
}

export default FriendModalFriendData