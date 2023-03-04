"use client"
import { faArrowCircleLeft, faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Post } from '@prisma/client'
import React,{useState,useEffect} from 'react'
import PostPageUpdateButtons from './PostPageUpdateButtons'
import PostPageUpdateForm from './PostPageUpdateForm'
import PostPageUpdatePost from './PostPageUpdatePost'
interface postData{
    post:Post 
    totalComents:number
  }
interface props{
    post:postData,
    userId:string
}

function PostPageUpdateContainer({userId,post}:props) {
    const [Title, setTitle] = useState<string>("")
    const [Category, setCategory] = useState<string>("")
    const [ErrorText, setErrorText] = useState<string>("")
    const [ImgOld, setImgOld] = useState<any>()
    const [ImgNew, setImgNew] = useState<any>()
    const [TotalLikes, setTotalLikes] = useState<number>(0)
    const [TotalComments, setTotalComments] = useState<number>(0)
    useEffect(()=>{
        setTitle(post.post.title)
        setCategory(post.post.placeFrom)
        setImgOld(post.post.img)
        setImgNew(undefined)
        setTotalLikes(post.post.likes.length)
        setTotalComments(post.totalComents)
    },[])
  return (
    <div className='w-full h-screen'>

        <PostPageUpdateButtons setErrorText={setErrorText} postId={post.post.id} userId={userId} Title={Title} Category={Category} ImgNew={ImgNew}/>
        <div className='w-full h-11 flex items-center justify-center'>
            <p className='text-2xl text-red-500 font-bold'>{ErrorText}</p>
        </div>
      <div className='w-full h-5/6 flex items-center justify-around'>


        <PostPageUpdateForm Category={Category} Title={Title} setImgOld={setImgOld} setTitle={setTitle} setCategory={setCategory} setImgNew={setImgNew}/>
        <PostPageUpdatePost TotalLikes={TotalLikes} TotalComments={TotalComments} Title={Title} Category={Category} ImgOld={ImgOld} ImgNew={ImgNew}/>

      </div>

    </div>
  )
}

export default PostPageUpdateContainer