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
    const {userId,description,title,placeFrom,img,id} = req.body
    try {
      const data = await prisma.post.create({
        data:{
            id:id,userId:userId,placeFrom:placeFrom,img:img,description:description,title:title
        }
    })
    res.status(200).json({ message: 'OK' })

    } catch (error) {
      res.status(200).json({ message: 'Something went wrong pleasy try again' })
    }


}
