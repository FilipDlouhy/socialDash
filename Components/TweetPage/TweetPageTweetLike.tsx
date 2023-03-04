import { faHeart, faPaperPlane, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import React from 'react'




interface props{
    liked:boolean
    setLiked: React.Dispatch<React.SetStateAction<boolean>>
    userId:string
    tweetId:string
}



function TweetPageTweetLike({liked,setLiked,userId,tweetId}:props) {
    
    function like() {
        axios.post(`/api/likeTweet/${userId}`, { tweetId: tweetId }).then((res)=>{ 
          if(res.data.message==="OK")
          {
               setLiked(true)
          }
          
        })
      }

function unLike()
  {
      axios.post(`/api/unLikeTweet/${userId}`, { tweetId: tweetId}).then((res)=>{  
          if(res.data.message==="OK")
          {
              setLiked(false)
          }
          
      })
  }

  return (
    <div className='w-full h-16 flex items-center justify-around'>
      <FontAwesomeIcon onClick={()=>{liked  ? unLike():like() }} className={liked ?'w-10 h-10 text-red-600 hvr-shrink cursor-pointer'  :'w-10 h-10 text-blue-100 hvr-shrink cursor-pointer'  } icon={liked ?faHeart: faThumbsUp} />

        <FontAwesomeIcon  className='w-10 h-10 text-blue-100 hvr-shrink cursor-pointer'  icon={faPaperPlane} />
    </div>
  )
}

export default TweetPageTweetLike