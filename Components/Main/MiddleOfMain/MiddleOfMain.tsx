import React from 'react'
import "../../../lib/fontawsome"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faArrowLeft,faThumbsUp,faLightbulb, faComment,faLandmark,faSearch,faHome,faMessage,faVideo,faBell,faSun, faPaperPlane, faArrowAltCircleRight, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import PostOnPage from './Post/Post';
import TweetOnPage from './Tweet/Tweet';
import { Post, Tweet, User } from '@prisma/client';
import DisplayStories from '../Stories/DisplayStories';

interface tweet{
    user: User, tweet: Tweet 
  }

interface post{
    user: User, post: Post 
  }


 interface props{
    user:User,
    displayData: (tweet | post )[]
    stories:storyData[]
 }   


 interface storyData
 {
   type:string,
   user:User,
   id:string,
   createdAt:Date
 }
 function MiddleOfMain({displayData,user,stories}:props) {
  return (
    <div className='w-2/4 h-full flex-col flex items-start justify-center'>

        <div className='w-full h-44 flex flex-col mt-10'>
            <p className='text-center my-5 text-lg font-medium text-white'> Recent Posts and Tweets</p>

            <DisplayStories stories={stories}/>
        </div>


        <div className='w-full h-full flex-col flex justify-center items-center '>

        {displayData.map((data) => {
        if ("post" in data) {
          return <PostOnPage key={data.post.id} Post={data} user={user}/>

        } else if ("tweet" in data) {
            return <TweetOnPage key={data.tweet.id} tweet={data} user={user} />
        }
      })}            

        </div>


    </div>
  )
}

export default MiddleOfMain