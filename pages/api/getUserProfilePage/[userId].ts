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
  const user = await prisma.user.findUnique({where:{id:userId}})
  const postLength = await (await prisma.post.findMany({where:{userId:userId}})).length
  const tweetLength = await (await prisma.tweet.findMany({where:{userId:userId}})).length
  res.send({user:user,postLength:postLength,tweetLength:tweetLength})
}