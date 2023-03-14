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
        const comments = await prisma.videoComment.findMany({where:{postId:videoId}})        
        res.send(comments)
      } catch (error) {
      }

}