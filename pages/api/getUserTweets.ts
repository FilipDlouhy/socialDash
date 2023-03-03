import type { NextApiRequest, NextApiResponse } from 'next'
import bcrypt from "bcryptjs"
import prisma from "../..//prisma/prisma"
import { Post, PrismaClient, Tweet, User } from '@prisma/client'


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  try {
    const {userId} = req.body
    const tweets = await prisma.tweet.findMany({where:{userId:userId}})
    
    tweets.sort((a:Tweet,b:Tweet)=>{
        return   new Date(b.created_at).getTime()- new Date(a.created_at).getTime()
    })
    res.send(tweets)
  } catch (error) {
    
  }  

}