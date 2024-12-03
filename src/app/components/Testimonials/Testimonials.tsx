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
import { A11y, Pagination } from 'swiper/modules';

// Import Data
import TestimonialsData from "./TestimonialsData"

export default function Testimonials() {

  return (
    <div className='py-[5%] px-[3%] slidercont bg-grey'>
        <h2 className='text-[52px] font-bold text-primary text-center'>Client <span className="italic font-thin text-black">Testimonials</span></h2>
        <div className="mt-[5%] slidertest">
        <Swiper
        modules={[Pagination, A11y]}
        slidesPerView={2}
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
                    <div className="flex">
                        <div className="overflow-hidden mr-8 w-1/3">
                            <Image src={data.img} width={400} height={400} alt={data.name} className="rounded-[50%]"/>
                        </div>
                        <div className="flex flex-col justify-center pl-8 w-2/3 relative before:absolute before:w-[1px] before:bg-black before:h-full before:left-0 before:top-0">
                            <p className="mb-[5%] w-11/12">{data.description}</p>
                            <div className="flex items-center gap-8">
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
