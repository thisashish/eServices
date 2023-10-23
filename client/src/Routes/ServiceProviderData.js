import axios from "axios";
import { useState } from "react";

export const ServiceProviderData = async () => {
  const [user, setUser] = useState([]);

  const fetchuserdata = async () => {
    const userdata = await axios.get("/auth/serviceprovider/data", {
      withCredentials: true,
      headers: {
        Accept: "application.json",
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    });
    setUser(userdata.data);
  };
  fetchuserdata();

  return user;
};
