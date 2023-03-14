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
    const prisma = new PrismaClient()
    const {Category,Description,video,videoId} = req.body
    try {
       await prisma.video.update({where:{id:videoId},data:{description:Description,Category:Category,video:video }})


    res.status(200).json({ message: 'OK' })

    } catch (error) {
      res.status(200).json({ message: 'Email is already taken ' })
    }


}
