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
    const {videoId} = req.body
    try {
        await prisma.video.delete({where:{id:videoId}})
        await prisma.videoComment.deleteMany({where:{postId:videoId}})
    res.status(200).json({ message: 'OK' })

    } catch (error) {
      res.status(200).json({ message: 'Email is already taken ' })
    }


}
