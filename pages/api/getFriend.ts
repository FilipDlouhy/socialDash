import type { NextApiRequest, NextApiResponse } from 'next'
import bcrypt from "bcryptjs"
import prisma from "../..//prisma/prisma"
import { Post, PrismaClient, Tweet, User, Video } from '@prisma/client'

interface video{
    user: friendWithImg, video: Video 
}

interface friendWithImg{
    id: string;
    userName: string; 
    img: string  | null
}

interface post{
    user: User, post: Post 
}
interface tweet{
    user: User, tweet: Tweet 
}
interface numberStatsUser{
    tweets:number,
    posts:number,
    videos:number
    friends:number
    followers:number
    following:number
}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  try {


    const {userId} = req.body
    const user = await prisma.user.findUnique({where:{id:userId}})
    if(user)
    {
        const tweets = await prisma.tweet.findMany({where:{userId:userId}})
        const posts = await prisma.post.findMany({where:{userId:userId}})
        const users = await prisma.user.findMany()
        const videos = await prisma.video.findMany({where:{userId:userId}})
        let Data: (tweet | post | video )[] = [];
        let Posts: post[] = [];
        let Tweets: tweet[] = [];
        let Videos:video[] = []

        posts.map((post)=>{
          users.map(user=>{
              if(user.id === post.userId)
              {
                  let postWuser = {
                      user:user,post:post
                  }
                  Posts.push(postWuser)
              }
          })
        })
    
    
    
        tweets.map((tweet)=>{
            users.map(user=>{
                if(user.id === tweet.userId)
                {
                    let tweetUser = {
                        user:user,tweet:tweet
                    }
                    Tweets.push(tweetUser)
                }
            })
          })

              
        videos.map((video)=>{
            users.map(user=>{
                if(user.id === video.userId)
                {
                    let videoUser = {
                        user:user,video:video
                    }
                    Videos.push(videoUser)
                }
            })
          })
    
    
        Tweets.map((tweet)=>{
            Data.push(tweet)
        })    
        Posts.map((post)=>{
            Data.push(post)
        })    
        Videos.map((video)=>{
            Data.push(video)
        })  
    


            Data.sort((a, b) => {
                const dateA = 'post' in a ? a.post.created_at : 'tweet' in a ? a.tweet.created_at : a.video.created_at;
                const dateB = 'post' in b ? b.post.created_at : 'tweet' in b ? b.tweet.created_at : b.video.created_at;
                return new Date(dateB).getTime() - new Date(dateA).getTime();
              });
        const numbersData:numberStatsUser ={videos:videos.length,following:user.following.length,followers:user.followers.length,friends:user.friends.length,posts:posts.length,tweets:tweets.length}
    
    
        const friendsWithImg:friendWithImg[] =[];
        const ids:string[] = []
        user.followers.map((id)=>
        {
            ids.push(id)
        })
        user.friends.map((id)=>
        {
            if(ids.includes(id) === false)
            {
                ids.push(id)

            }
        }) 
        user.following.map((id)=>
        {
            if(ids.includes(id) === false)
            {
                ids.push(id)

            }
        })
        ids.map((id)=>{
            users.map((user)=>{
                if(user.id === id)
                {
                    friendsWithImg.push({id:user.id,img:user.img,userName:user.userName})
                }
            })
        })
    
        res.send({data:Data,user:user,numbersData:numbersData,firendsWithImg:friendsWithImg})
    
    
    }
   
  } catch (error) {
    
  }  

}