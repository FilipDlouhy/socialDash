import React from 'react'
import "../../lib/fontawsome"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faArrowLeft,faThumbsUp,faLightbulb, faComment,faLandmark,faSearch,faHome,faMessage,faVideo,faBell,faSun, faPaperPlane, faArrowAltCircleRight, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import PostOnPage from './Post/Post';
import TweetOnPage from './Tweet/Tweet';
import { Post, Tweet, User } from '@prisma/client';

interface tweet{
    user: User, tweet: Tweet 
  }

interface post{
    user: User, post: Post 
  }


 interface props{
    user:User,
    displayData: (tweet | post )[]
 }   



 function MiddleOfMain({displayData,user}:props) {
  return (
    <div className='w-2/4 h-full flex-col flex items-start justify-center'>

        <div className='w-full h-44 flex flex-col mt-10'>
            <p className='text-center my-5 text-lg font-medium text-white'> Recent Posts</p>

            <div className='w-full flex px-32'>

            <FontAwesomeIcon className='w-8 h-12 text-blue-100 mx-5 hvr-pop cursor-pointer'  icon={faArrowLeft} />


                <div className='w-5/6 justify-around flex px-4'>
                    <div className='h-24 w-24 rounded-full'>
                        <img className='w-full h-full rounded-full'></img>
                    </div>
                    <div className='h-24 w-24 rounded-full'>
                        <img className='w-full h-full rounded-full'></img>
                    </div>
                    <div className='h-24 w-24 rounded-full'>
                        <img className='w-full h-full rounded-full'></img>
                    </div>
       
                </div>

            <FontAwesomeIcon  className='w-8 h-12 text-blue-100 mx-5 hvr-pop cursor-pointer'  icon={faArrowRight} />

            </div>    

        </div>


        <div className='w-full h-full flex-col flex justify-center items-center '>

        {displayData.map((data) => {
        if ("post" in data) {
          // This is a Post item
          return <PostOnPage key={data.post.id} Post={data} user={user}/>

        } else if ("tweet" in data) {
          // This is a Tweet item
            return <TweetOnPage key={data.tweet.id} tweet={data} user={user} />
        }
      })}            

        </div>


    </div>
  )
}

export default MiddleOfMain