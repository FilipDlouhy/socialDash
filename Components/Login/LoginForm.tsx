"use client"
import axios from 'axios'
import React,{useState} from 'react'
import {signIn} from "next-auth/react"
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
function LoginForm() {

  const [password,setPassword] = useState<string>()
  const [email,setEmail] = useState<String>()
  const router = useRouter()
  const session = useSession()
  async function Login(){
    try {
      const user = await signIn("credentials",{
        redirect:false,
        email,
        password
      })
      console.log(user)
      console.log(session)
      router.push(`/Main`)

    } 
    catch (error) {
      console.log(error)
    }

    }

  return (
    <form className='LoginForm flex justify-center items-center flex-col '>
        <h1 className='text-2xl font-bold'>Login to Historia pro omnibus ubique </h1>

        <div className='w-2/3 h-32 my-11 flex justify-around items-center flex-col' >
            <label className='text-2xl font-semibold' >Email</label>
            <input  onChange={(e)=>{setEmail(e.target.value)}} className=' w-64 h-9 rounded-md bg-blue-300 ' type="text" ></input>
        </div>

        <div className='w-2/3 h-32 my-11 flex justify-around items-center flex-col' >
            <label  className='text-2xl font-semibold'>Password</label>
            <input onChange={(e)=>{setPassword(e.target.value)}}  className=' w-64 h-9 rounded-md bg-blue-300 ' type="password" ></input>
        </div>

        <button onClick={(e)=>{
          e.preventDefault()
          Login()

        }} className='hvr-rectangle-in w-56 rounded-lg text-xl font-semibold cursor-pointer h-9 bg-blue-300 text-white'>Login</button>
    </form>
  )
}

export default LoginForm