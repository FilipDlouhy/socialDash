import React from 'react'
import "../../lib/fontawsome"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb, faMonument,faLandmark,faImage } from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link';
import CreatePostForm from './CreatePostForm';

function CreatePost() {
  return (
    <div className='w-full  pt-8 h-full'>

        <Link href={"/Main"} className='hvr-backward bg-[#318CE7] text-center pt-1 w-64 h-8 font-bold text-blue-50 rounded-sm'>Go Back</Link>
        
        <div className='w-1/2 mx-auto h-40 text-center flex justify-center items-center'>
        <h1 className='text-3xl font-bold  text-white'>Create a Post</h1>
        <FontAwesomeIcon className= ' mx-7 w-20 h-20 text-white' icon={faImage} />
        </div>
        <CreatePostForm/>

    </div>
  )
}

export default CreatePost