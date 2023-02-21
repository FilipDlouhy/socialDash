import { mainContext } from '@/models'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { TweetComment, User } from '@prisma/client'
import axios from 'axios'
import React,{useState,useContext} from 'react'
import uuid from 'react-uuid'


interface props{user:User}

function TweetModalCreateComment( {user}:props) {
  const {Tweet} = useContext(mainContext)
  const {setTweet} = useContext(mainContext)
  const [comment,setComment] = useState<string>()
  function addComment ()
    {
      if(Tweet && comment)
      {
        let id = uuid()
        const newComment: TweetComment = {
          id: id, // assign a unique id to the comment
          text: comment,
          userId: user.id,
          tweetId:Tweet.tweet.tweet.id,
          userName: user.userName,
          created_at: new Date() // set the current timestamp
        };

         axios.post("/api/createTweetComment",newComment)
         let oldComents = Tweet.tweetComments
         oldComents?.unshift(newComment)
         setTweet({tweet:Tweet.tweet,tweetComments:oldComents})
         setComment("")
      }
    }
  return (
    <div className='w-full h-1/2 flex items-center justify-around'>                
        <input value={comment} onChange={(e)=>{setComment(e.target.value)}}  className='w-52 bg-transparent modalCommentShadow text-black font-light text-center  hover:shadow-lg duration-200 focus:shadow-xl  focus:outline-none' placeholder='Send a comment....'></input>
        <FontAwesomeIcon onClick={()=>{addComment()}} className='w-6 h-6 text-black mx-5 hvr-pop cursor-pointer'  icon={faArrowRight} />
    </div>
  )
}

export default TweetModalCreateComment