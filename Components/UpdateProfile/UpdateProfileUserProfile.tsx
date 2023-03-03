import React from 'react'
interface props{
  UserName:string | undefined
  Email:string | undefined
  WehereYouLive:string | undefined
  ProfileImgOld:any | undefined
  WhenJoined:string
}

function UpdateProfileUserProfile({WhenJoined,Email,ProfileImgOld,UserName,WehereYouLive}:props) {
  return (
    <div className='UpdateProfileUserProfile'>

        <div className='w-full h-1/2'>
         { ProfileImgOld && <img src={ProfileImgOld} className='w-full h-full'></img>}
        </div>


        <div className='w-full h-1/2 flex'>

            <div className='w-1/2 h-full items-start pl-5 justify-around flex flex-col'>
                <p className='text-2xl font-bold text-white'>Email : {Email}</p>  
                <p className='text-2xl font-bold text-white'>UserName : {UserName}</p>  
            </div>

            <div className='w-1/2 h-full items-start pl-5 justify-around flex flex-col'>
                <p className='text-2xl font-bold text-white'>From : {WehereYouLive}</p>  
                <p className='text-2xl font-bold text-white'>Member since : {WhenJoined.slice(0,10)}</p>  
            </div>



        </div>

    </div>
  )
}

export default UpdateProfileUserProfile