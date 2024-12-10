
import Image from "next/image"
import Link from "next/link"
import HomeCoursesData from "./HomeCoursesData"
import { PiCaretCircleRight, PiCheckCircle } from "react-icons/pi"

export default function HomeCourses() {
  return (
    <section className="flex justify-between px-[5%] pt-[10%] pb-[35%] bg-grey">
        <div className="flex flex-wrap w-[48%] justify-between">
            {HomeCoursesData.map((data) => (
                <div className="w-[47%] mb-[5%] rounded-md overflow-clip shadow-sm group flex flex-col" key={data.id}>
                    <div className='h-60 relative'>
                        <Image src={data.img} fill alt={data.name} className="object-cover scale-100 group-hover:scale-105 transition-transform duration-300 ease-in-out"/>
                    </div>
                    <div className="p-[5%] bg-white flex-1 flex flex-col justify-between">
                        <div>
                            <h4 className="text-head-primary text-xl font-bold font-spartan">{data.name}</h4>
                            <p className="text-sm font-nuno">{data.description}</p>
                        </div>
                        <Link href='/contact' className="flex gap-1 items-center text-sm text-secondary mt-[5%] font-nuno w-fit group/inner">
                            ENROL NOW
                            <PiCaretCircleRight className="text-xl group-hover/inner:translate-x-2 transition-transform duration-200 ease-in-out"/>
                        </Link>
                    </div>
                </div>
                ))}
        </div>
        <div className="w-[48%] pl-[5%] py-[3%]">
            <h2 className="font-spartan text-lg tracking-wider font-medium text-secondary mb-[5%]">OUR COURSES</h2>
            <h3 className="font-dm text-5xl w-5/6 text-head-primary">Empowering the Next Generation of Tech Innovators</h3>
            <p className="text-2xl italic font-ibm my-[5%] text-head-primary">We are a forward-thinking tech training company, committed to delivering cutting-edge learning experiences. </p>
            <p className="font-nuno mb-[5%] text-lg">Our team consists of seasoned tech experts, passionate instructors, and industry leaders dedicated to equipping you with the skills needed to thrive in the ever-evolving tech landscape. We focus on creating practical, hands-on training programs tailored to your career growth and innovation.</p>
            <ul className="font-nuno">
                <li className="flex gap-1 items-center"><PiCheckCircle className="text-xl" /> Cyber Security</li>
                <li className="flex gap-1 items-center"><PiCheckCircle className="text-xl" /> AI and Data Science</li>
                <li className="flex gap-1 items-center"><PiCheckCircle className="text-xl" /> Coding for Kids</li>
            </ul>
            <Link href='/contact' className="flex gap-1 items-center text-sm text-secondary mt-[5%] font-nuno w-fit group hover:text-black transition-color duration-200 ease-in-out">
                SEE ALL COURSES
                <PiCaretCircleRight className="text-lg group-hover:translate-x-2 transition-transform duration-200 ease-in-out"/>
            </Link>
        </div>
    </section>
  )
}
