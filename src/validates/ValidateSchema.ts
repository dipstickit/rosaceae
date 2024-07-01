import * as Yup from "yup";

export const loginValidateSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter a valid email")
    .required("This field is required"),
  password: Yup.string().required("This field is required"),
});

export const registerValidateSchema = Yup.object().shape({
  name: Yup.string()
    .required("This field is required")
    .min(5, "Name must be 5 or more characters"),
  email: Yup.string()
    .email("Please enter a valid email")
    .required("This field is required"),
  password: Yup.string().required("This field is required"),
  // .min(8, "Pasword must be 8 or more characters")
  // .matches(/(?=.*[A-Z])\w+/, "Password must contain at least one uppercase letter")
  // .matches(/(?=.*[a-z])\w+/, "Password must contain at least one lowercase letter")
  // .matches(/\d/, "Password must contain at least one number"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Password and Confirm Password must match")
    .required("Confirm Password is required"),
  address: Yup.string().required("This field is required"),
  phone: Yup.string()
    .required("This field is required")
    .matches(/^[0-9]{10,11}$/, "Invalid phone number"),
});

export const profileEditValidateSchema = Yup.object().shape({
  name: Yup.string()
    .required("This field is required")
    .min(5, "Name must be 5 or more characters"),
  email: Yup.string()
    .email("Please enter a valid email")
    .required("This field is required"),
  address: Yup.string().required("This field is required"),
  phone: Yup.string()
    .required("This field is required")
    .matches(/^[0-9]{10,11}$/, "Invalid phone number"),
});

export const forgotPasswordValidateSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter a valid email")
    .required("This field is required"),
});
