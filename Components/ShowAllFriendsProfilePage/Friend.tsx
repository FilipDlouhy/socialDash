import React from 'react'
interface friend{
    userId:string,
    userImg:string,
    userName:string
}
interface props{
    friend:friend
}

function Friend({friend}:props) {
  return (
    <div className='AllFriendsModalFriend flex items-center justify-center flex-col hover:shadow-none cursor-pointer duration-300'>
        {friend.userImg && <img src={friend.userImg } className='w-full h-1/2'></img>}

        <div className='w-full h-1/2 flex items-center justify-center'>
            <p className='text-lg font-bold'>{friend.userName}</p>
        </div>
    </div>
  )
}

export default Friend