import React, { useEffect, useReducer, useState } from "react";
import { FindCategory } from "../../API/Category/FindCategory";
import { location } from "../Home/Utils";
import useReduserfun from "./useReduserfun";
import { initialState } from "./Utils";
import axios from "axios";
import "./ServiceProviderRegistration.css";
import { ServiceProviderFormOtp } from "./ServiceProviderFormOtp";

export const ServiceProviderForm = () => {
  const Category = FindCategory();
  const [formState, dispatch] = useReducer(useReduserfun, initialState);
  const [showOtpElement, setShowOtpElement] = useState(false);
  const [serviceproviderdata, setServiceproviderdata] = useState([]);

  useEffect(() => {
    const fetchuserdata = async () => {
      const userdata = await axios.get("/SP/login/one", {
        withCredentials: true,
        headers: {
          Accept: "application.json",
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      });
      setServiceproviderdata(userdata.data);
    };
    fetchuserdata();
  }, []);
  console.log(serviceproviderdata);
  const handleTextChange = (name, value) => {
    dispatch({
      type: "Handle Input Change",
      field: name,
      payload: value,
    });
  };
  const handleLocationChange = (e) => {
    const selectedLocations = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    dispatch({
      type: "Handle Input Change",
      field: "location",
      payload: selectedLocations,
    });
  };

  const handleCategoryChange = (e) => {
    const selectedCategories = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    dispatch({
      type: "Handle Input Change",
      field: "category",
      payload: selectedCategories,
    });
  };
  const handleSubmit = async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (
      !formState.name ||
      !formState.phoneno ||
      !formState.pass ||
      formState.location.length === 0 ||
      formState.category.length === 0
    ) {
      alert("Please fill the form fields before submitting.");
      return;
    }
    if (formState.phoneno.length !== 10) {
      alert("Phone no must be 10 characters long");
      return;
    }
    if (formState.pass !== formState.confirmpass) {
      alert("Password not matched.");
      return;
    }
    if (formState.pass.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    }
    if (!emailRegex.test(formState.email)) {
      alert("Invalid email format.");
      return;
    }

    // Perform the submit logic if the fields are valid
    try {
      const res = await axios.post("/serviceprovider/add/sendotp", formState);
      if (res.data === "otp send") {
        setShowOtpElement(true);
      }
      // Handle the response as needed (e.g., show a success message)
    } catch (error) {
      // Handle any errors from the API request
      console.error("Error submitting the form:", error);
    }
  };

  return (
    <>
      {showOtpElement ? (
        <ServiceProviderFormOtp data={formState} />
      ) : (
        <div className="ServiceProviderRegistration1">
          <h1 className="heading">Join Us as a Service-Provider</h1>

          <div className="ServiceProviderRegistration">
            <input
              className="ServiceProviderRegistration_input"
              placeholder="Name"
              onChange={(e) => handleTextChange("name", e.target.value)}
            />
            <input
              className="ServiceProviderRegistration_input"
              placeholder="Enter Your Permanent Address / Shop Address"
              onChange={(e) => handleTextChange("adress", e.target.value)}
              required
              style={{ padding: "1.8rem" }}
            />
            <input
              className="ServiceProviderRegistration_input"
              placeholder="Phone No"
              onChange={(e) => handleTextChange("phoneno", e.target.value)}
            />
            <input
              className="ServiceProviderRegistration_input"
              placeholder="Email"
              type="email"
              onChange={(e) => handleTextChange("email", e.target.value)}
            />
            <input
              className="ServiceProviderRegistration_input"
              placeholder="Password"
              type="password"
              onChange={(e) => handleTextChange("pass", e.target.value)}
            />
            <input
              className="ServiceProviderRegistration_input"
              placeholder="Confirm Password"
              type="password"
              onChange={(e) => handleTextChange("confirmpass", e.target.value)}
            />
            <select
              multiple
              onChange={handleLocationChange}
              value={formState.location}
            >
              <option>Select Location</option>
              {location.map((l) => (
                <option key={l} value={l}>
                  {l}
                </option>
              ))}
            </select>
            <select
              multiple
              onChange={handleCategoryChange}
              value={formState.category}
            >
              <option>Select Category</option>
              {Category.map((c) => (
                <option key={c.id} value={c.name}>
                  {c.name}
                </option>
              ))}
            </select>
            <button type="submit" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      )}
    </>
  );
};
