import * as yup from 'yup';

export const registerSchema=yup.object({
  userName:yup.string().required("username is required").min(3,"must be at least 3 characters").max(30,"must be at least 30 characters"),
  email:yup.string().required("email is required").email(),
  password:yup.string().required("password is required").min(3,"must be at least 3 characters").max(30,"must be at least 30 characters"),
})