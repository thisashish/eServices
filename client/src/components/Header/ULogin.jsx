import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import { sentOtpFunction } from "../../services/Apis";
// import Spinner from "react-bootstrap/Spinner";
// import "../styles/mix.css";
import "./ULogin.css";
export const ULogin = ({ toggleULoginPopup }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [spiner, setSpiner] = useState(false);

  const navigate = useNavigate();

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // sendotp
  // const sendOtp = async (e) => {
  //   e.preventDefault();

  //   if (email === "") {
  //     // toast.error("Enter Your Email !");
  //   } else if (!email.includes("@")) {
  //     // toast.error("Enter Valid Email !");
  //   } else {
  //     setSpiner(true);
  //     const data = {
  //       email: email,
  //     };

  //     const response = await sentOtpFunction(data);

  //     if (response.status === 200) {
  //       setSpiner(false);
  //       navigate("/user/otp", { state: email });
  //     } else {
  //       // toast.error(response.response.data.error);
  //     }
  //   }
  // };

  return (
    <>
      <div className="ulogin">
        <h1>Log In</h1>
        <p>Please login to continue</p>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Email Address"
        />
        <input
          type="password"
          placeholder="Password"
          // value={this.state.password}
          // onChange={this.handlePasswordChange}
        />
        {/* onClick={sendOtp} */}
        <button className="btn">Login</button>
        <p>
          Don't have account
          <a
            href="#"
            onClick={() => {
              toggleULoginPopup();
            }}
          >
            Sign up
          </a>
        </p>
      </div>
      {/* <ToastContainer /> */}
    </>
  );
};
