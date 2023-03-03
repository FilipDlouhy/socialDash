import TopOfPage from '@/Components/TopOfPage/TopOfPage';
import LeftSideOfProfilePage from '@/Components/ProfilePage/LeftSideOfProfilePage/LeftSideOfProfilePage';
import MiddleOfPRofilePage from '@/Components/ProfilePage/MiddleOfProfilePage/MiddleOfPRofilePage';
import RightSideOfProfilePage from '@/Components/ProfilePage/RightSideOfProfilePage/RightSideOfProfilePage';
import React from 'react';
import axios from 'axios';
import { User } from '@prisma/client';
import FriendModalFriend from '@/Components/Main/ShowFriendModal/FriendModalFriend';
import FriendModal from '@/Components/Main/ShowFriendModal/FriendModal';

interface Props {
  params: {
    userId: string;
  };
}

interface UserAndData {
  user: User;
  tweetLength: number;
  postLength: number;
}

async function getUser(userId: string): Promise<UserAndData> {
  const res = await axios.get(`http://localhost:3000/api/getUserProfilePage/${userId}`);
  const userAndData: UserAndData = {
    postLength: res.data.postLength,
    tweetLength: res.data.tweetLength,
    user: res.data.user,
  };
  return userAndData;
}



async function getFriends(userId: string) {
  const res = await axios.get(`http://localhost:3000/api/getFreindsProfilePage/${userId}`);
  const friends:User[] = res.data
  return friends

}

async function getPossibleFriends(userId: string) {
  const res = await axios.post(`http://localhost:3000/api/getPossibleNewFriends`,{userId:userId});
  return res.data
  
}


async function page({ params: { userId } }: Props) {
  const userAndData: UserAndData = await getUser(userId);
  const friends:User[] = await getFriends(userId)
  const totalFriends:number = friends.length 

  return (
    <div className='w-full h-full'>
      <TopOfPage />

      <div className='w-full h-full flex'>
        <LeftSideOfProfilePage friends={friends} totalFriends={totalFriends}  UserAndData={userAndData} />
        <MiddleOfPRofilePage />
        <RightSideOfProfilePage />

      </div>
    </div>
  );
}

export default page;