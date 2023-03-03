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
    const {postId} = req.body
    const post = await prisma.post.findUnique({where:{id:postId}})
    const user = await prisma.user.findUnique({where:{id:post?.userId}})
    
    if(post && user)
    {
        let Post: post = {post:post,user:user} ;

        res.send(Post)



    }

  
  

  } catch (error) {
    
  }  

}