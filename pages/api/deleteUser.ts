import type { NextApiRequest, NextApiResponse } from 'next'
import bcrypt from "bcryptjs"
import prisma from "../..//prisma/prisma"
import { Post, PrismaClient, Tweet, User } from '@prisma/client'


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  try {


    const {userId} = req.body
    const users = await prisma.user.findMany()
    await prisma.post.deleteMany({where:{userId:userId}})
    await prisma.tweet.deleteMany({where:{userId:userId}})
    await prisma.tweetComment.deleteMany({where:{userId:userId}})
    await prisma.postComment.deleteMany({where:{userId:userId}})
    await prisma.user.delete({where:{id:userId}})
    users.map((user)=>{
        let friends :string[] =[]
        let following :string[] =[]
        let followers :string[] =[]

        user.followers.map((id)=>{
            if(id !== userId)
            {
                followers.push(id)
            }
        })
        user.following.map((id)=>{
            if(id !== userId)
            {
                following.push(id)
            }
        })
        user.friends.map((id)=>{
            if(id !== userId)
            {
                friends.push(id)
            }
        })
        prisma.user.update(({where:{id:user.id},data:{followers:followers,friends:friends,following:following}}))

        

    })
    res.status(200).json({ message: 'OK' })

  } catch (error) {
    
  }  

}