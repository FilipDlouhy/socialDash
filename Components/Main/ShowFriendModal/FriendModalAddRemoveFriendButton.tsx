"use client"
import { User } from '@prisma/client'
import axios from 'axios'
import { useSession } from 'next-auth/react'
import React from 'react'
interface props
{
  friends:User[]| undefined
  setFriends:React.Dispatch<React.SetStateAction<User[] | undefined>>
  User:User| undefined,
  inFriendList: boolean
  setInFriendList:React.Dispatch<React.SetStateAction<boolean>>
}

function FriendModalAddRemoveFriendButton({setInFriendList,inFriendList,friends,User,setFriends}:props) {
    const session = useSession()





    function addFriend()
{
    axios.post("/api/addFriend",{userId:session.data?.user?.name,friendId:User?.id})
    let arr:User[] = []
    friends?.map((Friend)=>{



      if(Friend.id !== User?.id)
      {
        arr.push(Friend)
      }
      else
      {
        let userFriends:string[] = []
        userFriends = Friend.friends

        if(session.data?.user?.name)
        userFriends.push(session.data?.user?.name)

        let newUser:User =
        {
          created_at:Friend.created_at,
          email:Friend.email,
          friends:userFriends,
          id:Friend.id,
          img:Friend.img,
          password:Friend.password,
          placeToLive:Friend.placeToLive,
          userName:Friend.userName
        }
        arr.push(newUser)
      }
    })
    setFriends(arr)

}
function removeFriend()
{
    axios.post("/api/removeFriend",{userId:session.data?.user?.name,friendId:User?.id})
    let arr:User[] = []
    friends?.map((Friend)=>{
      if(Friend.id !== User?.id)
      {
        arr.push(Friend)
      }
      else
      {
       let userFriends:string[] = []

        Friend.friends.map((id)=>{
          if( id !== session.data?.user?.name){
            userFriends.push(id)
          }
        })
        let newUser:User =
        {
          created_at:Friend.created_at,
          email:Friend.email,
          friends:userFriends,
          id:Friend.id,
          img:Friend.img,
          password:Friend.password,
          placeToLive:Friend.placeToLive,
          userName:Friend.userName
        }
        arr.push(newUser)
      }
    })

    setFriends(arr)
}
  return (
    <button onClick={()=>{
        if(inFriendList)
        {
            removeFriend()
            setInFriendList(false)
        }
        else
        {
            addFriend()
            setInFriendList(true)
        }
    }} className={inFriendList?'w-64 h-11 text-xl font-semibold text-slate-50 hvr-radial-out2':'w-64 h-11 text-xl font-semibold text-slate-50 hvr-radial-out' }>{inFriendList?"Remove Friend":"Add Friend"}</button>
  )
}

export default FriendModalAddRemoveFriendButton