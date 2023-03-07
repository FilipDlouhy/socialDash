import type { NextApiRequest, NextApiResponse } from 'next'
import bcrypt from "bcryptjs"
import prisma from "../..//prisma/prisma"
import { Post, PrismaClient, Tweet, User } from '@prisma/client'

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
    
        let Data: (tweet | post )[] = [];
        let Posts: post[] = [];
        let Tweets: tweet[] = [];
      

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
    
        Tweets.map((tweet)=>{
            Data.push(tweet)
        })    
        Posts.map((post)=>{
            Data.push(post)
        })    
    
        Data.sort((a, b) => { 
            return new Date('post' in b ? b.post.created_at: b.tweet.created_at).getTime()  -  new Date('post' in a ? a.post.created_at: a.tweet.created_at).getTime()
            });
    
        const numbersData:numberStatsUser ={following:user.following.length,followers:user.followers.length,friends:user.friends.length,posts:posts.length,tweets:tweets.length}
    
    
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