import Image from "next/image";
import { PiMapPinLight } from "react-icons/pi";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import { PiDeviceMobileLight } from "react-icons/pi";
import { PiEnvelopeOpenLight } from "react-icons/pi";
import Link from "next/link";

const MapUrl: string = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d78803.7558317406!2d0.8212462702334286!3d51.88619668343394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8e24e12f62f05%3A0x175d5f1c455091de!2sColchester%2C%20UK!5e0!3m2!1sen!2sng!4v1703197805622!5m2!1sen!2sng';

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
            Tetrik <span className="font-light">Academy</span>
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
              <Link href="tel:+447412835416" className="text-[15px] text-black block">
                tel:+4407300140669
              </Link>
              <Link href="tel:+4407401262066" className="text-[15px] text-black">
                +44 0740 1262066
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-4 border-y-solid border-b-[1px] border-[#ccc] py-4 mb-[10%]">
            <div className="text-[32px] text-primary">
              <PiEnvelopeOpenLight />
            </div>
            <div>
              <h4 className="text-primary text-[13px]">E-MAIL</h4>
              <Link href="mailto:info@tritekconsulting.co.uk" className="text-[15px] text-black">
                info@tritekconsulting.co.uk
              </Link>
            </div>
          </div>
          <Link href="mailto:info@tritekconsulting.co.uk">
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
