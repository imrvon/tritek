import CourseForm from "./CourseForm";

export default function Cloud() {
    return (
      <div>
          <div className='relative h-screen bg-[url(/assets/img/courses/cloud.webp)] bg-no-repeat bg-cover flex justify-center items-center'>
              <div className='flex flex-col gap-10 relative z-10'>
                  <p className='text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold font-dm text-center'>Cloud Computing</p>
                  <p className='font-medium text-center text-xl sm:text-2xl text-white italic font-ibm w-9/12 mx-auto'>Learn AWS, Azure, and Google Cloud while building real cloud infrastructure and deploying actual applications.</p>
              </div>
              <div className="absolute top-0 left-0 w-full h-full bg-[#00000086]"></div>
          </div>
  
          <div className="flex flex-wrap">
              <div className="w-full lg:w-1/2 p-[5%]">
                  <h3 className="font-dm text-3xl sm:text-4xl md:text-5xl w-5/6 text-head-primary">Cloud Computing</h3>
                  <p className="italic my-5 sm:text-2xl text-xl font-spartan">
                  Master cloud technologies in 14 weeks and step into one of tech&apos;s highest-paying fields. Learn AWS, Azure, and Google Cloud while building real cloud infrastructure and deploying actual applications.</p>
                  <p className="font-nuno">Develop hands-on experience with cloud security, infrastructure as code, and containerisation. Perfect for IT professionals ready to transition to cloud roles or developers seeking to enhance their cloud expertise.
                  </p>
                  <p className="font-nuno mt-5">Cloud architects trained by Tritek command average starting salaries of $65,000.</p>
              </div>
              <div className="w-full lg:w-1/2">
                  <CourseForm />
              </div>
          </div>
      </div>
    )
  }
  