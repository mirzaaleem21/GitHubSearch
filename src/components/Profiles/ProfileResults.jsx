import React, { useContext, useState } from 'react'
import Spinner from '../UI/Spinner';
import ProfileItem from './ProfileItem';
import GithubContext from '../../context/GithubContext';
const ProfileResults = () => {

        const {users,loading,fetchUsers}=useContext(GithubContext)


if(!loading){
  return (
    <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>

        {users.map((user)=>(
            <ProfileItem key={user.id} user={user}/>
        ))}

    </div>
    
    )
  }else{
      return <Spinner/>
  }
}

export default ProfileResults