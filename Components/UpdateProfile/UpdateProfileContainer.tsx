"use client"
import { User } from '@prisma/client'
import React,{useState,useEffect} from 'react'
import UpdateProfileButtons from './UpdateProfileButtons'
import UpdateProfileForm from './UpdateProfileForm'
import UpdateProfileUserProfile from './UpdateProfileUserProfile'

interface props{
  user:User
}

function UpdateProfileContainer({user}:props) {
  const [UserName, setUserName] = useState<string>()
  const [Email, setEmail] = useState<string>()
  const [Password, setPassword] = useState<string>()
  const [ConfrimPassword, setConfrimPassword] = useState<string>()
  const [WehereYouLive, setWehereYouLive] = useState<string>()
  const [ErrorTittle, setErrorTittle] = useState<string>()
  const [ProfileImgOld, setProfileImgOld] = useState<any>()
  const [ProfileImgNew, setProfileImgNew] = useState<any>()

  useEffect(()=>{
    setUserName(user.userName)
    setEmail(user.email)
    setPassword("")
    setConfrimPassword("")
    setWehereYouLive(user.placeToLive)
    setProfileImgOld(user.img)
  },[])

  return (
    <div className='w-full h-screen '>
        <div className='w-full h-5/6 flex  items-center justify-around'>
            <UpdateProfileForm  UserName={UserName} Email={Email} WehereYouLive={WehereYouLive} setUserName={setUserName} setEmail={setEmail} setPassword={setPassword} setConfrimPassword={setConfrimPassword} setWehereYouLive={setWehereYouLive} setProfileImgOld={setProfileImgOld} setProfileImgNew={setProfileImgNew} />


            <UpdateProfileUserProfile WhenJoined={user.created_at.toString()} UserName={UserName} Email={Email} WehereYouLive={WehereYouLive} ProfileImgOld={ProfileImgOld} /> 
        </div>

        <UpdateProfileButtons userId={user.id} ProfileImgOld={ProfileImgOld} ProfileImgNew={ProfileImgNew} UserName={UserName} Email={Email} Password={Password} ConfrimPassword={ConfrimPassword} WehereYouLive={WehereYouLive} ErrorTittle={ErrorTittle} setErrorTittle={setErrorTittle} />
    </div>
  )
}

export default UpdateProfileContainer