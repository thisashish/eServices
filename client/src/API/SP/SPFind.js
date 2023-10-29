import axios from "axios";
import { useEffect, useState } from "react";

export const SPFindall = async () => {
  const [allSP, setAllSP] = useState([]);
  useEffect(() => {
    const hi = async () => {
      const data = await axios.get("/SP/find/all");
      setAllSP(data.data);
    };
    hi();
  }, []);
  return allSP;
};
