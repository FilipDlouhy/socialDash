import React from 'react'
import "../../lib/fontawsome"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb, faMonument,faLandmark, faDroplet } from "@fortawesome/free-solid-svg-icons";
import LoginForm from './LoginForm';
import Link from 'next/link';
function Login() {
  return (
    <div className='w-full pt-8  h-full'>

      <Link href={"/"} className=' ml-24 hvr-backward bg-[#318CE7] text-center pt-1 w-64 h-8 font-bold text-blue-50 rounded-sm'>Go Back</Link>

      <div className='w-full lg:w-1/2 ml-0 lg:ml-40 xl:mx-auto h-52 flex justify-around items-center'>
        <h1 className=' text-xl sm:text-3xl font-bold text-center text-white ml-11 md:ml-52'>Welcome to Social Dash </h1>
        <FontAwesomeIcon className='w-16 h-16 sm:w-20 sm:h-20 text-white' icon={faDroplet} />
      </div>
        <LoginForm/>
    </div>
  )
}

export default Login
