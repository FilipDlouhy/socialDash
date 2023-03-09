"use client"
import axios from 'axios'
import { useSession } from 'next-auth/react'
import React from 'react'

interface FollowModalUser
{
    userId:string
    img:string
    friends:number
    follows:number
    followers:number
    posts:number
    tweets:number
    userName:string
}


interface props
{
    followerId:string
    userId:string
    followData:FollowModalUser[]
    setFollowData:React.Dispatch<React.SetStateAction<FollowModalUser[] | undefined>>
}

function ShowFollowersModalUnfollowBtn({followData,  followerId, setFollowData,userId}:props) {
   const session = useSession()
   if(session.data?.user?.name !== userId)
   {
    return null
   }else
   {  
    return (
      <button onClick={(e)=>{
        axios.post("http://localhost:3000/api/removeFollower",{ userId:userId, friendId:followerId }).then((res)=>{
          if(res.data.message==="OK")
          {
            let arr:FollowModalUser[] =[]
            followData.map((user)=>{
              if(user.userId !== followerId)
              {
                arr.push(user)
              }
            })

            setFollowData(arr)
          }
        })
        
      }} className='postCommentShadow w-1/2 h-7 bg-red-500 hover:shadow-none  text-white font-semibold  hover:bg-red-700 duration-300 cursor-pointer '>UnFollow</button>
    )
  } 

   }


export default ShowFollowersModalUnfollowBtn