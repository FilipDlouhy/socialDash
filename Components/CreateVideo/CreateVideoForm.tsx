"use client"
import axios from 'axios'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React, { useState, useEffect } from 'react'
import uuid from 'react-uuid'
import { Cloudinary } from "cloudinary-core";
import { Video } from '@prisma/client'

interface props{
  setLoading:React.Dispatch<React.SetStateAction<boolean>>
}

function CreateVideoForm({setLoading}:props) {
  const [header, setHeader] = useState<string>()
  const [video, setVideo] = useState<any>();
  const [category,setCategory] = useState<string>()
  const [description,setDescription] = useState<string>()
  const session = useSession()
  const router = useRouter()
  const cloudinary: any = new Cloudinary({
    cloud_name: "dnhqwtuev",
    api_key: "586125328781159",
    api_secret: "zH62LWXRlbtthQvB0ng4A8QQMSA",
  });

  const handleVideoUpload = async () => {
    setLoading(true)
    const formData = new FormData();
    formData.append("file", video);
    formData.append("upload_preset", "social-videos");


    try {
        const response = await fetch(
          `https://api.cloudinary.com/v1_1/${cloudinary.config().cloud_name}/video/upload`,
          {
            method: "POST",
            body: formData,
          }
        );
        console.log("Upload success");

        const data = await response.json();
        console.log("Upload success");
        let videoUrl = data.secure_url;
        const id= uuid()
        let newVideo ={id:id,Category:category,description:description,likes:[],userId:session.data?.user?.name,video:videoUrl} 
        axios.post("http://localhost:3000/api/createVideo",(newVideo)).then((res)=>{
          if(res.data.message === "OK")
          {
            router.push("/Main")

          }
        })
    } catch (error) {
        console.log("Upload error");
        console.error(error);
    }
};
  useEffect(() => {
    setHeader("Upload Video")
  }, [])

  return (
    <form className='VideoForm flex justify-center items-center flex-col '>
      <h1 className='text-2xl font-bold'>{header}</h1>

      <div className='w-2/3 h-32 my-9 flex justify-around items-center flex-col' >
        <label  className='text-2xl font-semibold'>Video Description</label>
        <textarea  onChange={(e)=>{setDescription(e.target.value)}} className='text-center resize-none text-white font-medium w-96 h-28 rounded-md bg-blue-300 ' ></textarea>
      </div>

      <div className='w-2/3 h-32 my-9 flex justify-around items-center flex-col' >
        <label  className='text-2xl font-semibold'>Video Category</label>
        <select onChange={(e)=>{setCategory(e.target.value)}}  className=' text-white font-medium font w-64 h-9 rounded-md bg-blue-300 '  >
          <option>Category</option>
          <option value="Sport">Sport</option>
          <option value="Computer Science">Computer Science</option>
          <option value="Mathematics">Mathematics</option>
          <option value="History">History</option>
          <option value="Politics">Politics</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div className='w-2/3 h-32 my-9 flex justify-around items-center flex-col' >
        <label  className='text-2xl font-semibold'>Choose an Video</label>
        <input
          onChange={(e) => {
            if (e.target.files) setVideo(e.target.files[0])
          }}
          className='custom-file-input'
          type="file"
        />
      </div>

      <button
        onClick={(e) => {
          e.preventDefault()
          handleVideoUpload()
        }}
        className='hvr-rectangle-in w-56 rounded-lg text-xl font-semibold cursor-pointer h-9 mb-3 bg-blue-300 text-white'
      >
        Upload Video
      </button>
    </form>
  )
}

export default CreateVideoForm