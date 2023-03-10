import type { NextApiRequest, NextApiResponse } from 'next'
import bcrypt from "bcryptjs"
import prisma from "../..//prisma/prisma"
import { Post, PrismaClient, Tweet, User } from '@prisma/client'

interface friendWithImg{
    id: string;
    userName: string; 
    img: string  | null
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  try {


    const {userId} = req.body
    const friends:friendWithImg[] = []
    const user = await prisma.user.findUnique({where:{id:userId}})
    if(user)
    {
        const users = await prisma.user.findMany()
        user.friends.map((id)=>{
            users.map((user)=>{
                if(user.id === id)
                {
                    friends.push({id:user.id,img:user.img,userName:user.userName})
                }
            })
        })
    
    }
    res.send(friends)
   
  } catch (error) {
    
  }  

}