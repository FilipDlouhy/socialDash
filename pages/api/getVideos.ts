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
    const {userId} = req.body
    const user = await prisma.user.findUnique({where:{id:userId}})
    const videos = await prisma.video.findMany()
    const users = await prisma.user.findMany()
    
    let Videos: video[] = [];
  
    let ids:string[] =[]
    user?.following.map((id)=>{
      if(ids.includes(id)=== false)
      {
        ids.push(id)
      }
    })
    user?.friends.map((id)=>{
      if(ids.includes(id)=== false)
      {
        ids.push(id)
      }
    })
    ids.push(userId)

    videos.map((video)=>{
      users.map(user=>{
          if(user.id === video.userId)
          {

                let USER :friendWithImg={id:user.id,img:user.img,userName:user.userName}
              let videoUser:video = {
                  user:USER,video:video
              }
              Videos.push(videoUser)
          }
      })
    })


    
    let FinalVideos: video[] = [];

    ids.map((id)=>{
        Videos.map((video)=>{
      if(video.user.id===id)
      {
        FinalVideos.push(video)
      }
      })
    })
    FinalVideos.sort((a:video,b:video)=>{
      return   new Date(b.video.created_at).getTime()- new Date(a.video.created_at).getTime()
  })
    res.send(FinalVideos)
  } catch (error) {
    
  }  

}