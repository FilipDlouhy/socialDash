import TopOfPage from '@/Components/Main/TopOfPage/TopOfPage'
import LeftSideOfProfilePage from '@/Components/ProfilePage/LeftSideOfProfilePage'
import MiddleOfPRofilePage from '@/Components/ProfilePage/MiddleOfPRofilePage'
import RightSideOfProfilePage from '@/Components/ProfilePage/RightSideOfProfilePage'
import React from 'react'

async function page() {
  return (
    <div className='w-full h-full'>
        <TopOfPage/>

        <div className='w-full h-full flex'>
            <LeftSideOfProfilePage/>      
            <MiddleOfPRofilePage/>
            <RightSideOfProfilePage/>
        </div>



  </div>
  )
}

export default page