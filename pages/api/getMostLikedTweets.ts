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
    
    let Tweets: Tweet[] = [];
    tweets.sort((a,b)=>{
        return b.likes.length - a.likes.length
    })

    tweets.map((tweet,index)=>{
        if(index < 3)
        {
            Tweets.push(tweet)
        }
    })


    let TweetsAndUsers: tweet[] = [];
  
  
    Tweets.map((tweet)=>{
      users.map(user=>{
          if(user.id === tweet.userId)
          {
              let tweetUser = {
                  user:user,tweet:tweet
              }
              TweetsAndUsers.push(tweetUser)
          }
      })
    })


    res.send(TweetsAndUsers)
  } catch (error) {
    
  }  

}