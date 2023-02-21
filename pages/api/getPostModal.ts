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
  const {userId,postId} = req.body;
  console.log(req.body)

  const user = await prisma.user.findUnique({where:{id:userId}})
  const post = await prisma.post.findUnique({where:{id:postId}})
  if(post&&user){
    const data:post = {user:user,post:post}
    const postComment = await prisma.postComment.findMany({where:{postId:postId}})
    postComment.sort((a,b)=>{return  new Date(b.created_at).getTime() - new Date(a.created_at).getTime()})
    res.send({post:data,postComment:postComment})
    }

}