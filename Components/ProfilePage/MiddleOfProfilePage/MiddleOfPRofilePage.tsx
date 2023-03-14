import { Post, Tweet, Video } from '@prisma/client'
import React from 'react'
import ProfilePagePost from './ProfilePagePost/ProfilePagePost'
import ProfilePageTweet from './ProfilePageTweet/ProfilePageTweet'
import ProfilePageVideo from './ProfilePageVideo/ProfilePageVideo'


interface friendWithImg {
  id: string;
  userName: string;
  img: string | null;
  }

  interface video {
    user: friendWithImg;
    video: Video;
    }

interface post{
  post:Post
}

interface tweet {
  tweet:Tweet
}

interface props{
  displayData:(post | tweet|  video )[]
  userId:string
}

function MiddleOfPRofilePage({userId,displayData}:props) {
  return (
    <div className='w-2/4 h-full flex justify-around items-center flex-wrap  px-4'>




      {displayData.map((data) => {
              if ("post" in data) {
                return <ProfilePagePost userId={userId}  post={data.post}  />

              } else if ("tweet" in data) {
                  return <ProfilePageTweet userId={userId}  tweet={data.tweet} />
              }
              else if ("video" in data) {
                return <ProfilePageVideo userId={userId} video={data}/>
            }
            })}
  

    </div>
  )
}

export default MiddleOfPRofilePage