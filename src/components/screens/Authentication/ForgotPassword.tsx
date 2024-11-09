import React from "react";
import { useFormik } from "formik";
import { forgotPasswordSchema } from "../../../schemas";
import LogoImage from "../../../assets/streamlogo.svg";
import axios from "axios";
import { Bounce,ToastContainer, toast } from "react-toastify";

const RESET_PASSWORD_URL = "auth/users/reset_password/";

function ForgotPassword() {
  //Toast notification upon registration
  const notify = () =>
    toast.success("A password resent mail has been sent to your email", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  const { values, errors, handleSubmit, handleChange, handleBlur, touched } =
    useFormik({
      initialValues: {
        email: "",
      },
      validationSchema: forgotPasswordSchema,
      onSubmit: async (values, actions) => {
        // try {
        //     const response = await axios.post(RESET_PASSWORD_URL, JSON.stringify({email: values.email}), {
        //         headers: {'Content-Type': 'application/json'},
        //         withCredentials: true,
        //     });
        //     notify();
        // } catch (error) {

        // }
        alert(JSON.stringify(values, null, 2));
        notify();
        console.log(values);
        actions.resetForm();
      },
    });
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-[400px] p-6 md:p-8 bg-white rounded-lg shadow-lg mx-auto">
        <div className="flex flex-col items-center">
          <img alt="StreamBargain Logo" src={LogoImage} className="mb-4" />
          <h1 className="text-black font-bold text-xl md:text-2xl">
            Password Reset
          </h1>
          <p className="text-black text-[10px] text-base md:text-lg text-center mb-6">
            Reset your password
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
            {errors.email && touched.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>
          ;{/* Submit Button */}
          <button
            type="submit"
            className="w-full h-[52px] bg-gradient-to-b from-purple-500 to-purple-900 hover:bg-purple-900 text-white py-2 px-4 rounded-md focus:outline-none"
          >
            Submit
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}
export default ForgotPassword;
