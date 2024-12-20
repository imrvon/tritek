import * as yup from 'yup'

export const basicSchema = yup.object().shape({
    full_name: yup.string().required("Name is Required"),
    phone_number: yup.string().min(5, 'Phone number must be at least 5 digits long').max(32, 'Phone number must not exceed 32 digits').required("Phone Number is Required"),
    email_address: yup.string().email("Please enter a valid email").required("Email Address is Required"),
    message: yup.string().min(20, 'Message must be at least 20 characters long').max(500, 'must not exceed 500 characters').required("Please type in your message")
})