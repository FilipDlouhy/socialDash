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

interface post{
  user: User, post: Post 
}

interface props{user:User}
  
function Modal({user}:props) {  
  const {setShowModalPost} = useContext(mainContext)
  const {post} = useContext(mainContext)
  const {showModalPost} = useContext(mainContext)
  const [comments,setComments] = useState<PostComment[]>()
  const handleCloseModal = () => {
    setShowModalPost(false);
  };

  useEffect(()=>{
    setComments(post?.postComments)
  },[post])

  return (
          <div>
    
               {showModalPost && (
                  <div className="modal-overlay" onClick={handleCloseModal}>
                            <div className="modal-content flex" onClick={(e) => e.stopPropagation()}>
                                  <div className='w-2/3 h-full'>
                                    {post?.post.post.img && <img src={post?.post.post.img} className='w-full h-full'></img>}
                                   </div>
                          <div className='w-1/3 border-l-2 border-black  h-full'>

                                <div className='w-full h-14 border-b-2 flex justify-between items-center border-black'>

                                      <div className='w-48 hover:shadow-none duration-200 cursor-pointer modalCommentShadow flex items-center justify-around h-full'>
                                        {post?.post.user?.img && <img src={post?.post.user.img} className='w-11  h-11 rounded-full'></img>}
                                        <p className='text-sm font-semibold'>{post?.post.user?.userName}</p>
                                      </div>

                                      <div className='w-16 flex items-center justify-center h-full'>
                                        <p className=' text-sm font-semibold text-center'> From {post?.post.post.placeFrom}</p>
                                      </div>

                                      <div className='w-16 flex items-center justify-between h-full'>
                                        <FontAwesomeIcon  className='w-5 h-6 text-black mx-5 hvr-pop cursor-pointer'  icon={faGear} />
                                      </div>

                          </div>


                                
                          <div className='w-full h-4/5 modalCommentScroll  border-b-2 border-black'>
                                {comments&& comments.map((comment)=>{
                                  return <PostModalComment comment={comment}/>
                                })}
                          </div>


                                
                          <div className='w-full h-20'>
                            <PostModalLike/>      
                            <PostModalCreateComment user={user}/>
                          </div>



                          </div>
                    </div>
          </div>
        )}
    </div>
  )
}

export default Modal