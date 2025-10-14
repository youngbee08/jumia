import React, { createContext } from "react";

export const userContext = createContext();

const UserProvider = ({ children }) => {
  const name = "Muiz";
  function login(data) {
    console.log(data);
  }
  const value = {
    name,
    login,
  };
  return <userContext.Provider value={value}>{children}</userContext.Provider>;
};

export default UserProvider;
