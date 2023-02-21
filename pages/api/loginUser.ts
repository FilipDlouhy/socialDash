// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import bcrypt from "bcryptjs"
import prisma from "../../prisma/prisma"
import { PrismaClient } from '@prisma/client'


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) 
 {
    const prisma = new PrismaClient()
    const {email,password} = req.body
 
    try {
      const user = await prisma.user.findUnique({where:{email:email}})
      if(user)
      {
        let logged = await bcrypt.compare(password,user.password)
        if(logged){
          res.json(user)
        }
      }
    } catch (error) {
      console.log(error)
    }



}
