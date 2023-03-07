"use client"
import { Post, Tweet, User } from '@prisma/client'
import React,{useState} from 'react'
import ModalShowCommentsOrLikes from '../ModalShowCommentsOrLikes/ModalShowCommentsOrLikes'
import AllFriendsModal from '../ShowAllFriendsProfilePage/AllFriendsModal'
import TopOfPage from '../TopOfPage/TopOfPage'
import LeftSideOfUserPage from './LeftSideOfUserPage/LeftSideOfUserPage'
import MiddleOfPUserPage from './MiddleOfUserPage/MiddleOfPUserPage'
import RightSideOfUserPage from './RightSideOfUserPage/RightSideOfUserPage'


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
    userId: string
    isFriend:boolean
    friendAndData: UserAndData
    friends:User[]
    totalFriends:number
    displayData:(post | tweet )[]
    mostLikedPOSTS:POST[]
    mostLikedTWEETS:TWEET[]
    friendId: string
    isFollowing:boolean
    totalFollows:number
}

function UserPageContainer({totalFollows,isFollowing,displayData,friendAndData,friendId,friends,isFriend,mostLikedPOSTS,mostLikedTWEETS,totalFriends,userId}:props) {
    const [showSearch,setShowSearch] = useState<boolean>(false)
    const [TotalFriends,setTotalFriends] = useState<number>(totalFriends)
    const [TotalFollows,setTotalFollows] = useState<number>(totalFollows)

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
    <div onClick={(e)=>{handleShowSearch(e)}}className='w-full h-full'>
        <TopOfPage userId='' showSearch={showSearch} />
    <div className='w-full h-full flex'>
        <LeftSideOfUserPage TotalFriends={TotalFriends} TotalFollows={TotalFollows} setTotalFriends={setTotalFriends} setTotalFollows={setTotalFollows} totalFollows={TotalFriends} isFollowing={isFollowing} userId={userId} isFriend={isFriend} UserAndData={friendAndData} friends={friends}  totalFriends={TotalFollows}/>
        <MiddleOfPUserPage displayData={displayData}  userId={userId}/>
        <RightSideOfUserPage userName={friendAndData.user.userName} mostLikedPOSTS={mostLikedPOSTS}  mostLikedTWEETS={mostLikedTWEETS} userId={userId} />
        <ModalShowCommentsOrLikes/> 
        <AllFriendsModal userId={friendId}/>
    </div>
  </div>
  )
}

export default UserPageContainer