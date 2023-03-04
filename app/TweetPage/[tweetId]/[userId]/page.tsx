import TweetPageContainer from '@/Components/TweetPage/TweetPageContainer'
import { faArrowRight, faHeart, faPaperPlane, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Tweet, TweetComment, User } from '@prisma/client';
import axios from 'axios';
import React from 'react'


interface Props {
    params: {
      tweetId: string
      userId:string
    };
  }


  interface tweet{
    user: User, tweet: Tweet 
}
  async function getUser(userId:string) {
    const user = await axios.get(`http://localhost:3000/api/getUser/${userId}`)
    return user.data
   }


   


   async function getTweetComments(tweetId:string) {
    const tweetComments= await axios.post("http://localhost:3000/api/getTweetPageComments",{tweetId:tweetId})

     return tweetComments.data
 }
 
async function getTweet(tweetId:string) {
   const tweet= await axios.post("http://localhost:3000/api/getTweetPage",{tweetId:tweetId})
    const TweetAndUser:tweet ={
        tweet:tweet.data.tweet,user:tweet.data.user
    }
    return TweetAndUser
}

async function page({params:{tweetId,userId}}:Props) {
    const tweet:tweet = await getTweet(tweetId)  
    const user:User = await getUser(userId)
    const tweetComments:TweetComment[] = await getTweetComments(tweetId)

return (
    <TweetPageContainer tweet={tweet} user={user} tweetComments={tweetComments} />
  )
}

export default page