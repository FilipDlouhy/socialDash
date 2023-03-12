// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
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
    const {text,userId,userImg,postId,userName} = req.body
    const id = uuid()
    try {
      const data = await prisma.videoComment.create({
        data:{
          text:text,userId:userId,userImg:userImg,postId:postId,id:id,userName:userName
        }
    })
    res.status(200).json({ message: 'OK' })

    } catch (error) {
      res.status(200).json({ message: 'Something went wrong pleasy try again' })
    }


}
