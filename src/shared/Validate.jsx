import * as yup from 'yup';

export const registerSchema=yup.object({
  userName:yup.string().required("username is required").min(3,"must be at least 3 characters").max(30,"must be at least 30 characters"),
  email:yup.string().required("email is required").email(),
  password:yup.string().required("password is required").min(3,"must be at least 3 characters").max(30,"must be at least 30 characters"),
})

export const registerOrder=yup.object({
  address:yup.string().required("address is required").min(3,"must be at least 3 characters").max(30,"must be at least 30 characters"),
  phone:yup.string().required("phone is required"),
})

export const registerReview=yup.object({
  rating:yup.string().required("rating is required").min(1,"must be at least 1 characters").max(5,"must be at least 5 characters"),
})
