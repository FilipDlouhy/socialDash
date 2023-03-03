import TopOfPage from '@/Components/TopOfPage/TopOfPage';
import LeftSideOfProfilePage from '@/Components/ProfilePage/LeftSideOfProfilePage/LeftSideOfProfilePage';
import MiddleOfPRofilePage from '@/Components/ProfilePage/MiddleOfProfilePage/MiddleOfPRofilePage';
import RightSideOfProfilePage from '@/Components/ProfilePage/RightSideOfProfilePage/RightSideOfProfilePage';
import React from 'react';
import axios from 'axios';
import { Post, Tweet, User } from '@prisma/client';
import FriendModalFriend from '@/Components/Main/ShowFriendModal/FriendModalFriend';
import FriendModal from '@/Components/Main/ShowFriendModal/FriendModal';
import ModalShowCommentsOrLikes from '@/Components/Main/ModalShowCommentsOrLikes/ModalShowCommentsOrLikes';

interface Props {
  params: {
    userId: string;
  };
}

interface UserAndData {
  user: User;
  tweetLength: number;
  postLength: number;
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

async function getUser(userId: string): Promise<UserAndData> {
  const res = await axios.get(`http://localhost:3000/api/getUserProfilePage/${userId}`);
  const userAndData: UserAndData = {
    postLength: res.data.postLength,
    tweetLength: res.data.tweetLength,
    user: res.data.user,
  };
  return userAndData;
}



async function getFriends(userId: string) {
  const res = await axios.get(`http://localhost:3000/api/getFreindsProfilePage/${userId}`);
  const friends:User[] = res.data
  return friends

}


async function getPosts(userId: string) {
  const res = await axios.post(`http://localhost:3000/api/getUserPosts`,{userId:userId});
  const posts:post[] = []
  res.data.map((post:Post)=>{
    posts.push({post:post})
  })
  return posts
}


async function getTweets(userId: string) {
  const res = await axios.post(`http://localhost:3000/api/getUserTweets`,{userId:userId});
  const tweets:tweet[] = []
  res.data.map((tweet:Tweet)=>{
    tweets.push({tweet:tweet})
  })
  return tweets
}

async function mostLikedPosts() {
  const res= await axios.get("http://localhost:3000/api/getMostLikedPosts")
  return res.data
  
}

async function getPossibleNewFriends (userId: string) {
  const res = await axios.post(`http://localhost:3000/api/getPossibleNewFriends`,{userId:userId});
  return res.data
  
}

async function mostLikedTweets() {
  const res = await axios.get("http://localhost:3000/api/getMostLikedTweets")
  return res.data
}

async function page({ params: { userId } }: Props) {
  const userAndData: UserAndData = await getUser(userId);
  const friends:User[] = await getFriends(userId)
  const totalFriends:number = friends.length 
  const posts:post[] = await getPosts(userId)
  const tweets:tweet[] = await getTweets(userId)
  const mostLikedPOSTS:POST[] = await mostLikedPosts()
  const mostLikedTWEETS:TWEET[] = await mostLikedTweets()

  const possibleFriends:User[] = await getPossibleNewFriends(userId)
  const displayData:(post | tweet )[] =[] 
   posts.map((post)=>{
    displayData.push(post)
   })
   tweets.map((tweet)=>{
    displayData.push(tweet)
   })

   displayData.sort((a, b) => { 
    return new Date('post' in b ? b.post.created_at: b.tweet.created_at).getTime()  -  new Date('post' in a ? a.post.created_at: a.tweet.created_at).getTime()
    });
    
  return (
    <div className='w-full h-full'>
      <div className='w-full h-full flex'>
        <LeftSideOfProfilePage friends={friends} totalFriends={totalFriends}  UserAndData={userAndData} />
        <MiddleOfPRofilePage userId={userId} displayData={displayData} />
        <RightSideOfProfilePage possibleFriends={possibleFriends} mostLikedPOSTS={mostLikedPOSTS} mostLikedTWEETS={mostLikedTWEETS}/>
        <ModalShowCommentsOrLikes/> 

      </div>
    </div>
  );
}

export default page;