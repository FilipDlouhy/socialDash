import './globals.css'
import Link from 'next/link'
import "../lib/fontawsome"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb, faMonument,faLandmark } from "@fortawesome/free-solid-svg-icons";
export default function Home() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className='w-full h-full flex justify-around flex-col  items-center '>
        <div>
          <h1 className='text-3xl text-white font-semibold'>Wlecome to Historia pro omnibus ubique social site for every history enjoyer  </h1>
          <FontAwesomeIcon className=' rotate w-20 h-20 mx-auto my-5 text-white fa-bounce' icon={faLandmark} />
        </div>

        <div className='w-full h-40 flex items-center justify-around'>
          <Link href={"/SingIn"} className='text-center pt-2 hvr-pop w-72 h-12 bg-blue-400 rounded-lg text-white font-semibold text-xl'>Create Acount</Link>
          <Link href={"/Login"} className='text-center pt-2 hvr-pop w-72 h-12 bg-blue-400 rounded-lg text-white font-semibold text-xl'>Already Registered</Link>
        </div>

      </div>

    </div>
  )
}
