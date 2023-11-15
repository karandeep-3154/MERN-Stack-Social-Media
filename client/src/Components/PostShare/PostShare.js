import './PostShare.css';
import React, { useState, useRef } from "react";
import ProfileImage from '../../img/profileImg.jpg'

// For Understanding Ref hook, watch https://www.youtube.com/watch?v=zdQQraZEgnc

//Basically, Ref hook is used to target some DOM element and have its reference in a variable directly with us and use this reference whenever needed

// The onClick handler for the "Photo" option (onClick={() => imageRef.current.click()}) triggers a click on the hidden file input element, allowing the user to select a photo.
// The hidden file input (<input type="file" name="myImage" ref={imageRef} onChange={onImageChange} />) is used to allow the user to choose an image file.

// If an image is selected (image state is not null), a preview section is displayed below the options.
// The preview section includes a close button (<UilTimes onClick={() => setImage(null)} />) to clear the selected image, and an image tag displaying the preview.

import { UilScenery } from "@iconscout/react-unicons";
import { UilPlayCircle } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";
import { UilSchedule } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";

const PostShare = () => {

    const [image, setImage] = useState(null);
    const imageRef = useRef();
  
    const onImageChange = (event) => {
      if (event.target.files && event.target.files[0]) {
        let img = event.target.files[0];
        setImage({
          image: URL.createObjectURL(img),
        });
      }
    };

  return (
    <div className='PostShare'>

        <img src={ProfileImage} alt="" />
        <div>
        <input type="text" placeholder="What's happening" />

        <div className="postOptions">
          <div className="option" style={{ color: "var(--photo)" }}  onClick={()=>imageRef.current.click()}>
            <UilScenery />
            Photo
          </div>
          <div className="option" style={{ color: "var(--video)" }}>
            <UilPlayCircle />
            Video
          </div>{" "}
          <div className="option" style={{ color: "var(--location)" }}>
            <UilLocationPoint />
            Location
          </div>{" "}
          <div className="option" style={{ color: "var(--shedule)" }}>
            <UilSchedule />
            Schedule
          </div>
          <button className="button ps-button">Share</button>
          <div style={{ display: "none" }}>
            <input type="file" ref={imageRef} name="myImage" onChange={onImageChange} />
          </div>
        </div>
        {image && (

<div className="previewImage">
  <UilTimes onClick={()=>setImage(null)}/>
  <img src={image.image} alt="" />
</div>

)}
      </div>
    </div>
  )
}

export default PostShare