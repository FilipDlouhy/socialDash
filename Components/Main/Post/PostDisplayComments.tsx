import React from 'react'
import PostComment from './PostComment';

interface props{
    comments:Comment[] 
  }
  interface Comment
{
    text:string,
    userId:string,
    userImg:string,
    postId:String
    userName:String
}
function PostDisplayComments({comments}:props) {

    function renderComments() {
        let count = 1;
        return comments.map((comment, index) => {
          if (count < 7) {
            count++;
            return <PostComment key={index} comment={comment} />;
          }
        });
      }


  return (
    <div className='w-full flex shadow-md h-40'>
        <div className='h-full w-full flex flex-wrap '>
                {renderComments()}
        </div>
</div> 
  )
}

export default PostDisplayComments