"use client"
import './globals.css'
import { useContext, useState,createContext } from 'react'
import {SessionProvider} from "next-auth/react"
import { mainContext } from '@/models'
import Modal from '@/Components/Main/Post/PostModal'
import { Post, PostComment, Tweet, TweetComment, User } from '@prisma/client'
import axios from 'axios'


interface POST{
  user: User, post: Post 
}
interface post{
   post: POST,postComments:PostComment[] |undefined
}
interface tweet{
  user: User, tweet: Tweet 
}
interface modalTweet{
  tweet: tweet ,tweetComments:TweetComment[]
}

interface showCommentsOrLikesData {
  id:string
  type:string
  LikesOrComments:boolean,
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const [showModalPost, setShowModalPost] = useState<boolean>(false);
  const [showModalTweet, setShowModalTweet] = useState<boolean>(false);
  const [showModalLikesAndComments, setShowModalLikesAndComments] = useState<boolean>(false);
  const [showLikesAndCommentsData, setShowModalLikesAndCommentsData] = useState<showCommentsOrLikesData>();
  const [post, setPost] = useState<post>();
  const [Tweet,setTweet] = useState<modalTweet>()
  const handleOpenModalPost = (userId:string,id:string,commentLength:number) => {
    
    if(post)
    {
      if(post.post.post.id !== id)
      {
          axios.post("/api/getPostModal",{userId:userId,postId:id}).then((res)=>{
            console.log(res.data)

            setPost({post:res.data.post,postComments:res.data.postComment})
            })
       
      }
      if(post.post.post.id === id &&  post.postComments?.length && post.postComments?.length < commentLength)
      {
        axios.post("/api/getPostModalComments",{postId:id}).then((res)=>{

          setPost({post:post.post,postComments:res.data.postComments})
          })
      }
    }
    else
    {

      axios.post("/api/getPostModal",{userId:userId,postId:id}).then((res)=>{
        setPost({post:res.data.post,postComments:res.data.postComment})
        })
   
    }
    setShowModalPost(true);
};
  const handleOpenModalTweet = (userId:string,id:string, commentLength:number) => {
    
    if(Tweet)
    {
      if(Tweet?.tweet.tweet.id !== id)
      {
          axios.post("/api/getTweetModal",{userId:userId,tweetId:id}).then((res)=>{
            console.log(res.data)
            setTweet({tweet:{tweet:res.data.tweet.tweet,user:res.data.tweet.user},tweetComments:res.data.tweetComments})
            })
      
      }
      if(Tweet?.tweet.tweet.id === id && Tweet.tweetComments.length && Tweet.tweetComments.length < commentLength)
      {
        axios.post("/api/getTweetModalComments",{tweetId:id}).then((res)=>{
          console.log(res.data)
          setTweet({tweet:{tweet:Tweet.tweet.tweet,user:Tweet.tweet.user},tweetComments:res.data.tweetComments})
          })
      }
    }
    else
    {

      axios.post("/api/getTweetModal",{userId:userId,tweetId:id}).then((res)=>{
        console.log(res.data)
        setTweet({tweet:{tweet:res.data.tweet.tweet,user:res.data.tweet.user},tweetComments:res.data.tweetComments})
        })
    }
    setShowModalTweet(true);
  };


  const handleOpenShowLikesOrComments = (id:string,type:string,LikesOrComments:boolean) =>
  {
    if( LikesOrComments !== showLikesAndCommentsData?.LikesOrComments ) 
    {
      setShowModalLikesAndComments(true)
      setShowModalLikesAndCommentsData({id:id,type:type,LikesOrComments:LikesOrComments})

    }
    else if(showLikesAndCommentsData?.id === id)
    {
      setShowModalLikesAndComments(true)
    }
    else
    {
      setShowModalLikesAndComments(true)
      setShowModalLikesAndCommentsData({id:id,type:type,LikesOrComments:LikesOrComments})
    }
  }

  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <mainContext.Provider value={{showModalLikesAndComments,setShowModalLikesAndComments,showLikesAndCommentsData,setShowModalLikesAndCommentsData,handleOpenShowLikesOrComments,Tweet,setTweet,post,setPost,showModalTweet,showModalPost, handleOpenModalTweet,setShowModalTweet,setShowModalPost ,handleOpenModalPost }}>
        <SessionProvider>
          <body className='background'>
            {children}
          </body>
        </SessionProvider>
      </mainContext.Provider>
    </html>
  )
}
