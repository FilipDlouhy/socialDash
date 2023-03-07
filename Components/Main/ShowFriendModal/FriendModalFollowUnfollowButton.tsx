
import { User } from '@prisma/client'
import axios from 'axios';
import { useSession } from 'next-auth/react';
import React from 'react'

interface numberStatsUser{
    tweets:number,
    posts:number,
    friends:number
    followers:number
    following:number
  }
interface friendWithImg{
    id: string;
    userName: string; 
    img: string  | null
  }
interface props
{
  Friend:User| undefined,
  FriendFriends:friendWithImg[]
  setFriendFriends:React.Dispatch<React.SetStateAction<friendWithImg[]>>
  isFollowing:boolean
  setIsFollowing:React.Dispatch<React.SetStateAction<boolean>>
  user:User
  userNumbers:numberStatsUser| undefined
  setUserNumbers:React.Dispatch<React.SetStateAction<numberStatsUser | undefined>>
  setFriend:React.Dispatch<React.SetStateAction<User| undefined>>
}

function FriendModalFollowUnfollowButton({setFriend,setUserNumbers,userNumbers,FriendFriends,Friend,isFollowing,user,setFriendFriends,setIsFollowing}:props) {

    console.log(isFollowing)
    console.log(Friend)
    function follow ()
    {
        if(isFollowing)
        {
            axios.post(`http://localhost:3000/api/removeFollow`,{ userId:user.id, friendId:Friend?.id}).then((res)=>
            {
                if(res.data.message="OK")
                {
                    setIsFollowing(false)
                    if(Friend?.friends.includes(user.id)===false)
                    {
                        let arr:friendWithImg[] = []
                        FriendFriends.map((friend)=>
                        {
                            if(friend.id !== user.id)
                            {
                                arr.push(friend)
                            }
                        })
    
                        setFriendFriends(arr)
    
                    }
                    if(userNumbers)
                    {
                        setUserNumbers({ ...userNumbers, followers: userNumbers.followers - 1 });
                    }
                    
                    if(Friend)
                    {
                        let arr:string[] =[]
                        Friend.followers.map((id)=>{
                            if(id!==user.id)
                            {
                                arr.push(id)
                            }
                        })

                        setFriend({...Friend,followers:arr})
                    }
                } 

            })
        }
        else
        {
            axios.post(`http://localhost:3000/api/addFollow`,{ userId:user.id, friendId:Friend?.id}).then((res)=>
            {
                if(res.data.message="OK")
                {
                    setIsFollowing(true)
                    if(Friend?.friends.includes(user.id)===false)
                    {
                        let arr:friendWithImg[] = []
                        FriendFriends.map((friend)=>
                        {
                                arr.push(friend)
                        })
                        arr.push({id:user.id,img:user.img,userName:user.userName})
                        setFriendFriends(arr)
 
                    }
                    if(userNumbers)
                    {
                        setUserNumbers({ ...userNumbers, followers: userNumbers.followers + 1 });
                    }

                    if(Friend)
                    {
                        let arr:string[] =Friend.followers
                        arr.push(user.id)

                        setFriend({...Friend,followers:arr})
                    }
                } 

            })
        }
    }



  return (
   <button onClick={()=>{follow()}} className={isFollowing?'w-64 h-11 text-xl font-semibold text-slate-50 hvr-radial-out2':'w-64 h-11 text-xl font-semibold text-slate-50 hvr-radial-out' }>{isFollowing?"Un Follow":"Follow"}</button>
  )
}

export default FriendModalFollowUnfollowButton