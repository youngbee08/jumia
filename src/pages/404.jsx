import React from "react";
import notFound from "../assets/notFound.webp";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h2>NotFound</h2>
      <img src={notFound} alt="" />
      <Link to="/">Go back Home</Link>
    </div>
  );
};

export default NotFound;
