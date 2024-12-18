import whyChoose from './AboutData'

export default function About() {
    
    return (
        <section>
            <div className='bg-[url(/assets/img/about.webp)] min-h-screen bg-no-repeat bg-cover relative bg-top sm:bg-center'>
                <div className='flex flex-col gap-5 absolute top-0 left-0 w-full h-full justify-center items-center z-10'>
                    <p className='text-white text-3xl sm:text-4xl md:text-5xl font-semibold font-dm text-center'>About Us</p>
                    <p className='font-medium text-center text-xl sm:text-2xl text-white italic font-ibm w-9/12'>We are a Multi-Award winning project management and business analysis training company that provides both training and practical work experience with mentorship support.</p>
                </div>
                <div className='absolute top-0 left-0 w-full h-full bg-[#000000bb]'></div>
            </div>

            <div className="flex flex-wrap flex-col md:flex-row">
                <div className='md:w-1/2 p-[5%]'>
                    <h2 className="font-spartan text-lg tracking-wider font-medium text-secondary mb-[5%]">MEET OUR CEO</h2>
                    <h3 className="font-dm text-3xl sm:text-4xl md::text-5xl w-5/6 text-head-primary">Dr. Adeshola Cole</h3>
                    <p className="font-nuno mt-[3.5%] text-lg">Hi, my name is Dr. Adeshola Cole and I am the CEO of Tritek Consulting Limited. I am a married mum of 3 exceptional children, who keep me super busy from time to time! I am a multi-award winning mentor, CEO, and recipient of the woman of the year award,2018.</p>

                    <p className="font-nuno mt-[3.5%] text-lg">I have a degree in literature in English, PRINCE 2 certified, an accredited PRINCE2 trainer, possess a diploma in change management,and I’m also scrum and scrum master certified.</p>

                    <p className="font-nuno mt-[3.5%] text-lg">I started off working in various bakery shops and hotels and eventually found myself in the bookies, William Hill, a gambling company. I worked here for a couple years and then managed to get a role within RBS. I started off as a cashier, then customer adviser and eventually bank manager. It sounds like a rewarding role, but it really isn’t -just predominantly sales! I worked in RBS for 10 years and I became very dissatisfied with this role and lacked confidence. I was promised a lot of promotions and pay rises continuously, but the work politics had me sidelined at all times; that’s when I decided to make a change!</p>

                    <p className="font-nuno mt-[1.5%] text-lg">I secured a role as a Project Manager, and that’s when I realised my passion for mentoring and helping my community, and the birth of Tritek began.</p>
                </div>
                <div className='h-[500px] md:h-auto md:w-1/2 bg-[url(/assets/img/ceo.webp)] bg-cover bg-no-repeat md:bg-top lg:bg-left'></div>
            </div>

            <div className='flex flex-wrap flex-col-reverse md:flex-row'>
                <div className="bg-[url(/assets/img/company.webp)] bg-no-repeat bg-cover relative h-[500px] md:h-auto md:w-1/2"></div>
                <div className="p-[5%] md:w-1/2">
                    <h3 className="font-dm text-3xl sm:text-4xl md::text-5xl w-5/6 text-head-primary">Our Company</h3>
                    <p className="font-nuno mt-[2.5%] text-lg">We are a Multi-Award winning project management and business analysis training company that provides both training and practical work experience with mentorship support. I am a multi-award winning mentor, CEO, and recipient of the woman of the year award,2018.</p>
                    
                    <h2 className="font-spartan text-lg tracking-wider font-semibold text-secondary mt-[3%]">OUR MISSION</h2>
                    <p className="font-nuno mt-[1.5%] text-lg">At Tritek, our mission is clear: to provide the best training for all tech enthusiasts and facilitate a seamless transition into the dynamic realm of technology. We are driven by a passion to empower individuals with the knowledge and skills they need to thrive in the ever-evolving tech landscape.</p>
                    <p className="font-nuno mt-[3.5%] text-lg">In the realm of challenges, we illuminate pathways to success. Our consulting firm does&apos;nt just provide solutions; we architect possibilities, turning obstacles into opportunities, and aspiration into achievement. Dr Adesola Cole, CEO Tritek Consulting</p>
                    <p className="font-nuno mt-[3.5%] text-lg">At Tritek, we take pride in having successfully helped over 5000 individuals seamlessly transition into the dynamic world of technology</p>

                </div>
            </div>

            <div className='bg-grey p-[5%]'>
                <h1 className='font-dm text-3xl sm:text-4xl md::text-5xl text-head-primary text-center my-[5%]'>Why Choose Us?</h1>
                <div className='flex-wrap flex justify-between'>
                    {whyChoose.map((item) => (
                        <div className='sm:w-[48%] lg:w-[32%] mb-[4%] lg:mb-[2%]' key={item.id}>
                            <div className="flex flex-col justify-between items-start border cursor-pointer border-gray-300 rounded-lg shadow-md transition-transform duration-300 p-6 bg-white hover:shadow-lg hover:scale-95 hover:duration-300 hover:bg-gray-50 h-full font-nuno">
                                <div>{item.icon}</div>
                                <div className="mt-4">
                                    <h1 className="text-2xl font-medium font-dm text-head-primary hover:text-gray-900">
                                        {item.heading}
                                    </h1>
                                    <p className="mt-4 text-gray-600 leading-relaxed hover:text-gray-700">
                                        {item.title}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
