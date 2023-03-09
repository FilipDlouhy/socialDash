"use client"
import axios from 'axios'
import { signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React from 'react'
interface props{
    userId:string
}

function ProfilePageUserProfileDeleteProfile({userId}:props) {
      const router = useRouter()

  return (
    <button  onClick={()=>{
        axios.post(`http://localhost:3000/api/deleteUser`,{userId:userId}).then((res)=>{
            if(res.data.message === "OK")
            {
                    signOut()
                    router.push("/SingIn")
            }
        })
    }} className='w-44 h-9 flex justify-center items-center hover:scale-110 duration-150 cursor-pointer font-medium text-lg  text-white shadow-md rounded-md'>Delete Profile</button>
  )
}

export default ProfilePageUserProfileDeleteProfile