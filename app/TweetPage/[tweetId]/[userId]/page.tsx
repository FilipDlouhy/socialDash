import SendPostToFriendsOrTweetsModal from '@/Components/SendPostToFriendsOrTweets/SendPostToFriendsOrTweetsModal';
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

  interface friendWithImg{
    id: string;
    userName: string; 
    img: string  | null
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


async function getFriendsToChat(userId:string) {
    const friends = await axios.post("http://localhost:3000/api/getFriendsToChat",{userId:userId})
    return friends.data    
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
    const friendsToChat:friendWithImg[] = await getFriendsToChat(userId)

return (
    <>
      <TweetPageContainer tweet={tweet} user={user} tweetComments={tweetComments} />
      <SendPostToFriendsOrTweetsModal  friendsToChat={friendsToChat} userId={userId} />
    </>
  )
}

export default page