import { mainContext } from '@/models'
import { faHeart, faPaperPlane, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Tweet, User } from '@prisma/client'
import axios from 'axios'
import { useSession} from 'next-auth/react'
import React,{ useContext,useState,useEffect} from  'react'
interface tweet{
  user: User, tweet: Tweet 
}
function TweetModalLike() {
  const session = useSession()
  const {Tweet} = useContext(mainContext)
  const {setTweet} = useContext(mainContext)
  const [liked,setLiked] = useState<boolean>(false)
  useEffect(()=>{
      if(session.data?.user?.name && Tweet?.tweet.tweet.likes.includes(session.data?.user?.name))
      {
          setLiked(true)
      }
  },[Tweet])

        function likeComment() {
            if (session.data?.user?.name) {
              axios.post(`/api/likeTweet/${session.data?.user?.name}`, { tweetId: Tweet?.tweet.tweet.id })
              let allLikes =Tweet?.tweet.tweet.likes ?? []
              allLikes.push(session.data?.user?.name)
              if (Tweet) {
                const newTweet: Tweet ={
                    id: Tweet.tweet.tweet.id,
                    created_at: Tweet.tweet.tweet.created_at,
                    description: Tweet.tweet.tweet.description,
                    historicalPeriod: Tweet.tweet.tweet.historicalPeriod,
                    title: Tweet.tweet.tweet.title,
                    userId: Tweet.tweet.tweet.userId,
                    likes: allLikes,
                }
                setTweet({ tweet:{tweet:newTweet,user:Tweet.tweet.user},tweetComments:Tweet.tweetComments})             
                setLiked(true)
            }
            }
          }

    function unLikeComment ()
        {
          if (session.data?.user?.name) {
            axios.post(`/api/unLikeTweet/${session.data?.user?.name}`, { tweetId: Tweet?.tweet.tweet.id })
            let allLikes :string[] =[]
            Tweet?.tweet.tweet.likes.map((like)=>{
              if(like!==session.data?.user?.name )
              {
                  allLikes.push(like)
              }
              })
            if (Tweet) {
              const newTweet: Tweet ={
                  id: Tweet.tweet.tweet.id,
                  created_at: Tweet.tweet.tweet.created_at,
                  description: Tweet.tweet.tweet.description,
                  historicalPeriod: Tweet.tweet.tweet.historicalPeriod,
                  title: Tweet.tweet.tweet.title,
                  userId: Tweet.tweet.tweet.userId,
                  likes: allLikes
              }
              setTweet({ tweet:{tweet:newTweet,user:Tweet.tweet.user},tweetComments:Tweet.tweetComments})            
              setLiked(false)
          }
          }

        }
  return (
    <div className=' w-full flex justify-around items-center'>
        <FontAwesomeIcon onClick={()=>{liked ?unLikeComment() : likeComment()}} className={liked ?'duration-200 w-8 h-8 text-red-600 mx-5 hvr-pop cursor-pointer':'duration-200 w-8 h-8 text-black mx-5 hvr-pop cursor-pointer'}  icon={ liked ?faHeart :faThumbsUp} />
        <FontAwesomeIcon className='w-6 h-6 text-black mx-5 hvr-pop cursor-pointer'  icon={faPaperPlane} />
    </div>
  )
}

export default TweetModalLike