
// PartnerProfile.js
import React, { useState } from "react";
import "./PartnerProfile.css";

export const PartnerProfile = () =>{ 
  const [profile_options_visibility, set_profile_options_visibility] = useState(true)
  const openDropDown = (event)=>{
    event.preventDefault();
    set_profile_options_visibility(!profile_options_visibility)
  }

  const removeProfile=(event)=>{
    event.preventDefault();
    alert("Delete Profile")
  }

  const updateProfile=(event)=>{
    event.preventDefault();
    alert("Delete Profile")
  }

  return(
  <div>
    <form
      action="http://localhost:4001/service/provider/profile"
      method="post"
      enctype="multipart/form-data"
    >
    <div className="profile-area">
      <div onClick={openDropDown} class="circular-input">
        <label for="fileInput" >
          Choose your Photo
        </label>
        <div className="dropDown-update-profile" hidden={profile_options_visibility}>
        <span className="file-taker">Update</span>
        <input type="file"></input>
        <span className="file-taker" onClick={removeProfile}>Delete</span>
      </div>
      </div>
      
    </div>
      <button type="submit">Submit</button>
    </form>
  </div>
);
}

