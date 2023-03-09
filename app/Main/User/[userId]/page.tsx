import LeftSideOfMainPage from '@/Components/Main/LefSideOfMain/LeftSideOfMainPage'
import MainContainer from '@/Components/Main/MainContainer'
import MiddleOfMain from '@/Components/Main/MiddleOfMain/MiddleOfMain'
import ModalShowCommentsOrLikes from '@/Components/ModalShowCommentsOrLikes/ModalShowCommentsOrLikes'
import PostModal from '@/Components/Main/MiddleOfMain/Post/PostModal'
import RightSideOfMain from '@/Components/Main/RightSideOfMain/RightSideOfMain'
import FriendModal from '@/Components/Main/ShowFriendModal/FriendModal'
import TopOfPage from '@/Components/TopOfPage/TopOfPage'
import TweetModal from '@/Components/Main/MiddleOfMain/Tweet/TweetModal'
import { Post, Tweet, User } from '@prisma/client'
import axios from 'axios'
import { useSession } from 'next-auth/react'
import React,{useEffect} from 'react'
import ShowFollowsModal from '@/Components/SeeFollows/ShowFollowsModal'
import ShowFollowersModal from '@/Components/SeeFollowers/ShowFollowersModal'

interface props{
  params:{
      userId:string
  }
}
interface post{
  user: User, post: Post 
}

interface tweet{
  user: User, tweet: Tweet 
}

interface storyData
{
  type:string,
  user:User,
  id:string,
  createdAt:Date
}

async function getUser(userId:string) {
 const user = await axios.get(`http://localhost:3000/api/getUser/${userId}`)
 return user.data
}

async function getPosts(userId:string) {
  const posts = await axios.post(`http://localhost:3000/api/getPostsMain`,{userId:userId})
  return posts.data
 }
 async function getTweets(userId:string) {
  const tweets = await axios.post(`http://localhost:3000/api/getTweetsMain`,{userId:userId})
  return tweets.data
 }

 async function getUsers(userId:string) {
  const users = await axios.post(`http://localhost:3000/api/getUsers`,{userId:userId})
  return users.data
 }

function getNumberUserPosts(posts:post[],userId:string)
{
  let count = 0
  posts.map((post)=>{
    if(post.post.userId === userId)
    {
      count++
    }
  })
  return count
} 
function getNumberUseTweets(tweets:tweet[],userId:string)
{
  let count = 0
  tweets.map((tweet)=>{
    if(tweet.tweet.userId === userId)
    {
      count++
    }
  })
  return count
} 


function getStoriesData(posts: post[], tweets: tweet[]) {
  let stories: storyData[] = [];
  posts.forEach(post => {
    stories.push({ createdAt: post.post.created_at, id: post.post.id, type: "post", user: post.user });
  });
  tweets.forEach(tweet => {
    stories.push({ createdAt: tweet.tweet.created_at, id: tweet.tweet.id, type: "tweet", user: tweet.user });
  });
  for (let i = stories.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [stories[i], stories[j]] = [stories[j], stories[i]];
  }

  if(stories.length === 0)
  {
    return []
  }else
  {
    return stories;

  }
}

  async function page(props:props) {

   const user:User =await getUser(props.params.userId)
   const users:User[] = await getUsers(props.params.userId)
   const posts :post[] = await getPosts(props.params.userId)
   const tweets:tweet[] = await getTweets(props.params.userId)
   const numberOfUserPosts = getNumberUserPosts(posts,props.params.userId)
   const numberOfUserTweets = getNumberUseTweets(tweets,props.params.userId)
   const displayData:(tweet | post )[] =[] 
   const stories:storyData[] = getStoriesData(posts,tweets)
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

        <MainContainer displayData={displayData} numberOfUserPosts={numberOfUserPosts} numberOfUserTweets={numberOfUserTweets} stories={stories} user={user} users={users}/>
        <PostModal user={user}/>
        <TweetModal  user={user}/>
        <ModalShowCommentsOrLikes  userId={user.id}/> 
        <ShowFollowsModal userId={user.id}/>
        <ShowFollowersModal userId={user.id}/>
      </div>
  )
}

export default page 