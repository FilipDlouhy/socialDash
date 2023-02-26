import CreateTweet from '@/Components/CreateTweet/CreateTweet'
import TopOfPage from '@/Components/Main/TopOfPage/TopOfPage'
import React from 'react'

function page() {
  return (
    <div>
        <TopOfPage/>
        <CreateTweet/>
    </div>
  )
}

export default page