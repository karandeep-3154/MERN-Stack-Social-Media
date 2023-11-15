import React from 'react'
import "./ProfileCard.css";
import CoverPic from "../../img/cover.jpg";
import ProfilePic from "../../img/profileImg.jpg";

const  ProfileCard = () => {
  return (
    <div className='ProfileCard'>
    <div className="profileImages">
        <img src={CoverPic} alt=''></img>
        <img src={ProfilePic} alt=''></img>
      </div>
      <div className="ProfileName">
        <span>Zendaya MJ</span>
        <span>Senior UI/UX Designer</span>
      </div>
      <div className="followStatus">
        <hr />
        <div>
          {" "}
          <div className="follow">
            <span>6, 890</span>
            <span>Followings</span>
          </div>
          <div className="vl"></div>
          <div className="follow">
            <span>1</span>
            <span>Followers</span>
          </div>
        </div>
        <hr />
      </div>
      <span>
        My Profile
      </span>
    </div>
  )
}

export default  ProfileCard