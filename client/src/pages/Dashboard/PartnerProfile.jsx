// PartnerProfile.js
import React from "react";
import "./PartnerProfile.css";

export const PartnerProfile = () => (
  <div>
    <form
      action="http://localhost:4001/service/provider/profile"
      method="post"
      enctype="multipart/form-data"
    >
      <div class="circular-input">
        <input name="img" type="file" id="fileInput" />
        <label for="fileInput" >
          Choose your Photo
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
);
