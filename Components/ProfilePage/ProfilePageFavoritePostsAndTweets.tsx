import React from 'react'

function ProfilePageFavoritePostsAndTweets() {
  return (
    <div className='ProfilePageFavoritePosts my-6'>
        <p className='w-full h-12 font-semibold flex items-center justify-center text-white text-xl'>Posts and Tweets wich people Liked Mosts</p>
        
        <div className='w-full h-5/6 flex justify-center flex-wrap items-start'>

            <div className='w-32 hover:scale-110 duration-200 cursor-pointer h-36 shadow-lg m-2'>
                <img className='w-full h-3/5'></img>
                <p className='w-full h-2/5 text-center flex items-center justify-center text-sm font-semibold text-white'>Post from Ausgusgsgsg</p>
            </div>

            <div className='w-32 hover:scale-110 duration-200 cursor-pointer h-36 shadow-lg m-2'>
                <p className='w-full h-3/5 border-b-2 text-center flex items-center justify-center text-xs font-semibold text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, ea? Nam, dist.</p>
                <p className='w-full h-2/5 text-center flex items-center justify-center text-sm font-semibold text-white'>Tweet from Ausgusgsgsg</p>
            </div>

        </div>
    </div>
  )
}

export default ProfilePageFavoritePostsAndTweets