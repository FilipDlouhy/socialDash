import type { NextApiRequest, NextApiResponse } from 'next'
import bcrypt from "bcryptjs"
import prisma from "../../prisma/prisma"
import { Post, PrismaClient, User } from '@prisma/client'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {postId} = req.body;

  const post = await prisma.post.findUnique({where:{id:postId}})
  const totalComments =  (await prisma.postComment.findMany({where:{postId:postId}})).length
  res.send({post:post,totalComments:totalComments})
}