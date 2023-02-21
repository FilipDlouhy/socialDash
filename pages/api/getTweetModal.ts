import type { NextApiRequest, NextApiResponse } from 'next'
import bcrypt from "bcryptjs"
import prisma from "../../prisma/prisma"
import { Post, PrismaClient, Tweet, User } from '@prisma/client'
interface post{
    user: User, tweet: Tweet 
  }
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {userId,tweetId} = req.body;


  const user = await prisma.user.findUnique({where:{id:userId}})
  const tweet = await prisma.tweet.findUnique({where:{id:tweetId}})
  if(tweet&&user){
    const data:post = {user:user,tweet:tweet}
    const tweetComments = await prisma.tweetComment.findMany({where:{tweetId:tweetId}})
    tweetComments.sort((a,b)=>{return  new Date(b.created_at).getTime() - new Date(a.created_at).getTime()})
    res.send({tweet:data,tweetComments:tweetComments})
    }

}