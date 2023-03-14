import TopOfPage from '@/Components/TopOfPage/TopOfPage';
import LeftSideOfProfilePage from '@/Components/ProfilePage/LeftSideOfProfilePage/LeftSideOfProfilePage';
import MiddleOfPRofilePage from '@/Components/ProfilePage/MiddleOfProfilePage/MiddleOfPRofilePage';
import RightSideOfProfilePage from '@/Components/ProfilePage/RightSideOfProfilePage/RightSideOfProfilePage';
import React from 'react';
import axios from 'axios';
import { Post, Tweet, User, Video } from '@prisma/client';
import FriendModalFriend from '@/Components/Main/ShowFriendModal/FriendModalFriend';
import FriendModal from '@/Components/Main/ShowFriendModal/FriendModal';
import ModalShowCommentsOrLikes from '@/Components/ModalShowCommentsOrLikes/ModalShowCommentsOrLikes';
import AllFriendsModal from '@/Components/ShowAllFriendsProfilePage/AllFriendsModal';
import ProfilePageContainer from '@/Components/ProfilePage/ProfilePageContainer';


interface friendWithImg {
  id: string;
  userName: string;
  img: string | null;
  }

  interface video {
    user: friendWithImg;
    video: Video;
    }
interface Props {
  params: {
    userId: string;
  };
}

interface UserAndData {
  user: User;
  tweetLength: number;
  postLength: number;
  numberOfUserVideos:number
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
  const videos = await getNumberUsevideo(userId)
  const userAndData: UserAndData = {
    postLength: res.data.postLength,
    tweetLength: res.data.tweetLength,
    user: res.data.user,
    numberOfUserVideos:videos
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

async function  getNumberUsevideo (userId:string)
{ 
 
 const users = await axios.post(`http://localhost:3000/api/getNumberUsevideos`,{userId:userId})
return users.data.number

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


async function getVideos (userId:string) {
  const videos = await axios.post("http://localhost:3000/api/getVideos/",{userId:userId})
  return videos.data
}


async function page({ params: { userId } }: Props) {
  const userAndData: UserAndData = await getUser(userId);
  const friends:User[] = await getFriends(userId)
  const videos:video[] = await getVideos (userId)
  const totalFriends:number = friends.length 
  const posts:post[] = await getPosts(userId)
  const tweets:tweet[] = await getTweets(userId)
  const mostLikedPOSTS:POST[] = await mostLikedPosts()
  const mostLikedTWEETS:TWEET[] = await mostLikedTweets()
  const possibleFriends:User[] = await getPossibleNewFriends(userId)
  const displayData:(post | tweet|  video )[] =[] 
   posts.map((post)=>{
    displayData.push(post)
   })
   tweets.map((tweet)=>{
    displayData.push(tweet)
   })

   videos.map((video)=>{
    displayData.push(video)
   })
   displayData.sort((a, b) => {
    const dateA = 'post' in a ? a.post.created_at : 'tweet' in a ? a.tweet.created_at : a.video.created_at;
    const dateB = 'post' in b ? b.post.created_at : 'tweet' in b ? b.tweet.created_at : b.video.created_at;
    return new Date(dateB).getTime() - new Date(dateA).getTime();
  });
    
  return (
    <ProfilePageContainer   UserAndData={userAndData} possibleFriends={possibleFriends} mostLikedPOSTS={mostLikedPOSTS} mostLikedTWEETS={mostLikedTWEETS} displayData={displayData} userId={userId}   friends={friends} totalFriends={totalFriends} />
  );
}

export default page;