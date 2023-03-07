import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from "../../prisma/prisma"
import { PrismaClient } from '@prisma/client'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { userId, friendId } = req.body
  console.log(req.body)
  const user = await prisma.user.findUnique({where:{id:userId}})
  const friend = await prisma.user.findUnique({where:{id:friendId}})

 const userFriends : string[] | undefined =[]
 const friendsFriends : string[] | undefined =[]



 friend?.following.map((id)=>{
    if(id !== userId)
    {
        friendsFriends.push(id)
    }
 })


 user?.followers.map((id)=>{
    if(id !== friendId)
    {
        userFriends.push(id)
    }
 })



  await prisma.user.update({
    where: { id: userId },
    data: { followers:userFriends }
  })
  await prisma.user.update({
    where: { id: friendId },
    data: { following: friendsFriends
     }
  })
  res.status(200).json({ message: 'OK' })
}
