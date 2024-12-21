import CourseForm from "./CourseForm";

export default function VideoEditing() {
    return (
      <div>
          <div className='relative h-screen bg-[url(/assets/img/courses/video.webp)] bg-no-repeat bg-cover flex justify-center items-center'>
              <div className='flex flex-col gap-10 relative z-10'>
                  <p className='text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold font-dm text-center'>Video Editing</p>
                  <p className='font-medium text-center text-xl sm:text-2xl text-white italic font-ibm w-9/12 mx-auto'>Master industry-standard editing software while building a portfolio of commercial-grade video content that clients want.</p>
              </div>
              <div className="absolute top-0 left-0 w-full h-full bg-[#00000086]"></div>
          </div>
  
          <div className="flex flex-wrap">
              <div className="w-full lg:w-1/2 p-[5%]">
                  <h3 className="font-dm text-3xl sm:text-4xl md:text-5xl w-5/6 text-head-primary">Video Editing</h3>
                  <p className="italic my-5 sm:text-2xl text-xl font-spartan">
                  Transform into a professional video editor in 8 weeks. Master industry-standard editing software while building a portfolio of commercial-grade video content that clients want.</p>
                  <p className="font-nuno">Learn Adobe Premiere Pro, After Effects, and modern editing techniques. Create motion graphics, master color grading, and develop the technical skills that separate professional editors from amateurs. Perfect for creative professionals or anyone passionate about video production.</p>
                  <p className="font-nuno mt-5">Video Editors work with major brands and production houses. Join them.</p>
              </div>
              <div className="w-full h-[500px] lg:h-auto lg:w-1/2">
                  <CourseForm/>
              </div>
          </div>
      </div>
    )
  }
  