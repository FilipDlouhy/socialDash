import React from 'react'

interface props{
    Title:string
    Category:string
    ImgOld: any
    ImgNew: any
    TotalLikes:number
    TotalComments:number
}


function PostPageUpdatePost({TotalLikes, TotalComments,Title ,Category ,ImgOld ,ImgNew}:props) {
  return (
    <div className='UpdatePostPost'>
        <div className='w-full h-1/2'>
           {ImgOld &&  <img src={ ImgOld} className='w-full h-full'></img>}
        </div>

        <div className='w-full h-1/2'>
            <div className='w-full h-1/2 flex flex-col items-center justify-around'>
                <p className='text-2xl text-white font-semibold text-center w-3/4'>Title: {Title}</p>
                <p className='text-2xl text-white font-semibold text-center w-3/4'>Category: {Category}</p>
            </div>

            <div className='w-full h-1/2 flex items-center justify-around'>
                <p className='text-2xl text-white font-semibold'>Likes: {TotalLikes}</p>
                <p className='text-2xl text-white font-semibold'>Comments:{TotalComments}</p>
            </div>

        </div>
  </div>  
  )
}

export default PostPageUpdatePost