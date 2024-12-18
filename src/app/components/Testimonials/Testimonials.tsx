'use client'
import Image from "next/image";
import { useRef, useEffect  } from "react";

import { BiSolidQuoteRight } from "react-icons/bi";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Import required modules
import { A11y, Pagination, Autoplay } from 'swiper/modules';

// Import Data
import TestimonialsData from "./TestimonialsData"

export default function Testimonials() {

  return (
    <div className='py-[5%] px-[3%] slidercont bg-grey mt-[700px] sm:mt-[50%] md:mt-0'>
        <h2 className='text-4xl sm:text-5xl font-bold text-head-primary text-center font-dm'>Success Stories: Real People, Real Results</h2>
        <div className="mt-[5%] slidertest">
        <Swiper
            modules={[Pagination, A11y, Autoplay]}
            autoplay={{
                delay: 5000,
            }}            
            breakpoints={{
                // when window width is >= 640px
                640: {
                width: 640,
                slidesPerGroup: 1,
                },
                // when window width is >= 768px
                768: {
                width: 768,
                slidesPerGroup: 2,
                },
            }}
            loop={true}
            pagination={{
                clickable: true,
                renderBullet: function (index, className) {
                return '<span class="' + className +'">' + '</span>';
                },
            }}

        className='h-full'
        >
            {TestimonialsData.map((data) => (
                <SwiperSlide
                    key={data.id} className="pb-[10%]">
                    <div className="flex flex-col justify-center items-center sm:justify-normal sm:flex-row font-nuno">
                        <div className="overflow-hidden sm:mr-8 w-1/2 sm:w-1/4 flex justify-center items-center sm:block sm:mb-0 mb-4">
                            <Image src={data.img} width={400} height={400} alt={data.name} className="rounded-[50%]"/>
                        </div>
                        <div className="flex flex-col justify-center sm:pl-8 text-center sm:text-left sm:w-2/3 relative sm:before:absolute sm:before:w-[1px] sm:before:bg-black sm:before:h-full sm:before:left-0 sm:before:top-0">
                            <p className="mb-[5%] w-full sm:w-11/12 sm:px-0 px-4">{data.description}</p>
                            <div className="flex justify-center sm:justify-normal items-center gap-8">
                                <BiSolidQuoteRight className="text-primary text-5xl" />
                                <p className="text-lg font-semibold">{data.name} - <span className="text-sm font-normal">{data.job}</span></p>
                            </div>
                        </div>
                    </div>                    
                </SwiperSlide>
            ))}
        </Swiper>
        </div>
    </div>
  )
}
