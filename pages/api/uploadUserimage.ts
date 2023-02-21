// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import bcrypt from "bcryptjs"
import prisma from "../../prisma/prisma"
import { PrismaClient } from '@prisma/client'
import formidable from "formidable"
type Data = {
  message: any
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const form = new formidable.IncomingForm()
    console.log("form")
    console.log(form)
    form.parse(req, (err:any, fields:any, files:any) => {
      if (err) {
        console.error(err)
        res.status(500).json({ message: 'Internal server error' })
      } else {
        console.log(files)
        res.status(200).json({ message: true })
      }})

}
