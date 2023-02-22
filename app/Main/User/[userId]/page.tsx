import LeftSideOfMainPage from '@/Components/Main/LeftSideOfMainPage'
import MiddleOfMain from '@/Components/Main/MiddleOfMain'
import ModalShowCommentsOrLikes from '@/Components/Main/ModalShowCommentsOrLikes/ModalShowCommentsOrLikes'
import PostModal from '@/Components/Main/Post/PostModal'
import RightSideOfMain from '@/Components/Main/RightSideOfMain'
import TopOfPage from '@/Components/Main/TopOfPage'
import TweetModal from '@/Components/Main/Tweet/TweetModal'
import { Post, Tweet, User } from '@prisma/client'
import axios from 'axios'
import { useSession } from 'next-auth/react'
import React,{useEffect} from 'react'

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



async function getUser(userId:string) {
 const user = await axios.get(`http://localhost:3000/api/getUser/${userId}`)
 return user.data
}

async function getPosts() {
  const posts = await axios.get(`http://localhost:3000/api/getPosts`)
  return posts.data
 }
 async function getTweets() {
  const tweets = await axios.get(`http://localhost:3000/api/getTweets`)
  return tweets.data
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

  async function page(props:props) {

   const user:User =await getUser(props.params.userId)
   const posts :post[] = await getPosts()
   const tweets:tweet[] = await getTweets()
   const numberOfUserPosts = getNumberUserPosts(posts,props.params.userId)
   const numberOfUserTweets = getNumberUseTweets(tweets,props.params.userId)
   const displayData:(tweet | post )[] =[] 

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
        <TopOfPage/>

        <div className='w-full h-full flex'>
          <LeftSideOfMainPage user={user} numberOfUserTweets={numberOfUserTweets} numberOfUserPosts={numberOfUserPosts} />
          <MiddleOfMain displayData={displayData} user={user}  />
          <RightSideOfMain/>
        </div>
        <PostModal user={user}/>
        <TweetModal  user={user}/>
        <ModalShowCommentsOrLikes/> 
      </div>
  )
}

export default page 