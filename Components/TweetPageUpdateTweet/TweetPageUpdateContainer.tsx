"use client"
import { Tweet } from '@prisma/client'
import React ,{useState}from 'react'
import TweetPageUpdateButtons from './TweetPageUpdateButtons'
import TweetPageUpdateForm from './TweetPageUpdateForm'
import TweetPageUpdateTweet from './TweetPageUpdateTweet'


interface tweetData {
    tweet:Tweet
    tweetCommentsLength:number
    
}
interface props{
 tweetData:tweetData
 userId:string
}

function TweetPageUpdateContainer({userId,tweetData}:props) {

    const [Title, setTitle] = useState<string>(tweetData.tweet.title)
    const [Category, setCategory] = useState<string>(tweetData.tweet.historicalPeriod)
    const [Text, setText] = useState<string>(tweetData.tweet.description)
    

  return (
    <div className='w-full h-full'>
            <div className='w-full h-5/6 flex items-center justify-around'>

            <TweetPageUpdateForm Title={Title} setTitle={setTitle} Category={Category} setCategory={setCategory} Text={Text} setText={setText}/>

            <TweetPageUpdateTweet  TotalComments={tweetData.tweetCommentsLength} TotalLikes={tweetData.tweet.likes.length} Title={Title}  Category={Category} Text={Text}/>

        </div>

        <TweetPageUpdateButtons Title={Title} Category={Category} tweetId={tweetData.tweet.id} userId={userId} Text={Text} />
    </div>
  )
}

export default TweetPageUpdateContainer