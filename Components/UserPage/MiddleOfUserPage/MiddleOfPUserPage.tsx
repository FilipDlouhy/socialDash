import { Post, Tweet } from '@prisma/client'
import React from 'react'
import ProfileUserVideo from './ProfileUserVideo'
import UserPagePost from './UserPagePost/UserPagePost'
import UserPageTweet from './UserPageTweet/UserPageTweet'

interface post{
  post:Post
}

interface tweet {
  tweet:Tweet
}

interface props{
  displayData:(post | tweet )[]
  userId:string
}

function MiddleOfPUserPage({userId,displayData}:props) {
  return (
    <div className='w-2/4 h-full flex justify-around items-center flex-wrap  px-4'>




      {displayData.map((data) => {
              if ("post" in data) {
                return <UserPagePost userId={userId}  post={data.post}  />

              } else if ("tweet" in data) {
                  return <UserPageTweet userId={userId}  tweet={data.tweet} />
              }
            })}
        <ProfileUserVideo/>

    </div>
  )
}

export default MiddleOfPUserPage