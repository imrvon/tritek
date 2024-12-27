import { PiCheckCircle } from 'react-icons/pi';
import Link from 'next/link';
import ResourcesFAQ from './ResourcesFAQ';

export default function Resources() {

    return (
        <div className='bg-[#f7f7f5]'>
            <div className='relative h-screen bg-[url(/assets/img/resources.webp)] bg-no-repeat bg-cover flex justify-center items-center sm:bg-top bg-center'>
                <div className='flex flex-col gap-10 relative z-10'>
                    <p className='text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold font-heading text-center'>Resources</p>
                    <p className='font-medium text-center text-xl sm:text-2xl text-white italic font-ibm w-9/12 mx-auto font-paragraph'>Find helpful guides, insightful articles, informative videos, and valuable tools to enhance your experience</p>
                </div>
                <div className="absolute top-0 left-0 w-full h-full bg-[#0000003a]"></div>
            </div>

            <div className="bg-[#f7f7f5] flex flex-wrap">
                <article className="lg:w-1/2 p-[5%]">
                    <h2 className="font-paragraph text-lg tracking-wider font-medium text-secondary mb-[5%] uppercase">Free Resources</h2>
                    <h3 className="font-heading text-3xl sm:text-4xl md:text-5xl text-head-primary">Start Your Journey with These Free Resources</h3>
                    <p className="font-paragraph mt-[3.5%] text-lg">We believe in giving everyone the tools to succeed. Our carefully curated career bundle is packed with actionable insights to help you transition, grow, and excel in the tech world.</p>
                    <div>
                        <h3 className="font-heading text-lg my-4 text-head-primary uppercase">What’s Included in the Career Bundle:</h3>
                        <ul className="font-paragraph">
                            <li className="flex gap-1 mb-[1%] flex-wrap"><PiCheckCircle className="text-xl w-1/12" /><span className="w-10/12 font-semibold">LinkedIn Optimization eBook: Build a Profile That Gets You Noticed.<br/> <span className='font-normal'>Learn how to create a standout LinkedIn profile that attracts recruiters and boosts your professional presence.</span></span></li>
                            <li className="flex gap-1 mb-[1%] flex-wrap"><PiCheckCircle className="text-xl w-1/12" /><span className="w-10/12 font-semibold">How to Transition into Tech eBook: Your Step-by-Step Guide to Breaking Into Tech as a Project Manager or Business Analyst.<br/> <span className='font-normal'>Discover proven strategies for transitioning into tech roles, even without prior experience.</span></span></li>
                            <li className="flex gap-1 mb-[1%] flex-wrap"><PiCheckCircle className="text-xl w-1/12" /><span className="w-10/12 font-semibold">Acing Tech Interviews eBook: Confidence, Preparation, and Success. <br/><span className='font-normal'>Master the art of tech interviews with expert tips on answering questions, showcasing your skills, and impressing hiring managers.</span></span></li>
                            
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-heading text-lg my-4 text-head-primary uppercase">Why It’s for You:</h3>
                        <ul className="font-paragraph">
                            <li className="flex gap-1 mb-[1%] flex-wrap"><PiCheckCircle className="text-xl w-1/12" /><span className="w-10/12 font-semibold">You’re considering a career change but need guidance.</span></li>
                            <li className="flex gap-1 mb-[1%] flex-wrap"><PiCheckCircle className="text-xl w-1/12" /><span className="w-10/12 font-semibold">You want to stand out to recruiters and land your dream role.</span></li>
                            <li className="flex gap-1 mb-[1%] flex-wrap"><PiCheckCircle className="text-xl w-1/12" /><span className="w-10/12 font-semibold">You’re preparing for interviews and need proven techniques.</span></li>
                        </ul>
                    </div>
                    <Link href='https://mailchi.mp/tritekconsulting.co.uk/free-resource-signup'
                    className="p-5 bg-secondary text-white inline-block hover:-translate-y-[3px] ease-in-out transition-transform duration-300 mt-[5%] font-paragraph"
                    >Download<span className="hidden sm:inline"> the Free Career Bundle</span></Link>
                </article>
                <div className="h-[500px] lg:h-auto w-full lg:w-1/2 bg-[url(/assets/img/resource1.webp)] bg-no-repeat bg-cover bg-center"></div>
            </div>
            <div className="bg-[#f7f7f5] flex flex-col-reverse lg:flex-row flex-wrap">
                <div className="w-full lg:w-1/2 h-[500px] lg:h-auto bg-[url(/assets/img/resource2.webp)] bg-no-repeat bg-cover bg-center"></div>
                <article className="lg:w-1/2 p-[5%]">
                    <h2 className="font-paragraph text-lg tracking-wider font-medium text-secondary mb-[5%] uppercase">Paid Resources</h2>
                    <h3 className="font-heading text-3xl sm:text-4xl md:text-5xl text-head-primary">Invest in Your Professional Growth</h3>
                    <p className="font-paragraph mt-[3.5%] text-lg">Take your career to the next level with premium insights from our CEO. This exclusive Professional Development Bundle is designed for ambitious professionals ready to plan their career strategically and build a powerful personal brand.</p>
                    <div>
                        <h3 className="font-heading text-lg my-4 text-head-primary uppercase">What’s Included in the Professional Development Bundle</h3>
                        <ul className="font-paragraph">
                            <li className="flex gap-1 mb-[1%] flex-wrap"><PiCheckCircle className="text-xl w-1/12" /><span className="w-10/12 font-semibold">Career Planning eBook: Design Your Career Path with Confidence.<br/> <span className='font-normal'>Learn to set meaningful goals, overcome challenges, and strategically plan your professional growth.</span></span></li>
                            <li className="flex gap-1 mb-[1%] flex-wrap"><PiCheckCircle className="text-xl w-1/12" /><span className="w-10/12 font-semibold">Personal Branding eBook: Stand Out in a Crowded Market.<br/> <span className='font-normal'>Master the art of personal branding to position yourself as a thought leader and attract top opportunities.</span></span></li>                            
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-heading text-lg my-4 text-head-primary uppercase">Why It’s for You</h3>
                        <ul className="font-paragraph">
                            <li className="flex gap-1 mb-[1%] flex-wrap"><PiCheckCircle className="text-xl w-1/12" /><span className="w-10/12">You’re ready to take control of your career path and make informed decisions.</span></li>
                            <li className="flex gap-1 mb-[1%] flex-wrap"><PiCheckCircle className="text-xl w-1/12" /><span className="w-10/12">You want to establish a personal brand that reflects your value and expertise.</span>
                            </li>
                            <li className="flex gap-1 mb-[1%] flex-wrap"><PiCheckCircle className="text-xl w-1/12" /><span className="w-10/12">You’re seeking actionable strategies from a leader who has helped thousands of professionals excel.</span></li>
                        </ul>
                    </div>
                    <Link href=''
                    className="p-5 bg-secondary text-white inline-block hover:-translate-y-[3px] ease-in-out transition-transform duration-300 mt-[5%] font-paragraph"
                    >Download<span className="hidden sm:inline"> the Free Career Bundle</span></Link>
                </article>
            </div>

            <div className='flex flex-wrap flex-col-reverse lg:flex-row'>
                <article className="lg:w-1/2 p-[5%]">
                    <h3 className="font-heading text-3xl sm:text-4xl md:text-5xl text-head-primary">Why Choose Our Resources?</h3>
                    <div className='mt-[5%]'>
                        <ul className="font-paragraph">
                            <li className="flex gap-1 mb-[1%] flex-wrap"><PiCheckCircle className="text-xl w-1/12" /><span className="w-10/12">Expert Insights: Created by professionals with proven success in helping thousands transition and grow their careers.</span></li>
                            <li className="flex gap-1 mb-[1%] flex-wrap"><PiCheckCircle className="text-xl w-1/12" /><span className="w-10/12">Actionable Advice: No fluff—just practical strategies you can apply immediately.</span>
                            </li>
                            <li className="flex gap-1 mb-[1%] flex-wrap"><PiCheckCircle className="text-xl w-1/12" /><span className="w-10/12">Transformational Outcomes: Whether free or paid, our resources are designed to deliver results.</span></li>
                        </ul>
                    </div>
                    <div className='mt-[5%]'>
                        <h3 className="font-heading text-lg my-4 text-head-primary uppercase">Frequently Asked Questions:
                        </h3>
                        <ResourcesFAQ />
                    </div>
                </article>
                <div className='hidden lg:block lg:w-1/2 bg-[url(/assets/img/resources3.webp)] bg-no-repeat bg-cover bg-top'></div>
            </div>
        </div>
    )
}
