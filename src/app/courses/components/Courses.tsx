import Image from "next/image"
import Link from "next/link"
import { PiCheckCircle } from "react-icons/pi"
import CoursesData from "./CoursesData"

interface Course {
    title: string;
    description: string;
    img: string;
    link: string;
  }

export default function Courses() {
  return (
    <div>
        <div className='relative h-screen bg-[url(/assets/img/courses.webp)] bg-no-repeat bg-cover flex justify-center items-center'>
            <div className='flex flex-col gap-10 relative z-10'>
                <p className='text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold font-dm text-center'>Courses</p>
                <p className='font-medium text-center text-xl sm:text-2xl text-white italic font-ibm w-9/12 mx-auto'>Transform Your Career in Project Management and Business Analysis</p>
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-[#00000086]"></div>
        </div>

        <div className="bg-grey flex flex-wrap">
            <div className="w-full h-[500px] lg:h-auto lg:w-1/3 bg-[url(/assets/img/courses1.webp)] bg-center bg-cover lg:bg-right bg-no-repeat"></div>
            <div className="w-full lg:w-2/3 p-[5%]">
                <h2 className="font-spartan text-lg font-medium text-secondary mb-[5%] uppercase">Elite Tech Training Programme</h2>
                <h3 className="font-dm text-3xl sm:text-4xl md:text-5xl w-5/6 text-head-primary">Transform Your Career in Project Management and Business Analysis</h3>
                <p className="italic my-5 sm:text-2xl text-xl">
                Step into the future of work with the Elite Tech Training Programme, the ultimate gateway to high-paying, impactful roles in Project Management and Business Analysis. In just 12 weeks, you’ll master the skills that top employers demand, gaining the confidence to lead projects and drive business success.</p>
                <div>
                    <div>
                        <h3 className="font-spartan text-lg my-4 text-head-primary uppercase">What You’ll Achieve</h3>
                        <ul className="font-nuno">
                            <li className="flex gap-1 mb-[1%] flex-wrap"><PiCheckCircle className="text-xl w-1/12" /><span className="w-10/12">Master Agile, Scrum, and Waterfall methodologies to deliver projects seamlessly.</span></li>
                            <li className="flex gap-1 mb-[1%] flex-wrap"><PiCheckCircle className="text-xl w-1/12" /><span className="w-10/12">Bridge the gap between business needs and technical solutions with precision.</span>
                            </li>
                            <li className="flex gap-1 mb-[1%] flex-wrap"><PiCheckCircle className="text-xl w-1/12" /><span className="w-10/12">Build a portfolio showcasing real-world project deliverables and analysis documents.</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-spartan text-lg my-4 text-head-primary uppercase">What You’ll Learn</h3>
                        <ul className="font-nuno">
                            <li className="flex gap-1 mb-[1%] flex-wrap"><PiCheckCircle className="text-xl w-1/12" /><span className="w-10/12">Project Management: Plan, execute, and lead projects using tools like Jira, MS Project, and Trello.</span></li>
                            <li className="flex gap-1 mb-[1%] flex-wrap"><PiCheckCircle className="text-xl w-1/12" /><span className="w-10/12">Business Analysis: Create process maps, elicit requirements, and develop impactful business cases.</span>
                            </li>
                            <li className="flex gap-1 mb-[1%] flex-wrap"><PiCheckCircle className="text-xl w-1/12" /><span className="w-10/12">Soft Skills: Elevate your stakeholder management, communication, and leadership abilities.
                            </span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div>
                    <h4 className="font-spartan text-lg mt-4 text-head-primary uppercase">Why Choose This Programme?</h4>
                    <p className="font-nuno mt-[3.5%] text-lg">Our graduates don’t just land jobs, they thrive as leaders in their industries. With hands-on experience and career mentorship, you’ll be ready to command six-figure salaries in record time.</p>
                    <p className="font-nuno mt-[3.5%] text-lg">Join thousands of successful alumni who’ve redefined their careers with the Elite Tech Training Programme.</p>
                </div>
                <Link href=''
                className="p-5 bg-secondary text-white inline-block hover:-translate-y-[3px] ease-in-out transition-transform duration-300 mt-[5%] font-nuno"
                >
                Begin Your Elite Journey
                </Link>
            </div>
        </div>

        <div className='flex flex-wrap py-[5%]'>
            <div className='w-full lg:w-1/3 p-[5%] lg:text-left text-center'>
                <h3 className='text-5xl font-bold font-dm lg:w-2/3'>How It All Works</h3>
                <p className='text-lg font-nuno py-[5%] lg:w-10/12'>Here are a few of the important things you should know</p>
                <div className='h-[2px] w-1/6 bg-[#0a0a0a80] lg:mx-0 mx-auto'></div>
            </div>
            <div className='w-full h-[500px] bg-center md:bg-left md:h-auto md:w-1/2 lg:w-1/3 bg-[url(/assets/img/how.webp)] bg-no-repeat bg-cover relative rounded-[30px] overflow-hidden'>
                <div className="absolute top-0 left-0 w-full h-full bg-[#00000098]"></div>
            </div>
            <div className='w-full md:w-1/2 lg:w-1/3 py-[5%] md:-ml-[4%] relative z-10'>
                <div className="flex gap-[5%] flex-wrap mb-[15%] flex-col justify-center items-center md:items-start md:justify-normal md:flex-row">
                    <div className="text-5xl font-bold text-primary shadow-[0_20px_40px_0px_rgba(0,0,0,0.1)] flex justify-center items-center bg-white rounded-[50%] h-24 w-24 mb-[5%] md:mb-0"><h4>1</h4></div>
                    <div className="font-nuno w-10/12 sm:w-7/12 md:text-left text-center">
                        <h4 className="text-2xl mb-1">Find the perfect tutor</h4>
                        <p>Discover expert tutors who match your learning style, goals, and schedule. Browse profiles, read reviews, and choose the right guide for your journey.</p>
                    </div>
                </div>
                <div className="flex gap-[5%] flex-wrap mb-[15%]  flex-col justify-center items-center md:items-start md:justify-normal md:flex-row">
                    <div className="text-5xl font-bold text-primary shadow-[0_20px_40px_0px_rgba(0,0,0,0.1)] flex justify-center items-center bg-white rounded-[50%] h-24 w-24 mb-[5%] md:mb-0"><h4>2</h4></div>
                    <div className="font-nuno w-10/12 sm:w-7/12 md:text-left text-center">
                        <h4 className="text-2xl mb-1">Schedule your lesson</h4>
                        <p>Select a time that works best for you. With flexible scheduling, it&apos;s easy to fit learning into your busy life.</p>
                    </div>
                </div>
                <div className="flex gap-[5%] flex-wrap  flex-col justify-center items-center md:items-start md:justify-normal md:flex-row">
                    <div className="text-5xl font-bold text-primary shadow-[0_20px_40px_0px_rgba(0,0,0,0.1)] flex justify-center items-center bg-white rounded-[50%] h-24 w-24 mb-[5%] md:mb-0"><h4>3</h4></div>
                    <div className="font-nuno w-10/12 sm:w-7/12 md:text-left text-center">
                        <h4 className="text-2xl mb-1">Start the journey</h4>
                        <p>Begin your personalized learning experience and watch yourself grow. Unlock your potential with the support of a dedicated tutor.</p>
                    </div>
                </div>
                
            </div>
        </div>

        <div className="py-[5%]">
            <h4 className="text-4xl font-bold text-center font-dm pb-[5%]">Our Courses</h4>
            <div className="flex flex-wrap">
                {CoursesData.map((course: Course, index: number) => (
                <div key={index} className='w-full sm:w-1/2 lg:w-1/3 pb-[5%] bg-white hover:bg-grey duration-100 transition-colors ease-in-out'>
                    <div className="h-96 relative">
                        <Image
                        fill
                        objectFit="cover"
                        src={course.img}
                        alt={course.title}
                        className="object-cover"
                        />
                    </div>
                    <div className="text-center pt-[2.5%] px-[2.5%] pb-[5%]">
                        <h3 className="text-3xl text-head-primary font-medium font-dm">{course.title}</h3>
                        <h3 className="text-lg font-nuno w-9/12 mx-auto">{course.description}</h3>
                        <Link href={course.link} className="p-5 bg-secondary text-white inline-block hover:-translate-y-[3px] ease-in-out transition-transform duration-300 mt-[5%] font-nuno"
                    >Enroll Now</Link>
                    </div>                 
                </div>
                ))}
            </div>
      </div>
    </div>
  )
}
