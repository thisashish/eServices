import React, { useEffect, useState } from "react";
import Account from "../SPD/Account";

import ServiceOption from "../SPD/ServiceOption";
import MyEarnings from "../SPD/MyEarnings";
import Lead from "../SPD/Lead";
import Address from "../SPD/Address";
import Analytics from "../SPD/Analytics";
import { PartnerProfile } from "../SPD/PartnerProfile";
import { ShowProfile } from "../SPD/ShowProfile";
import axios from "axios";
import UploadProfilePic from "../SPD/UploadProfilePic";


export const D = () => {
  const [SPdata, setSPdata] = useState([]);
  const [selectedService, setSelectedService] = useState(null);
  useEffect(() => {
    const findspdata = async () => {
      const res = await axios.get("/SP/find/one", {
        withCredentials: true,
        headers: {
          Accept: "application.json",
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      });
      setSPdata(res.data);
    };
    findspdata();
  }, []);
  const handleServiceClick = (service) => {
    setSelectedService(service);
  };
  const handleLogout = async () => {
    const res = await axios.get("/SP/add/logout", {
      withCredentials: true,
      headers: {
        Accept: "application.json",
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    });

    if (res.data === "Success") {
      window.location.href = "/";
    } else {
    }
  };

  return (
    <>
      <h1>hii {SPdata.name}</h1>
      <button onClick={handleLogout}>Logout</button>
      {/* <PartnerProfile /> */}
      <UploadProfilePic/>
      <ShowProfile />
``
      <ServiceOption
        title="Earning"
        onClick={() => handleServiceClick("MyEarnings")}
      />
      <ServiceOption
        title="Account"
        onClick={() => handleServiceClick("Account")}
      />
      <ServiceOption title="Lead" onClick={() => handleServiceClick("Lead")} />
      <ServiceOption
        title="Analytics"
        onClick={() => handleServiceClick("Analytics")}
      />
      <ServiceOption
        title="Address"
        onClick={() => handleServiceClick("Address")}
      />

      {selectedService === "MyEarnings" && <MyEarnings />}
      {selectedService === "Account" && <Account />}
      {selectedService === "Lead" && <Lead />}
      {selectedService === "Analytics" && <Analytics />}
      {selectedService === "Address" && <Address />}
    </>
  );
};
