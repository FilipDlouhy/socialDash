import CreatePost from '@/Components/CreatePost/CreatePost'
import CreatePostForm from '@/Components/CreatePost/CreatePostForm'
import TopOfPage from '@/Components/TopOfPage/TopOfPage'
import React from 'react'

function page() {
  return (
    <div>
        <TopOfPage showSearch userId=''/>
        <CreatePost/>
    </div>
  )
}

export default page  