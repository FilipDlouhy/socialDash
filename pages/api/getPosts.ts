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
    const posts = await prisma.post.findMany()
    const users = await prisma.user.findMany()
    
    let Posts: post[] = [];
  
  
    posts.map((post)=>{
      users.map(user=>{
          if(user.id === post.userId)
          {
              let postWuser = {
                  user:user,post:post
              }
              Posts.push(postWuser)
          }
      })
    })
    Posts.sort((a:post,b:post)=>{
        return   new Date(b.post.created_at).getTime()- new Date(a.post.created_at).getTime()
    })
    res.send(Posts)
  } catch (error) {
    
  }  

}