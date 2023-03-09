import React from 'react'
import "../../lib/fontawsome"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb, faMonument,faLandmark, faDroplet } from "@fortawesome/free-solid-svg-icons";
import SingInForm from './SingInForm';
import Link from 'next/link';

function SingIn() {
  return (
    <div className='w-full  pt-8 h-full'>

        <Link href={"/"} className='hvr-backward bg-[#318CE7] text-center pt-1 w-64 h-8 font-bold text-blue-50 rounded-sm'>Go Back</Link>
        
        <div className='w-1/2 mx-auto h-40 flex justify-around items-center'>
        <h1 className='text-3xl font-bold text-center text-white ml-52'>Welcome to Social Dash </h1>
        <FontAwesomeIcon className='w-20 h-20 text-white' icon={faDroplet} />
        </div>
        <SingInForm/>

    </div>
  )
}

export default SingIn