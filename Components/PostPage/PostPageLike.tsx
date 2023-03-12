import { mainContext } from '@/models'
import { faHeart, faPaperPlane, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import React,{useContext} from 'react'

interface props{
    liked:boolean
    setLiked: React.Dispatch<React.SetStateAction<boolean>>
    userId:string
    postId:string
}

function PostPageLike({postId,userId,liked,setLiked}:props) {

  const {setShowSendPostTweet} =  useContext(mainContext)
  const {setLink} =  useContext(mainContext)

    function like() {
          axios.post(`/api/likePost/${userId}`, { postId: postId }).then((res)=>{ 
            console.log(res.data)      
            if(res.data.message==="OK")
            {
                 setLiked(true)
            }
            
          })
        }

function unLike()
    {
        axios.post(`/api/unLikePost/${userId}`, { postId: postId}).then((res)=>{  
            console.log(res.data)           
            if(res.data.message==="OK")
            {
                setLiked(false)
            }
            
        })
    }


  return (
    <div className='w-full flex items-center justify-around h-1/2'>
        <FontAwesomeIcon onClick={()=>{liked  ? unLike():like() }} className={liked ?'w-12 h-12 text-red-600 hvr-shrink cursor-pointer'  :'w-12 h-12 text-blue-100 hvr-shrink cursor-pointer'  } icon={liked ?faHeart: faThumbsUp} />

        <FontAwesomeIcon onClick={()=>{
        setShowSendPostTweet(true)
        setLink(`/PostPage/${postId}/`)
    }}  className='w-12 h-12 text-blue-100 hvr-shrink cursor-pointer'  icon={faPaperPlane} />

    </div>
  )
}

export default PostPageLike