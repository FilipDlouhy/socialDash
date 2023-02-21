import type { NextApiRequest, NextApiResponse } from 'next'
import bcrypt from "bcryptjs"
import prisma from "../../prisma/prisma"
import { Post, PostComment, PrismaClient, User } from '@prisma/client'


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

    try {

        const {postId} = req.body
        const comments = await prisma.postComment.findMany({where:{postId:postId}})
        const totalNumberOfComments = comments.length
        comments.sort((a:PostComment,b:PostComment)=>{
            return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
        })


        res.send({postComments:comments,totalNumberOfComments:totalNumberOfComments})
    } catch (error) {
        
    }
   

}