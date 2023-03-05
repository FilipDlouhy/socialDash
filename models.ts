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
    handleOpenModalPost: (story: boolean, userId: string, id: string, commentLength: number | undefined) => void
    showModalPost: boolean
    setShowModalTweet: React.Dispatch<React.SetStateAction<boolean>>,
    handleOpenModalTweet:  (story: boolean, userId: string, id: string, commentLength: number | undefined) => void
    showModalTweet: boolean,
    post:post |undefined,
    setPost:Dispatch<SetStateAction<post | undefined>>
    Tweet: modalTweet | undefined
    setTweet: Dispatch<SetStateAction<modalTweet | undefined>>
    showModalLikesAndComments: boolean,
    setShowModalLikesAndComments: Dispatch<SetStateAction<boolean>>,
    showLikesAndCommentsData: showCommentsOrLikesData | undefined,
    setShowModalLikesAndCommentsData:Dispatch<SetStateAction<showCommentsOrLikesData | undefined>>,
    handleOpenShowLikesOrComments:(id: string, type: string, LikesOrComments: boolean) => void,
    story:boolean,
    setStory:Dispatch<SetStateAction<boolean>>,
    showModalFriend: boolean
    setShowModalFriend: React.Dispatch<React.SetStateAction<boolean>>,
    friend:string | undefined
    setFriend:Dispatch<SetStateAction<string | undefined>>
    seeAllFriends: boolean
    setSeeAllFriends: React.Dispatch<React.SetStateAction<boolean>>,
    color:string
    setColor:React.Dispatch<React.SetStateAction<string>>,
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
    handleOpenShowLikesOrComments:()=>{},
    story:false,
    setStory:()=>{},
    showModalFriend:false,
    setShowModalFriend:()=>{},
    friend:undefined,
    setFriend:()=>{},
    seeAllFriends:false,
    setSeeAllFriends:()=>{},
    color:"",
    setColor:()=>{}
  })