"use client"

import { Post, Tweet, User } from '@prisma/client'
import React, { useEffect, useState } from 'react'
import LeftSideOfMainPage from './LefSideOfMain/LeftSideOfMainPage'
import MiddleOfMain from './MiddleOfMain/MiddleOfMain'
import RightSideOfMain from './RightSideOfMain/RightSideOfMain'
import FriendModal from './ShowFriendModal/FriendModal'
import TopOfPage from '../TopOfPage/TopOfPage'

interface post{
    user: User, post: Post 
  }
  
  interface tweet{
    user: User, tweet: Tweet 
  }
  

interface storyData
{
  type:string,
  user:User,
  id:string,
  createdAt:Date
}

interface props
{
    users:User [],
    user:User,
    numberOfUserTweets: number
    numberOfUserPosts: number
    stories:storyData[]
    displayData:(tweet | post )[]
}


function MainContainer({users,user,numberOfUserTweets,numberOfUserPosts,stories,displayData}:props) {
    const [friends,setFriends]= useState<User [] >()
    const [showSearch,setShowSearch] = useState<boolean>(false)
    useEffect(()=>{
        setFriends(users)
    },[])
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
    <div onClick={(e)=>{handleShowSearch(e)}} className='w-full px-8 h-full '>
         <TopOfPage userId={user.id} showSearch={showSearch}/>
        <div className='flex'> 
          <LeftSideOfMainPage  friends={friends} user={user} numberOfUserTweets={numberOfUserTweets} numberOfUserPosts={numberOfUserPosts} />
          <MiddleOfMain stories={stories} displayData={displayData} user={user}  />
          <RightSideOfMain   userId={user.id} friends={friends}/>
          <FriendModal user={user} friends={friends} setFriends={setFriends}/>
        </div>


  </div>
  )
}

export default MainContainer