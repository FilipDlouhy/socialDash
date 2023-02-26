import CreatePost from '@/Components/CreatePost/CreatePost'
import CreatePostForm from '@/Components/CreatePost/CreatePostForm'
import TopOfPage from '@/Components/Main/TopOfPage/TopOfPage'
import React from 'react'

function page() {
  return (
    <div>
        <TopOfPage/>
        <CreatePost/>
    </div>
  )
}

export default page