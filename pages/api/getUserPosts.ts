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
    const posts = await prisma.post.findMany({where:{userId:userId}})
    
    posts.sort((a:Post,b:Post)=>{
        return   new Date(b.created_at).getTime()- new Date(a.created_at).getTime()
    })
    res.send(posts)
  } catch (error) {
    
  }  

}