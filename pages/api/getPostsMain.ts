import type { NextApiRequest, NextApiResponse } from 'next'
import bcrypt from "bcryptjs"
import prisma from "../../prisma/prisma"
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
    const user = await prisma.user.findUnique({where:{id:userId}})
    const posts = await prisma.post.findMany()
    const users = await prisma.user.findMany()
    
    let Posts: post[] = [];
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

     
    let FinalPosts: post[] = [];

    ids.map((id)=>{
      Posts.map((post)=>{
      if(post.user.id===id )
      {
        FinalPosts.push(post)
      }
      })
    })
    res.send(FinalPosts)
  } catch (error) {
    
  }  

}