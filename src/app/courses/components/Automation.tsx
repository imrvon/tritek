import CourseForm from "./CourseForm";

export default function Automation() {
    return (
      <div>
          <div className='relative h-screen bg-[url(/assets/img/courses/automation.webp)] bg-no-repeat bg-cover flex justify-center items-center'>
              <div className='flex flex-col gap-10 relative z-10'>
                  <p className='text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold font-dm text-center'>Process Automation</p>
                  <p className='font-medium text-center text-xl sm:text-2xl text-white italic font-ibm w-9/12 mx-auto'>Learn RPA tools, workflow automation, and integration technologies while automating real business processes.</p>
              </div>
              <div className="absolute top-0 left-0 w-full h-full bg-[#00000086]"></div>
          </div>
  
          <div className="flex flex-wrap">
              <div className="w-full lg:w-1/2 p-[5%]">
                  <h3 className="font-dm text-3xl sm:text-4xl md:text-5xl w-5/6 text-head-primary">Process Automation</h3>
                  <p className="italic my-5 sm:text-2xl text-xl font-spartan">
                  Master process automation in 10 weeks and eliminate repetitive tasks forever. Learn RPA tools, workflow automation, and integration technologies while automating real business processes.</p>
                  <p className="font-nuno">Work with UiPath, Power Automate, and Zapier to create end-to-end automation solutions. Perfect for business analysts, operations professionals, or anyone ready to lead automation initiatives.</p>
                  <p className="font-nuno mt-5">Automation experts trained by Tritek save companies millions and command premium salaries.</p>
              </div>
              <div className="w-full lg:w-1/2">
                  <CourseForm courseTitle="Process Automation"/>
              </div>
          </div>
      </div>
    )
  }
  