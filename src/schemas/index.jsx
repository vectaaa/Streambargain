import * as yup from 'yup';

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.


export const basicSchema = yup.object().shape({
    firstname: yup.string().min(2,"Please enter your fist name")
    .max(14, 'First name cannot be longer than 14 characters')
    .required("Required"),
    lastname: yup.string().min(3,"Please enter your last name")
    .max(14, "First name cannot be longer than 14 characters")
    .required("Required"),
    email: yup.string().email("Please enter a valid email").required("Required"),
    username: yup.string().min(3, "Username must be at least 3 characters long").required("Required"),
    password: yup.string().min(5).matches(passwordRules, {message: "Please create a stronger password"}).required("Required"),
    confirmpassword: yup.string().oneOf([yup.ref("password"), null], "Passwords must match").required("Required")

});

export const loginSchema = yup.object().shape({
    email: yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export const forgotPasswordSchema = yup.object().shape({
  email: yup.string()
    .email("Invalid email address")
    .required("Email is required"),
});