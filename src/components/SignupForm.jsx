import React from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "./Button";

const SignupForm = () => {
  const schema = yup.object({
    fullname: yup
      .string()
      .required("Please fill out this field")
      .min(8, "Your name must be at least 8 characters"),
    email: yup
      .string()
      .email("Please enter a valid email")
      .required("Please fill out this field"),
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters")
      .max(12, "Password can not be more than 12 characters")
      .required("Please fill out this field"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onTouched",
    reValidateMode: "onChange",
  });

  function onSubmit(data) {
    console.log(data)
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="">
        <label htmlFor="fullname">Full Name</label>
        <input type="text" name="fullname" placeholder="Please input your name" {...register("fullname")}/>
        <span>{errors?.fullname?.message}</span>
      </div>
      
      <div className="">
        <label htmlFor="fullname">Email</label>
        <input type="email" name="email" placeholder="Please input your email" {...register("email")}/>
        <span>{errors?.email?.message}</span>
      </div>

      <div className="">
        <label htmlFor="password">Password</label>
        <input type="password" name="password" placeholder="Please input your password" {...register("password")}/>
        <span>{errors?.password?.message}</span>
      </div>

      <Button text="Sign Up"/>
    </form>
  );
};

export default SignupForm;
