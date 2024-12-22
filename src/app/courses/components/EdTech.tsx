import CourseForm from "./CourseForm";

export default function EdTech() {
    return (
      <div>
          <div className='relative h-screen bg-[url(/assets/img/courses/edtech.webp)] bg-no-repeat bg-cover flex justify-center items-center'>
              <div className='flex flex-col gap-10 relative z-10'>
                  <p className='text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold font-dm text-center'>Education Technology Specialist</p>
                  <p className='font-medium text-center text-xl sm:text-2xl text-white italic font-ibm w-9/12 mx-auto'>Bridge your teaching expertise with technical knowledge while mastering the tools reshaping modern education.</p>
              </div>
              <div className="absolute top-0 left-0 w-full h-full bg-[#00000086]"></div>
          </div>
  
          <div className="flex flex-wrap">
              <div className="w-full lg:w-1/2 p-[5%]">
                  <h3 className="font-dm text-3xl sm:text-4xl md:text-5xl w-5/6 text-head-primary">Education Technology Specialist</h3>
                  <p className="italic my-5 sm:text-2xl text-xl font-spartan">
                  Designed exclusively for educators: Transform into an EdTech specialist in 10 weeks. Bridge your teaching expertise with technical knowledge while mastering the tools reshaping modern education.</p>
                  <p className="font-nuno">Learn to implement learning management systems, develop digital curricula, and lead educational technology initiatives. Perfect for teachers and administrators ready to advance their careers in the growing EdTech sector.
                  </p>
                  <p className="font-nuno mt-5">EdTech specialists trained by Tritek are driving digital transformation in schools nationwide.</p>
              </div>
              <div className="w-full lg:w-1/2">
                  <CourseForm courseTitle="Education Technology Specialist"/>
              </div>
          </div>
      </div>
    )
  }
  