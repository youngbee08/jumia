import React, { useContext } from "react";
import { userContext } from "../hooks/UserContext";

const Dashboard = () => {
  const { name } = useContext(userContext);
  return (
    <div>
      <h4>Welcome to your dashboard, {name}</h4>
    </div>
  );
};

export default Dashboard;
