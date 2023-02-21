import type { NextApiRequest, NextApiResponse } from 'next'
import bcrypt from "bcryptjs"
import prisma from "../..//prisma/prisma"
import { Post, PrismaClient, Tweet, User } from '@prisma/client'

interface tweet{
    user: User, tweet: Tweet 
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  try {
    const tweets = await prisma.tweet.findMany()
    const users = await prisma.user.findMany()
    
    let Tweets: tweet[] = [];
  
  
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
    Tweets.sort((a:tweet,b:tweet)=>{
        return   new Date(b.tweet.created_at).getTime()- new Date(a.tweet.created_at).getTime()
    })
    res.send(Tweets)
  } catch (error) {
    
  }  

}