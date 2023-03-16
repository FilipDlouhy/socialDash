import { mainContext } from '@/models'
import { faHeart, faPaperPlane, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import React,{useContext} from 'react'




interface props{
    liked:boolean
    setLiked: React.Dispatch<React.SetStateAction<boolean>>
    userId:string
    tweetId:string
}



function TweetPageTweetLike({liked,setLiked,userId,tweetId}:props) {
    const {setShowSendPostTweet} =  useContext(mainContext)
    const {setLink} =  useContext(mainContext)

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
    <div className='w-full h-9 md:h-16 flex items-center justify-around'>
      <FontAwesomeIcon onClick={()=>{liked  ? unLike():like() }} className={liked ?'w-7 h-7 lg:w-10 lg:h-10 text-red-600 hvr-shrink cursor-pointer'  :'lg:w-10 w-7 h-7  lg:h-10 text-blue-100 hvr-shrink cursor-pointer'  } icon={liked ?faHeart: faThumbsUp} />

        <FontAwesomeIcon  onClick={()=>{
        setShowSendPostTweet(true)
        setLink(`/TweetPage/${tweetId}/`)
    }} className='lg:w-10 w-7 h-7  lg:h-10 text-blue-100 hvr-shrink cursor-pointer'  icon={faPaperPlane} />
    </div>
  )
}

export default TweetPageTweetLike  