import Image from "next/image";
import Link from "next/link";
import { PiCaretCircleRight, PiCheckCircle } from "react-icons/pi"

export default function Services() {
  return (
    <section>
      <div
        className="relative flex items-center justify-center min-h-screen bg-fixed bg-cover bg-top bg-[url('/assets/img/hero_services.webp')]">
        <article className="z-10 text-white md:w-7/12 p-2 text-center mt-20">
          <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading">Services</h1>
          <p className="text-xl sm:text-2xl italic my-10 sm:leading-10 font-heading">
            At Tritek Academy, we don’t just deliver training—we drive results that matter for businesses, government institutions, and public-sector organisations.
          </p>
        </article>
      </div>

      <div className="bg-[#f7f7f5] flex flex-wrap">
          <article className="lg:w-1/2 p-[5%]">
            <h2 className="font-heading text-lg tracking-wider font-medium text-secondary mb-[5%]">INTRODUCTION</h2>
            <h3 className="font-heading text-3xl sm:text-4xl md:text-5xl text-head-primary">Helping You Solve Workforce Challenges</h3>
            <p className="font-paragraph mt-[3.5%] text-lg">Organisations today face a rapidly shifting landscape: skills gaps, evolving technologies, and the need for agile, innovative teams. Whether you’re a corporate entity or a public-sector organisation, Tritek Academy provides targeted solutions to equip your teams with the knowledge, tools, and confidence they need to thrive.</p>
          </article>

          <div className="flex flex-col sm:flex-row w-full lg:w-1/2 justify-between lg:p-0 p-[5%]">
                <div className="flex justify-center items-center flex-col bg-white text-center w-full sm:w-[49%] p-[5%] lg:p-0 sm:mb-0 mb-[5%]">
                    <Image src="/assets/icons/acquisition.svg" width={1024} height={998} alt="icon" className="w-1/3"/>
                    <h4 className="font-heading font-bold text-xl text-head-primary w-[70%] my-[2.5%]">Corporate Training Services</h4>
                    <Link href='#corp' className="flex gap-1 items-center text-sm text-secondary mt-[5%] font-paragraph w-fit group hover:text-black transition-color duration-200 ease-in-out">
                        READ MORE
                        <PiCaretCircleRight className="text-lg group-hover:translate-x-2 transition-transform duration-200 ease-in-out"/>
                    </Link>
                </div>
                <div className="flex justify-center items-center flex-col bg-white text-center w-full sm:w-[49%] p-[5%] lg:p-0 sm:mb-0 mb-[5%]">
                    <Image src="/assets/icons/company.svg" width={1024} height={998} alt="icon" className="w-1/3"/>
                    <h4 className="font-heading font-bold text-xl text-head-primary w-[70%] my-[2.5%]">Public-Sector Partnerships</h4>
                    <Link href='#pub' className="flex gap-1 items-center text-sm text-secondary mt-[5%] font-paragraph w-fit group hover:text-black transition-color duration-200 ease-in-out">
                        READ MORE
                        <PiCaretCircleRight className="text-lg group-hover:translate-x-2 transition-transform duration-200 ease-in-out"/>
                    </Link>
                </div>
                
          </div>
      </div>
      <div className="bg-grey flex flex-wrap" id="corp">
            <div className="w-full h-[500px] lg:h-auto lg:w-1/3 bg-[url(/assets/img/serv1.webp)] bg-center bg-cover lg:bg-left bg-no-repeat"></div>
            <div className="w-full lg:w-2/3 p-[5%]">
                <h2 className="font-heading text-lg font-medium text-secondary mb-[5%] uppercase">Corporate Training Services</h2>
                <h3 className="font-heading text-3xl sm:text-4xl md:text-5xl w-5/6 text-head-primary">Transform Your Teams. Elevate Your Results</h3>
                <p className="italic my-5 sm:text-2xl text-xl">
                    Our corporate training programs are designed to address the unique challenges of businesses across industries. We deliver hands-on, practical training to upskill your workforce and ensure they’re prepared for the demands of today—and tomorrow.</p>
                <div>
                    <div>
                        <h3 className="font-heading text-lg my-4 text-head-primary">KEY FEATURES</h3>
                        <ul className="font-paragraph">
                            <li className="flex gap-1 mb-[1%] flex-wrap"><PiCheckCircle className="text-xl w-1/12" /><span className="w-10/12">Tailored Training Programs: Customisable courses in areas like Business Analysis, Cybersecurity, Process Automation, and Artificial Intelligence to meet your team’s specific needs.</span></li>
                            <li className="flex gap-1 mb-[1%] flex-wrap"><PiCheckCircle className="text-xl w-1/12" /><span className="w-10/12">Practical Learning: Real-world projects and case studies ensure participants gain applicable skills from day one.</span>
                            </li>
                            <li className="flex gap-1 mb-[1%] flex-wrap"><PiCheckCircle className="text-xl w-1/12" /><span className="w-10/12">Flexible Delivery: Choose from on-site training, live virtual sessions, or hybrid models to suit your organisation’s schedule.</span>
                            </li>
                            <li className="flex gap-1 mb-[1%] flex-wrap"><PiCheckCircle className="text-xl w-1/12" /><span className="w-10/12">CPD-Certified Courses: Our programs are globally recognised and designed to meet industry standards.</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-heading text-lg my-4 uppercase text-head-primary">How We Solve Your Challenges</h3>
                        <ul className="font-paragraph">
                            <li className="flex gap-1 mb-[1%] flex-wrap"><PiCheckCircle className="text-xl w-1/12" /><span className="w-10/12">Struggling with a skills gap? We create custom programs to upskill and reskill your team members.</span></li>
                            <li className="flex gap-1 mb-[1%] flex-wrap"><PiCheckCircle className="text-xl w-1/12" /><span className="w-10/12">Need training that aligns with your business objectives? Our courses are tailored to your organisational goals.</span>
                            </li>
                            <li className="flex gap-1 mb-[1%] flex-wrap"><PiCheckCircle className="text-xl w-1/12" /><span className="w-10/12">Looking for measurable outcomes? We provide post-training analytics to track team progress and ROI.
                            </span>
                            </li>
                        </ul>
                    </div>
                </div>
                <Link href='/contact'
                className="p-5 bg-secondary text-white inline-block hover:-translate-y-[3px] ease-in-out transition-transform duration-300 mt-[5%] font-paragraph"
                >
                <span className="hidden sm:inline">Let’s Build a Smarter Workforce—</span>Contact Us Today!
                </Link>
            </div>
      </div>
      <div className="bg-grey flex flex-col-reverse lg:flex-row flex-wrap" id="pub">
            <div className="w-full lg:w-2/3 p-[5%]">
                <h2 className="font-heading text-lg font-medium text-secondary mb-[5%] uppercase">Public-Sector Partnerships</h2>
                <h3 className="font-heading text-3xl sm:text-4xl md:text-5xl w-5/6 text-head-primary">Driving Impact for Communities and Institutions</h3>
                <p className="italic my-5 sm:text-2xl text-xl">
                We collaborate with government agencies and public-sector organisations to design impactful training programs that address societal and institutional challenges.</p>
                <div>
                    <div>
                        <h3 className="font-heading text-lg my-4 text-head-primary uppercase">Our Approach</h3>
                        <ul className="font-paragraph">
                            <li className="flex gap-1 mb-[1%] flex-wrap"><PiCheckCircle className="text-xl w-1/12" /><span className="w-10/12">Strategic Collaboration: We work closely with your organisation to identify gaps, set objectives, and deliver training aligned with your mission.</span></li>
                            <li className="flex gap-1 mb-[1%] flex-wrap"><PiCheckCircle className="text-xl w-1/12" /><span className="w-10/12">Specialised Training Areas: From Telehealth to Education Technology and Robotics Engineering, we equip public-sector teams with cutting-edge skills to address modern challenges.</span>
                            </li>
                            <li className="flex gap-1 mb-[1%] flex-wrap"><PiCheckCircle className="text-xl w-1/12" /><span className="w-10/12">Building Capacity: Our training programs empower government officials, healthcare workers, educators, and other public-sector employees to excel in their roles.</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-heading text-lg my-4 uppercase text-head-primary">How We Solve Your Challenges</h3>
                        <ul className="font-paragraph">
                            <li className="flex gap-1 mb-[1%] flex-wrap"><PiCheckCircle className="text-xl w-1/12" /><span className="w-10/12">Bridging the digital divide in underserved communities</span></li>
                            <li className="flex gap-1 mb-[1%] flex-wrap"><PiCheckCircle className="text-xl w-1/12" /><span className="w-10/12">Preparing healthcare professionals for the future of Telehealth.</span>
                            </li>
                            <li className="flex gap-1 mb-[1%] flex-wrap"><PiCheckCircle className="text-xl w-1/12" /><span className="w-10/12">Upskilling educators to implement and leverage EdTech solutions effectively.</span></li>
                            <li className="flex gap-1 mb-[1%] flex-wrap"><PiCheckCircle className="text-xl w-1/12" /><span className="w-10/12">Enabling public institutions to adopt innovative technologies, streamline operations, and better serve citizens.</span></li>
                        </ul>
                    </div>
                </div>
                <Link href='/contact'
                className="p-5 bg-secondary text-white inline-block hover:-translate-y-[3px] ease-in-out transition-transform duration-300 mt-[5%] font-paragraph"
                >
                <span className="hidden sm:inline">Partner With Us to Drive Public-Sector Innovation—</span>Contact Our Team!
                </Link>
            </div>
            <div className="w-full h-[500px] lg:h-auto lg:w-1/3 bg-[url(/assets/img/serv2.webp)] bg-cover bg-no-repeat bg-center lg:bg-left"></div>
      </div>
    </section>
  );
}
