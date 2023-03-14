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
    const {videoId} = req.body
    const video = await prisma.video.findUnique({where:{id:videoId}})
    const videoCommentsLength = (await prisma.videoComment.findMany({where:{postId:videoId}})).length  


    res.send({video:video,videoCommentsLength:videoCommentsLength})
  
  

  } catch (error) {
    
  }  

}