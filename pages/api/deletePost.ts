// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import bcrypt from "bcryptjs"
import prisma from "../../prisma/prisma"
import { PrismaClient } from '@prisma/client'
type Data = {
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const {postId} = req.body
    try {
        await prisma.post.delete({where:{id:postId}})
        await prisma.postComment.deleteMany({where:{postId:postId}})
    res.status(200).json({ message: 'OK' })

    } catch (error) {
      res.status(200).json({ message: 'Email is already taken ' })
    }


}
