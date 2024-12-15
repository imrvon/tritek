import Image from "next/image"
import Link from "next/link"


export default function Header() {
  return (
    <header className="flex justify-between items-center px-[5%] py-[1.5%] fixed top-0 left-0 w-full z-50">
        <div className="flex items-center gap-[5%]">
            <Link href='/' className="w-1/6"><Image src='/assets/img/logo-white.png' width={2710} height={1003} alt="logo" /></Link>
            <nav className="flex gap-14 font-nuno text-white text-[15px]">
                <Link href='/about' className="tracking-wide">About</Link>
                <Link href='/services' className="tracking-wide">Services</Link>
                <Link href='/contact' className="tracking-wide">Courses</Link>
                <Link href='/careers' className="tracking-wide">Careers</Link>
                <Link href='/blog' className="tracking-wide">Media</Link>
            </nav>
        </div>
        <div className='flex gap-4 text-white font-nuno w-2/6'>
            <Link href='' className="rounded-[50px] py-[21px] px-[28px] shadow-[0_0_0_4em_#057584_inset] hover:-translate-y-[3px] ease-in-out transition-transform duration-300">Contact Us</Link>
        </div>
    </header>
  )
}
