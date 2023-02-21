import type { NextApiRequest, NextApiResponse } from 'next'
import bcrypt from "bcryptjs"
import prisma from "../../prisma/prisma"
import { Post, PostComment, PrismaClient, TweetComment, User } from '@prisma/client'


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

    try {

        const {tweetId} = req.body
        const comments = await prisma.tweetComment.findMany({where:{tweetId:tweetId}})
        const totalNumberOfComments = comments.length
        comments.sort((a:TweetComment,b:TweetComment)=>{
            return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
        })
        let count = 1
        let initialComments:TweetComment[] =[]    
        console.log(comments)
        comments.map((comment)=>{
            if(count < 5 )
            {
                initialComments.push(comment)
                count++
            }
        })

        res.send({initialComments:initialComments,totalNumberOfComments:totalNumberOfComments})
    } catch (error) {
        
    }
   

}