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
    const {userId,userName,email,wehereYouLive,profileImg} = req.body
    try {
       await prisma.user.update({where:{id:userId},data:{
            email:email,img:profileImg,placeToLive:wehereYouLive,userName:userName
        }})


        await prisma.postComment.updateMany({where:{userId:userId},data:{userImg:profileImg}})

    res.status(200).json({ message: 'OK' })

    } catch (error) {
      res.status(200).json({ message: 'Email is already taken ' })
    }


}
