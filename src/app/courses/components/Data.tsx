import CourseForm from "./CourseForm";

export default function Data() {
    return (
      <div>
          <div className='relative h-screen bg-[url(/assets/img/courses/data.webp)] bg-no-repeat bg-cover flex justify-center items-center'>
              <div className='flex flex-col gap-10 relative z-10'>
                  <p className='text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold font-dm text-center'>Data Analysis</p>
                  <p className='font-medium text-center text-xl sm:text-2xl text-white italic font-ibm w-9/12 mx-auto'>Master SQL, Python, and visualisation tools while working on real datasets that solve actual business problems.</p>
              </div>
              <div className="absolute top-0 left-0 w-full h-full bg-[#00000086]"></div>
          </div>
  
          <div className="flex flex-wrap">
              <div className="w-full h-[500px] lg:h-auto lg:w-1/2">
                  <CourseForm />
              </div>
              <div className="w-full lg:w-1/2 p-[5%]">
                  <h3 className="font-dm text-3xl sm:text-4xl md:text-5xl w-5/6 text-head-primary">Data Analysis</h3>
                  <p className="italic my-5 sm:text-2xl text-xl font-spartan">
                  Turn data into insights and launch your data analysis career in 12 weeks. Master SQL, Python, and visualisation tools while working on real datasets that solve actual business problems.</p>
                  <p className="font-nuno">Learn to clean data, perform advanced analysis, and create compelling visualisations that drive business decisions. Work with tools like Tableau, Power BI, and Python libraries used by top companies. Perfect for analysts seeking advancement or professionals ready to enter the data field.</p>
                  <p className="font-nuno mt-5">Graduate guarantee: Join the 90% of our data analysts who secure roles within 4 months.</p>
              </div>
          </div>
      </div>
    )
  }
  