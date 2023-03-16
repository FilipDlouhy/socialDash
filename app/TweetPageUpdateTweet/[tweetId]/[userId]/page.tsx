import TweetPageUpdateButtons from '@/Components/TweetPageUpdateTweet/TweetPageUpdateButtons';
import TweetPageUpdateContainer from '@/Components/TweetPageUpdateTweet/TweetPageUpdateContainer';
import TweetPageUpdateForm from '@/Components/TweetPageUpdateTweet/TweetPageUpdateForm';
import TweetPageUpdateTweet from '@/Components/TweetPageUpdateTweet/TweetPageUpdateTweet';
import { Tweet } from '@prisma/client';
import axios from 'axios';
import React from 'react'


interface Props {
    params: {
      tweetId: string
      userId:string
    };
  }

interface tweetData {
    tweet:Tweet
    tweetCommentsLength:number
    
}

async function getTweet(tweetId:string) {
    const tweet = await axios.post("http://localhost:3000/api/getTweetForUpdate",{tweetId:tweetId})
    const tweetData:tweetData={tweet:tweet.data.tweet,tweetCommentsLength:tweet.data.tweetCommentsLength}
    return tweetData
}


async function page({params:{tweetId,userId}}:Props) {
    const  tweetData = await getTweet(tweetId)
  return (
    <div className='w-full pageHeight lg:h-screen'>
        <TweetPageUpdateContainer userId={userId} tweetData={tweetData}/>

    </div>
  )
}

export default page