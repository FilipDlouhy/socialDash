import { Post, Tweet } from '@prisma/client'
import { useSession } from 'next-auth/react'
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
  render:string
}

function MiddleOfPUserPage({render, userId, displayData }: props) {
  function renderData(render: string) {
    if (render === "all") {
      return displayData.map((data) => {
        if ("post" in data) {
          return <UserPagePost userId={userId} post={data.post} />;
        } else if ("tweet" in data) {
          return <UserPageTweet userId={userId} tweet={data.tweet} />;
        }
      });
    } else if (render === "post") {
      return displayData.map((data) => {
        if ("post" in data) {
          return <UserPagePost userId={userId} post={data.post} />;
        } 
      });
    } else if (render === "tweet") {
      return displayData.map((data) => {
           if ("tweet" in data) {
          return <UserPageTweet userId={userId} tweet={data.tweet} />;
        }
      });
    }
    return null;
  }

  return (
    <div className="w-2/4 h-full flex justify-around items-center flex-wrap  px-4">
      {renderData(render)}
      <ProfileUserVideo />
    </div>
  );
}

export default MiddleOfPUserPage;