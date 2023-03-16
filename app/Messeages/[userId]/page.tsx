import ChatContainer from '@/Components/Meseages/ChatContainer'
import CreateChatModal from '@/Components/Meseages/CreateChatModal/CreateChatModal'
import TopOfPage from '@/Components/TopOfPage/TopOfPage'
import TopOfPageChats from '@/Components/TopOfPageChats/TopOfPageChats'
import { faComments, faPenSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import React from 'react'
interface Props {
    params: {
      userId:string
    };
  }

  
interface friendWithImg{
    id: string;
    userName: string; 
    img: string  | null
}


  async function getFriendsToChat(userId:string) {
    const friends = await axios.post("http://localhost:3000/api/getFriendsToChat",{userId:userId})
    return friends.data    
  }
  

 async function page({params:{userId}}:Props) {

    const friends:friendWithImg[] = await getFriendsToChat(userId)
    
  return (
    <div className='w-full h-screen overflow-x-hidden overflow-y-hidden'>
        <TopOfPageChats showSearch   userId={userId}/> 
        <ChatContainer friends={friends} userId={userId}/>
        <CreateChatModal userId={userId} friends={friends}/>

    </div>
  )
}

export default page    