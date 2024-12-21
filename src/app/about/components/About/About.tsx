import { PiCheckCircle } from 'react-icons/pi'

export default function About() {
    
    return (
        <section>
            <div className='bg-[url(/assets/img/about.webp)] min-h-screen bg-no-repeat bg-cover relative bg-top sm:bg-center'>
                <div className='flex flex-col gap-5 absolute top-0 left-0 w-full h-full justify-center items-center z-10'>
                    <p className='text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold font-dm text-center'>About Us</p>
                    <p className='font-medium text-center text-xl sm:text-2xl text-white italic font-ibm w-10/12 sm:w-9/12'>We are a Multi-Award winning project management and business analysis training company that provides both training and practical work experience with mentorship support.</p>
                </div>
                <div className='absolute top-0 left-0 w-full h-full bg-[#000000bb]'></div>
            </div>

            <div className="flex flex-wrap flex-col md:flex-row">
                <div className='md:w-1/2 p-[5%]'>
                    <h2 className="font-spartan text-lg tracking-wider font-medium text-secondary mb-[5%] uppercase">About the CEO</h2>
                    <h3 className="font-dm text-3xl sm:text-4xl md:text-5xl w-5/6 text-head-primary">Dr. Adeshola Cole</h3>
                    
                    <p className="font-nuno mt-[3.5%] text-lg">Dr. Adeshola Cole is the driving force behind Tritek Academy’s transformative mission. As the CEO and Founder, she has dedicated her career to creating pathways for individuals to excel in tech, regardless of their background.</p>
                    <p className="font-nuno mt-[3.5%] text-lg">Under Dr. Cole’s leadership, Tritek Academy has grown into a globally recognized EdTech organisation, empowering over 5,000 individuals to transition into tech careers. Her vision has earned her numerous accolades, including:</p>
                    <ul className='mt-[5%]'>
                        <li className="flex gap-1 mb-[1%] flex-wrap items-start"><PiCheckCircle className="text-xl w-1/12" /><span className="w-10/12 leading-[20px]">Outstanding Woman in Tech 2023</span></li>
                        <li className="flex gap-1 mb-[1%] flex-wrap items-start"><PiCheckCircle className="text-xl w-1/12" /><span className="w-10/12 leading-[20px]">Emerging CEO of the Year 2022</span></li>
                        <li className="flex gap-1 mb-[1%] flex-wrap items-start"><PiCheckCircle className="text-xl w-1/12" /><span className="w-10/12 leading-[20px]">Recognition among the Top 100 Influential Global Voices</span></li>
                    </ul>
                    <p className="font-nuno mt-[3.5%] text-lg">Her impact goes beyond business success. Dr. Cole has spearheaded initiatives to foster diversity and inclusion, with Tritek Academy being recognised as one of the Top 20 Black Businesses in the UK by Channel 4 in partnership with Lloyds Bank.</p>
                    <p className="font-nuno mt-[3.5%] text-lg">Dr. Cole’s philanthropic efforts include sponsoring over 100 individuals to access life-changing tech opportunities. She mentors young women weekly at Oasis Academy, providing them with the tools to dream big and achieve more.</p>
                    <p className="font-nuno mt-[3.5%] text-lg">Dr. Cole lives by the mantra: “Make a way, not an excuse.” Her authenticity, integrity, and resilience inspire learners and professionals alike to break barriers and unlock their potential.</p>
                    <h4 className='mt-[5%] font-semibold text-head-primary text-2xl font-nuno'>A Legacy of Empowerment
                    </h4>
                    <p className="font-nuno mt-[3.5%] text-lg">Through Tritek Academy and her personal initiatives, Dr. Adeshola Cole continues to shape the future of tech education, leaving an indelible mark on the global workforce.</p>
                </div>

                <div className='h-[500px] md:h-auto md:w-1/2 bg-[url(/assets/img/ceo.webp)] bg-cover bg-no-repeat md:bg-top lg:bg-left'></div>
            </div>

            <div className='flex flex-wrap flex-col-reverse md:flex-row'>
                <div className="bg-[url(/assets/img/company.webp)] bg-no-repeat bg-cover relative h-[500px] md:h-auto md:w-1/2"></div>
                <div className="p-[5%] md:w-1/2">
                    <h3 className="font-dm text-3xl sm:text-4xl md::text-5xl w-5/6 text-head-primary">Welcome to Tritek Academy</h3>
                    <p className="font-nuno mt-[2.5%] text-lg">At Tritek Academy, we believe technology is not just a tool; it’s a gateway to transformation. In a world where traditional career paths are constantly disrupted, we stand at the crossroads of change, empowering individuals to harness technology and redefine their futures.</p>
                    
                    <h2 className="font-spartan text-lg tracking-wider font-semibold text-secondary mt-[3%]">OUR MISSION</h2>
                    <p className="font-nuno mt-[1.5%] text-lg">To go beyond traditional technical education by crafting learning journeys that transform lives. We nurture the human potential behind the code, the strategy behind the systems, and the purpose behind the projects.</p>
                    <p className="font-nuno mt-[3.5%] text-lg">Through immersive, project-based experiences in Business Analysis, Cybersecurity, Data Analysis, Digital Marketing, Product Management, Project Management, and emerging technologies, we prepare professionals to tackle real-world challenges and make meaningful contributions to their industries.</p>

                    <h2 className="font-spartan text-lg tracking-wider font-semibold text-secondary mt-[3%] uppercase">Our Vision</h2>
                    <p className="font-nuno mt-[1.5%] text-lg">We envision a future where technology education knows no boundaries. Tritek Academy is the cornerstone of global digital career transformation, enabling every individual, regardless of their background, to harness the power of technology for impactful innovation.</p>
                    <p className="font-nuno mt-[3.5%] text-lg">Our graduates don’t just earn certificates – they become architects of digital transformation, leveraging their skills to revolutionize industries, solve complex problems, and lead with confidence.</p>
                </div>
            </div>

            <div className="flex flex-wrap flex-col md:flex-row">
                <div className='md:w-1/2 p-[5%]'>
                    <h3 className="font-dm text-3xl sm:text-4xl md:text-5xl w-5/6 text-head-primary">What Sets Us Apart</h3>
                        <div>
                            <ul className='mt-[5%]'>
                                <li className="flex gap-1 mb-[1%] flex-wrap items-start"><PiCheckCircle className="text-xl w-1/12" /><span className="w-10/12 leading-[20px]">Human-Centric Approach: Every learner’s story matters. From healthcare professionals embracing telehealth to educators driving digital innovation, we tailor education to real-world needs.</span></li>
                                <li className="flex gap-1 mb-[1%] flex-wrap items-start"><PiCheckCircle className="text-xl w-1/12" /><span className="w-10/12 leading-[20px]">Practical Excellence: Our comprehensive curriculum bridges the gap between learning and doing, equipping learners with hands-on experience through live projects and simulations.</span></li>
                                <li className="flex gap-1 mb-[1%] flex-wrap items-start"><PiCheckCircle className="text-xl w-1/12" /><span className="w-10/12 leading-[20px]">Global Impact: With a presence in the UK, Nigeria, the US, and Canada, we’ve helped over 5,000 professionals transition into high-demand tech roles.</span></li>
                            </ul>
                        </div>

                        <h3 className="font-spartan text-lg my-4 text-head-primary uppercase">Our Values</h3>
                        <div>
                            <ul className='mt-[5%]'>
                                <li className="flex gap-1 mb-[1%] flex-wrap items-start"><PiCheckCircle className="text-xl w-1/12" /><span className="w-10/12 leading-[20px]">Innovation: Staying ahead of industry trends to provide cutting-edge skills.</span></li>
                                <li className="flex gap-1 mb-[1%] flex-wrap items-start"><PiCheckCircle className="text-xl w-1/12" /><span className="w-10/12 leading-[20px]">Excellence: Delivering top-tier, practical training aligned with global standards.</span></li>
                                <li className="flex gap-1 mb-[1%] flex-wrap items-start"><PiCheckCircle className="text-xl w-1/12" /><span className="w-10/12 leading-[20px]">Community: Building an inclusive ecosystem of learners, alumni, and mentors dedicated to lifelong growth.
                                </span></li>
                            </ul>
                        </div>
                    <p className="font-nuno mt-[3.5%] text-lg">Join Tritek Academy and take the first step toward a career transformation that not only prepares you for the future but empowers you to shape it.</p>
                </div>

                <div className='h-[500px] md:h-auto md:w-1/2 bg-[url(/assets/img/about3.webp)] bg-cover bg-no-repeat md:bg-top lg:bg-left'></div>
            </div>
        </section>
    )
}
