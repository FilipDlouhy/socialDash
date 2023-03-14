"use client"
import { Post, Tweet, User, Video } from '@prisma/client'
import React,{useState} from 'react'
import ModalShowCommentsOrLikes from '../ModalShowCommentsOrLikes/ModalShowCommentsOrLikes'
import ShowFollowersModal from '../SeeFollowers/ShowFollowersModal'
import ShowFollowsModal from '../SeeFollows/ShowFollowsModal'
import AllFriendsModal from '../ShowAllFriendsProfilePage/AllFriendsModal'
import TopOfPage from '../TopOfPage/TopOfPage'
import VideoModalLikesComments from '../VideoModalLikesComments/VideoModalLikesComments'
import LeftSideOfUserPage from './LeftSideOfUserPage/LeftSideOfUserPage'
import MiddleOfPUserPage from './MiddleOfUserPage/MiddleOfPUserPage'
import RightSideOfUserPage from './RightSideOfUserPage/RightSideOfUserPage'


interface UserAndData {
user: User;
tweetLength: number;
postLength: number;
}
interface video {
  video:Video
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
    displayData:(post | tweet | video)[]
    mostLikedPOSTS:POST[]
    mostLikedTWEETS:TWEET[]
    friendId: string
    isFollowing:boolean
}

function UserPageContainer({isFollowing,displayData,friendAndData,friendId,friends,isFriend,mostLikedPOSTS,mostLikedTWEETS,userId}:props) {
    const [showSearch,setShowSearch] = useState<boolean>(false)
    const [Friend,setFriend] = useState<UserAndData>(friendAndData)
    const [render,setRender] = useState<string>("all")

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
        <TopOfPage userId={userId} showSearch={showSearch} />
        <div className='w-full h-full flex'>
        <LeftSideOfUserPage setRender={setRender}  Friend={Friend} setFriend={setFriend}     isFollowing={isFollowing} userId={userId} isFriend={isFriend} UserAndData={friendAndData} friends={friends}  />
        <MiddleOfPUserPage render={render} displayData={displayData}  userId={userId}/>
        <RightSideOfUserPage userName={friendAndData.user.userName} mostLikedPOSTS={mostLikedPOSTS}  mostLikedTWEETS={mostLikedTWEETS} userId={userId} />
        <ModalShowCommentsOrLikes userId={userId}/> 
        <AllFriendsModal userId={friendId}/>
    </div>
    <ShowFollowsModal userId={friendId}/>
    <ShowFollowersModal userId={friendId}/>
    <VideoModalLikesComments userId={userId}/>
  </div>
  )
}

export default UserPageContainer