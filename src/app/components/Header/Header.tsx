import Image from "next/image"
import Link from "next/link"


export default function Header() {
  return (
    <header className="flex justify-between items-center px-[3%] py-[0.5%] fixed top-0 left-0 w-full">
        <div className="flex items-center gap-[15%]">
            <div><h2 className="text-5xl font-bold text-primary">TRI</h2></div>
            <nav className="flex gap-14 font-nuno text-white text-[15px]">
                <Link href='' className="tracking-wide">Home</Link>
                <Link href='' className="tracking-wide">About</Link>
                <Link href='' className="tracking-wide">Services</Link>
                <Link href='' className="tracking-wide">Courses</Link>
            </nav>
        </div>
        <div className='flex gap-4 text-white font-nuno'>
            <Link href='' className="rounded-[50px] py-[21px] px-[28px] shadow-[0_0_0_4em_#057584_inset] hover:-translate-y-[3px] ease-in-out transition-transform duration-300">Contact Us</Link>
        </div>
    </header>
  )
}
