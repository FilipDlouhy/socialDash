"use client"
import axios from 'axios'
import React,{useState,useEffect} from 'react'
import {signIn, signOut} from "next-auth/react"
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
function LoginForm() {

  const [password,setPassword] = useState<string>()
  const [email,setEmail] = useState<String>()
  const [heading,setHeading] = useState<string>("Login to Social Dash")
  const router = useRouter()
  async function Login(){
    try {
      const user = await signIn("credentials",{
        redirect:false,
        email,
        password
      })
      if(user){
        router.push(`/Main`)
      }
      else
      {
        setHeading("something went wrong")
      }

    } 
    catch (error) {
      console.log(error)
      setHeading("something went wrong")

    }

    }

  return (
    <form className='LoginForm flex justify-center items-center flex-col '>
        <h1 className='text-2xl font-bold'>{heading}</h1>

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