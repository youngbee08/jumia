import React, { createContext, useState } from "react";

export const userContext = createContext();

const UserProvider = ({ children }) => {
  const name = "Muiz";
  const checkIsAuthenticated = ()=>{
    const token = localStorage.getItem("token");
    if (token) {
      return true
    }else{
      return false
    }
  }
  function login(data) {
    console.log(data);
    localStorage.setItem("token", "saggasffstghjahgafgfxaghjksjsxhj")
    location.href = "/dashboard"
  }
  const value = {
    name,
    login,
    checkIsAuthenticated,
  };
  return <userContext.Provider value={value}>{children}</userContext.Provider>;
};

export default UserProvider;
