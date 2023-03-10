import React from 'react'

function UserPageFollows() {
  return (
    <div className='UserPageFollows'>
        <div className='w-full h-10 flex items-center justify-center' >
            <p className='text-xl font-semibold text-white'>What Follows</p>

        </div>

        <div className='w-full h-5/6 flex flex-wrap modalCommentScroll'>
            <div className='w-32 m-2 h-40 shadow-2xl hover:shadow-none duration-300 cursor-pointer'>
                    <img className='w-full h-1/2'></img>

                    <div className='w-full h-1/2 flex items-center justify-center'></div>
            </div>
            <div className='w-32 m-2 h-40 shadow-2xl hover:shadow-none duration-300 cursor-pointer'>
                    <img className='w-full h-1/2'></img>

                    <div className='w-full h-1/2 flex items-center justify-center'></div>               
            </div>

        </div>

    </div>
  )
}

export default UserPageFollows