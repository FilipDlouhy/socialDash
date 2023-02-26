"use client"

import { Module } from 'module'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

function apge() {
  const session = useSession()
  const router = useRouter()
  useEffect(()=>{
    if(session.data?.user?.name){
      router.push(`/Main/User/${session.data?.user?.name}`)
    }
    else{
      router.push(`/`)

    }
  },[])
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
            <div className="loading">
                <div className="loading__letter">L</div>
                <div className="loading__letter">o</div>
                <div className="loading__letter">a</div>
                <div className="loading__letter">d</div>
                <div className="loading__letter">i</div>
                <div className="loading__letter">n</div>
                <div className="loading__letter">g</div>
                <div className="loading__letter">.</div>
                <div className="loading__letter">.</div>
                <div className="loading__letter">.</div>
             </div>
    </div>
  )
}

export default apge