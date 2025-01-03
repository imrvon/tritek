import Image from "next/image";
import { PiMapPinLight } from "react-icons/pi";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import { PiDeviceMobileLight } from "react-icons/pi";
import { PiEnvelopeOpenLight } from "react-icons/pi";
import Link from "next/link";

const MapUrl: string = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d79193.08041824336!2d-0.16407370308423688!3d51.66379535318838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761878d288422d%3A0x19b8e39ceea4fef9!2sEnfield%2C%20UK!5e0!3m2!1sen!2sng!4v1734659490893!5m2!1sen!2sng';

export default function Map(): JSX.Element {
  return (
    <section className='relative sm:p-[5%] my-[10%] sm:my-0'>
      <iframe
        className="sm:absolute sm:top-0 sm:left-0 w-full h-96 sm:h-full"
        src={MapUrl}
        allowFullScreen
        aria-hidden="false"
        tabIndex={0}
      ></iframe>
      <div className="relative z-10 bg-white sm:w-4/6 md:w-[45%] lg:w-1/3">
        <div>
          <Image src='/assets/img/map.webp' alt="Map" width={1080} height={810} />
        </div>
        <div className="p-[10%]">
          <h3 className="text-[33px] font-medium mb-[10%]">
            Tritek <span className="font-light">Academy</span>
          </h3>
          <div className="flex items-center gap-4 border-y-solid border-y-[1px] border-[#ccc] py-4">
            <div className="text-[32px] text-primary">
              <PiMapPinLight />
            </div>
            <div>
              <h4 className="text-primary text-[13px]">LOCATION</h4>
              <p className="text-[15px] text-black">
                Enfield, Greater London,<br />United Kingdom
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 border-y-solid border-b-[1px] border-[#ccc] py-4">
            <div className="text-[32px] text-primary">
              <PiDeviceMobileLight />
            </div>
            <div>
              <h4 className="text-primary text-[13px]">CONTACT</h4>
              <Link href="tel:447401262066" className="text-[15px] text-black block">
              +44 7401 262066
              </Link>
              <Link href="tel:447496149132" className="text-[15px] text-black">
              +44 7496 149132
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-4 border-y-solid border-b-[1px] border-[#ccc] py-4 mb-[10%]">
            <div className="text-[32px] text-primary">
              <PiEnvelopeOpenLight />
            </div>
            <div>
              <h4 className="text-primary text-[13px]">E-MAIL</h4>
              <Link href="mailto:info@tritekconsulting.co.uk?subject=Quick Enquiry!" className="text-[15px] text-black">
                info@tritekconsulting.co.uk
              </Link>
            </div>
          </div>
          <Link href="mailto:info@tritekconsulting.co.uk?subject=Schedule a Free Meeting">
            <button className="bg-primary text-white flex items-center gap-2 font-light w-fit tracking-[1px] p-6 hover:-translate-y-2 transition-transform delay-0 duration-300">
              SCHEDULE A MEETING
              <span>
                <LiaLongArrowAltRightSolid />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
