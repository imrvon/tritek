'use client'
import Image from "next/image";
import { useState } from "react";
import { BiSolidQuoteRight } from "react-icons/bi";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { A11y, Pagination } from 'swiper/modules';
import TestimonialsData from "./TestimonialsData";
import { PiPlayFill, PiX } from "react-icons/pi";

export default function Testimonials() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState<string | null>(null);

  const openModal = (videoUrl: string) => {
    setCurrentVideo(videoUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setCurrentVideo(null);
    setIsModalOpen(false);
  };

  return (
    <div className='py-[5%] px-[3%] slidercont bg-grey mt-[700px] sm:mt-[50%] md:mt-0'>
      <h2 className='text-4xl sm:text-5xl font-bold text-head-primary text-center font-dm'>
        Success Stories: Real People, Real Results
      </h2>
      <div className="mt-[5%] slidertest">
        <Swiper
          modules={[Pagination, A11y]}
          breakpoints={{
            640: {
              width: 640,
              slidesPerGroup: 1,
            },
            768: {
              width: 768,
              slidesPerGroup: 2,
            },
          }}
          loop={true}
          pagination={{
            clickable: true,
            renderBullet: function (index, className) {
              return '<span class="' + className + '">' + '</span>';
            },
          }}
          className='h-full'
        >
          {TestimonialsData.map((data) => (
            <SwiperSlide key={data.id} className="pb-[10%]">
              <div className="flex flex-col justify-center items-center sm:justify-normal sm:flex-row font-nuno">
                <div
                  className="overflow-hidden sm:mr-8 w-1/2 sm:w-1/4 flex justify-center items-center sm:block sm:mb-0 mb-4 relative"
                  onClick={() => openModal(data.video)}
                >
                  <Image
                    src={data.img}
                    width={400}
                    height={400}
                    alt={data.name}
                    className="rounded-[50%] grayscale"
                  />
                  <PiPlayFill className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl cursor-pointer text-primary scale-100 hover:scale-125 transition-transform duration-150 ease-in-out" />
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

      {/* Video Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-10">
          <div className="rounded-lg overflow-hidden max-w-3xl w-full relative flex justify-center items-center">
                <div className="absolute top-[10%] text-white right-[5%] text-xl flex gap-1 items-center cursor-pointer z-10" onClick={closeModal}>
                    <PiX />
                    <span className="text-xs bg-primary p-2">CLOSE VIDEO</span>
                </div>
            {currentVideo && (
              <video controls autoPlay className="max-h-[80vh]">
                <source src={currentVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
