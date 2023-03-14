import type { NextApiRequest, NextApiResponse } from 'next'
import bcrypt from "bcryptjs"
import prisma from "../..//prisma/prisma"
import { Post, PrismaClient, User } from '@prisma/client'

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
        const usersLikes:friendWithImg[] = []
        const users = await prisma.user.findMany()

        video?.likes.map((like)=>{
            users.map((user)=>{
                if(like === user.id)
                {
                    usersLikes.push({id:user.id,img:user.img,userName:user.userName})
                }
            })
        })
        res.send(usersLikes)

      } catch (error) {
      }

}