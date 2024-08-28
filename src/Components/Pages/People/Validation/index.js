import * as Yup from "yup";

export const signUpSchema = Yup.object({
  name: Yup.string().min(2).max(25).required("Please enter your name"),
  email: Yup.string().email().required("Please enter your email"),
  number: Yup.string().max(10).required("Please enter your number"),
  your_company: Yup.string().min(5).max(30).required("Please enter your company name"),
  your_message: Yup.string().max(100).required("Please enter your message"),

});