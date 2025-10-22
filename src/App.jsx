import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./components/Header";
import Login from "./pages/Login";
import NotFound from "./pages/404";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import UserProvider from "./hooks/UserContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Posts from "./pages/Posts";
import Products from "./pages/Products";
import SigngleProduct from "./pages/SigngleProduct";

const App = () => {
  return (
    <>
      <UserProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />

            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<SigngleProduct/>}/>
            <Route element={<ProtectedRoute />}>
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </>
  );
};

export default App;
