import React, {useContext} from "react";
import Button from "./Button";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { userContext } from "../hooks/UserContext";

const Form2 = () => {
  const {login} = useContext(userContext);
  const loginSchema = yup.object({
    username: yup
      .string()
      .required("Username is required")
      .min(2, "Username should be at least 2 characters")
      .max(8, "Username should not be more than 8 characters"),
    password: yup
      .string()
      .required("Password is required")
      .min(5, "Username should be at least 5 characters")
      .max(12, "Username should not be more than 12 characters"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
    mode: "onTouched",
    reValidateMode: "onChange",
  });

  return (
    <form onSubmit={handleSubmit(login)}>
      <div className="">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          placeholder="Input your username"
          {...register("username")}
        />
        <span style={{ color: "red" }}>{errors?.username?.message}</span>
      </div>
      <div className="">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Input your password"
          {...register("password")}
        />
        <span style={{ color: "red" }}>{errors?.password?.message}</span>
      </div>
      <Button text={"Login"} />
    </form>
  );
};

export default Form2;
