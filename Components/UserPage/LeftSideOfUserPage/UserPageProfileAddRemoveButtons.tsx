"use client"
import axios from 'axios'
import React,{useState} from 'react'

interface props{
    isFriend:boolean
    userId:string
    friendId:string
    isFollowing:boolean
    setTotalFriends: React.Dispatch<React.SetStateAction<number>>
    setTotalFollows: React.Dispatch<React.SetStateAction<number>>
    TotalFriends:number
    TotalFollows:number
}


function UserPageProfileAddRemoveButtons({TotalFriends,TotalFollows,setTotalFriends,setTotalFollows,isFollowing,userId,friendId,isFriend}:props) {
  const [Friend,setFriend] = useState<boolean>(isFriend)
  const [Follower,setFollower] = useState<boolean>(isFollowing)
  function follow ()
  {
    if(Follower)
    {
        axios.post("http://localhost:3000/api/removeFollow",( {userId:userId, friendId:friendId})).then((res)=>{
            if(res.data.message === "OK")
            {
                setFollower(false)
                setTotalFollows(TotalFollows-1)
            }
        })
    }
    else
    {
        axios.post("http://localhost:3000/api/addFollow",( {userId:userId, friendId:friendId})).then((res)=>{
            if(res.data.message === "OK")
            {
                setFollower(true)
                setTotalFollows(TotalFollows+1)
            }
        })
    }
  }


  function friend ()
  {
    if(Friend)
    {
        axios.post("http://localhost:3000/api/removeFriend",( {userId:userId, friendId:friendId})).then((res)=>{
            if(res.data.message === "OK")
            {
                setFriend(false)
                setTotalFriends(TotalFriends-1)
            }
        })
    }
    else
    {
        axios.post("http://localhost:3000/api/addFriend",( {userId:userId, friendId:friendId})).then((res)=>{
            if(res.data.message === "OK")
            {
                setFriend(true)
                setTotalFriends(TotalFriends+1)
            }
        })
    }
  }



  return (
    <div className='w-full  h-20 flex justify-around items-center'>
    <button onClick={()=>{friend()}} className={Friend ?'w-44 h-9 flex hover:bg-red-600 justify-center items-center hover:scale-110 duration-150 cursor-pointer font-medium text-lg  text-white shadow-md rounded-md':'w-44 h-9 flex justify-center items-center hover:scale-110 duration-150 cursor-pointer font-medium text-lg hover:bg-green-400 text-white shadow-md rounded-md'}>{Friend?"Remove Friend":"Add Friend"}</button>
    <button onClick={()=>{follow()}} className={Follower ?'w-44 h-9 flex hover:bg-red-600 justify-center items-center hover:scale-110 duration-150 cursor-pointer font-medium text-lg  text-white shadow-md rounded-md':'w-44 h-9 flex justify-center items-center hover:scale-110 duration-150 cursor-pointer font-medium text-lg hover:bg-green-400 text-white shadow-md rounded-md'}>{Follower?"Remove Follow":"Add Follow"}</button>
  </div>
  )
}

export default UserPageProfileAddRemoveButtons