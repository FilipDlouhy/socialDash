"use client"
import axios from 'axios'
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

function ShowFollowModalUnfollowBtn({followData,  followerId, setFollowData,userId}:props) {
  return (
    <button onClick={(e)=>{
      axios.post("http://localhost:3000/api/removeFollow",{ userId:userId, friendId:followerId }).then((res)=>{
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

export default ShowFollowModalUnfollowBtn