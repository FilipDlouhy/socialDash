import { async } from '@firebase/util'
import { Video } from '@prisma/client'
import axios from 'axios';
import { Cloudinary } from "cloudinary-core";
import { useRouter } from 'next/navigation';
import React from 'react'
interface  props{
    Description:string
    VideoNew:any
    Category:string
    video:videoUpdate
    userId:string
    VideoNewFile:any
    setUpdating: React.Dispatch<React.SetStateAction<boolean>>

}
interface videoUpdate {
    video:Video
    videoCommentsLength:number
  }

  const cloudinary: any = new Cloudinary({
    cloud_name: "dnhqwtuev",
    api_key: "586125328781159",
    api_secret: "zH62LWXRlbtthQvB0ng4A8QQMSA",
  });

 function  UpdateVideoBTN({setUpdating,VideoNewFile,userId,Category,Description,VideoNew,video}:props) {
    const router = useRouter()
    async function update()
    {
      setUpdating(true)

        if(VideoNewFile)
        {

            const formData = new FormData();
            formData.append("file", VideoNewFile);

            formData.append("upload_preset", "social-videos");
            const response = await fetch(
                  `https://api.cloudinary.com/v1_1/${cloudinary.config().cloud_name}/video/upload`,
                  {
                    method: "POST",
                    body: formData,
                  }
                );
                console.log("Upload success");

                const data = await response.json();
                let videoUrl = data.secure_url;
                await axios.post("http://localhost:3000/api/updateVideo",{Category:Category,Description:Description,video:videoUrl,videoId:video.video.id})
                router.push(`/ProfilePage/${userId}`)

        }
        else
        {
                await axios.post("http://localhost:3000/api/updateVideo",{Category:Category,Description:Description,video:video.video.video,videoId:video.video.id})
                router.push(`/ProfilePage/${userId}`)
        }
    }
  return (
    <div className='w-full h-1/6 flex items-center justify-center'>
        <button onClick={()=>{update()}} className='w-60 h-10 bg-[#1bafe9] rounded-sm flex items-center justify-center font-bold text-white text-xl hover:scale-105 duration-300 cursor-pointer  hover:bg-[#98FB98]'>Update</button>
    </div>
  )
}

export default UpdateVideoBTN