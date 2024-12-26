import Image from 'next/image';
import Link from 'next/link'
import { FaMobileAlt, FaEnvelope, FaMapMarkerAlt, FaYoutube, FaInstagram, FaTiktok } from "react-icons/fa";
import { FaFacebookF, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";


export default function Footer() {

    const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#eaeae8] flex flex-wrap px-[5%] py-[7%]">
        <div className='w-full sm:w-1/2 lg:w-1/4 lg:mb-0 mb-[10%] sm:mb-[5%]'>
            <Link href='/' className=""><Image src='/assets/img/logo-black.png' width={2710} height={1003} alt="logo" className='w-1/2 mb-[15%]' /></Link>
            <div className='flex items-center gap-1 hover:text-primary duration-150 ease-in-out transition-colors mb-4'>
                <FaMobileAlt />
                <Link href='tel:447401262066' className='text-sm font-nuno'>+44 7401 262066</Link>
            </div>
            <div className='flex items-center gap-1 hover:text-primary duration-150 ease-in-out transition-colors mb-4'>
                <FaEnvelope />
                <Link href='mailto:info@tritekconsulting.co.uk' className='text-sm font-nuno'>info@tritekconsulting.co.uk</Link>
            </div>
            <div className='flex items-center gap-1 hover:text-primary duration-150 ease-in-out transition-colors'>
                <FaMapMarkerAlt />
                <p className='text-sm font-nuno'>Enfield, Greater London, UK</p>
            </div>
        </div>
        <div className='w-full sm:w-1/2 lg:w-1/4 lg:mb-0 mb-[10%] sm:mb-[5%]'>
            <h4 className='mb-4 font-spartan font-semibold text-xl'>Courses</h4>
            <div className='flex flex-col gap-3 text-sm font-nuno'>
                <Link href='/courses/cyber-security'>Cyber Security</Link>
                <Link href='/courses/digital-marketing'>Digital Marketing</Link>
                <Link href='/courses/cloud-computing'>Cloud Computing</Link>
                <Link href='/courses/telehealth'>Telehealth</Link>
                <Link href='/courses/hr-training'>HR Training</Link>
            </div>
        </div>
        <div className='w-full sm:w-1/2 lg:w-1/4 lg:mb-0 mb-[10%] sm:mb-[5%]'>
            <h4 className='mb-4 font-spartan font-semibold text-xl'>Useful Link</h4>
            <div className='flex flex-col gap-3 text-sm font-nuno'>
                <Link href=''>Resources</Link>
                <Link href='/privacy'>Privacy Policy</Link>
                <Link href='/tos'>Terms and Condition</Link>
                <Link href='/blog'>Media</Link>
                <Link href='/contact'>Contact Us</Link>
            </div>
        </div>
        <div className='w-full sm:w-1/2 lg:w-1/4 lg:mb-0 mb-[10%] sm:mb-[5%]'>
            <h4 className='mb-4 font-spartan font-semibold text-xl'>Contact</h4>
            <div className='flex gap-4 mb-4'>
                <Link href='https://www.facebook.com/tritekconsultingltd' className="cursor-pointer text-white bg-white p-2 rounded-full  transition-[color_2s,box-shadow_2s] shadow-[inset_0px_0px_0px_40px_var(--primary)] bg-[length:0px_0px] bg-[50%_50%] hover:shadow-[inset_0px_0px_0px_1px_var(--primary)] hover:text-primary"><FaFacebookF /></Link>
                <Link href='https://twitter.com/Tritek_Consult' className="cursor-pointer text-white bg-white p-2 rounded-full  transition-[color_2s,box-shadow_2s] shadow-[inset_0px_0px_0px_40px_var(--primary)] bg-[length:0px_0px] bg-[50%_50%] hover:shadow-[inset_0px_0px_0px_1px_var(--primary)] hover:text-primary"><FaXTwitter /></Link>
                <Link href='https://www.linkedin.com/company/tritek-consulting-limited/' className="cursor-pointer text-white bg-white p-2 rounded-full  transition-[color_2s,box-shadow_2s] shadow-[inset_0px_0px_0px_40px_var(--primary)] bg-[length:0px_0px] bg-[50%_50%] hover:shadow-[inset_0px_0px_0px_1px_var(--primary)] hover:text-primary"><FaLinkedinIn /></Link>
                <Link href='https://www.youtube.com/channel/UC2gN1zoJ8T2KhSEh2kwFH0w' className="cursor-pointer text-white bg-white p-2 rounded-full  transition-[color_2s,box-shadow_2s] shadow-[inset_0px_0px_0px_40px_var(--primary)] bg-[length:0px_0px] bg-[50%_50%] hover:shadow-[inset_0px_0px_0px_1px_var(--primary)] hover:text-primary"><FaYoutube /></Link>
                <Link href='https://www.instagram.com/tritekconsultingltd/' className="cursor-pointer text-white bg-white p-2 rounded-full  transition-[color_2s,box-shadow_2s] shadow-[inset_0px_0px_0px_40px_var(--primary)] bg-[length:0px_0px] bg-[50%_50%] hover:shadow-[inset_0px_0px_0px_1px_var(--primary)] hover:text-primary"><FaInstagram /></Link>
                <Link href='https://www.tiktok.com/@tritekconsultingltd/' className="cursor-pointer text-white bg-white p-2 rounded-full  transition-[color_2s,box-shadow_2s] shadow-[inset_0px_0px_0px_40px_var(--primary)] bg-[length:0px_0px] bg-[50%_50%] hover:shadow-[inset_0px_0px_0px_1px_var(--primary)] hover:text-primary"><FaTiktok /></Link>
            </div>
            <p className='text-sm font-nuno w-11/12 sm:w-2/3 md:w-5/6 lg:w-auto'>Join over 5,000 individuals who have trusted Tritek to kickstart their journey into the dynamic world of technology.</p>
            
        </div>
    </footer>
  )
}
