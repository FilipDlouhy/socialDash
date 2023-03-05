import type { NextApiRequest, NextApiResponse } from 'next'
import bcrypt from "bcryptjs"
import prisma from "../../prisma/prisma"
import { PrismaClient, User } from '@prisma/client'



interface friend{
    userId:string,
    userImg:string,
    userName:string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {userId} = req.body
  const users = await prisma.user.findMany()

  const friends:friend[] = []
  users.map((user)=>{
    if(user.friends.includes(userId) && user.img)
    {
        const friend:friend ={
            userId:user.id,userImg:user.img,userName:user.userName
        }
        friends.push(friend)
    }
  })



  res.send(friends)
}