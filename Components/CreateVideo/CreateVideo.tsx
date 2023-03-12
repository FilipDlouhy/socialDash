import React from 'react'
import "../../lib/fontawsome"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb, faMonument,faLandmark, faDroplet } from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link';
import CreateVideoForm from './CreateVideoForm';
import CreateVideoContainer from './CreateVideoContainer';

function CreateVideo() {
  return (
    <div className='w-full  pt-8 px-12 h-full'>
        <CreateVideoContainer/>
    </div>
  )
}

export default CreateVideo