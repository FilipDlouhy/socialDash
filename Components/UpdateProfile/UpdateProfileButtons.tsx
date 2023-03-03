"use client"
import { User } from '@prisma/client'
import axios from 'axios'
import { profile } from 'console'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

interface props{
    UserName:string | undefined
    Email:string | undefined
    Password:string | undefined
    ConfrimPassword:string | undefined
    WehereYouLive:string | undefined
    ErrorTittle:string | undefined
    setErrorTittle:React.Dispatch<React.SetStateAction<string | undefined>>
    ProfileImgOld:any
    ProfileImgNew:any
    userId:string
}


function UpdateProfileButtons({userId,UserName, Email, Password, ConfrimPassword, WehereYouLive, ErrorTittle, setErrorTittle, ProfileImgOld,ProfileImgNew}:props) {

    const router = useRouter()
    async  function UpdateUser(){
        if(Password && ConfrimPassword)
        {
            if(Password === ConfrimPassword)
            {

                const userName = UserName
                const email = Email
                const password = Password
                const wehereYouLive = WehereYouLive
                
                if(ProfileImgNew)
                {
                    const updateUser= {
                        userName:userName,
                        email:email,
                        password:password,
                        wehereYouLive:wehereYouLive,
                        profileImg:ProfileImgNew,
                        userId:userId
                    }

                    const formData = new FormData();
  
   
                    formData.append('file', updateUser.profileImg);
                
                    formData.append('upload_preset', 'historia-invicta');
              
                    const data = await fetch('https://api.cloudinary.com/v1_1/dnhqwtuev/image/upload', {
                      method: 'POST',
                      body: formData
                    }).then(r => r.json())
                
                    let img =data.secure_url;
                    updateUser.profileImg = img
                    axios.post("/api/updateUserWithImg",updateUser).then((res)=>{
                        if(res.data.message==="OK")
                        {
                            router.push(`/ProfilePage/${userId}`)
                        }
                        else
                        {
                            setErrorTittle("Something Went wrong please try again")
                        }
                    })    

                }
                else
                {
                    const updateUser= {
                        userName:userName,
                        email:email,
                        password:password,
                        wehereYouLive:wehereYouLive,
                        userId:userId
                    }

  

                
                    axios.post("/api/updateUserWithoutImg",updateUser).then((res)=>{
                        if(res.data.message==="OK")
                        {
                            router.push(`/ProfilePage/${userId}`)
                        }
                        else
                        {
                            setErrorTittle("Something Went wrong please try again")
                        }
                    })    

                }

            } 
            else
            {
                setErrorTittle("Password DO NOT MATCH")
            } 
        }
        else if(Password)
        {
            setErrorTittle("Fill confirm password")
        }
        else if(ConfrimPassword)
        {
            setErrorTittle("Fill password")
        }
        else
        {
            
            const userName = UserName
            const email = Email
            const wehereYouLive = WehereYouLive
               
            if(ProfileImgNew)
            {
                const updateUser= {
                    userName:userName,
                    email:email,
                    wehereYouLive:wehereYouLive,
                    profileImg:ProfileImgNew,
                    userId:userId
                }

                const formData = new FormData();


                formData.append('file', updateUser.profileImg);
            
                formData.append('upload_preset', 'historia-invicta');
          
                const data = await fetch('https://api.cloudinary.com/v1_1/dnhqwtuev/image/upload', {
                  method: 'POST',
                  body: formData
                }).then(r => r.json())
            
                let img =data.secure_url;
                updateUser.profileImg = img
                axios.post("/api/updateUserWithImgNoPassword",updateUser).then((res)=>{
                    if(res.data.message==="OK")
                    {
                        router.push(`/ProfilePage/${userId}`)
                    }
                    else
                    {
                        setErrorTittle("Something Went wrong please try again")
                    }
                })    

            }
            else
            {
                const updateUser= {
                    userName:userName,
                    email:email,
                    wehereYouLive:wehereYouLive,
                    userId:userId
                }



            
                axios.post("/api/updateUserWithoutImgNoPassword",updateUser).then((res)=>{
                    if(res.data.message==="OK")
                    {
                        router.push(`/ProfilePage/${userId}`)
                    }
                    else
                    {
                        setErrorTittle("Something Went wrong please try again")
                    }
                })    

            }
        }
    }

  return (
    <div className='w-full h-32 flex justify-around items-center'>
        <Link href={`/ProfilePage/${userId}`} className='hover:shadow-none hover:bg-transparent duration-300 cursor-pointer  w-64 rounded-sm h-14 flex items-center justify-center text-2xl font-bold text-white shadow-lg  bg-[#8bc34a]'>Go Back</Link>

            <p className='flex items-center justify-center w-52 h-32 text-2xl font-extrabold text-red-600'>{ErrorTittle}</p>

        <button onClick={()=>{UpdateUser()}} className='hover:shadow-none hover:bg-transparent duration-300 cursor-pointer  w-64 rounded-sm h-14 flex items-center justify-center text-2xl font-bold text-white shadow-lg bg-[#8bc34a]'>Update</button>
    </div>
  )
}

export default UpdateProfileButtons