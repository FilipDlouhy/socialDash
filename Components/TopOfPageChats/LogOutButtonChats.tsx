"use client"
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'
import {signOut} from "next-auth/react"
import { useRouter } from 'next/navigation'
function LogOutButtonChats() {
  const router = useRouter()
  return (
     <button onClick={(e)=>{


                    signOut()
                    router.push("/Login")
    }}  ><FontAwesomeIcon className='w-9 h-12 text-blue-100 hvr-shrink cursor-pointer'  icon={faRightFromBracket} /></button>

  )
}

export default LogOutButtonChats