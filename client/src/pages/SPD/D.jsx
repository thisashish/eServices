import React, { useState } from "react";
import Account from "./Account";

import ServiceOption from "./ServiceOption";
import MyEarnings from "./MyEarnings";
import Lead from "./Lead";
import Address from "./Address";
import Analytics from "./Analytics";
import { PartnerProfile } from "./PartnerProfile";
import { ShowProfile } from "./ShowProfile";
import { SideMenu } from "./SideMenu";

export const D = () => {
  const [selectedService, setSelectedService] = useState(null);

  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  return (
    <>
      <h1>hii </h1>
      <PartnerProfile />
      <ShowProfile />

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
