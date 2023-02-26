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
        const {search} = req.body
        const users = await prisma.user.findMany()
        const searchedUsers :User[]= []
        users.map((user)=>{
            if(user.userName.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
            {
                searchedUsers.push(user)
            }
        })
        res.send(searchedUsers);
      } catch (error) {
      }

}