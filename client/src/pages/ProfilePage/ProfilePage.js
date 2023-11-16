import React from 'react'
import './ProfilePage.css'

import ProfileLeft from '../../Components/ProfileLeft/ProfileLeft'
import ProfileCard from '../../Components/ProfileCard/ProfileCard'
import RightSide from '../../Components/RightSide/RightSide'
import PostSide from '../../Components/PostSide/PostSide'
const ProfilePage = () => {
  return (
    <div className='Profile'>   
        <ProfileLeft/>
        <div className="Profile-center">
<ProfileCard/>

           <PostSide/>
        </div>

        <RightSide/>
    </div>
  )
}

export default ProfilePage