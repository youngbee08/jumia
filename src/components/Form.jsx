import React from "react";
import Button from "./Button";
import { useState } from "react";

const Form = () => {
  const [formData, setFormdata] = useState({
    username: "",
    password: "",
  });

  function handleChange(e) {
    const { value, name } = e.target;
    setFormdata((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert("Login successfull");
    console.log("Login response", formData);
  }
  return (
    <div>
      <p>Login</p>
      <form onSubmit={handleSubmit}>
        <div className="">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            placeholder="Input your username"
            name="username"
            onInput={handleChange}
          />
        </div>

        <div className="">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Input your password"
            onInput={handleChange}
          />
        </div>
        <Button text={"Login"} />
      </form>
    </div>
  );
};

export default Form;
