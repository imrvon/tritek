import CourseForm from "./CourseForm";

export default function Scrum() {
    return (
      <div>
          <div className='relative h-screen bg-[url(/assets/img/courses/scrum.webp)] bg-no-repeat bg-cover flex justify-center items-center'>
              <div className='flex flex-col gap-10 relative z-10'>
                  <p className='text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold font-dm text-center'>Scrum Mastery</p>
                  <p className='font-medium text-center text-xl sm:text-2xl text-white italic font-ibm w-9/12 mx-auto'>Master Agile frameworks, learn to lead high-performing teams, and gain hands-on experience facilitating real sprint sessions.</p>
              </div>
              <div className="absolute top-0 left-0 w-full h-full bg-[#00000086]"></div>
          </div>
  
          <div className="flex flex-wrap">
              <div className="w-full lg:w-1/2 p-[5%]">
                  <h3 className="font-dm text-3xl sm:text-4xl md:text-5xl w-5/6 text-head-primary">Scrum Mastery</h3>
                  <p className="italic my-5 sm:text-2xl text-xl font-spartan">
                  Become a certified Scrum Master in 6 weeks and step into one of tech&apos;s most in-demand roles. Master Agile frameworks, learn to lead high-performing teams, and gain hands-on experience facilitating real sprint sessions.</p>
                  <p className="font-nuno">You&apos;ll work with actual development teams, handle real sprint ceremonies, and learn advanced Scrum techniques that separate great Scrum Masters from good ones. Perfect for project managers, team leads, or anyone passionate about Agile delivery.
                  </p>
                  <p className="font-nuno mt-5">Average starting salary for our Scrum Master graduates: $35,000. Time to certification: 6 weeks.</p>
              </div>
              <div className="w-full lg:w-1/2">
                  <CourseForm/>
              </div>
          </div>
      </div>
    )
  }
  