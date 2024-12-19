import { PiCheckCircle } from 'react-icons/pi';
import Link from 'next/link';

export default function Careers() {

    return (
        <div className='bg-[#f7f7f5]'>
            <div className='relative h-screen bg-[url(/assets/img/hero_career.webp)] bg-no-repeat bg-cover flex justify-center items-center'>
                <div className='flex flex-col gap-10 relative z-10'>
                    <p className='text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold font-dm text-center'>Careers</p>
                    <p className='font-medium text-center text-xl sm:text-2xl text-white italic font-ibm w-9/12 mx-auto'>Join a team that’s shaping the future of education, innovation, and technology. At Tritek Academy, we don’t just offer jobs—we offer careers that inspire and empower.</p>
                </div>
                <div className="absolute top-0 left-0 w-full h-full bg-[#0000003a]"></div>
            </div>

            <div className="bg-[#f7f7f5] flex flex-wrap">
                <article className="lg:w-1/2 p-[5%]">
                    <h2 className="font-spartan text-lg tracking-wider font-medium text-secondary mb-[5%] uppercase">Why Join Tritek Academy?
                    </h2>
                    <h3 className="font-dm text-3xl sm:text-4xl md:text-5xl text-head-primary">Be Part of Something Bigger</h3>
                    <p className="font-nuno mt-[3.5%] text-lg">At Tritek Academy, we’re more than a company—we’re a mission-driven organization that transforms lives through cutting-edge training and education. Joining us means being part of a dynamic, innovative, and supportive team that values your growth as much as our impact.
                    </p>
                    <div>
                        <h3 className="font-spartan text-lg my-4 text-head-primary uppercase">Here’s Why You’ll Love Working with Us</h3>
                        <ul className="font-nuno">
                            <li className="flex gap-1 mb-[1%] flex-wrap"><PiCheckCircle className="text-xl w-1/12" /><span className="w-10/12">Impactful Work: Everything we do empowers individuals to unlock their potential and thrive in high-demand industries. Your contributions will make a real difference.</span></li>
                            <li className="flex gap-1 mb-[1%] flex-wrap"><PiCheckCircle className="text-xl w-1/12" /><span className="w-10/12">Innovative Environment: Work with passionate professionals at the forefront of technology, education, and business transformation.</span>
                            </li>
                            <li className="flex gap-1 mb-[1%] flex-wrap"><PiCheckCircle className="text-xl w-1/12" /><span className="w-10/12">Growth Opportunities: Whether you’re just starting out or looking to take your career to the next level, we invest in your personal and professional development.</span>
                            </li>
                            <li className="flex gap-1 mb-[1%] flex-wrap"><PiCheckCircle className="text-xl w-1/12" /><span className="w-10/12">A Culture of Excellence: We celebrate collaboration, creativity, and results. You’ll join a team where your ideas are valued and your successes are celebrated.</span>
                            </li>
                            <li className="flex gap-1 mb-[1%] flex-wrap"><PiCheckCircle className="text-xl w-1/12" /><span className="w-10/12">A Culture of Excellence: We celebrate collaboration, creativity, and results. You’ll join a team where your ideas are valued and your successes are celebrated.</span>
                            </li>
                            <li className="flex gap-1 mb-[1%] flex-wrap"><PiCheckCircle className="text-xl w-1/12" /><span className="w-10/12">Diversity and Inclusion: At Tritek Academy, we embrace the power of diverse perspectives. We thrive because of the variety of experiences and backgrounds our team brings to the table.</span>
                            </li>
                        </ul>
                    </div>
                </article>
                <div className="h-[500px] lg:h-auto w-full lg:w-1/2 bg-[url(/assets/img/career1.webp)] bg-no-repeat bg-cover bg-center"></div>
            </div>
            <div className="bg-[#f7f7f5] flex flex-col-reverse lg:flex-row flex-wrap">
                <div className="w-full lg:w-1/2 h-[500px] lg:h-auto bg-[url(/assets/img/career2.webp)] bg-no-repeat bg-cover bg-center"></div>
                <article className="lg:w-1/2 p-[5%]">
                    <h2 className="font-spartan text-lg tracking-wider font-medium text-secondary mb-[5%] uppercase">Life at Tritek Academy</h2>
                    <h3 className="font-dm text-3xl sm:text-4xl md:text-5xl text-head-primary">Where Passion Meets Purpose</h3>
                    <p className="font-nuno mt-[3.5%] text-lg">Life at Tritek Academy is dynamic, inspiring, and rewarding. Here’s what you can expect when you join our team.
                    </p>
                    <div>
                        <h3 className="font-spartan text-lg my-4 text-head-primary uppercase">Our Values in Action</h3>
                        <ul className="font-nuno">
                            <li className="flex gap-1 mb-[1%] flex-wrap"><PiCheckCircle className="text-xl w-1/12" /><span className="w-10/12">Innovation Every Day: Whether we’re designing new courses or reimagining recruitment strategies, our culture thrives on fresh ideas and forward-thinking solutions.</span></li>
                            <li className="flex gap-1 mb-[1%] flex-wrap"><PiCheckCircle className="text-xl w-1/12" /><span className="w-10/12">Collaborative Spirit: We believe in the power of teamwork. Every project, big or small, is a team effort where everyone’s input matters.</span>
                            </li>
                            <li className="flex gap-1 mb-[1%] flex-wrap"><PiCheckCircle className="text-xl w-1/12" /><span className="w-10/12">Work-Life Balance: We respect your time and energy. Enjoy flexible working arrangements and wellness initiatives that keep you motivated and refreshed.</span>
                            </li>
                            <li className="flex gap-1 mb-[1%] flex-wrap"><PiCheckCircle className="text-xl w-1/12" /><span className="w-10/12">Celebrating Success: We recognize and reward achievements, both individual and collective. Expect regular celebrations, team-building events, and shoutouts for a job well done.</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-spartan text-lg my-4 text-head-primary uppercase">What Our Team Loves</h3>
                        <ul className="font-nuno">
                            <li className="flex gap-1 mb-[1%] flex-wrap"><PiCheckCircle className="text-xl w-1/12" /><span className="w-10/12">Modern Workspaces: Whether remote or in-person, our work environment is designed for productivity and creativity.</span></li>
                            <li className="flex gap-1 mb-[1%] flex-wrap"><PiCheckCircle className="text-xl w-1/12" /><span className="w-10/12">Professional Development: Gain access to free courses, certifications, and mentorship programs to level up your skills.</span>
                            </li>
                            <li className="flex gap-1 mb-[1%] flex-wrap"><PiCheckCircle className="text-xl w-1/12" /><span className="w-10/12">Inclusive Culture: We celebrate your individuality and welcome you as part of the Tritek family.</span></li>
                        </ul>
                    </div>
                </article>
            </div>

            <div className='flex flex-wrap flex-col-reverse lg:flex-row'>
                <article className="lg:w-1/2 p-[5%]">
                    <h2 className="font-spartan text-lg tracking-wider font-medium text-secondary mb-[5%] uppercase">Get Ready: Our Recruitment Process</h2>
                    <h3 className="font-dm text-3xl sm:text-4xl md:text-5xl text-head-primary">Your Journey to Joining Our Team Starts Here</h3>
                    <p className="font-nuno mt-[3.5%] text-lg">We’re excited to meet individuals who are passionate, innovative, and eager to make an impact. Our recruitment process is designed to be transparent, supportive, and fair.</p>
                    <div>
                        <h3 className="font-spartan text-lg my-4 text-head-primary uppercase">How It Works:</h3>
                        <ul className="font-nuno">
                            <li className="flex gap-1 mb-[1%] flex-wrap"><PiCheckCircle className="text-xl w-1/12" /><span className="w-10/12">Submit Your Application: Find a role that excites you and apply online. Be sure to tailor your CV to showcase your skills and achievements.</span></li>
                            <li className="flex gap-1 mb-[1%] flex-wrap"><PiCheckCircle className="text-xl w-1/12" /><span className="w-10/12">Initial Screening: Our recruitment team will review your application to ensure your skills align with the role. If shortlisted, you’ll be invited for the next step.</span>
                            </li>
                            <li className="flex gap-1 mb-[1%] flex-wrap"><PiCheckCircle className="text-xl w-1/12" /><span className="w-10/12">Interviews: Depending on the role, you may go through 1-3 interview stages, including:
                                <div>
                                    <ul className='list-disc list-inside pl-5'>
                                        <li className="gap-1 mb-[1%]">A virtual interview to understand your experience and aspirations.</li>
                                        <li className="gap-1 mb-[1%]">A task or case study to assess your skills in action.</li>
                                        <li className="gap-1 mb-[1%]">A final discussion to align on culture fit and goals.</li>
                                    </ul>
                                </div>
</span>
                            </li>
                            <li className="flex gap-1 mb-[1%] flex-wrap"><PiCheckCircle className="text-xl w-1/12" /><span className="w-10/12">Offer and Onboarding: If you’re successful, you’ll receive an offer and be guided through a seamless onboarding process. Welcome to Tritek Academy!</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-spartan text-lg my-4 text-head-primary uppercase">Interview Tips from Our Team:
                        </h3>
                        <ul className="font-nuno">
                            <li className="flex gap-1 mb-[1%] flex-wrap"><PiCheckCircle className="text-xl w-1/12" /><span className="w-10/12">Be Yourself: We value authenticity, so let your personality and passion shine.</span></li>
                            <li className="flex gap-1 mb-[1%] flex-wrap"><PiCheckCircle className="text-xl w-1/12" /><span className="w-10/12">Do Your Homework: Familiarize yourself with Tritek Academy, our mission, and the role you’re applying for.</span>
                            </li>
                            <li className="flex gap-1 mb-[1%] flex-wrap"><PiCheckCircle className="text-xl w-1/12" /><span className="w-10/12">Show Your Skills: Be ready to share specific examples of how your experience matches the job requirements.</span></li>
                            <li className="flex gap-1 mb-[1%] flex-wrap"><PiCheckCircle className="text-xl w-1/12" /><span className="w-10/12">Ask Questions: We want to know what matters to you—don’t hesitate to ask about the role, team, or culture.</span></li>
                        </ul>
                    </div>
                    <Link href=''
                    className="p-5 bg-secondary text-white inline-block hover:-translate-y-[3px] ease-in-out transition-transform duration-300 mt-[5%] font-nuno"
                    >View Open Roles<span className="hidden sm:inline"> and Start Your Journey</span></Link>
                </article>
                <div className='hidden lg:block lg:w-1/2 bg-[url(/assets/img/hands-round.webp)] bg-no-repeat bg-cover'></div>
            </div>
        </div>
    )
}
