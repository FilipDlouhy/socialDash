import type { NextApiRequest, NextApiResponse } from 'next'
import bcrypt from "bcryptjs"
import { PrismaClient } from '@prisma/client'
import prisma from '@/prisma/prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  const {postId,userId} = req.body
  console.log("UNLIKE")

  console.log(req.body)

  let video = await prisma.video.findUnique({where:{id:postId}})

  let likes:string[] = []
  video?.likes.map((like)=>{
    if(like !== userId)
    {
        likes.push(like)
    }
  })


  await prisma.video.update({
    where: { id: postId },
    data: { likes: likes}
  })
  res.status(200).json({ message: 'OK' })

}