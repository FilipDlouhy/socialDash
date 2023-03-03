import UpdateProfileContainer from '@/Components/UpdateProfile/UpdateProfileContainer'
import UpdateProfileForm from '@/Components/UpdateProfile/UpdateProfileForm'
import UpdateProfileUserProfile from '@/Components/UpdateProfile/UpdateProfileUserProfile'
import { User } from '@prisma/client';
import axios from 'axios';
import React from 'react'



interface Props {
  params: {
    userId: string;
  };
}

async function getUser(userId:string) {
  const user = await axios.get(`http://localhost:3000/api/getUser/${userId}`)
  return user.data
 }


async function page({params:{userId}}:Props) {
  const user:User = await getUser(userId)
  return (
    <UpdateProfileContainer user={user}/>
  )
}

export default page