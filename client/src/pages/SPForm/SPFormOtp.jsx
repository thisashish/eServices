import axios from "axios";
import React, { useState } from "react";

export const SPFormOtp = (c) => {
  const [otp, setOtp] = useState("");
  const handleSubmit = async () => {
    const res = await axios.post("/serviceprovider/add/verifyotp", {
      formState: c.data,
      otp: otp,
    });
    if (res.status === 200) {
      window.location.href = "/";
    } else {
      alert(res.data);
    }
  };
  return (
    <>
      <div>
        <input
          placeholder="enter otp"
          onChange={(e) => setOtp(e.target.value)}
        />
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </>
  );
};
