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
    const {tweetId} = req.body
    const tweet = await prisma.tweet.findUnique({where:{id:tweetId}})
    const user = await prisma.user.findUnique({where:{id:tweet?.userId}})
    
    if(tweet && user)
    {
        let Tweet: tweet = {tweet:tweet,user:user} ;

        res.send(Tweet)



    }

  
  

  } catch (error) {
    
  }  

}