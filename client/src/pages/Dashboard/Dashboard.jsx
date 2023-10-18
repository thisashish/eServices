import React from "react";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { Link } from "react-router-dom";

export const Dashboard = () => {
  return (
    <div>
      <Link to={"/service-provider/account/myearnings"}>
        <p>My Earnings</p>
        <FaMoneyCheckDollar />
      </Link>
    </div>
  );
};
