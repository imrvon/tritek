
import Image from 'next/image'
import success from '../../../../public/assets/img/successLogo.png'
import { Swiper, SwiperSlide } from "swiper/react"; 
import "swiper/css"; 
const About = () => {
    const whyChoose = [
        {
            id: 1,
            img:success,
            heading: 'Success Stories',
            title: 'At Tritek, we take pride in having successfully helped over 5000 individuals seamlessly transition into the dynamic world of technology. Our track record speaks for itself, showcasing our commitment to guiding aspiring tech professionals towards fulfilling and rewarding careers'
        },
        {
            id: 2,
            img:success,
            heading: 'Industry Recognition',
            title: 'We are honored to be the recipients of over 9 prestigious awards, including the esteemed title of "Tech Training Institute of the Year." Our dedication to excellence has been acknowledged not only by industry experts but also by a formal recognition from the House of Parliament'
        },
        {
            id: 3,
            img:success,
            heading: 'Voluntary References',
            title: 'We believe in the potential of our graduates. Upon successful completion, we provide voluntary references to help them showcase their newfound skills and achievements. Our commitment to your success extends beyond the classroom, ensuring you stand out in the competitive tech landscape'
        },
        {
            id: 4,
            img:success,
            heading: 'Real-Life Work Experience',
            title: "Experience is the best teacher, and at Tritek, we ensure our students don't just learn theory but gain real-life work experience. Our programs are designed to immerse participants in hands-on projects, providing them with the practical skills needed to thrive in the tech industry"
        },
        {
            id: 5,
            img:success,
            heading: 'CPD Certification',
            title: 'Tritek is proud to be CPD (Continuing Professional Development) certified, assuring our commitment to high-quality training and continuous improvement. Our courses meet rigorous standards, offering you a recognized and valued qualification in the tech industry.'
        },
        {
            id: 5,
            img:success,
            heading: 'Forbes-Featured CEO',
            title: "Our CEO has been featured by Forbes, a testament to our leadership's expertise and industry influence. Learn from the best as we bring insights from the forefront of the tech world directly to our students, providing an unparalleled educational experience."
        },

    ]
    return (

        <>
            <section className="flex flex-wrap z-10">
                <div className="w-[55%] px-[5%] py-[5%] max-sm:w-[100%]">
                    <h2 className="font-spartan text-lg tracking-wider font-semibold text-secondary mb-[5%]">MY STORY</h2>
                    <h3 className="font-dm text-5xl w-5/6 text-head-primary mb-[4.5%] font-semibold max-sm:text-4xl">MEET THE CEO</h3>
                    <p className="font-nuno mt-[3.5%] font-semibold">Hi, my name is Dr. Adeshola Cole and I am the CEO of Tritek Consulting Limited. I am a married mum of 3 exceptional children, who keep me super busy from time to time!
                        I am a multi-award winning mentor, CEO, and recipient of the woman of the year award,2018.</p>

                    <p className="font-nuno mt-[3.5%] font-semibold">I have a degree in literature in English, PRINCE 2 certified, an accredited PRINCE2 trainer, possess a diploma in change management,and I’m also scrum and scrum master certified.</p>

                    <p className="font-nuno mt-[3.5%] font-semibold">I started off working in various bakery shops and hotels and eventually found myself in the bookies, William Hill, a gambling company. I worked here for a couple years and then managed to get a role within RBS. I started off as a cashier, then customer adviser and eventually bank manager. It sounds like a rewarding role, but it really isn’t -just predominantly sales! I worked in RBS for 10 years and I became very dissatisfied with this role and lacked confidence. I was promised a lot of promotions and pay rises continuously, but the work politics had me sidelined at all times; that’s when I decided to make a change!!</p>

                    <p className="font-nuno mt-[1.5%] font-semibold">I secured a role as a Project Manager, and that’s when I realised my passion for mentoring and helping my community, and the birth of Tritek began.
                    </p>
                    <div className="h-[1px] bg-[#ccc] my-[5%]"></div>
                </div>
                <div className="bg-[url(/assets/img/AboutImg.jpg)] bg-no-repeat bg-cover h-screen w-[45%] relative max-sm:bg-contain max-sm:w-[100%]">
                    <div className="absolute top-0 left-0 w-full h-full bg-[#00000075] max-sm:bg-transparent "></div>
                </div>


                <div className="bg-[url(/assets/img/company1.avif)] bg-no-repeat bg-cover h-screen w-[45%] relative max-sm:bg-contain max-sm:w-[100%]">
                    <div className="absolute top-0 left-0 w-full h-full bg-[#00000075] max-sm:bg-transparent"></div>
                </div>

                <div className="w-[55%] px-[5%] py-[5%] max-sm:w-[100%]">
                    <h3 className="font-dm text-5xl w-5/6 text-head-primary mb-[4.5%] font-semibold max-sm:text-4xl">OUR COMPANY</h3>
                    <p className="font-nuno mt-[2.5%] font-semibold">We are a Multi-Award winning project management and business analysis training company that provides both training and practical work experience with mentorship support.
                        I am a multi-award winning mentor, CEO, and recipient of the woman of the year award,2018.</p>
                    <h2 className="font-spartan text-lg tracking-wider font-semibold text-secondary mt-[3%]">OUR MISSION</h2>
                    <p className="font-nuno mt-[1.5%] font-semibold">At Tritek, our mission is clear: to provide the best training for all tech enthusiasts and facilitate a seamless transition into the dynamic realm of technology. We are driven by a passion to empower individuals with the knowledge and skills they need to thrive in the ever-evolving tech landscape.</p>

                    <p className="font-nuno mt-[3.5%] font-semibold">I started off working in various bakery shops and hotels and eventually found myself in the bookies, William Hill, a gambling company. I worked here for a couple years and then managed to get a role within RBS. I started off as a cashier, then customer adviser and eventually bank manager. It sounds like a rewarding role, but it really isn’t -just predominantly sales! I worked in RBS for 10 years and I became very dissatisfied with this role and lacked confidence. I was promised a lot of promotions and pay rises continuously, but the work politics had me sidelined at all times; that’s when I decided to make a change!!</p>

                    <p className="font-nuno mt-[1.5%] font-semibold">I secured a role as a Project Manager, and that’s when I realised my passion for mentoring and helping my community, and the birth of Tritek began.
                    </p>
                    <div className="h-[1px] bg-[#ccc] my-[5%]"></div>
                </div>
            </section>

             <div>
                <h1 className='font-dm text-5xl text-head-primary mb-[3.5%] font-semibold text-center'>WHY CHOOSE US?</h1>
             </div>
           
           <section className='my-3 grid grid-cols-3 gap-3 px-3 max-sm:grid-cols-1'>
           {whyChoose.map((item) => (
        <div className=''>
        <div className=' items-center border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 bg-white'>
            <div>
                <Image src={item.img} alt="company1" />
            </div>
            <h1 className='text-2xl font-bold font-dm  mt-4 text-gray-800'>{item.heading}</h1>
            <p className='mt-4 text-gray-600  leading-relaxed'>{item.title}</p>
        </div>   
    </div>
    ))}
           </section>
     

        </>
    )
}
export default About
