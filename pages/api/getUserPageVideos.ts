import type { NextApiRequest, NextApiResponse } from 'next'
import bcrypt from "bcryptjs"
import prisma from "../..//prisma/prisma"
import { Post, PrismaClient, Tweet, User, Video } from '@prisma/client'


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  try {
    const {userId} = req.body
    const videos = await prisma.video.findMany({where:{userId:userId}})
    
    videos.sort((a:Video,b:Video)=>{
        return   new Date(b.created_at).getTime()- new Date(a.created_at).getTime()
    })
    res.send(videos)
  } catch (error) {
    
  }  

}