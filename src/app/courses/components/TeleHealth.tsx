import CourseForm from "./CourseForm";

export default function TeleHealth() {
    return (
      <div>
          <div className='relative h-screen bg-[url(/assets/img/courses/telehealth.webp)] bg-no-repeat bg-cover flex justify-center items-center'>
              <div className='flex flex-col gap-10 relative z-10'>
                  <p className='text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold font-heading text-center'>Telehealth Technology</p>
                  <p className='font-medium text-center text-xl sm:text-2xl text-white italic font-heading w-9/12 mx-auto'>Transform your medical expertise into technical leadership while learning to implement and manage telehealth solutions.</p>
              </div>
              <div className="absolute top-0 left-0 w-full h-full bg-[#00000086]"></div>
          </div>
  
          <div className="flex flex-wrap">
              <div className="w-full lg:w-1/2 p-[5%]">
                  <h3 className="font-heading text-3xl sm:text-4xl md:text-5xl w-5/6 text-head-primary">Telehealth Technology</h3>
                  <p className="italic my-5 sm:text-2xl text-xl font-heading">
                  Specialised for healthcare professionals: Master telehealth technologies in 8 weeks. Transform your medical expertise into technical leadership while learning to implement and manage telehealth solutions.</p>
                  <p className="font-paragraph">Learn telehealth platforms, digital health records, and remote patient monitoring systems. Perfect for healthcare professionals ready to lead digital health initiatives or transition into health tech roles.
                  </p>
                  <p className="font-paragraph mt-5">Join the digital health revolution and shape the future of healthcare delivery.</p>
              </div>
              <div className="w-full lg:w-1/2">
                  <CourseForm courseTitle="Teelhealth Technology"/>
              </div>
          </div>
      </div>
    )
  }
  