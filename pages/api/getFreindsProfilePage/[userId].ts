import type { NextApiRequest, NextApiResponse } from 'next'
import bcrypt from "bcryptjs"
import prisma from "../../../prisma/prisma"
import { PrismaClient, User } from '@prisma/client'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const query = req.query;
  let userId: string | undefined;

  if (typeof query.userId === 'string') {
    userId = query.userId;
  }
  const user = await prisma.user.findUnique({where:{id:userId}})
  const users = await prisma.user.findMany()
  const friends:User[] = []
  user?.friends.map((id)=>{
    users.map((user)=>{
      if(user.id === id)
      {
        friends.push(user)
      }
    })
  })

  res.send(friends)
}