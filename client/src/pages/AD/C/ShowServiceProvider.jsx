import React from "react";
import { ServiceProviderFindall } from "../../../API/ServiceProvider/ServiceProviderFind";

const ShowServiceProvider = () => {
  console.log(ServiceProviderFindall());
  return <div>ShowServiceProvider</div>;
};

export default ShowServiceProvider;
