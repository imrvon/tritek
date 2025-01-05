import { PiCheckCircle } from 'react-icons/pi'
import CourseForm from './CourseForm'

export default function Cyber() {
    return (
      <div>
          <div className='relative h-screen bg-[url(/assets/img/courses/cyber.webp)] bg-no-repeat bg-cover flex justify-center items-center'>
              <div className='flex flex-col gap-10 relative z-10'>
                  <p className='text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold font-heading text-center'>Cyber Security</p>
                  <p className='font-medium text-center text-xl sm:text-2xl text-white italic font-heading w-9/12 mx-auto'>Master ethical hacking, threat detection, and security architecture while earning industry-recognised certifications. </p>
              </div>
              <div className="absolute top-0 left-0 w-full h-full bg-[#00000086]"></div>
          </div>
  
          <div className="flex flex-wrap">
              <div className="w-full lg:w-1/2 p-[5%]">
                  <h3 className="font-dm text-3xl sm:text-4xl md:text-5xl w-5/6 text-head-primary">Cyber Security</h3>
                  <p className="italic my-5 sm:text-2xl text-xl font-heading">
                  Break into cybersecurity in 14 weeks. Master ethical hacking, threat detection, and security architecture while earning industry-recognised certifications. Cybersecurity professionals are desperately needed – with 3.5 million unfilled positions globally.</p>
                  <p className="font-paragraph">This isn&apos;t theoretical security training. You&apos;ll hack real systems (legally), stop actual cyber attacks, and build security infrastructure using industry-standard tools. Perfect for IT professionals, network administrators, or anyone passionate about digital security.</p>
                  <p className="font-paragraph mt-[3.5%] text-lg">Our hands-on approach means you&apos;ll graduate with experience in:</p>
                    <ul className='mt-[5%]'>
                        <li className="flex gap-1 mb-[1%] flex-wrap items-start"><PiCheckCircle className="text-xl w-1/12" /><span className="w-10/12 leading-[20px]">Penetration testing real networks</span></li>
                        <li className="flex gap-1 mb-[1%] flex-wrap items-start"><PiCheckCircle className="text-xl w-1/12" /><span className="w-10/12 leading-[20px]">Building secure systems from scratch</span></li>
                        <li className="flex gap-1 mb-[1%] flex-wrap items-start"><PiCheckCircle className="text-xl w-1/12" /><span className="w-10/12 leading-[20px]">Conducting security audits</span></li>
                        <li className="flex gap-1 mb-[1%] flex-wrap items-start"><PiCheckCircle className="text-xl w-1/12" /><span className="w-10/12 leading-[20px]">Managing security operations centers</span></li>
                    </ul>
                    <p className="font-paragraph mt-[3.5%] text-lg">Become the security expert companies are fighting to hire.
                    </p>
                </div>
                <div className="w-full lg:w-1/2">
                  <CourseForm courseTitle='Cyber Security' />
              </div>
          </div>
      </div>
    )
  }
  