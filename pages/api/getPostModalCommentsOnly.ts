import type { NextApiRequest, NextApiResponse } from 'next'
import bcrypt from "bcryptjs"
import prisma from "../../prisma/prisma"
import { Post, PostComment, PrismaClient, User } from '@prisma/client'


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  try {
    const {postId} = req.body
    const postComments:PostComment[] = await prisma.postComment.findMany({where:{postId:postId}})

    res.send(postComments)

  } catch (error) {
    
  }  

}