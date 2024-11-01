import React, { useState } from "react";
import { useFormik } from "formik";
import LogoImage from "../../../assets/streamlogo.svg";
import { basicSchema } from "../../../schemas";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
import Icon from "react-icons-kit";
import googleLogo from "../../../assets/googlelogo.svg";
import { Link } from "react-router-dom";

function Register() {
  //Toast notification upon registration
  const notify = () => toast("Welcome!");

  const [password, setPassword] = useState("");
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eyeOff);

  const handleToggle = () => {
    if (type === "password") {
      setIcon(eye);
      setType("text");
    } else {
      setIcon(eyeOff);
      setType("password");
    }
  };

  const { values, errors, handleSubmit, handleChange, handleBlur, touched } =
    useFormik({
      initialValues: {
        firstname: "",
        lastname: "",
        username: "",
        email: "",
        password: "",
        confirmpassword: "",
      },
      validationSchema: basicSchema,
      onSubmit: async (values, actions) => {
        alert(JSON.stringify(values, null, 2));
        console.log(values);
        console.log(actions);
        // await new Promise((reslove) => setTimeout(reslove, 2000));
        actions.resetForm();
        notify();
      },
    });

  //   console.log(errors)
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-[600px] p-6 md:p-8 bg-white rounded-lg shadow-lg mx-auto">
        <div className="flex flex-col items-center">
          <img alt="StreamBargain Logo" src={LogoImage} className="mb-4" />
          <h1 className="text-black font-bold text-xl md:text-2xl">
            Create An Account
          </h1>
          <p className="text-black text-[4px] text-base md:text-lg text-center mb-6">
            Sign Up to enjoy your streaming services
          </p>
        </div>

        <form
          autoComplete="off"
          onSubmit={handleSubmit}
          className="flex flex-col space-y-6"
        >
          <div className="flex flex-direction: row justify-between gap-9">
            {/* Firstname Field */}
            <div className="relative w-1/2">
              <input
                value={values.firstname}
                onChange={handleChange}
                onBlur={handleBlur}
                type="firstname"
                name="firstname"
                id="firstname"
                placeholder=" "
                className={`peer w-full h-[52px] p-4 pt-6 border-2 focus:outline-none focus:ring-0 focus:border-[#7F56D9] rounded-tl-lg rounded-br-lg ${
                  errors.firstname && touched.firstname ? "input-error" : ""
                }`}
              />
              <label
                htmlFor="userName"
                className="absolute left-3 -top-2 px-1 bg-white text-gray-500 text-sm transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:left-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3 peer-focus:left-3 peer-focus:text-xs peer-focus:text-[#7F56D9]"
              >
                First Name
              </label>
              {errors.username && touched.username && (
                <p className="text-red-500 text-xs mt-1">{errors.username}</p>
              )}
            </div>

            {/* Last name Field */}
            <div className="relative w-1/2">
              <input
                value={values.lastname}
                onChange={handleChange}
                onBlur={handleBlur}
                type="lastname"
                name="lastname"
                id="lastname"
                placeholder=" "
                className={`peer w-full h-[52px] p-4 pt-6 border-2 focus:outline-none focus:ring-0 focus:border-[#7F56D9] rounded-tl-lg rounded-br-lg ${
                  errors.lastname && touched.lastname ? "input-error" : ""
                }`}
              />
              <label
                htmlFor="userName"
                className="absolute left-3 -top-2 px-1 bg-white text-gray-500 text-sm transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:left-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3 peer-focus:left-3 peer-focus:text-xs peer-focus:text-[#7F56D9]"
              >
                Last Name
              </label>
              {errors.username && touched.username && (
                <p className="text-red-500 text-xs mt-1">{errors.username}</p>
              )}
            </div>
          </div>
          {/* Username Field */}
          <div className="relative">
            <input
              value={values.username}
              onChange={handleChange}
              onBlur={handleBlur}
              type="username"
              name="username"
              id="username"
              placeholder=" "
              className={`peer w-full h-[52px] p-4 pt-6 border-2 focus:outline-none focus:ring-0 focus:border-[#7F56D9] rounded-tl-lg rounded-br-lg ${
                errors.username && touched.username ? "input-error" : ""
              }`}
            />
            <label
              htmlFor="userName"
              className="absolute left-3 -top-2 px-1 bg-white text-gray-500 text-sm transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:left-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3 peer-focus:left-3 peer-focus:text-xs peer-focus:text-[#7F56D9]"
            >
              Username
            </label>
            {errors.username && touched.username && (
              <p className="text-red-500 text-xs mt-1">{errors.username}</p>
            )}
          </div>

          {/* Email Field */}
          <div className="relative">
            <input
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              type="email"
              name="email"
              id="email"
              placeholder=" "
              className={`peer w-full h-[52px] p-4 pt-6 border-2 focus:outline-none focus:ring-0 focus:border-[#7F56D9] rounded-tl-lg rounded-br-lg ${
                errors.email && touched.email ? "input-error" : ""
              }`}
            />
            <label
              htmlFor="email"
              className="absolute left-3 -top-2 px-1 bg-white text-gray-500 text-sm transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:left-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3 peer-focus:left-3 peer-focus:text-xs peer-focus:text-[#7F56D9]"
            >
              Email
            </label>
            {errors.email && touched.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          {/* Password Field */}
          <div className="relative">
            <input
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              type={type}
              name="password"
              id="password"
              placeholder=" "
              className={`peer w-full h-[52px] p-4 pt-6 pr-12 border-2 focus:outline-none focus:ring-0 focus:border-[#7F56D9] rounded-tl-lg rounded-br-lg ${
                errors.password && touched.password ? "input-error" : ""
              }`}
            />
            <span
              className="absolute inset-y-0 right-5 bottom-7 flex items-center cursor-pointer"
              onClick={handleToggle}
            >
              <Icon icon={icon} size={20} />
            </span>
            <label
              htmlFor="password"
              className="absolute left-3 -top-2 px-1 bg-white text-gray-500 text-sm transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:left-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3 peer-focus:left-3 peer-focus:text-xs peer-focus:text-[#7F56D9]"
            >
              Password
            </label>

            {errors.password && touched.password && (
              <p className="text-red-500 text-xs mt-1">{errors.password}</p>
            )}
            <p className="text-gray-300 text-[12px]">
              min 5 characters, 1 upper case letter, 1 lower case letter, 1
              numeric digit
            </p>
          </div>

          {/* Confirm Password Field */}
          <div className="relative">
            <input
              value={values.confirmpassword}
              onChange={handleChange}
              onBlur={handleBlur}
              type="password"
              name="confirmpassword"
              id="confirmpassword"
              placeholder=" "
              className={`peer w-full h-[52px] p-4 pt-6 border-2 focus:outline-none focus:ring-0 focus:border-[#7F56D9] rounded-tl-lg rounded-br-lg 
                ${
                  errors.confirmpassword && touched.confirmpassword
                    ? "input-error"
                    : ""
                }`}
            />
            <span
              className="absolute inset-y-0 right-11 bottom-1 flex items-center cursor-pointer"
              onClick={handleToggle}
            >
              <Icon className="absolute mr-10" icon={icon} size={20} />
            </span>
            <label
              htmlFor="confirmPassword"
              className="absolute left-3 -top-2 px-1 bg-white text-gray-500 text-sm transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:left-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3 peer-focus:left-3 peer-focus:text-xs peer-focus:text-[#7F56D9]"
            >
              Confirm Password
            </label>
            {errors.confirmpassword && touched.confirmpassword && (
              <p className="text-red-500 text-xs mt-1">
                {errors.confirmpassword}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full h-[52px] bg-gradient-to-b from-purple-500 to-purple-900 hover:bg-purple-800 text-white py-2 px-4 rounded-md focus:outline-none"
          >
            Sign Up
          </button>
          <div className="flex items-center justify-center">
            <p className="mr-2">Sign Up</p>
            <img
              className="h-6"
              src={googleLogo}
              alt="sign up with google logo"
            />
          </div>
          
          <div className="flex items-center justify-center gap-1">
          <p>Don’t have an account?  </p>
          <Link to='/login'>
          <div
            style={{ cursor: "pointer" }}
            tabIndex={0}
          >
            <p> Sign In</p>
          </div>
          </Link>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Register;
