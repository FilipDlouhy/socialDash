import type { NextApiRequest, NextApiResponse } from 'next'
import bcrypt from "bcryptjs"
import prisma from "../../prisma/prisma"
import { Post, PrismaClient, Tweet, User, Video } from '@prisma/client'

interface video{
    user: friendWithImg, video: Video 
}
interface friendWithImg{
    id: string;
    userName: string; 
    img: string  | null
}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  try {
    const {videoId} = req.body
    const video = await prisma.video.findUnique({where:{id:videoId}})
    const user = await prisma.user.findUnique({where:{id:video?.userId}})
    if(video&& user)
    {
        const videoUser:video ={user:{id:user?.id,img:user?.img,userName:user?.userName},video:video} 
        res.send(videoUser)
    }


 

  } catch (error) {
    
  }  

}