import axios from "axios";
import { useEffect, useState } from "react";

export const FindProfile = () => {
  const [res, setRes] = useState([]);
  useEffect(() => {
    const res = async () => {
      const res1 = await axios.get("/profile/find/all");
      setRes(res1.data);
    };
    res();
  }, []);
  return res;
};
