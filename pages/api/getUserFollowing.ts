import type { NextApiRequest, NextApiResponse } from 'next'
import bcrypt from "bcryptjs"
import prisma from "../../prisma/prisma"
import { Post, PrismaClient, User } from '@prisma/client'

interface FollowModalUser
{
    userId:string
    img:string
    friends:number
    follows:number
    followers:number
    posts:number
    tweets:number
    userName:string
}


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

    try {
        const followers:FollowModalUser[] = []
        const {userId} = req.body
        const User = await prisma.user.findUnique({where:{id:userId}})
        const users = await prisma.user.findMany()
        const tweets = await prisma.tweet.findMany()
        const posts = await prisma.post.findMany()
        User?.following.map((id)=>{
            users.map((user)=>{
                if(id === user.id &&user.img)
                {
                    let totalPosts = 0
                    let totalTweets = 0
                    tweets.map((data)=>{
                        if(data.userId=== user.id)
                        {
                            totalTweets++
                        }
                    })
                    posts.map((data)=>{
                        if(data.userId === user.id)
                        {
                            totalPosts++
                        }
                    })
                
                    followers.push({followers:user.followers.length,follows:user.following.length,img:user.img,friends:user.friends.length,posts:totalPosts,tweets:totalTweets,userId:user.id,userName:user.userName})
                }
            })
        })

        res.send(followers)

      } catch (error) {
      }

}