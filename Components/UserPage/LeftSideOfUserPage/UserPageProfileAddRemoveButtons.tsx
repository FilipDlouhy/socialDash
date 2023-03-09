"use client"
import { User } from '@prisma/client';
import axios from 'axios'
import React,{useState} from 'react'
interface UserAndData {
    user: User;
    tweetLength: number;
    postLength: number;
    }
interface props{
    isFriend:boolean
    userId:string
    friendId:string
    isFollowing:boolean
    totalFollowers:number
    setTotalFollowers:React.Dispatch<React.SetStateAction<number>>
    totalFriends:number
    setTotalFriends:React.Dispatch<React.SetStateAction<number>>
}


function UserPageProfileAddRemoveButtons({totalFriends,totalFollowers,setTotalFriends,setTotalFollowers,isFollowing,userId,friendId,isFriend}:props) {
  const [IsFriend,setIsFriend] = useState<boolean>(isFriend)
  const [Follower,setFollower] = useState<boolean>(isFollowing)
  function follow ()
  {
    if(Follower)
    {
        axios.post("http://localhost:3000/api/removeFollow",( {userId:userId, friendId:friendId})).then((res)=>{
            if(res.data.message === "OK")
            {
                setFollower(false)
                setTotalFollowers(totalFollowers-1)
            }
        })
    }
    else
    {
        axios.post("http://localhost:3000/api/addFollow",( {userId:userId, friendId:friendId})).then((res)=>{
            if(res.data.message === "OK")
            {
                setFollower(true)
                setTotalFollowers(totalFollowers+1)
        }})
    }
  }


  function friend ()
  {
    if(IsFriend)
    {
        axios.post("http://localhost:3000/api/removeFriend",( {userId:userId, friendId:friendId})).then((res)=>{
            if(res.data.message === "OK")
            {
                setIsFriend(false)
                
                setTotalFriends(totalFriends -1)

            }
        })
    }
    else
    {
        axios.post("http://localhost:3000/api/addFriend",( {userId:userId, friendId:friendId})).then((res)=>{
            if(res.data.message === "OK")
            {
                setIsFriend(true)

                setTotalFriends(totalFriends +1)

            }
        })
    }
  }



  return (
    <div className='w-full  h-20 flex justify-around items-center'>
    <button onClick={()=>{friend()}} className={IsFriend ?'w-44 h-9 flex hover:bg-red-600 justify-center items-center hover:scale-110 duration-150 cursor-pointer font-medium text-lg  text-white shadow-md rounded-md':'w-44 h-9 flex justify-center items-center hover:scale-110 duration-150 cursor-pointer font-medium text-lg hover:bg-green-400 text-white shadow-md rounded-md'}>{IsFriend?"Remove Friend":"Add Friend"}</button>
    <button onClick={()=>{follow()}} className={Follower ?'w-44 h-9 flex hover:bg-red-600 justify-center items-center hover:scale-110 duration-150 cursor-pointer font-medium text-lg  text-white shadow-md rounded-md':'w-44 h-9 flex justify-center items-center hover:scale-110 duration-150 cursor-pointer font-medium text-lg hover:bg-green-400 text-white shadow-md rounded-md'}>{Follower?"Remove Follow":"Add Follow"}</button>
  </div>
  )
}

export default UserPageProfileAddRemoveButtons