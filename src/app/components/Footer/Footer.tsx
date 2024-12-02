import { PiInstagramLogoFill, PiTiktokLogoFill, PiTwitterLogoFill } from "react-icons/pi";
import { BsThreadsFill } from "react-icons/bs";
import Link from 'next/link'


export default function Footer() {

    const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10">
        <div className="flex justify-center gap-4">
            <Link href='' className='text-[#bdbdbd] text-3xl hover:-translate-y-2 hover:text-primary delay-0 duration-150 transition-all ease-in'><PiInstagramLogoFill /></Link>
            <Link href='' className='text-[#bdbdbd] text-3xl hover:-translate-y-2 hover:text-primary delay-0 duration-150 transition-all ease-in'><PiTiktokLogoFill /></Link>
            <Link href='' className='text-[#bdbdbd] text-3xl hover:-translate-y-2 hover:text-primary delay-0 duration-150 transition-all ease-in'><PiTwitterLogoFill /></Link>
            <Link href='' className='text-[#bdbdbd] text-3xl hover:-translate-y-2 hover:text-primary delay-0 duration-150 transition-all ease-in'><BsThreadsFill /></Link>
        </div>
        <p className="text-center py-[5%] lg:py-[2.5%] text-white opacity-85 mx-auto px-[2%]">GFL Real Estate {currentYear}. All Rights Reserved.</p>
    </footer>
  )
}
