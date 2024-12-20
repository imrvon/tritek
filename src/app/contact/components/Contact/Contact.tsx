import Link from "next/link";
import { PiDeviceMobileCameraLight } from "react-icons/pi";
import { PiEnvelopeOpenLight } from "react-icons/pi";

export default function Contact() {
  return (
    <section className="bg-[url(/assets/img/contact.webp)] min-h-screen text-white bg-no-repeat bg-cover py-[10%] sm:py-[5%] flex flex-col items-center justify-center relative">
        <div className="bg-black opacity-50 absolute top-0 left-0 w-full h-full"></div>
        
        <div className="relative z-10 font-nuno w-full sm:w-auto">
            <h4 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-center mb-8 font-dm">Want to reach out<span className="font-light"><br/>to us?</span></h4>
            <span className="font-heading text-center mx-auto block font-nuno">WE WANT TO HEAR ABOUT IT</span>
            <div className="flex justify-center items-center sm:items-center lg:items-start p-[5%] sm:p-0 gap-4 mt-[10%] flex-col lg:flex-row">
              <Link href='tel:+447412835416' className="inline-block sm:w-auto w-full sm:flex items-center sm:items-end gap-4 bg-primary p-6 hover:-translate-y-2 transition-transform delay-0 duration-300 flex-col sm:flex-row">
                <div className="text-5xl flex justify-center sm:block sm:-mx-[9px] my-1"><PiDeviceMobileCameraLight/></div>
                <div>
                  <h5 className="text-sm tracking-[1] text-center sm:text-left">CALL US NOW</h5>
                  <p className="font-medium tracking-[1] text-2xl sm:text-3xl text-center sm:text-left">+44 757 2277858</p>
                </div>
              </Link>
              <Link href='mailto:info@tritekconsulting.co.uk' className="inline-block sm:w-auto w-full sm:flex items-center sm:items-end gap-4 bg-[#333333] p-6 hover:-translate-y-2 transition-transform delay-0 duration-300 flex-col sm:flex-row">
                <div className="text-5xl flex justify-center sm:block "><PiEnvelopeOpenLight/></div>
                <div>
                  <h5 className="text-sm tracking-[1] text-center sm:text-left">GET IN TOUCH</h5>
                  <p className="font-medium tracking-[1] text-2xl sm:text-3xl break-words sm:break-normal text-center sm:text-left">info@tritekconsulting.co.uk</p>
                </div>
              </Link>
            </div>
        </div>
    </section>
  )
}
