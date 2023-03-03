"use client"
import { faArrowRight, faHeart, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Post, PostComment, User } from '@prisma/client'
import axios from 'axios'
import { useSession } from 'next-auth/react'
import React, {useState,useEffect} from 'react'
import PostPageComment from './PostPageComment'
import PostPageCreateComment from './PostPageCreateComment'
import PostPageLike from './PostPageLike'
import PostPageProfile from './PostPageProfile'

interface post{
    user: User, post: Post 
}
interface props
{
    post:post
    postComments:PostComment[],
    user:User
}

function PostPagePost({user,post,postComments}:props) {
    const [comments,setComments] = useState<PostComment[]>([])
    const [liked,setLiked] = useState<boolean>(false)

       
    useEffect(()=>{
        if(post.post.likes.includes(user.id))
        {
            setLiked(true)
            
        }
        else
        {
            setLiked(false)
        }
        setComments(postComments)
    },[])

  return (
    <div className='PostPagePost flex '>
            <div className='w-2/3 h-full'> 
               {post.post.img && <img src={post.post.img} className='w-full h-full'></img>}
            </div>

            <div className='w-1/3 h-full '>
                <PostPageProfile form={post.post.placeFrom} user={post.user}/>

                <div className=' modalCommentScroll w-full h-3/5  border-b-2 border-white'>

                        {comments&& comments.map((coment)=>{
                            return <PostPageComment comment={coment}/>
                        })}

                </div>



                <div className='w-full h-1/4'>

                      <PostPageLike postId={post.post.id} userId={user.id} liked={liked} setLiked={setLiked}/>       
            
                      <PostPageCreateComment postId={post.post.id} user={user} comments={comments} setComments={setComments} />      

                </div>
            </div>
    </div>
  )
}

export default PostPagePost