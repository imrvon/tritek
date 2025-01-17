'use client'
import { PiCheckCircle } from 'react-icons/pi';
import Link from 'next/link';
import { AddToCalendarButton } from 'add-to-calendar-button-react';
import faqData from './FAQs1'
import faqData2 from './FAQs2'
import faqData3 from './FAQs3'
import EventsForm from './EventsForm';

export default function Events() {

    return (
        <div className='bg-[#f7f7f5]'>
            <div className='relative h-screen bg-[url(/assets/img/events/events.webp)] bg-no-repeat bg-cover flex justify-center items-center sm:bg-top bg-center'>
                <div className='flex flex-col gap-10 relative z-10'>
                    <p className='text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold font-heading text-center'>Events</p>
                    <p className='font-medium text-center text-xl sm:text-2xl text-white italic font-heading w-9/12 mx-auto'>Explore a World of Free and Paid Tech Events Designed to Empower, Inspire, and Keep You Ahead in the Industry</p>
                </div>
                <div className="absolute top-0 left-0 w-full h-full bg-[#0000003a]"></div>
            </div>

            <div className="bg-[#f7f7f5] flex flex-wrap">
                <article className="lg:w-1/2 p-[5%]">
                    <h2 className="font-heading text-lg tracking-wider font-medium text-white mb-[5%] uppercase bg-black w-fit p-2">FREE EVENT</h2>
                    <h3 className="font-heading text-3xl sm:text-4xl md:text-5xl text-head-primary">Elite Tech Day in Business Analysis & Project Management</h3>
                    <p className="font-paragraph mt-[3.5%] text-lg">Join our exclusive Tech Day, held twice monthly, to explore how to transition into Business Analysis & Project Management; enjoy hands-on sessions with our CEO and Expert Trainers. Whether you&apos;re new to tech or looking to upskill, this is your gateway to transforming your career.
                    </p>
                    <div>
                        <h3 className="font-heading text-lg my-4 text-head-primary uppercase">FAQs</h3>
                        <div className='flex flex-wrap justify-between mt-[5%]'>
                            {
                                faqData.map((data)=> (
                                    <div className='tritek_faq event w-full mb-[2%] font-paragraph' key={data.id}>
                                        <div className='border-solid border-black border-[1px] p-[3.5%]'>
                                            <details className="">
                                                <summary className='relative flex items-center gap-4 cursor-pointer after:absolute after:top-1/2 after:-translate-y-1/2 after:transition-transform after:duration-500 after:delay-0 after:ease-in-out after:right-[1%] after:text-2xl'>
                                                    <h3 className='text-primary-color font-semibold text-xl w-[80%] sm:w-full'>{data.name}</h3>
                                                </summary>
                                            </details>
                                            <div className='one'>
                                                <p className=''>{data.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className='flex mt-[5%] justify-stretch items-stretch gap-[5%]'>
                            <Link href='#events-form'
                                className="p-5 bg-secondary text-white inline-block hover:-translate-y-[3px] ease-in-out transition-transform duration-300 font-paragraph w-1/2 text-center"
                                >Register Now</Link>
                            <div className='w-1/2'>
                                <AddToCalendarButton
                                    name="Elite Tech Day in Business Analysis & Project Management"
                                    options={['Google']}
                                    location="World Wide Web"
                                    startDate="2025-01-16"
                                    endDate="2025-01-25"
                                    startTime="08:15"
                                    endTime="23:30"
                                    timeZone="America/Los_Angeles"
                                    recurrence="weekly"
                                    recurrence_interval="1"
                                    recurrence_count="6"
                                    recurrence_byDay="SA"
                                    ></AddToCalendarButton>
                            </div>
                        </div>
                    </div>
                </article>
                <div className="h-[500px] lg:h-auto w-full lg:w-1/2 bg-[url(/assets/img/events/single_event1.webp)] bg-no-repeat bg-cover bg-center"></div>
            </div>
            <div className="bg-[#f7f7f5] flex flex-col-reverse lg:flex-row flex-wrap">
                <div className="w-full lg:w-1/2 h-[500px] lg:h-auto bg-[url(/assets/img/events/single_event2.webp)] bg-no-repeat bg-cover bg-center"></div>
                <article className="lg:w-1/2 p-[5%]">
                    <h2 className="font-heading text-lg tracking-wider font-medium text-white mb-[5%] uppercase bg-black w-fit p-2">FREE EVENT</h2>
                    <h3 className="font-heading text-3xl sm:text-4xl md:text-5xl text-head-primary">Digital Conference</h3>
                    <p className="font-paragraph mt-[3.5%] text-lg">Don’t miss the Tritek Academy Digital Conference on February 15, 2025, where industry leaders will share insights into emerging tech trends and career opportunities. Network with professionals and gain actionable strategies to advance in tech.</p>
                    <div>
                        <h3 className="font-heading text-lg my-4 text-head-primary uppercase">FAQs</h3>
                        <div className='flex flex-wrap justify-between mt-[5%]'>
                            {
                                faqData2.map((data)=> (
                                    <div className='tritek_faq event w-full mb-[2%] font-paragraph' key={data.id}>
                                        <div className='border-solid border-black border-[1px] p-[3.5%]'>
                                            <details className="">
                                                <summary className='relative flex items-center gap-4 cursor-pointer after:absolute after:top-1/2 after:-translate-y-1/2 after:transition-transform after:duration-500 after:delay-0 after:ease-in-out after:right-[1%] after:text-2xl'>
                                                    <h3 className='text-primary-color font-semibold text-xl w-[80%] sm:w-full'>{data.name}</h3>
                                                </summary>
                                            </details>
                                            <div className='one'>
                                                <p className=''>{data.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className='flex mt-[5%] justify-stretch items-stretch gap-[5%]'>
                            <Link href='#events-form'
                                className="p-5 bg-secondary text-white inline-block hover:-translate-y-[3px] ease-in-out transition-transform duration-300 font-paragraph w-1/2 text-center"
                                >Register Now</Link>
                            <div className='w-1/2'>
                                <AddToCalendarButton
                                    name="Digital Conference"
                                    options={['Google']}
                                    location="World Wide Web"
                                    startDate="2025-01-15"
                                    endDate="2025-01-15"
                                    startTime="08:15"
                                    endTime="23:30"
                                    timeZone="America/Los_Angeles"
                                    ></AddToCalendarButton>
                            </div>
                        </div>
                    </div>
                </article>
            </div>

            <div className='flex flex-wrap flex-col-reverse lg:flex-row'>
                <article className="lg:w-1/2 p-[5%]">
                    <h2 className="font-heading text-lg tracking-wider font-medium text-white mb-[5%] uppercase bg-black w-fit p-2">PAID EVENT</h2>
                    <h3 className="font-heading text-3xl sm:text-4xl md:text-5xl text-head-primary">Tech n Brunch</h3>
                    <p className="font-paragraph mt-[3.5%] text-lg">Experience a unique blend of learning and networking at Tech n Brunch, coming this March! Enjoy a relaxed brunch setting while connecting with peers and hearing from top professionals in the tech industry.</p>
                    <div>
                        <h3 className="font-heading text-lg my-4 text-head-primary uppercase">FAQs</h3>
                        <div className='flex flex-wrap justify-between mt-[5%]'>
                            {
                                faqData3.map((data)=> (
                                    <div className='tritek_faq event w-full mb-[2%] font-paragraph' key={data.id}>
                                        <div className='border-solid border-black border-[1px] p-[3.5%]'>
                                            <details className="">
                                                <summary className='relative flex items-center gap-4 cursor-pointer after:absolute after:top-1/2 after:-translate-y-1/2 after:transition-transform after:duration-500 after:delay-0 after:ease-in-out after:right-[1%] after:text-2xl'>
                                                    <h3 className='text-primary-color font-semibold text-xl w-[80%] sm:w-full'>{data.name}</h3>
                                                </summary>
                                            </details>
                                            <div className='one'>
                                                <p className=''>{data.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className='flex mt-[5%] justify-stretch items-stretch gap-[5%]'>
                            <Link href='#events-form'
                                className="p-5 bg-secondary text-white inline-block hover:-translate-y-[3px] ease-in-out transition-transform duration-300 font-paragraph w-1/2 text-center"
                                >Register Now</Link>
                            <div className='w-1/2'>
                                <AddToCalendarButton
                                    name="Tech n Brunch"
                                    options={['Google']}
                                    location="World Wide Web"
                                    startDate="2025-03-29"
                                    endDate="2025-03-29"
                                    startTime="08:15"
                                    endTime="23:30"
                                    timeZone="America/Los_Angeles"
                                    ></AddToCalendarButton>
                            </div>
                        </div>
                    </div>
                </article>
                <div className='hidden lg:block lg:w-1/2 bg-[url(/assets/img/events/single_event3.webp)] bg-no-repeat bg-cover'></div>
            </div>
            <div id='events-form'>
                <EventsForm />
            </div>
        </div>
    )
}
