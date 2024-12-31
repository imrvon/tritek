import { PiCheckCircle } from 'react-icons/pi';
import Link from 'next/link';

export default function Mentors() {

    return (
        <div className='bg-[#f7f7f5]'>
            <div className='relative h-screen bg-[url(/assets/img/team.webp)] bg-no-repeat bg-cover flex justify-center items-center sm:bg-top bg-center'>
                <div className='flex flex-col gap-10 relative z-10'>
                    <p className='text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold font-heading text-center'>Mentors</p>
                    <p className='font-medium text-center text-xl sm:text-2xl text-white italic font-heading w-9/12 mx-auto'>Meet our esteemed mentors – experienced industry leaders and passionate individuals dedicated to guiding and inspiring the next generation of talent.</p>
                </div>
                <div className="absolute top-0 left-0 w-full h-full bg-[#0000003a]"></div>
            </div>

            <div className="bg-[#f7f7f5] flex flex-wrap">
                <article className="lg:w-1/2 p-[5%]">
                    <h2 className="font-paragraph text-lg tracking-wider font-medium text-secondary mb-[5%] uppercase">mentor</h2>
                    <h3 className="font-heading text-3xl sm:text-4xl md:text-5xl text-head-primary">Rukevwe Agbro</h3>
                    <p className="font-paragraph mt-[3.5%] text-lg"> Project Management Leader, Trainer, and AI Advocate</p>
                    <div>
                        <p className='font-paragraph mt-[2.5%]'>Rukevwe Agbro is a skilled professional with years of expertise in IT project management and a certified PRINCE2 Agile Practitioner. Based in the UK, she is celebrated for her outstanding ability to deliver projects on time and within budget, alongside a proven record in stakeholder management, problem-solving, and implementing innovative solutions to complex business challenges.</p>
                        <p className='font-paragraph mt-[2.5%]'>As a passionate trainer, mentor, and coach, Rukevwe has trained and guided over 2,000 individuals transitioning into the IT sector, equipping them with the skills and confidence to succeed. An avid AI enthusiast, she is committed to helping others leverage technology to unlock their potential and achieve their goals.</p>
                        <p className='font-paragraph mt-[2.5%]'>With her dedication to leadership and mentorship, Rukevwe is also a dynamic speaker who inspires transformative growth and empowers individuals and organizations to thrive in today’s competitive landscape.</p>
                    </div>
                </article>
                <div className="h-[500px] lg:h-auto w-full lg:w-1/2 bg-[url(/assets/img/tutor1.webp)] bg-no-repeat bg-cover bg-center"></div>
            </div>
            <div className="bg-[#f7f7f5] flex flex-col-reverse lg:flex-row flex-wrap">
                <div className="w-full lg:w-1/2 h-[500px] lg:h-auto bg-[url(/assets/img/tutor2.webp)] bg-no-repeat bg-cover bg-center"></div>
                <article className="lg:w-1/2 p-[5%]">
                    <h2 className="font-paragraph text-lg tracking-wider font-medium text-secondary mb-[5%] uppercase">mentor</h2>
                    <h3 className="font-heading text-3xl sm:text-4xl md:text-5xl text-head-primary">Ayotunde Odunsi</h3>
                    <div>
                        <p className='font-paragraph mt-[2.5%]'>Ayotunde Odunsi, is a seasoned IT professional, with a keen eye for detail and a passion for ensuring the smooth progression of projects from inception to delivery, an expert in creating cutting-edge technology solutions and a passionate advocate for innovation and positive change in the industry. He is a certified SAFe® 6 Agilist, a Professional Scrum Master and a Certified Product Owner with a wealth of experience spanning over 7 years.</p>
                        <p className='font-paragraph mt-[2.5%]'>Ayotunde has carved a niche for himself by leading teams in implementing digital solutions, enhance process with latest technologies in Software Development, Project Management, and Leadership. He is an engaging speaker, eager to share his knowledge and experience. He was involved in building and delivering the UK NHS Covid Pass and improving the NHS England Developer Community's scalability and delivery service.</p>
                        <p className='font-paragraph mt-[2.5%]'>He has also lead other initiatives and product delivery across both public and private sector delivery campaigns and efforts. Beyond his professional achievements, Ayotunde remains deeply connected to several tech communities - he coaches and mentors young, aspiring tech enthusiasts, always seeking opportunity and platforms to contribute and make a positive impact</p>
                    </div>
                </article>
            </div>
            <div className='flex flex-wrap flex-col lg:flex-row'>
                <article className="lg:w-1/2 p-[5%]">
                    <h2 className="font-paragraph text-lg tracking-wider font-medium text-secondary mb-[5%] uppercase">mentor</h2>
                    <h3 className="font-heading text-3xl sm:text-4xl md:text-5xl text-head-primary">Okeyinfu Ajayi</h3>
                    <p className="font-paragraph mt-[3.5%] text-lg">Achieve Career Success with a Harvard-Trained Expert Coach</p>
                    <div>
                        <p className='font-paragraph mt-[2.5%]'>Are you struggling to secure interviews or unsure how to leverage your unique experience to stand out? Ready to break free from the cycle of frustration, land your dream role, and take your career to the next level? Let’s get started today!</p>
                        <p className='font-paragraph mt-[2.5%]'>Hi, I’m Gladys Okeyinfu Ajayi—commonly known as Kaykay—a Harvard-trained professional with over a decade of experience in interview preparation, personal branding, and career development. With years of making hiring decisions, I bring insider knowledge to help you position yourself as the top candidate.</p>
                        <p className='font-paragraph mt-[2.5%]'>I specialise in helping professionals at every career stage navigate transitions with clarity, confidence, and purpose. Whether you’re considering a career pivot, striving for growth, or breaking into a new industry, I provide tailored strategies to achieve your goals.</p>
                        <p className='font-paragraph mt-[2.5%]'>Having walked in your shoes, I understand the pressure, nerves, and high stakes of interviews. My coaching goes beyond generic advice. Together, we’ll uncover your unique strengths, refine your narrative, and craft answers that leave a lasting impression.</p>
                    </div>
                    <div className='mt-[5%]'>
                        <p className="font-paragraph mt-[3.5%] text-lg">What You’ll Gain From My Coaching</p>
                        <ul className="font-paragraph mt-[5%]">
                            <li className="flex gap-1 mb-[1%] flex-wrap"><PiCheckCircle className="text-xl w-1/12" /><span className="w-10/12">CV Refinement and Strategic Insights: Transform your CV into a powerful tool that highlights your achievements and positions you as the ideal candidate.</span></li>
                            <li className="flex gap-1 mb-[1%] flex-wrap"><PiCheckCircle className="text-xl w-1/12" /><span className="w-10/12">Insider Hiring Expertise: With years of making hiring decisions, I know what employers want—and I’ll help you showcase your value.</span>
                            </li>
                            <li className="flex gap-1 mb-[1%] flex-wrap"><PiCheckCircle className="text-xl w-1/12" /><span className="w-10/12">Tailored Mock Interviews: Build confidence and sharpen your responses with personalised practice sessions.</span></li>
                            <li className="flex gap-1 mb-[1%] flex-wrap"><PiCheckCircle className="text-xl w-1/12" /><span className="w-10/12">Proven Communication Strategies: Learn how to articulate your strengths, refine your pitch, and showcase your achievements authentically.</span></li>
                            <li className="flex gap-1 mb-[1%] flex-wrap"><PiCheckCircle className="text-xl w-1/12" /><span className="w-10/12">Master Tough Questions: Develop strategies to tackle high-pressure scenarios with confidence and composure.</span></li>
                            <li className="flex gap-1 mb-[1%] flex-wrap"><PiCheckCircle className="text-xl w-1/12" /><span className="w-10/12">Personalised Career Roadmap: Align your skills with the role, leaving interviewers confident in your fit for the position.</span></li>
                            <li className="flex gap-1 mb-[1%] flex-wrap"><PiCheckCircle className="text-xl w-1/12" /><span className="w-10/12">Exclusive Tools: Access my comprehensive e-book packed with tips, tools, and strategies to make you and your application stand out.</span></li>
                        </ul>
                    </div>
                    <div className='mt-[5%]'>
                        <p className="font-paragraph mt-[3.5%] text-lg">Why Work With Me?</p>
                        <p className="font-paragraph mt-[2.5%]">With a track record of guiding countless professionals to success, I understand what it takes to excel in interviews. My clients have:</p>
                        <ul className="font-paragraph mt-[5%]">
                            <li className="flex gap-1 mb-[1%] flex-wrap"><PiCheckCircle className="text-xl w-1/12" /><span className="w-10/12">Applied for roles strategically</span></li>
                            <li className="flex gap-1 mb-[1%] flex-wrap"><PiCheckCircle className="text-xl w-1/12" /><span className="w-10/12">Leveraged the right networking strategies.</span>
                            </li>
                            <li className="flex gap-1 mb-[1%] flex-wrap"><PiCheckCircle className="text-xl w-1/12" /><span className="w-10/12">Landed roles at top organisations.</span></li>
                            <li className="flex gap-1 mb-[1%] flex-wrap"><PiCheckCircle className="text-xl w-1/12" /><span className="w-10/12">Walked into interviews feeling confident and prepared.</span></li>
                        </ul>
                        <p className="font-paragraph mt-[2.5%]">I combine practical tools, actionable feedback, and a supportive approach to help you take control of your career journey.</p>
                    </div>
                </article>
                <div className='h-[500px] lg:h-auto lg:block lg:w-1/2 bg-[url(/assets/img/tutor3.webp)] bg-no-repeat bg-cover bg-top'></div>
            </div>
            <div className="bg-[#f7f7f5] flex flex-col-reverse lg:flex-row flex-wrap">
                <div className="w-full lg:w-1/2 h-[500px] lg:h-auto bg-[url(/assets/img/tutor4.webp)] bg-no-repeat bg-cover bg-top lg:bg-center"></div>
                <article className="lg:w-1/2 p-[5%]">
                    <h2 className="font-paragraph text-lg tracking-wider font-medium text-secondary mb-[5%] uppercase">mentor</h2>
                    <h3 className="font-heading text-3xl sm:text-4xl md:text-5xl text-head-primary">Tolulope Osunade</h3>
                    <div>
                        <p className='font-paragraph mt-[2.5%]'>Senior Project Manager | Digital Transformation Leader | Delivering £15M+ Complex Change Programs | PRINCE2 & Agile | Enterprise Risk Management Expert | Turning Vision into Measurable Impact Through Innovation</p>
                        <p className='font-paragraph mt-[2.5%]'>Driving digital transformation and organizational change isn't just my profession—it's my passion. With over a decade of experience managing complex, multi-million-pound initiatives, I've consistently delivered measurable impact across public and private sectors, specializing in digital transformation, enterprise risk management, and regulatory compliance.</p>
                        <div className='mt-[5%]'>
                            <p className="font-paragraph mt-[3.5%] text-lg">What I Bring to the Table:</p>
                            <ul className="font-paragraph mt-[5%]">
                                <li className="flex gap-1 mb-[1%] flex-wrap"><PiCheckCircle className="text-xl w-1/12" /><span className="w-10/12">Strategic leadership of £15M+ transformation programs</span></li>
                                <li className="flex gap-1 mb-[1%] flex-wrap"><PiCheckCircle className="text-xl w-1/12" /><span className="w-10/12">Proven expertise in harmonizing technology with business objectives</span></li>
                                <li className="flex gap-1 mb-[1%] flex-wrap"><PiCheckCircle className="text-xl w-1/12" /><span className="w-10/12">Track record of delivering efficiency gains of 35-65% across diverse projects</span></li>
                                <li className="flex gap-1 mb-[1%] flex-wrap"><PiCheckCircle className="text-xl w-1/12" /><span className="w-10/12">Deep experience in both public sector innovation and private sector excellence</span></li>
                            </ul>
                        </div>
                        <div className='mt-[5%]'>
                            <p className="font-paragraph mt-[3.5%] text-lg">My journey has been marked by transformative achievements:</p>
                            <p className="font-paragraph mt-[2.5%]">At Capita, I'm revolutionizing healthcare and pension services through digital innovation, achieving 99.8% system uptime while reducing processing times by 65%. At FIS Global, I consolidated 12 financial platforms into a unified system, improving cross-border monitoring by 55% and reducing compliance incidents by 75%.</p>
                            <p className="font-paragraph mt-[2.5%]">One of my proudest achievements was at Middlesbrough Council, where I led AI-powered initiatives that not only generated £3.8M in efficiency savings but also made a real difference in people's lives—cutting emergency response times by 47% and increasing public engagement by 178%.</p>

                            <p className="font-paragraph mt-[3.5%] text-lg">My Approach</p>
                            <p className="font-paragraph mt-[1.5%] text-lg">I believe successful digital transformation is about more than just technology—it's about people. By combining PRINCE2 and Agile methodologies with strong stakeholder engagement, I consistently deliver solutions that drive adoption rates above 85% while maintaining operational excellence.</p>

                            <p className="font-paragraph mt-[3.5%] text-lg">What Sets Me Apart</p>
                            <ul className="font-paragraph mt-[5%]">
                                <li className="flex gap-1 mb-[1%] flex-wrap"><PiCheckCircle className="text-xl w-1/12" /><span className="w-10/12">Ability to translate complex technical challenges into clear business outcomes</span></li>
                                <li className="flex gap-1 mb-[1%] flex-wrap"><PiCheckCircle className="text-xl w-1/12" /><span className="w-10/12">Strong focus on measurable results and ROI</span>
                                </li>
                                <li className="flex gap-1 mb-[1%] flex-wrap"><PiCheckCircle className="text-xl w-1/12" /><span className="w-10/12">Expert in managing matrix teams across multiple directorates</span></li>
                                <li className="flex gap-1 mb-[1%] flex-wrap"><PiCheckCircle className="text-xl w-1/12" /><span className="w-10/12">Deep understanding of both public and private sector dynamics</span></li>
                            </ul>
                            <p className="font-paragraph mt-[2.5%]">Currently focused on enterprise-wide digital transformation initiatives, I'm always eager to connect with fellow professionals passionate about driving innovation and creating lasting organizational impact.</p>
                        </div>
                        <p className='font-paragraph mt-[2.5%]'>Specialties: Digital Transformation | Change Management | Enterprise Risk Management | Regulatory Compliance | Stakeholder Engagement | Process Optimization | AI Implementation | PMO Governance | Cross-functional Leadership | Strategic Planning</p>
                        <p className='font-paragraph mt-[2.5%]'>Let's connect and explore how we can drive innovation and work together to achieve success.</p>
                    </div>
                </article>
            </div>
        </div>

    )
}
