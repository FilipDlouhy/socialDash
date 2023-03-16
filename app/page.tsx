import './globals.css'
import Link from 'next/link'
import "../lib/fontawsome"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb, faMonument,faLandmark } from "@fortawesome/free-solid-svg-icons";
export default function Home() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className='w-full h-full flex justify-around flex-col  items-center '>

        <div className=' text-sm xl:text-base content w-full'>
            < h2>Welcome to social Dash</ h2>
            < h2>Welcome to social Dash</ h2>
        </div>
        <p className=' startText font-bold text-xs lg:text-sm  xl:text-2xl text-white text-center'>Social Dash is a Social site that does it all want to post or tweet or even upload videos here you can do everything</p>

        <div className=' content2 lex items-center justify-center w-full'>
            < h2>Please Create account or Login if you have one</ h2>
            < h2>Please Create account or Login if you have one</ h2>
        </div>
        <div className=' startBtnFlipIn w-full h-40 flex-col md:flex-row flex items-center justify-around'>
          <Link href={"/SingIn"} className='text-center pt-2 hvr-pop w-72 h-12 bg-blue-400 rounded-lg text-white font-semibold text-xl'>Create Acount</Link>
          <Link href={"/Login"} className='text-center pt-2 hvr-pop w-72 h-12 bg-blue-400 rounded-lg text-white font-semibold text-xl'>Already Registered</Link>
        </div>

      </div>

    </div>
  )
}
