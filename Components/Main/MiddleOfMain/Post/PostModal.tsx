"use client"
import { faArrowRight,faGear, faHeart, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React,{useState,useContext,useEffect,useRef} from 'react'
import { mainContext } from '@/models';
import { Post, PostComment, Tweet, User } from '@prisma/client';
import axios from 'axios';
import PostModalComment from './PostModalComment';
import PostModalCreateComment from './PostModalCreateComment';
import PostModalLike from './PostModalLike';
import Link from 'next/link';

interface post{
  user: User, post: Post 
}

interface props{user:User}
  
function Modal({user}:props) {  
  const {setShowModalPost} = useContext(mainContext)
  const {post} = useContext(mainContext)
  const {showModalPost} = useContext(mainContext)
  const {story} = useContext(mainContext)
  const {setStory} = useContext(mainContext)
  const {setPost} = useContext(mainContext)
  const [comments,setComments] = useState<PostComment[]>()
  const [totalComments,setTotalComments] = useState<number | undefined>(0)
  const [totalLikes,setTotalLikes] = useState<number | undefined>(0)
  const handleCloseModal = () => {
    setShowModalPost(false);
    if(story)
    {
      setStory(false)
      setPost(undefined)
    }

  };

  useEffect(()=>{
    setComments(post?.postComments)
    setTotalComments(post?.postComments?.length)
    setTotalLikes(post?.post.post.likes.length)
  },[post])

  useEffect(()=>{
    setComments(post?.postComments)
    setTotalComments(post?.postComments?.length)
    setTotalLikes(post?.post.post.likes.length)
    if(story)
    {
      setTimeout(() => {
        setStory(false);
      setShowModalPost(false);
      }, 11000);
    }
  },[story])
  return (
          <div>
    
               {showModalPost && (
                  <div className="modal-overlay" onClick={handleCloseModal}>


             <div className="PostModal" onClick={(e) => e.stopPropagation()}>
              { story &&         <div className='progress w-full '>
                                <div className='progress-value'></div>
                              </div>}
                                <div className={story ?'flex w-full postModalHeight' :'flex w-full h-full' }>
                                          <div className='w-2/3 h-full'>
                                              {post?.post.post.img && <img src={post?.post.post.img} className='w-full h-full'></img>}
                                            </div>
                                    <div className='w-1/3 border-l-2 border-black  h-full'>

                                          <div className='w-full h-14 border-b-2 flex justify-between items-center border-black'>

                                                 <Link href={user.id === post?.post.post.userId ?`/ProfilePage/${user.id}`:`/UserPage/${post?.post.post.userId}/${user.id}`} className='w-48 hover:shadow-none duration-200 cursor-pointer modalCommentShadow flex items-center justify-around h-full'>
                                                  {post?.post.user?.img && <img src={post?.post.user.img} className='w-11  h-11 rounded-full'></img>}
                                                  <p className='text-xs lg:text-sm font-semibold'>{post?.post.user?.userName}</p>
                                                </Link>

                                                <div className='w-16 flex items-center justify-center h-full'>
                                                  <p className=' text-sm font-semibold text-center'> From {post?.post.post.placeFrom}</p>
                                                </div>

                                                <div className='w-16 flex items-center justify-between h-full'>
                                                  <FontAwesomeIcon  className='w-5 h-6 text-black mx-5 hvr-pop cursor-pointer'  icon={faGear} />
                                                </div>

                                    </div>


                                          
                                    <div className='w-full h-4/6 modalCommentScroll  border-b-2 border-black'>
                                          {comments&& comments.map((comment)=>{
                                            return <PostModalComment userId={user.id} comment={comment}/>
                                          })}
                                    </div>


                                          
                                    <div className='w-full h-28 mt-4'>
                                      <div className='h-10 p-5 flex justify-start items-center'>
                                          <p className='text-lg font-medium'> <span className='font-semibold  text-xl'>{post?.post.user.userName}:</span>  {post?.post.post.description}</p> 
                                      </div>

                                      <div className='w-full h-10 flex items-center justify-around'>
                                            <p className='text-sm font-medium '>Total Comments: <span className='text-lg font-semibold'>{totalComments}</span></p>
                                            <p className='text-sm font-medium'>Total Likes: <span className='text-lg font-semibold'>{totalLikes}</span></p>
                                      </div>

                                      {!story && <PostModalLike/>}
                                    {!story &&<PostModalCreateComment user={user}/>}
                                    </div>



                                    </div>

                                </div>

                    </div>
          </div>
        )}
    </div>
  )
}

export default Modal