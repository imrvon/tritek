import CourseForm from "./CourseForm";

export default function Product() {
    return (
      <div>
          <div className='relative h-screen bg-[url(/assets/img/courses/product.webp)] bg-no-repeat bg-cover flex justify-center items-center'>
              <div className='flex flex-col gap-10 relative z-10'>
                  <p className='text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold font-heading text-center'>Product Management</p>
                  <p className='font-medium text-center text-xl sm:text-2xl text-white italic font-heading w-9/12 mx-auto'>Learn to identify market opportunities, develop product strategies, and lead cross-functional teams while building a portfolio of real product launches.
                  </p>
              </div>
              <div className="absolute top-0 left-0 w-full h-full bg-[#00000086]"></div>
          </div>
  
          <div className="flex flex-wrap">
              <div className="w-full lg:w-1/2 p-[5%]">
                  <h3 className="font-dm text-3xl sm:text-4xl md:text-5xl w-5/6 text-head-primary">Product Management</h3>
                  <p className="italic my-5 sm:text-2xl text-xl font-heading">
                  Launch your product management career in 14 weeks. Learn to identify market opportunities, develop product strategies, and lead cross-functional teams while building a portfolio of real product launches.</p>
                  <p className="font-paragraph">Master user research, create product roadmaps, and develop go-to-market strategies that drive results. Work directly with designers, developers, and stakeholders to bring products to life. Perfect for professionals ready to lead product innovation.</p>
              </div>
              <div className="w-full lg:w-1/2">
                  <CourseForm courseTitle="Product Management"/>
              </div>
          </div>
      </div>
    )
  }
  