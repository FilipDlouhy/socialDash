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
    const {userId} = req.body
    const posts = await prisma.post.findMany({where:{userId:userId}})
    const users = await prisma.user.findMany()
    
    let Posts: Post[] = [];
    posts.sort((a,b)=>{
        return b.likes.length - a.likes.length
    })
    posts.map((post,index)=>{
        if(index < 3)
        {
            Posts.push(post)
        }
    })


    let PostsAndUsers: post[] = [];
  
  
    Posts.map((post)=>{
      users.map(user=>{
          if(user.id === post.userId)
          {
              let postWuser = {
                  user:user,post:post
              }
              PostsAndUsers.push(postWuser)
          }
      })
    })

    res.send(PostsAndUsers)
  } catch (error) {
    
  }  

}