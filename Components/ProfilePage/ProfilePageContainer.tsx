"use client"
import { Post, Tweet, User, Video } from '@prisma/client'
import React, {useState}from 'react'
import ModalShowCommentsOrLikes from '../ModalShowCommentsOrLikes/ModalShowCommentsOrLikes'
import ShowFollowersModal from '../SeeFollowers/ShowFollowersModal'
import ShowFollowsModal from '../SeeFollows/ShowFollowsModal'
import AllFriendsModal from '../ShowAllFriendsProfilePage/AllFriendsModal'
import TopOfPage from '../TopOfPage/TopOfPage'
import VideoModalLikesComments from '../VideoModalLikesComments/VideoModalLikesComments'
import LeftSideOfProfilePage from './LeftSideOfProfilePage/LeftSideOfProfilePage'
import MiddleOfPRofilePage from './MiddleOfProfilePage/MiddleOfPRofilePage'
import RightSideOfProfilePage from './RightSideOfProfilePage/RightSideOfProfilePage'


interface friendWithImg {
  id: string;
  userName: string;
  img: string | null;
  }

  interface video {
    user: friendWithImg;
    video: Video;
    }
interface UserAndData {
  user: User;
  tweetLength: number;
  postLength: number;
  numberOfUserVideos:number
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
    displayData:(post | tweet|  video )[]
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
        <div className='w-full h-full hidden xl:flex'>
          <LeftSideOfProfilePage  friends={friends} totalFriends={totalFriends}  UserAndData={UserAndData} />
          <MiddleOfPRofilePage userId={userId} displayData={displayData} />
          <RightSideOfProfilePage  userId={userId} possibleFriends={possibleFriends} mostLikedPOSTS={mostLikedPOSTS} mostLikedTWEETS={mostLikedTWEETS}/>
          <ModalShowCommentsOrLikes userId={userId}/> 
          <VideoModalLikesComments userId={userId}/>
          <AllFriendsModal userId={userId}/>
          <ShowFollowsModal userId={userId}/>
          <ShowFollowersModal userId={userId}/>
        </div>


        <div className='w-full h-full  flex flex-col xl:hidden'>

          <div className='w-full flex justify-center md:justify-around flex-col md:flex-row px-5 md:px-20 h-1/2'>
          <LeftSideOfProfilePage  friends={friends} totalFriends={totalFriends}  UserAndData={UserAndData} />
          <RightSideOfProfilePage  userId={userId} possibleFriends={possibleFriends} mostLikedPOSTS={mostLikedPOSTS} mostLikedTWEETS={mostLikedTWEETS}/>

          </div>


          <div className='w-full flex justify-center   h-1/2 '>
           <MiddleOfPRofilePage userId={userId} displayData={displayData} />
          </div>
         
         
         
          <ModalShowCommentsOrLikes userId={userId}/> 
          <VideoModalLikesComments userId={userId}/>
          <AllFriendsModal userId={userId}/>
          <ShowFollowsModal userId={userId}/>
          <ShowFollowersModal userId={userId}/>
        </div>


  </div>
  )
}

export default ProfilePageContainer