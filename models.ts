import { Post, PostComment, Tweet, TweetComment, User } from '@prisma/client';
import { SetStateAction } from 'react';
import { Dispatch } from 'react';
import { createContext } from 'react';

interface POST{
  user: User, post: Post 
}
interface post{
   post: POST,postComments:PostComment[] |undefined
}
interface modalTweet{
   tweet: tweet ,tweetComments:TweetComment[]
}interface tweet{
  user: User, tweet: Tweet 
}
interface showCommentsOrLikesData {
  id:string
  type:string
  LikesOrComments:boolean,
}

export type MainContext = {
    setShowModalPost: React.Dispatch<React.SetStateAction<boolean>>,
    handleOpenModalPost:(userId: string, id: string, commentLength: number) => void
    showModalPost: boolean
    setShowModalTweet: React.Dispatch<React.SetStateAction<boolean>>,
    handleOpenModalTweet: (userId: string, id: string, commentLength: number) => void
    showModalTweet: boolean,
    post:post |undefined,
    setPost:Dispatch<SetStateAction<post | undefined>>
    Tweet: modalTweet | undefined
    setTweet: Dispatch<SetStateAction<modalTweet | undefined>>
    showModalLikesAndComments: boolean,
    setShowModalLikesAndComments: Dispatch<SetStateAction<boolean>>,
    showLikesAndCommentsData: showCommentsOrLikesData | undefined,
    setShowModalLikesAndCommentsData:Dispatch<SetStateAction<showCommentsOrLikesData | undefined>>,
    handleOpenShowLikesOrComments:(id: string, type: string, LikesOrComments: boolean) => void
  }
  export const mainContext = createContext<MainContext>({
    setShowModalPost:()=>{},
    handleOpenModalPost:()=>{},
    showModalPost:false,
    setShowModalTweet:()=>{},
    handleOpenModalTweet:()=>{},
    showModalTweet:false,
    post:undefined,
    setPost:()=>{},
    Tweet:undefined,
    setTweet:()=>{},
    showModalLikesAndComments:false,
    setShowModalLikesAndComments:()=>{},
    showLikesAndCommentsData:undefined,
    setShowModalLikesAndCommentsData:()=>{},
    handleOpenShowLikesOrComments:()=>{}
  })