import type { NextApiRequest, NextApiResponse } from 'next'
import bcrypt from "bcryptjs"
import prisma from "../../prisma/prisma"
import { Post, PostComment, PrismaClient, TweetComment, User } from '@prisma/client'


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  try {
    const {tweetId} = req.body
    const tweetComments:TweetComment[] = await prisma.tweetComment.findMany({where:{tweetId:tweetId}})

    res.send(tweetComments)

  } catch (error) {
    
  }  

}