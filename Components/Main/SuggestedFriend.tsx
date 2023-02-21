import React from 'react'

function SuggestedFriend() {
  return (
    <div className='SuggestedFriend'>
        <div className='h-9 flex justify-center items-center w-full  border-b-2 mb-5'>
            <h1 className='font-medium text-xl text-white'>Suggested Friends</h1>
        </div>

        <div className='w-full h-3/4 px-3 flex justify-center items-start flex-wrap'>
            <div className='hover:scale-110 cursor-pointer duration-200 flex justify-around items-center w-2/5 h-1/4 m-1 rounded-md shadow-md '>
                <img className='h-10 w-10 rounded-full'></img>
                <p className='text-white text-sm font-medium'>asdsadasdasd</p>    
            </div>

        </div>

    </div>
  )
}

export default SuggestedFriend