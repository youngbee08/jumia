import React, { createContext, useState } from "react";

export const userContext = createContext();

const UserProvider = ({ children }) => {
  const name = "Muiz";
  const [fetchingPosts, setFetchingPosts] = useState(false);
  const [fetchingProducts, setFetchingProducts] = useState(false);
  const [fetchingSingleProducts, setFetchingSingleProducts] = useState(false);
  const checkIsAuthenticated = () => {
    const token = localStorage.getItem("token");
    if (token) {
      return true;
    } else {
      return false;
    }
  };
  function login(data) {
    console.log(data);
    localStorage.setItem("token", "saggasffstghjahgafgfxaghjksjsxhj");
    location.href = "/dashboard";
  }
  async function getAllPosts() {
    setFetchingPosts(true);
    let baseUrl = import.meta.env.VITE_BASE_URL;
    try {
      const res = await fetch(`${baseUrl}/posts`);
      const data = await res.json();
      return data
    } catch (error) {
      console.log(error);
    } finally {
      setFetchingPosts(false);
    }
  }
  async function getAllProducts() {
    setFetchingProducts(true);
    let baseUrl = import.meta.env.VITE_SECOND_BASE_URL;
    try {
      const res = await fetch(`${baseUrl}/products`);
      const data = await res.json();
      return data
    } catch (error) {
      console.log(error);
    } finally {
      setFetchingProducts(false);
    }
  }
  async function getSingleProducts(id) {
    setFetchingSingleProducts(true);
    let baseUrl = import.meta.env.VITE_SECOND_BASE_URL;
    try {
      const res = await fetch(`${baseUrl}/products/${id}`);
      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error);
    } finally {
      setFetchingSingleProducts(false);
    }
  }
  const value = {
    name,
    login,
    checkIsAuthenticated,
    getAllPosts,
    getAllProducts,
    getSingleProducts,
    fetchingPosts,
    fetchingProducts,
    fetchingSingleProducts
  };
  return <userContext.Provider value={value}>{children}</userContext.Provider>;
};

export default UserProvider;
