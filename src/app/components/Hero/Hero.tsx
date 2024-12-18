'use client'
import { SiIbm, SiShell, SiHsbc, SiBarclays } from "react-icons/si";
import Link from "next/link"

export default function Hero() {
  return (
    <div className='relative min-h-screen flex items-center font-ibm'>
        <video
            autoPlay
            playsInline
            loop
            muted
            poster='/assets/img/tritek.webp'
            className="absolute h-full w-full top-0 bottom-0 object-cover -z-10 bg-right" id='wrapper'
        >
            <source
            src="/assets/bg-vid.mp4"
            type="video/mp4"
            />
        </video>
        <div className="bg-[#00000098] absolute top-0 left-0 w-full h-full -z-10"></div>
        <div className="px-[5%] w-full">
            <div className="sm:w-9/12 text-white mt-[25%] md:mt-[20%]">
                <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold italic">Transform <br/>Your Career</h2>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-light not-italic mt-[1.5%]">Learn. Practice. <span className="font-bold italic">Thrive.</span></h2>
                <p className="italic text-xl md:text-2xl mt-[3.5%] mb-[7%] md:w-10/12 lg:w-7/12">Practical, hands-on tech training that equips you with the skills and confidence to land high-paying roles you’ll love.</p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <Link href='' className="rounded-[50px] border-[1px] font-nuno py-4 sm:py-5 px-6 sm:px-7 inline-block bg-transparent shadow-[0_0_0_0_#ffffff_inset] duration-300 ease-in-out transition-all hover:text-primary hover:shadow-[0_0_0_4em_#ffffff_inset,0_5px_15px_rgba(0,0,0,0.1)] hover:-translate-y-[3px] w-fit">Enroll Now</Link>
                    <Link href='' className="rounded-[50px] border-[1px] font-nuno py-4 sm:py-5 px-6 sm:px-7 inline-block bg-transparent shadow-[0_0_0_0_#ffffff_inset] duration-300 ease-in-out transition-all hover:text-primary hover:shadow-[0_0_0_4em_#ffffff_inset,0_5px_15px_rgba(0,0,0,0.1)] hover:-translate-y-[3px] w-fit">Book a Free Consultation</Link>
                </div>
            </div>
            <div className="mt-[10%] font-nuno flex items-center text-white relative text-xl before:left-0 before:top-1/2 before:w-full before:h-[1px] before:bg-[#cccccc] after:left-0 after:top-1/2 after:w-full after:h-[1px] after:bg-[#cccccc] w-full">
                <span className="mx-[0.5em] flex-[0_0_auto] font-medium font-spartan opacity-60 tracking-wider">You&apos;ll be in good company</span>
            </div>
            <div className="flex justify-between text-4xl sm:text-8xl mt-[5%] mb-[10%]">
                <SiIbm className="opacity-10 text-white"/> 
                <SiShell className="opacity-10 text-white"/> 
                <SiHsbc className="opacity-10 text-white"/> 
                <SiBarclays className="opacity-10 text-white"/>
            </div>
        </div>     
    </div>
  )
}
