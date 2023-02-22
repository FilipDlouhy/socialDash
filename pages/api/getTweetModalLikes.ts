import type { NextApiRequest, NextApiResponse } from 'next'
import bcrypt from "bcryptjs"
import prisma from "../../prisma/prisma"
import { Post, PrismaClient, User } from '@prisma/client'

interface like{
    userName: string,userId:string,userImg:string 
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  try {
    const {tweetId} = req.body
    const tweet = await prisma.tweet.findUnique({where:{id:tweetId}})
    const users = await prisma.user.findMany()
    const usersLiked:like[] =[]
    if(tweet &&tweet.likes )
    { 
      const likes:string[] = tweet.likes
      likes.map((like)=>{
          users.map((user)=>{
            if(like === user.id && user.img && user.userName )
            {
              usersLiked.push({userId:user.id,userImg:user.img,userName:user.userName})
            }
          })
      })

    } 
    res.send(usersLiked)

  } catch (error) {
    
  }  

}