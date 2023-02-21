import type { NextApiRequest, NextApiResponse } from 'next'
import bcrypt from "bcryptjs"
import prisma from "../../../prisma/prisma"
import { PrismaClient } from '@prisma/client'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const query = req.query;
  let userId: string | undefined;

  if (typeof query.userId === 'string') {
    userId = query.userId;
  }
  const {postId} = req.body
  let Post = await prisma.post.findUnique({where:{id:postId}})

  let likes:string[] = []
  Post?.likes.map((like)=>{
    if(like !== userId)
    {
        likes.push(like)
    }
  })


  await prisma.post.update({
    where: { id: postId },
    data: { likes: likes}
  })


}