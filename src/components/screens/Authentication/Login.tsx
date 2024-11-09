import React, { useContext, useState } from "react";
import { useFormik } from "formik";
import LogoImage from "../../../assets/streamlogo.svg";
import googleLogo from "../../../assets/googlelogo.svg";
import { loginSchema } from "../../../schemas";
import AuthContext from "../../../context/AuthProvider";
import axios from "../../../api/axios";
import { Link } from "react-router-dom";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
import Icon from "react-icons-kit";




const LOGIN_URL = 'auth/jwt/create/';

function Login() {
  const { setAuth } = useContext(AuthContext)
  const [errMsg, setErrMssg] = useState('');
  const [typePassword, setTypePassword] = useState("password");
  const [iconPassword, setIconPassword] = useState(eyeOff);

  const handleTogglePassword = () => {
    if (typePassword === "password") {
      setTypePassword("text");
      setIconPassword(eye);
    } else {
      setTypePassword("password");
      setIconPassword(eyeOff);
    }
  };


  const { values, handleSubmit, handleChange, handleBlur } = useFormik({
    
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      try {
        const response = await axios.post(LOGIN_URL, JSON.stringify({email: values.email, password: values.password}), {
          headers: { 'Content-Type': 'application/json'},
          withCredentials: true,
        });
        console.log(response, 'login response');
        const accessToken = response.data.access;
        console.log(accessToken, 'accesstoken');
        setAuth({accessToken});
      } catch (error) {
        if(!error?.response){
          setErrMssg('No server response')
        } else if(error?.response.status === 400){
          setErrMssg('Missing username or password');
        } else if (error?.response.status === 401){
          setErrMssg('Unauthorized')
        } else {
          setErrMssg('Login Failed')
        }
      }
      console.log(values, "Values");
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-[400px] p-6 md:p-8 bg-white rounded-lg shadow-lg mx-auto">
        <div className="flex flex-col items-center">
          <img alt="StreamBargain Logo" src={LogoImage} className="mb-4" />
          <h1 className="text-black font-bold text-xl md:text-2xl">
            Welcome Back!
          </h1>
          <p className="text-black text-[10px] text-base md:text-lg text-center mb-6">
            Sign in to continue enjoying your streaming services
          </p>
        </div>

        <form
          autoComplete="off"
          onSubmit={handleSubmit}
          className="flex flex-col space-y-6"
        >
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
              className="peer w-full h-[52px] p-4 pt-6 border-2 focus:outline-none focus:ring-0 focus:border-[#7F56D9] rounded-tl-lg rounded-br-lg"
            />
            <label
              htmlFor="email"
              className="absolute left-3 -top-2 px-1 bg-white text-gray-500 text-sm transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:left-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3 peer-focus:left-3 peer-focus:text-xs peer-focus:text-[#7F56D9]"
            >
              Email
            </label>
          </div>

          {/* Password Field */}
          <div className="relative">
            <input
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              type={typePassword}
              name="password"
              id="password"
              placeholder=" "
              className="peer w-full h-[52px] p-4 pt-6 border-2 focus:outline-none focus:ring-0 focus:border-[#7F56D9] rounded-tl-lg rounded-br-lg"
            />
             <span
              className="absolute inset-y-0 right-5 bottom-1 flex items-center cursor-pointer"
              onClick={handleTogglePassword}
            >
              <Icon icon={iconPassword} size={20} />
            </span>
            <label
              htmlFor="password"
              className="absolute left-3 -top-2 px-1 bg-white text-gray-500 text-sm transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:left-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3 peer-focus:left-3 peer-focus:text-xs peer-focus:text-[#7F56D9]"
            >
              Password
            </label>

          </div>

          {/* Checkbox and Forgotten Password */}
          <div className="flex flex-row justify-between">
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="rememberMe" />
              <label htmlFor="rememberMe">Remember me</label>
            </div>
            <Link to='/forgotPassword'>
            <p className="text-gray-300">Forgotten password?</p>
            </Link>
          </div>
          <div className="flex items-center justify-center gap-1">
          <p>Don’t have an account?  </p>
          <Link to='/register'>
          <div
            style={{ cursor: "pointer" }}
            tabIndex={0}
          >
            <p>Sign Up</p>
          </div>
          </Link>
          </div>


          <div className="flex items-center justify-center">
            <p className="mr-2">Sign In</p>
            <img
              className="h-6"
              src={googleLogo}
              alt="sign up with google logo"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full h-[52px] bg-gradient-to-b from-purple-500 to-purple-900 hover:bg-purple-900 text-white py-2 px-4 rounded-md focus:outline-none"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
