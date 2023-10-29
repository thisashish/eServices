import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import { sentOtpFunction } from "../../services/Apis";
// import Spinner from "react-bootstrap/Spinner";
// import "../styles/mix.css";
import "./ULogin.css";
export const ULogin = ({ onClose }) => {
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
        <div className="form_data">
          <div className="form_heading">
            <h1>Welcome Back, Log In</h1>
            <p>Hi, we are you glad you are back. Please login.</p>
          </div>
          <form>
            <div className="form_input">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id=""
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Your Email Address"
              />

              <input
                type="password"
                id="password"
                // value={this.state.password}
                // onChange={this.handlePasswordChange}
              />
            </div>
            {/* <button className="btn" onClick={sendOtp}> */}
            Login
            {/* {spiner ? (
                <span>
                  <Spinner animation="border" />
                </span>
              ) : (
                ""
              )} */}
            {/* </button> */}
            <p>
              Don't have and account <NavLink to="/register">Sign up</NavLink>{" "}
            </p>
          </form>
        </div>
        {/* <ToastContainer /> */} <button onClick={onClose}>Close</button>
      </div>{" "}
    </>
  );
};
