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
    const {id,Category,description,likes,userId,video} = req.body
    try {
      const data = await prisma.video.create({
        data:{
            id:id,Category:Category,description:description,likes:likes,userId:userId,video:video
        }
    })
    res.status(200).json({ message: 'OK' })

    } catch (error) {
      res.status(200).json({ message: 'Something went wrong pleasy try again' })
    }


}
