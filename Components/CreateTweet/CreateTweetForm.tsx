"use client"

import axios from 'axios'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { Router } from 'next/router'
import React, { use, useState,useEffect } from 'react'
import uuid from 'react-uuid'


interface Tweet{
  description:String ,
  historicalPeriod:String
  title:String,
  userId:String
}

function CreateTweetForm() {

  const [header,setHeader] =useState<string>()
  const [title,setTitle] = useState<string>()
  const [description,setDescription] = useState<string>()
  const [category,setCategory] = useState<string>()
  const session = useSession()
  const router = useRouter()
  useEffect(()=>{
    setHeader("Login to Historia pro omnibus ubique ")
  },[])



  function addTweet(e:React.MouseEvent<HTMLButtonElement, MouseEvent>)
  {
    e.preventDefault()
    if(title&& description&& category && session.data?.user?.name)
    {
      const newTweet :Tweet ={
        description:description,
        historicalPeriod:category,
        title:title,
        userId:session.data?.user?.name
      }
      axios.post("/api/createTweet",newTweet).then(()=>{
        router.push("/Main")
      })
    }
    else
    {
      setHeader("Please Fill All FIELDS")
    }
  }



  return (
    <form className='SingInForm flex justify-center items-center flex-col '>
        <h1 className='text-2xl font-bold'>{header}</h1>

        <div className='w-2/3 h-32 my-9 flex justify-around items-center flex-col' >
            <label className='text-2xl font-semibold' >Title</label>
            <input onChange={(e)=>{setTitle(e.target.value)}} className=' text-white font-medium w-64 h-9 rounded-md bg-blue-300 ' type="text" ></input>
        </div>

        
        <div className='w-2/3 h-32 my-9 flex justify-around items-center flex-col' >
            <label className='text-2xl font-semibold' >On wich period is tweet focused</label>
            <select onChange={(e)=>{setCategory(e.target.value)}} className=' text-white font-medium w-64 h-9 rounded-md bg-blue-300 ' id="country" name="country">
                <option>Category</option>
                <option value="Afghanistan">Pax Romana</option>
                <option value="Aland Islands">Dark Ages</option>
                <option value="Albania">Middle Ages</option>
                <option value="Algeria">Age of Reformation</option>
                <option value="American Samoa">Age of Absolutism</option>
                <option value="American Samoa">Age of Revolutions</option>
                <option value="American Samoa">The Great Wars</option>
                <option value="American Samoa">Modern History</option>
            </select>
        </div>
        
        <div className='w-2/3 my-9 flex  items-center flex-col' >
            <label  className='text-2xl my-4 font-semibold'>Content of Tweet</label>
            <textarea onChange={(e)=>{setDescription(e.target.value)}} maxLength={1110} className='rounded-md  text-white font-medium px-3 border-2 w-96 h-96 resize-none  bg-blue-300 '></textarea>
        </div>  







        <button onClick={(e)=>{addTweet(e)}} className='hvr-rectangle-in w-56 rounded-lg text-xl font-semibold cursor-pointer h-9 mb-3 mt-16 bg-blue-300 text-white'>Tweet</button>
    </form>
  )
}

export default CreateTweetForm