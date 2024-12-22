import CourseForm from "./CourseForm";

export default function HR() {
    return (
      <div>
          <div className='relative h-screen bg-[url(/assets/img/courses/hr.webp)] bg-no-repeat bg-cover flex justify-center items-center'>
              <div className='flex flex-col gap-10 relative z-10'>
                  <p className='text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold font-dm text-center'>HR Training</p>
                  <p className='font-medium text-center text-xl sm:text-2xl text-white italic font-ibm w-9/12 mx-auto'>Master HR technologies, data-driven people analytics, and digital HR transformation while implementing real HR tech solutions.</p>
              </div>
              <div className="absolute top-0 left-0 w-full h-full bg-[#00000086]"></div>
          </div>
  
          <div className="flex flex-wrap">
              <div className="w-full lg:w-1/2 p-[5%]">
                  <h3 className="font-dm text-3xl sm:text-4xl md:text-5xl w-5/6 text-head-primary">HR Training</h3>
                  <p className="italic my-5 sm:text-2xl text-xl font-spartan">
                  Modernise your HR career in 10 weeks. Master HR technologies, data-driven people analytics, and digital HR transformation while implementing real HR tech solutions.</p>
                  <p className="font-nuno">Learn HRIS platforms, HR analytics tools, and digital recruitment technologies. Perfect for HR professionals ready to lead digital transformation initiatives or transition into HR tech roles.</p>
                  <p className="font-nuno mt-5">HR tech specialists trained by Tritek are revolutionising people management nationwide.</p>
              </div>
              <div className="w-full lg:w-1/2">
                  <CourseForm courseTitle="HR Training"/>
              </div>
          </div>
      </div>
    )
  }
  