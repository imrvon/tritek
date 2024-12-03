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
            className="absolute h-full w-full top-0 bottom-0 object-cover -z-10" id='wrapper'
        >
            <source
            src="/assets/bg-vid.mp4"
            type="video/mp4"
            />
        </video>
        <div className="bg-[#00000098] absolute top-0 left-0 w-full h-full -z-10"></div>
        <div className="px-[5%] w-full">
            <div className="w-9/12 text-white mt-[20%]">
                <h2 className="text-8xl font-bold italic">Empowering <br/><span className="font-light not-italic">growth through </span> <br/>tech training</h2>
                <p className="italic text-[26px] mt-[3.5%] mb-[7%]">A Multi award winning tech company</p>
                <Link href='' className="rounded-[50px] border-[1px] font-nuno py-5 px-7 inline-block bg-transparent shadow-[0_0_0_0_#ffffff_inset] duration-300 ease-in-out transition-all hover:text-primary hover:shadow-[0_0_0_4em_#ffffff_inset,0_5px_15px_rgba(0,0,0,0.1)] hover:-translate-y-[3px]">Get Started</Link>
            </div>
            <div className="mt-[10%] font-nuno flex items-center text-white relative text-xl before:left-0 before:top-1/2 before:w-full before:h-[1px] before:bg-[#cccccc] after:left-0 after:top-1/2 after:w-full after:h-[1px] after:bg-[#cccccc] w-full">
                <span className="mx-[0.5em] flex-[0_0_auto] font-medium font-spartan opacity-60 tracking-wider">You&apos;ll be in good company</span>
            </div>
            <div className="flex justify-between text-8xl mt-[5%] mb-[10%]">
                <SiIbm className="opacity-10 text-white"/> 
                <SiShell className="opacity-10 text-white"/> 
                <SiHsbc className="opacity-10 text-white"/> 
                <SiBarclays className="opacity-10 text-white"/>
            </div>
        </div>     
    </div>
  )
}
