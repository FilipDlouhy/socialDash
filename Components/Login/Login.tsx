import React from 'react'
import "../../lib/fontawsome"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb, faMonument,faLandmark } from "@fortawesome/free-solid-svg-icons";
import LoginForm from './LoginForm';
import Link from 'next/link';
function Login() {
  return (
    <div className='w-full pt-8 h-full'>

      <Link href={"/"} className='hvr-backward bg-[#318CE7] text-center pt-1 w-64 h-8 font-bold text-blue-50 rounded-sm'>Go Back</Link>

      <div className='w-1/2 mx-auto h-40 flex justify-around items-center'>
        <h1 className='text-3xl font-bold text-white'>Welcome to Historia pro omnibus ubique</h1>
        <FontAwesomeIcon className='w-20 h-20 text-white' icon={faLandmark} />
      </div>
        <LoginForm/>
    </div>
  )
}

export default Login
