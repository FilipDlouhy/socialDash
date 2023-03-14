import type { NextApiRequest, NextApiResponse } from 'next'
import bcrypt from "bcryptjs"
import { PrismaClient } from '@prisma/client'
import prisma from '@/prisma/prisma';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
 
  const {postId,userId} = req.body

  console.log(req.body)
  console.log("LIKE")
  await prisma.video.update({
    where: { id: postId },
    data: { likes: { push: userId } }
  })
  res.status(200).json({ message: 'OK' })
}