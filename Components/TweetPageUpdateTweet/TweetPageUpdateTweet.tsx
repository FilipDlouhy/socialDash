import React from 'react'



interface props{
    Title: string
    Category: string
    Text: string
    TotalComments:number
    TotalLikes:number
}

function TweetPageUpdateTweet({TotalLikes,TotalComments,Category,Text,Title}:props) {
  return (
    <div className='TweetUpdateTweer'>
        <div className='h-1/6 flex items-center justify-center'>
            <p className='text-xl font-semibold text-white'>{Title}</p>
        </div>

        <div className='px-2 h-4/6 border-b-2 border-b-white border-t-2 border-t-white flex items-center justify-center'>
            <textarea value={Text} disabled  className='resize-none w-full h-full bg-transparent flex justify-center items-center  font-semibold text-white'></textarea>
        </div>

        <div className='h-1/6 flex items-center justify-around'>
                <p className='text-lg font-semibold text-white'>Total Comments {TotalComments} </p>
                <p className='text-lg font-semibold text-white'>Category: {Category}</p>
                <p className='text-lg font-semibold text-white'>Total Likes:{TotalLikes}</p>
        </div>

    </div>
  )
}

export default TweetPageUpdateTweet