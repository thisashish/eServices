import axios from "axios";
import { useEffect, useState } from "react";

export const ServiceProviderFindall = async () => {
  const [allserviceprovider, setAllserviceprovider] = useState([]);
  useEffect(() => {
    const hi = async () => {
      const data = await axios.get("/serviceprovider/find/all");
      setAllserviceprovider(data.data);
    };
    hi();
  }, []);
  return allserviceprovider;
};
