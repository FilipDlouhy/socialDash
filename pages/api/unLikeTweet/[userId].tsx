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
  const {tweetId} = req.body
  let Tweet = await prisma.tweet.findUnique({where:{id:tweetId}})

  let likes:string[] = []
  Tweet?.likes.map((like)=>{
    if(like !== userId)
    {
        likes.push(like)
    }
  })


  await prisma.tweet.update({
    where: { id: tweetId },
    data: { likes: likes}
  })


}