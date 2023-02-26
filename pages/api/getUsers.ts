import type { NextApiRequest, NextApiResponse } from 'next'
import bcrypt from "bcryptjs"
import prisma from "../..//prisma/prisma"
import { Post, PrismaClient, User } from '@prisma/client'

interface post{
    user: User, post: Post 
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

    try {
        const {userId} = req.body
        const User = await prisma.user.findUnique({where:{id:userId}})
        const users = await prisma.user.findMany()
        const shuffledUsers :User[]= []
        let count = 1
        users.map((user)=>{

          if(count < 101)
          {
            if(User?.id !== user.id){
              shuffledUsers.push(user)
            }
          }
            count ++
        })

       shuffledUsers.sort(() => Math.random() - 0.5);
      
        res.send(shuffledUsers);
      } catch (error) {
      }

}