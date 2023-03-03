import { Post, Tweet } from '@prisma/client'
import React from 'react'
import ProfilePagePost from './ProfilePagePost/ProfilePagePost'
import ProfilePageTweet from './ProfilePageTweet'
import ProfilePageVideo from './ProfilePageVideo'

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

function MiddleOfPRofilePage({userId,displayData}:props) {
  return (
    <div className='w-2/4 h-full flex justify-around items-center flex-wrap  px-4'>




      {displayData.map((data) => {
              if ("post" in data) {
                return <ProfilePagePost userId={userId}  post={data.post}  />

              } else if ("tweet" in data) {
                  return <ProfilePageTweet tweet={data.tweet} />
              }
            })}
        <ProfilePageVideo/>

    </div>
  )
}

export default MiddleOfPRofilePage