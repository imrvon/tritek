'use client'
import { useState, useEffect } from "react";
import Image from "next/image"
import Link from "next/link"
import { FaMobileAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa6";
import { PiList, PiX } from "react-icons/pi";
import { usePathname } from "next/navigation";


export default function Header() {

    const [navbar, setNavbar] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(()=> {
        const changeBackground = () => {
            if (window.scrollY >= 150) {
                setNavbar(true)
            } else {
                setNavbar(false)
            };
        }
        window.addEventListener('scroll', changeBackground);
    }, []) 

    // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className={navbar ? "font-paragraph flex justify-between items-center px-[5%] py-[1.5%] fixed top-0 left-0 w-full z-50 bg-[#000000a6]" : "font-paragraph flex justify-between items-center px-[5%] py-[1.5%] fixed top-0 left-0 w-full z-50"}>
        <div className={menuOpen ? "fixed top-0 left-0 w-full text-3xl text-white flex justify-end lg:hidden bg-[#191919] py-4 pr-4" : "hidden"}>
            <PiX onClick={()=> setMenuOpen(!menuOpen)} />
        </div>
        <div className="flex items-center gap-[5%] w-8/12">
            <div className="text-3xl text-white mr-4 lg:hidden" onClick={()=> setMenuOpen(!menuOpen)}>
                <PiList />
            </div>
            <Link href='/' className="w-1/2 lg:w-1/6"><Image src='/assets/img/logo-white.png' width={2710} height={1003} alt="logo" /></Link>
            <nav className={menuOpen ? "flex p-[5%] justify-center items-center lg:items-start lg:justify-start lg:p-0 flex-col lg:flex-row fixed top-0 left-0 w-[80%] min-h-screen lg:min-h-[unset] lg:static lg:gap-8 text-white text-[15px] lg:w-5/6 bg-[#191919] lg:bg-transparent -translate-x-0 lg:-translate-x-0 duration-200 ease-in-out transition-transform" : "flex p-[5%] justify-center items-center lg:items-start lg:justify-start lg:p-0 flex-col lg:flex-row fixed top-0 left-0 w-[80%] min-h-screen lg:min-h-[unset] lg:static lg:gap-8 text-white text-[15px] lg:w-5/6 bg-[#191919] lg:bg-transparent -translate-x-full lg:-translate-x-0 duration-200 ease-in-out transition-transform"}>
                <Link href='/' className="w-1/2 mb-[5%] lg:hidden"><Image src='/assets/img/logo-white.png' width={2710} height={1003} alt="logo" /></Link>
                <Link href='/about' className="tracking-wide uppercase lg:capitalize border-b-solid border-b-[1px] border-b-[rgba(255,255,255,.2)] lg:border-b-transparent w-full text-center p-4 lg:p-0 lg:text-left lg:w-auto">About</Link>
                <Link href='/services' className="tracking-wide uppercase lg:capitalize border-b-solid border-b-[1px] border-b-[rgba(255,255,255,.2)] lg:border-b-transparent w-full text-center p-4 lg:p-0 lg:text-left lg:w-auto">Services</Link>
                <Link href='/courses' className="tracking-wide uppercase lg:capitalize border-b-solid border-b-[1px] border-b-[rgba(255,255,255,.2)] lg:border-b-transparent w-full text-center p-4 lg:p-0 lg:text-left lg:w-auto">Courses</Link>
                <Link href='/careers' className="tracking-wide uppercase lg:capitalize border-b-solid border-b-[1px] border-b-[rgba(255,255,255,.2)] lg:border-b-transparent w-full text-center p-4 lg:p-0 lg:text-left lg:w-auto">Careers</Link>
                <Link href='/blog' className="tracking-wide uppercase lg:capitalize border-b-solid border-b-[1px] border-b-[rgba(255,255,255,.2)] lg:border-b-transparent w-full text-center p-4 lg:p-0 lg:text-left lg:w-auto">Media</Link>
                <Link href='/mentors' className="tracking-wide uppercase lg:capitalize border-b-solid border-b-[1px] border-b-[rgba(255,255,255,.2)] lg:border-b-transparent w-full text-center p-4 lg:p-0 lg:text-left lg:w-auto">Mentors</Link>
                <Link href='/resources' className="tracking-wide uppercase lg:capitalize border-b-solid border-b-[1px] border-b-[rgba(255,255,255,.2)] lg:border-b-transparent w-full text-center p-4 lg:p-0 lg:text-left lg:w-auto">Resources</Link>
                <div className='flex text-white justify-center mt-[5%] lg:hidden'>
                    <Link href='/contact' className="rounded-[50px] py-[21px] px-[28px] shadow-[0_0_0_4em_#057584_inset] hover:-translate-y-[3px] ease-in-out transition-transform duration-300">Free Consultation</Link>
                </div>
                <div className='mt-[5%] flex flex-col justify-center items-center lg:hidden'>
                    <div className='flex items-center gap-1 mb-4'>
                        <FaMobileAlt />
                        <Link href='tel:447572277858' className='text-xs'>+447572277858</Link>
                    </div>
                    <div className='flex items-center gap-1 mb-4'>
                        <FaEnvelope />
                        <Link href='mailto:info@tritekconsulting.co.uk' className='text-xs'>info@tritekconsulting.co.uk</Link>
                    </div>
                    <div className='flex items-center gap-1'>
                        <FaMapMarkerAlt />
                        <p className='text-xs'>Enfield, Greater London, UK</p>
                    </div>
                </div>
                <div className='flex gap-4 mb-4 lg:hidden mt-[5%]'>
                    <span className="cursor-pointer text-white bg-white p-2 rounded-full  transition-[color_2s,box-shadow_2s] shadow-[inset_0px_0px_0px_40px_var(--primary)] bg-[length:0px_0px] bg-[50%_50%] hover:shadow-[inset_0px_0px_0px_1px_var(--primary)] hover:text-primary"><FaFacebookF /></span>
                    <span className="cursor-pointer text-white bg-white p-2 rounded-full  transition-[color_2s,box-shadow_2s] shadow-[inset_0px_0px_0px_40px_var(--primary)] bg-[length:0px_0px] bg-[50%_50%] hover:shadow-[inset_0px_0px_0px_1px_var(--primary)] hover:text-primary"><FaTwitter /></span>
                    <span className="cursor-pointer text-white bg-white p-2 rounded-full  transition-[color_2s,box-shadow_2s] shadow-[inset_0px_0px_0px_40px_var(--primary)] bg-[length:0px_0px] bg-[50%_50%] hover:shadow-[inset_0px_0px_0px_1px_var(--primary)] hover:text-primary"><FaLinkedinIn /></span>
                </div>
            </nav>
        </div>
        <div className='hidden lg:flex text-white justify-end w-5/12'>
            <Link href='/contact' className="rounded-[50px] py-[21px] px-[28px] shadow-[0_0_0_4em_#6a008e_inset] hover:-translate-y-[3px] ease-in-out transition-transform duration-300">Free Consultation</Link>
        </div>
    </header>
  )
}
