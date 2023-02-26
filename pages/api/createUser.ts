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
    const {userName,email,password,palcetoLive,id,img} = req.body
    let hashPassword = await bcrypt.hash(password,10)
    try {
      const data = await prisma.user.create({
        data:{
          userName:userName,email:email,id:id,password:hashPassword,placeToLive:palcetoLive,img:img,friends:[]
        }
    })
    res.status(200).json({ message: 'OK' })

    } catch (error) {
      res.status(200).json({ message: 'Email is already taken ' })
    }


}
