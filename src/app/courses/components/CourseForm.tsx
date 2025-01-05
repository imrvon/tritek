'use client';

import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useFormik, FormikHelpers } from 'formik';
import { FaSpinner } from 'react-icons/fa';
import { basicSchema } from '../../schemas/index';
import { PiCaretDown } from 'react-icons/pi';

interface FormValues {
  first_name: string;
  last_name: string;
  phone_number: string;
  email_address: string;
  gender: string;
  date: string;
  message: string;
  courseTitle: string; // Included courseTitle in FormValues
}

interface CourseFormProps {
  courseTitle: string; // Props for courseTitle
}

export default function CourseForm({ courseTitle }: CourseFormProps) {
  const [isSuccess, setIsSuccess] = useState(false);

  const service_id = process.env.NEXT_PUBLIC_SERVICE_ID as string;
  const template_id = process.env.NEXT_PUBLIC_TEMPLATE_ID as string;
  const public_key = process.env.NEXT_PUBLIC_USER_KEY as string;

  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = () => {
    if (form.current) {
      emailjs
        .sendForm(service_id, template_id, form.current, public_key)
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.error(error.text);
          }
        );
    }
  };

  const onSubmit = async (
    values: FormValues,
    actions: FormikHelpers<FormValues>
  ) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
    sendEmail();
    setIsSuccess(true);
  };

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useFormik<FormValues>({
    initialValues: {
      first_name: '',
      last_name: '',
      phone_number: '',
      gender: '',
      date: '',
      email_address: '',
      message: '',
      courseTitle, // Automatically include courseTitle in initialValues
    },
    validationSchema: basicSchema,
    onSubmit,
  });

  return (
    <section className="p-[5%] space-y-4 lg:space-y-0 lg:flex-row gap-4 font-paragraph">
      <form
        ref={form}
        onSubmit={handleSubmit}
        autoComplete="off"
        className="flex-1"
      >
        <div className="flex flex-col sm:flex-row space-y-8 sm:space-x-4 sm:space-y-0 mb-8">
          <div className="relative flex-1">
            <input
              type="text"
              name="first_name"
              value={values.first_name}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="First Name"
              className={
                errors.first_name && touched.first_name
                  ? 'bg-[#efefef] text-[15px] text-primary py-5 px-4 w-full border-2 border-[#fc7f7f] outline-0 transition-all duration-500 ease-[ease]'
                  : 'bg-[#efefef] text-[15px] text-primary py-5 px-4 w-full focus:shadow-[0_2px_4px_0_rgba(0,0,0,0.2)] outline-[#181818] border-0 border-[#f8adad] outline-0 transition-all duration-500 ease-[ease]'
              }
            />
            {errors.first_name && touched.first_name && (
              <small className="absolute -bottom-5 left-0 text-[#fc7f7f]">
                {errors.first_name}
              </small>              
            )}
          </div>
          <div className="relative flex-1">
            <input
              type="text"
              name="last_name"
              value={values.last_name}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Last Name"
              className={
                errors.last_name && touched.last_name
                  ? 'bg-[#efefef] text-[15px] text-primary py-5 px-4 w-full border-2 border-[#fc7f7f] outline-0 transition-all duration-500 ease-[ease]'
                  : 'bg-[#efefef] text-[15px] text-primary py-5 px-4 w-full focus:shadow-[0_2px_4px_0_rgba(0,0,0,0.2)] outline-[#181818] border-0 border-[#f8adad] outline-0 transition-all duration-500 ease-[ease]'
              }
            />
            {errors.last_name && touched.last_name && (
              <small className="absolute -bottom-5 left-0 text-[#fc7f7f]">
                {errors.last_name}
              </small> 
            )}
          </div>
        </div>

        <div className="relative flex flex-col sm:flex-row space-y-8 sm:space-x-4 sm:space-y-0 mb-8">
            <div className='relative flex-1'>
                <input
                  type="text"
                  name="phone_number"
                  value={values.phone_number}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Phone Number"
                  className={
                    errors.phone_number && touched.phone_number
                      ? 'bg-[#efefef] text-[15px] text-primary py-5 px-4 w-full border-2 border-[#fc7f7f] outline-0 transition-all duration-500 ease-[ease]'
                      : 'bg-[#efefef] text-primary py-5 px-4 w-full focus:shadow-[0_2px_4px_0_rgba(0,0,0,0.2)] outline-[#181818] border-0 border-[#181818] outline-0 transition-all duration-500 ease-[ease]'
                  }
                />
                {errors.phone_number && touched.phone_number && (
                  <small className="absolute -bottom-5 left-0 text-[#fc7f7f]">
                    {errors.phone_number}
                  </small>
                )}
            </div>

            <div className='relative flex-1'>
                <input
                    type="email"
                    name="email_address"
                    value={values.email_address}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="E-mail"
                    className={
                    errors.email_address && touched.email_address
                        ? 'bg-[#efefef] text-primary py-5 px-4 block w-full border-2 border-[#fc7f7f] outline-0 transition-all duration-500 ease-[ease]'
                        : 'bg-[#efefef] text-primary py-5 px-4 block w-full mb-[5%] focus:shadow-[0_2px_4px_0_rgba(0,0,0,0.2)] border-0 border-[#181818] outline-0 transition-all duration-500 ease-[ease]'
                    }
                />
                          {errors.email_address && touched.email_address && (
                <small className="absolute -bottom-5 left-0 text-[#fc7f7f]">
                  {errors.email_address}
                </small>
                          )}
            </div>
        </div>

        <div className="relative flex flex-col sm:flex-row space-y-8 sm:space-x-4 sm:space-y-0 mb-8">
            <div className='relative flex-1'>
                <input
                  name="date"
                  type="date"
                  value={values.date}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.date && touched.date
                      ? 'bg-[#efefef] text-[15px] text-primary py-5 px-4 w-full border-2 border-[#fc7f7f] outline-0 transition-all duration-500 ease-[ease]'
                      : 'bg-[#efefef] text-primary py-5 px-4 w-full focus:shadow-[0_2px_4px_0_rgba(0,0,0,0.2)] outline-[#181818] border-0 border-[#181818] outline-0 transition-all duration-500 ease-[ease]'
                  }
                />
                {!values.date && (
                    <label
                        htmlFor="date"
                        className="absolute left-0 -top-6 text-sm text-[#888] font-medium font-paragraph pointer-events-none transition-all duration-300"
                        >
                        Date of Appointment
                    </label>
                )}
                {errors.date && touched.date && (
                  <small className="absolute -bottom-5 left-0 text-[#fc7f7f]">
                    {errors.date}
                  </small>
                )}
            </div>

            <div className='relative flex-1'>
                <select 
                    name="gender" 
                    id=""
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                        errors.gender && touched.gender
                            ? 'bg-[#efefef] text-primary py-5 px-4 block w-full border-2 border-[#fc7f7f] outline-0 transition-all duration-500 ease-[ease] appearance-none'
                            : 'bg-[#efefef] text-primary py-5 px-4 block w-full mb-[5%] focus:shadow-[0_2px_4px_0_rgba(0,0,0,0.2)] border-0 border-[#181818] outline-0 transition-all duration-500 ease-[ease] appearance-none'
                        }>
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
                {errors.gender && touched.gender && (
                <small className="absolute -bottom-5 left-0 text-[#fc7f7f]">
                  {errors.gender}
                </small>
                )}
                <PiCaretDown className='absolute right-3 top-1/2 -translate-y-1/2'/>
            </div>
        </div>

        <div className="relative mb-8">
          <textarea
            name="message"
            value={values.message}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Your Message"
            cols={40}
            rows={10}
            className={
              errors.message && touched.message
                ? 'bg-[#efefef] text-primary w-full py-5 px-4 border-2 border-[#fc7f7f] outline-0 transition-all duration-500 ease-[ease] h-32'
                : 'bg-[#efefef] text-primary w-full mb-[5%] py-5 px-4 focus:shadow-[0_2px_4px_0_rgba(0,0,0,0.2)] outline-[#181818] border-0 border-[#181818] outline-0 transition-all duration-500 ease-[ease] h-32'
            }
          ></textarea>
          {errors.message && touched.message && (
            <small className="absolute -bottom-5 left-0 text-[#fc7f7f]">
              {errors.message}
            </small>
          )}
        </div>

        {/* Hidden Input for courseTitle */}
        <input
          type="hidden"
          name="courseTitle"
          value={values.courseTitle}
          readOnly
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className={
            isSubmitting
              ? 'w-full bg-primary py-5 px-4 text-white cursor-pointer hover:-translate-y-2 transition-transform delay-0 duration-300 opacity-30 flex justify-center items-center'
              : 'w-full bg-primary py-5 px-4 text-white cursor-pointer hover:-translate-y-2 transition-transform delay-0 duration-300 relative'
          }
        >
          {isSubmitting ? <FaSpinner className="animate-spin mr-2" /> : null}
          {isSubmitting ? 'Signing up...' : 'SIGN UP'}
          {isSuccess && (
            <small className="text-green-500 mt-2 absolute -bottom-6 left-0">
              Form submitted successfully!
            </small>
          )}
        </button>
      </form>
    </section>
  );
}
