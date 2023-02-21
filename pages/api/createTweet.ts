// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import bcrypt from "bcryptjs"
import prisma from "../../prisma/prisma"
import { PrismaClient } from '@prisma/client'
import uuid from 'react-uuid'
type Data = {
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const prisma = new PrismaClient()
    const {description,historicalPeriod,title,userId} = req.body
    const id = uuid()
    try {
      const data = await prisma.tweet.create({
        data:{
            description:description, historicalPeriod:historicalPeriod, title:title, userId:userId,id:id
        }
    })
    res.status(200).json({ message: 'OK' })

    } catch (error) {
      res.status(200).json({ message: 'Something went wrong pleasy try again' })
    }


}
