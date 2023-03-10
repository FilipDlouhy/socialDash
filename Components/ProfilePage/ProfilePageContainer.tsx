"use client"
import { Post, Tweet, User } from '@prisma/client'
import React, {useState}from 'react'
import ModalShowCommentsOrLikes from '../ModalShowCommentsOrLikes/ModalShowCommentsOrLikes'
import ShowFollowersModal from '../SeeFollowers/ShowFollowersModal'
import ShowFollowsModal from '../SeeFollows/ShowFollowsModal'
import AllFriendsModal from '../ShowAllFriendsProfilePage/AllFriendsModal'
import TopOfPage from '../TopOfPage/TopOfPage'
import LeftSideOfProfilePage from './LeftSideOfProfilePage/LeftSideOfProfilePage'
import MiddleOfPRofilePage from './MiddleOfProfilePage/MiddleOfPRofilePage'
import RightSideOfProfilePage from './RightSideOfProfilePage/RightSideOfProfilePage'


interface UserAndData {
    user: User;
    tweetLength: number;
    postLength: number;
  }
  interface post{
    post:Post
  }
  
  interface tweet {
    tweet:Tweet
  }
  
  interface POST{
    user: User, post: Post 
  }
  interface TWEET{
    user: User, tweet: Tweet 
  }
interface props{
    friends:User[]
    totalFriends:number
    UserAndData: UserAndData
    userId:string
    displayData:(post | tweet )[]
    possibleFriends:User[]
    mostLikedPOSTS:POST[]
    mostLikedTWEETS:TWEET[]
 
}

function ProfilePageContainer({UserAndData,displayData,friends,mostLikedPOSTS,mostLikedTWEETS,possibleFriends,totalFriends,userId}:props) {
    const [showSearch,setShowSearch] = useState<boolean>(false)

   function handleShowSearch(e: React.MouseEvent<HTMLDivElement, MouseEvent>)
   {
    if((e.target as HTMLDivElement).id=== "search")
    {
      setShowSearch(true)
    }
    else
    {
      setShowSearch(false)
    }
   } 
  return (
    <div onClick={(e)=>{handleShowSearch(e)}} className='w-full px-8 h-full'>
        <TopOfPage showSearch={showSearch} userId={userId} />
        <div className='w-full h-full flex'>
        <LeftSideOfProfilePage friends={friends} totalFriends={totalFriends}  UserAndData={UserAndData} />
        <MiddleOfPRofilePage userId={userId} displayData={displayData} />
        <RightSideOfProfilePage  userId={userId} possibleFriends={possibleFriends} mostLikedPOSTS={mostLikedPOSTS} mostLikedTWEETS={mostLikedTWEETS}/>
        <ModalShowCommentsOrLikes userId={userId}/> 
        <AllFriendsModal userId={userId}/>
        <ShowFollowsModal userId={userId}/>
        <ShowFollowersModal userId={userId}/>
        </div>
  </div>
  )
}

export default ProfilePageContainer