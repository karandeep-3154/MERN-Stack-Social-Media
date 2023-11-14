import React from 'react'
import  './Home.css'
import ProfileSide from '../../Components/ProfileSide/ProfileSide'
const Home = () => {
  return (
    <div className='Home'>
        <div className="profileSide"><ProfileSide/></div>
        <div className="postSide">Posts</div>
        <div className="rightSide">Right</div>
    </div>
  )
}

export default Home