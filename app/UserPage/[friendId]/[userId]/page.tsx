import TopOfPage from '@/Components/TopOfPage/TopOfPage';
import React from 'react';
import axios from 'axios';
import { Post, Tweet, User } from '@prisma/client';
import LeftSideOfUserPage from '@/Components/UserPage/LeftSideOfUserPage/LeftSideOfUserPage';
import MiddleOfPUserPage from '@/Components/UserPage/MiddleOfUserPage/MiddleOfPUserPage';
import RightSideOfUserPage from '@/Components/UserPage/RightSideOfUserPage/RightSideOfUserPage';
import AllFriendsModal from '@/Components/ShowAllFriendsProfilePage/AllFriendsModal';
import ModalShowCommentsOrLikes from '@/Components/ModalShowCommentsOrLikes/ModalShowCommentsOrLikes';
import UserPageContainer from '@/Components/UserPage/UserPageContainer';

interface Props {
  params: {
    userId: string;
    friendId:string
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


async function mostLikedPosts(userId:string) {
  const res= await axios.post("http://localhost:3000/api/getUsersMostLikedPosts",{userId:userId})
  return res.data
  
}
async function mostLikedTweets(userId:string) {
  const res = await axios.post("http://localhost:3000/api/getUsersMostLikedTweets",{userId:userId})
  return res.data
}




async function page({ params: { friendId,userId } }: Props) {
  const friendAndData: UserAndData = await getUser(friendId);
  let isFriend:boolean = false
  const friends:User[] = await getFriends(friendId)
  const totalFriends:number = friends.length
  const posts:post[] = await getPosts(friendId)
  const tweets:tweet[] = await getTweets(friendId)
  const mostLikedPOSTS:POST[] = await mostLikedPosts(friendId)
  let isFollowing:boolean = false 
  const mostLikedTWEETS:TWEET[] = await mostLikedTweets(friendId)
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
  
  if(friendAndData.user.friends.includes(userId))
  {
    isFriend=true
  }
  else
  {
    isFriend=false
  }

  if(friendAndData.user.followers.includes(userId))
  {
    isFollowing=true
  }
  else
  {
    isFollowing=false
  }

  return (
    <UserPageContainer totalFollows={friendAndData.user.followers.length} isFollowing={isFollowing} displayData={displayData} friendAndData={friendAndData} friendId={friendId}  friends={friends}  isFriend={isFriend} mostLikedPOSTS={mostLikedPOSTS} mostLikedTWEETS={mostLikedTWEETS} totalFriends={totalFriends}  userId={userId} />
  );
}

export default page;