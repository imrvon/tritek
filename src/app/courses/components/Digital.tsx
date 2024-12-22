import CourseForm from "./CourseForm";

export default function Digital() {
    return (
      <div>
          <div className='relative h-screen bg-[url(/assets/img/courses/digital.webp)] bg-no-repeat bg-cover flex justify-center items-center'>
              <div className='flex flex-col gap-10 relative z-10'>
                  <p className='text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold font-dm text-center'>Digital Marketing</p>
                  <p className='font-medium text-center text-xl sm:text-2xl text-white italic font-ibm w-9/12 mx-auto'>Learn to create campaigns that convert, master data-driven marketing strategies, and build real marketing campaigns for actual businesses</p>
              </div>
              <div className="absolute top-0 left-0 w-full h-full bg-[#00000086]"></div>
          </div>
  
          <div className="flex flex-wrap">
              <div className="w-full lg:w-1/2 p-[5%]">
                  <h3 className="font-dm text-3xl sm:text-4xl md:text-5xl w-5/6 text-head-primary">Digital Marketing</h3>
                  <p className="italic my-5 sm:text-2xl text-xl font-spartan">
                  Master digital marketing in 10 weeks and step into one of today&apos;s most dynamic, high-paying careers. Learn to create campaigns that convert, master data-driven marketing strategies, and build real marketing campaigns for actual businesses.</p>
                  <p className="font-nuno">You&apos;ll work with Google Analytics, Facebook Ads, SEO tools, and marketing automation platforms while creating campaigns that deliver measurable results. Perfect for marketers seeking advancement or professionals ready to enter the digital marketing space.</p>
                  <p className="font-nuno mt-5">Our graduates manage six-figure marketing budgets and command premium salaries. Join them.</p>
              </div>
              <div className="w-full lg:w-1/2">
                  <CourseForm courseTitle="Digital Marketing"/>
              </div>
          </div>
      </div>
    )
  }
  