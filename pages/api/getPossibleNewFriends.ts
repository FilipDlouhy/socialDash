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
    const { userId } = req.body
    const users = await prisma.user.findMany()


    const shuffledUsers = shuffle(users)
    const possibleFriends: User[] = []
    let count = 1

    shuffledUsers.forEach((user:User) => {
        if (user.friends.includes(userId) === false && count < 6 && user.id !== userId ) {
            possibleFriends.push(user)
            count++
        }
    })

    res.send(possibleFriends)

  } catch (error) {
    
  }  
}

function shuffle(array: any[]) {
    let currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}