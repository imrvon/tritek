'use client';

import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useFormik, FormikHelpers } from 'formik';
import { FaInstagram, FaSpinner } from 'react-icons/fa';
import { basicSchema } from '../../../schemas';
import Link from 'next/link';
import { FaFacebookF, FaLinkedinIn, FaXTwitter, FaYoutube } from 'react-icons/fa6';

interface FormValues {
  full_name: string;
  phone_number: string;
  email_address: string;
  message: string;
}

export default function ContactForm() {
  const [isSuccess, setIsSuccess] = useState(false);

  const service_id = process.env.NEXT_PUBLIC_SERVICE_ID as string;
  const template_id = process.env.NEXT_PUBLIC_TEMPLATE_ID_2 as string;
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
      full_name: '',
      phone_number: '',
      email_address: '',
      message: '',
    },
    validationSchema: basicSchema,
    onSubmit,
  });

  return (
    <section className="p-[5%] flex flex-col space-y-4 lg:space-y-0 lg:flex-row gap-4 font-nuno">
        <div className="flex-1">
            <h3 className="text-2xl mb-[5%] tracking-[1px] text-primary relative pl-[13%] before:absolute before:w-[10%] before:bg-primary before:h-[1px] before:top-1/2 before:left-0">CONTACT</h3>
            <h4 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-8">Schedule A Call{' '}
                <span className="font-light"><br />or Give Us A Call</span>
            </h4>
            <p className="sm:w-10/12">Whether you&apos;re ready to kickstart your career in tech, upgrade your skills, or simply have questions about our programs, we&apos;re here to help! At Tritek Academy, we&apos;re passionate about guiding you toward your goals and ensuring your journey in technology is as seamless as possible.</p>
            <div className='flex gap-4 my-[5%]'>
                <Link href='https://www.facebook.com/tritekconsultingltd' className="cursor-pointer text-white bg-white p-2 rounded-full  transition-[color_2s,box-shadow_2s] shadow-[inset_0px_0px_0px_40px_var(--primary)] bg-[length:0px_0px] bg-[50%_50%] hover:shadow-[inset_0px_0px_0px_1px_var(--primary)] hover:text-primary text-xl"><FaFacebookF /></Link>
                <Link href='https://twitter.com/Tritek_Consult' className="cursor-pointer text-white bg-white p-2 rounded-full  transition-[color_2s,box-shadow_2s] shadow-[inset_0px_0px_0px_40px_var(--primary)] bg-[length:0px_0px] bg-[50%_50%] hover:shadow-[inset_0px_0px_0px_1px_var(--primary)] hover:text-primary text-xl"><FaXTwitter /></Link>
                <Link href='https://www.linkedin.com/company/tritek-consulting-limited/' className="cursor-pointer text-white bg-white p-2 rounded-full  transition-[color_2s,box-shadow_2s] shadow-[inset_0px_0px_0px_40px_var(--primary)] bg-[length:0px_0px] bg-[50%_50%] hover:shadow-[inset_0px_0px_0px_1px_var(--primary)] hover:text-primary text-xl"><FaLinkedinIn /></Link>
                <Link href='https://www.youtube.com/channel/UC2gN1zoJ8T2KhSEh2kwFH0w' className="cursor-pointer text-white bg-white p-2 rounded-full  transition-[color_2s,box-shadow_2s] shadow-[inset_0px_0px_0px_40px_var(--primary)] bg-[length:0px_0px] bg-[50%_50%] hover:shadow-[inset_0px_0px_0px_1px_var(--primary)] hover:text-primary text-xl"><FaYoutube /></Link>
                <Link href='https://www.instagram.com/tritekconsultingltd/' className="cursor-pointer text-white bg-white p-2 rounded-full  transition-[color_2s,box-shadow_2s] shadow-[inset_0px_0px_0px_40px_var(--primary)] bg-[length:0px_0px] bg-[50%_50%] hover:shadow-[inset_0px_0px_0px_1px_var(--primary)] hover:text-primary text-xl"><FaInstagram /></Link>
            </div>
        </div>
      
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
                        name="full_name"
                        value={values.full_name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Name"
                        className={
                        errors.full_name && touched.full_name
                        ? 'bg-[#efefef] text-[15px] text-primary py-5 px-4 w-full border-2 border-[#fc7f7f] outline-0 transition-all duration-500 ease-[ease]'
                        : 'bg-[#efefef] text-[15px] text-primary py-5 px-4 w-full focus:shadow-[0_2px_4px_0_rgba(0,0,0,0.2)] outline-[#181818] border-0 border-[#f8adad] outline-0 transition-all duration-500 ease-[ease]'
                    }
                />
                {errors.full_name && touched.full_name && (
                <small className="absolute -bottom-5 left-0 text-[#fc7f7f]">
                    {errors.full_name}
                </small>
                )}
          </div>
          <div className="relative flex-1">
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
        </div>

        <div className="relative mb-8">
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
          {isSubmitting ? 'Sending...' : 'SEND MESSAGE'}
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
