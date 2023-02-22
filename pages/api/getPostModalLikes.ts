import type { NextApiRequest, NextApiResponse } from 'next'
import bcrypt from "bcryptjs"
import prisma from "../../prisma/prisma"
import { Post, PrismaClient, User } from '@prisma/client'

interface like{
    userName: string,userId:string,userImg:string 
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  try {
    const {postId} = req.body
    const post = await prisma.post.findUnique({where:{id:postId}})
    const users = await prisma.user.findMany()
    const usersLiked:like[] =[]
    if(post &&post.likes )
    { 
      const likes:string[] = post.likes
      likes.map((like)=>{
          users.map((user)=>{
            if(like === user.id && user.img && user.userName )
            {
              usersLiked.push({userId:user.id,userImg:user.img,userName:user.userName})
            }
          })
      })

    } 
    res.send(usersLiked)

  } catch (error) {
    
  }  

}