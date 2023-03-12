"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import CreateVideoForm from './CreateVideoForm'

function CreateVideoContainer() {
    const [loading,setLoading] = useState<boolean>(false)
    if(loading)
    {
        return (
            <div className='flex h-screen w-screen items-center justify-center'>
                <div className="loading">
                    <div className="loading__letter">U</div>
                    <div className="loading__letter">p</div>
                    <div className="loading__letter">a</div>
                    <div className="loading__letter">l</div>
                    <div className="loading__letter">o</div>
                    <div className="loading__letter">a</div>
                    <div className="loading__letter">d</div>
                    <div className="loading__letter">i</div>
                    <div className="loading__letter">n</div>
                    <div className="loading__letter">g</div>
                </div>
            </div>
        )
    }
    else
    {
        return (
            <div className='w-full h-full'> 
                <Link href={"/Main"} className='hvr-backward bg-[#318CE7] text-center pt-1 w-64 h-8 font-bold text-blue-50 rounded-sm'>Go Back</Link>
                <CreateVideoForm setLoading={setLoading}/>
            </div>
          )
    }

}

export default CreateVideoContainer