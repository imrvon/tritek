'use client'
import { useState } from "react";
import Image from "next/image"
import Link from "next/link"
import { FaMobileAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa6";
import { PiList, PiX } from "react-icons/pi";


export default function Header() {

    const [navbar, setNavbar] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex justify-between items-center px-[5%] py-[1.5%] fixed top-0 left-0 w-full z-50">
        <div className={menuOpen ? "fixed top-0 left-0 w-full text-3xl text-white flex justify-end md:hidden bg-[#191919] py-4 pr-4" : "hidden"}>
            <PiX onClick={()=> setMenuOpen(!menuOpen)} />
        </div>
        <div className="flex items-center gap-[5%] w-8/12">
            <div className="text-3xl text-white mr-4 md:hidden" onClick={()=> setMenuOpen(!menuOpen)}>
                <PiList />
            </div>
            <Link href='/' className="w-1/2 md:w-2/6 lg:w-1/6"><Image src='/assets/img/logo-white.png' width={2710} height={1003} alt="logo" /></Link>
            <nav className={menuOpen ? "flex p-[5%] justify-center items-center md:items-start md:justify-start md:p-0 flex-col md:flex-row fixed top-0 left-0 w-[80%] min-h-screen md:min-h-[unset] md:static md:gap-5 lg:gap-14 font-nuno text-white text-[15px] md:w-4/6 lg:w-5/6 bg-[#191919] md:bg-transparent -translate-x-0 md:-translate-x-0 duration-200 ease-in-out transition-transform" : "flex p-[5%] justify-center items-center md:items-start md:justify-start md:p-0 flex-col md:flex-row fixed top-0 left-0 w-[80%] min-h-screen md:min-h-[unset] md:static md:gap-5 lg:gap-14 font-nuno text-white text-[15px] md:w-4/6 lg:w-5/6 bg-[#191919] md:bg-transparent -translate-x-full md:-translate-x-0 duration-200 ease-in-out transition-transform"}>
                <Link href='/' className="w-1/2 mb-[5%] md:hidden"><Image src='/assets/img/logo-white.png' width={2710} height={1003} alt="logo" /></Link>
                <Link href='/about' className="tracking-wide uppercase md:capitalize border-b-solid border-b-[1px] border-b-[rgba(255,255,255,.2)] md:border-b-transparent w-full text-center p-4 md:p-0 md:text-left md:w-auto">About</Link>
                <Link href='/services' className="tracking-wide uppercase md:capitalize border-b-solid border-b-[1px] border-b-[rgba(255,255,255,.2)] md:border-b-transparent w-full text-center p-4 md:p-0 md:text-left md:w-auto">Services</Link>
                <Link href='' className="tracking-wide uppercase md:capitalize border-b-solid border-b-[1px] border-b-[rgba(255,255,255,.2)] md:border-b-transparent w-full text-center p-4 md:p-0 md:text-left md:w-auto">Courses</Link>
                <Link href='/careers' className="tracking-wide uppercase md:capitalize border-b-solid border-b-[1px] border-b-[rgba(255,255,255,.2)] md:border-b-transparent w-full text-center p-4 md:p-0 md:text-left md:w-auto">Careers</Link>
                <Link href='/blog' className="tracking-wide uppercase md:capitalize border-b-solid border-b-[1px] border-b-[rgba(255,255,255,.2)] md:border-b-transparent w-full text-center p-4 md:p-0 md:text-left md:w-auto">Media</Link>
                <div className='flex text-white font-nuno justify-center mt-[5%] md:hidden'>
                    <Link href='/contact' className="rounded-[50px] py-[21px] px-[28px] shadow-[0_0_0_4em_#057584_inset] hover:-translate-y-[3px] ease-in-out transition-transform duration-300">Contact Us</Link>
                </div>
                <div className='mt-[5%] flex flex-col justify-center items-center md:hidden'>
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
                <div className='flex gap-4 mb-4 md:hidden mt-[5%]'>
                    <span className="cursor-pointer text-white bg-white p-2 rounded-full  transition-[color_2s,box-shadow_2s] shadow-[inset_0px_0px_0px_40px_var(--primary)] bg-[length:0px_0px] bg-[50%_50%] hover:shadow-[inset_0px_0px_0px_1px_var(--primary)] hover:text-primary"><FaFacebookF /></span>
                    <span className="cursor-pointer text-white bg-white p-2 rounded-full  transition-[color_2s,box-shadow_2s] shadow-[inset_0px_0px_0px_40px_var(--primary)] bg-[length:0px_0px] bg-[50%_50%] hover:shadow-[inset_0px_0px_0px_1px_var(--primary)] hover:text-primary"><FaTwitter /></span>
                    <span className="cursor-pointer text-white bg-white p-2 rounded-full  transition-[color_2s,box-shadow_2s] shadow-[inset_0px_0px_0px_40px_var(--primary)] bg-[length:0px_0px] bg-[50%_50%] hover:shadow-[inset_0px_0px_0px_1px_var(--primary)] hover:text-primary"><FaLinkedinIn /></span>
                </div>
            </nav>
        </div>
        <div className='hidden md:flex text-white font-nuno justify-end w-5/12'>
            <Link href='/contact' className="rounded-[50px] py-[21px] px-[28px] shadow-[0_0_0_4em_#057584_inset] hover:-translate-y-[3px] ease-in-out transition-transform duration-300">Contact Us</Link>
        </div>
    </header>
  )
}
