import type { NextApiRequest, NextApiResponse } from 'next'
import bcrypt from "bcryptjs"
import prisma from "../..//prisma/prisma"
import { Post, PrismaClient, User } from '@prisma/client'

interface post{
    user: User, post: Post 
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  try {
    const { userId } = req.body
    const vdeosLength =  (await prisma.video.findMany({where:{userId:userId}})).length
    console.log(vdeosLength)

    res.send({number:vdeosLength})

  } catch (error) {
    
  }  
}

