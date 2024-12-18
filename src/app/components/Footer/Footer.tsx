import Image from 'next/image';
import Link from 'next/link'
import { FaMobileAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa6";


export default function Footer() {

    const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#eaeae8] flex flex-wrap px-[5%] py-[7%]">
        <div className='w-full sm:w-1/2 lg:w-1/4 lg:mb-0 mb-[10%] sm:mb-[5%]'>
            <Link href='/' className=""><Image src='/assets/img/logo-black.png' width={2710} height={1003} alt="logo" className='w-1/2 mb-[15%]' /></Link>
            <div className='flex items-center gap-1 mb-4'>
                <FaMobileAlt />
                <Link href='tel:447572277858' className='text-xs font-nuno'>+447572277858</Link>
            </div>
            <div className='flex items-center gap-1 mb-4'>
                <FaEnvelope />
                <Link href='mailto:info@tritekconsulting.co.uk' className='text-xs font-nuno'>info@tritekconsulting.co.uk</Link>
            </div>
            <div className='flex items-center gap-1'>
                <FaMapMarkerAlt />
                <p className='text-xs font-nuno'>Enfield, Greater London, UK</p>
            </div>
        </div>
        <div className='w-full sm:w-1/2 lg:w-1/4 lg:mb-0 mb-[10%] sm:mb-[5%]'>
            <h4 className='mb-4 font-spartan font-semibold text-xl'>Services</h4>
            <div className='flex flex-col gap-3 text-sm font-nuno'>
                <Link href=''>Business Planning</Link>
                <Link href=''>Feasibility Study</Link>
                <Link href=''>Startup Funding</Link>
                <Link href=''>Business Plan Review</Link>
                <Link href=''>Investor Presentation</Link>
            </div>
        </div>
        <div className='w-full sm:w-1/2 lg:w-1/4 lg:mb-0 mb-[10%] sm:mb-[5%]'>
            <h4 className='mb-4 font-spartan font-semibold text-xl'>Useful Link</h4>
            <div className='flex flex-col gap-3 text-sm font-nuno'>
                <Link href=''>FAQ</Link>
                <Link href=''>Privacy Policy</Link>
                <Link href=''>Terms and Condition</Link>
                <Link href=''>Media</Link>
                <Link href=''>Contact Us</Link>
            </div>
        </div>
        <div className='w-full sm:w-1/2 lg:w-1/4 lg:mb-0 mb-[10%] sm:mb-[5%]'>
            <h4 className='mb-4 font-spartan font-semibold text-xl'>Contact</h4>
            <div className='flex gap-4 mb-4'>
                <span className="cursor-pointer text-white bg-white p-2 rounded-full  transition-[color_2s,box-shadow_2s] shadow-[inset_0px_0px_0px_40px_var(--primary)] bg-[length:0px_0px] bg-[50%_50%] hover:shadow-[inset_0px_0px_0px_1px_var(--primary)] hover:text-primary"><FaFacebookF /></span>
                <span className="cursor-pointer text-white bg-white p-2 rounded-full  transition-[color_2s,box-shadow_2s] shadow-[inset_0px_0px_0px_40px_var(--primary)] bg-[length:0px_0px] bg-[50%_50%] hover:shadow-[inset_0px_0px_0px_1px_var(--primary)] hover:text-primary"><FaTwitter /></span>
                <span className="cursor-pointer text-white bg-white p-2 rounded-full  transition-[color_2s,box-shadow_2s] shadow-[inset_0px_0px_0px_40px_var(--primary)] bg-[length:0px_0px] bg-[50%_50%] hover:shadow-[inset_0px_0px_0px_1px_var(--primary)] hover:text-primary"><FaLinkedinIn /></span>
            </div>
            <p className='text-sm font-nuno w-11/12 sm:w-2/3 md:w-5/6 lg:w-auto'>Join over 5,000 individuals who have trusted Tritek to kickstart their journey into the dynamic world of technology.</p>
        </div>
    </footer>
  )
}
