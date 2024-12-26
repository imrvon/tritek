import HomeEventsData from "./HomeEventsData"
import Image from "next/image";
import Link from "next/link";

interface Event {
    title: string;
    location: string;
    time: string;
    day: string; 
    month: string;
    year: string; 
    img: string;
    featured: boolean;
  }

export default function HomeEvents() {
  return (
    <section className="relative bg-white min-h-screen">
        <div className="absolute left-[5%] -top-[10%] sm:-top-1/4 md:-top-1/3 lg:-top-1/2 bg-white w-[90%]">
            <div className="flex flex-col md:flex-row flex-wrap shadow-2xl p-7">
                {/* Main Highlighted Event */}
                <div className="relative w-full h-96 md:h-auto md:w-[40%] lg:w-1/2">
                    <Image
                    fill
                    src={HomeEventsData[0].img}
                    alt={HomeEventsData[0].title}
                    className="w-full h-80 object-cover"
                    />
                    <div className="absolute bottom-0 left-0 w-full font-paragraph bg-[rgba(24,27,29,0.9)] text-white p-6 flex flex-col sm:flex-row gap-[5%] justify-between">
                        <div className="flex flex-col sm:text-center">
                            <h3 className="text-[40px] leading-[40px] font-bold text-primary font-heading">{HomeEventsData[0].day}</h3>
                            <h3 className="text-sm font-paragraph">{HomeEventsData[0].month}, {HomeEventsData[0].year}</h3>
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold font-paragraph">{HomeEventsData[0].title}</h2>
                            <p className="font-paragraph">{HomeEventsData[0].location} - {HomeEventsData[0].time}</p>
                        </div>
                    </div>
                </div>
                {/* Other Events */}
                <div className="w-full md:w-[60%] lg:w-1/2">
                    {HomeEventsData.slice(1).map((event: Event, index: number) => (
                    <div key={index} className={`flex flex-wrap items-center py-10 pl-[5%] ${
                        index === 1 ? "border-y-solid border-y-[#eeeeee] border-y-[1px]" : ""
                      }`}>
                        <div className="flex sm:w-1/6 flex-col text-center">
                            <h3 className="text-[40px] leading-[40px] font-bold font-heading">{event.day}</h3>
                            <h3 className="text-sm font-paragraph">{event.month}, {event.year}</h3>
                        </div>
                        <div className="relative sm:w-1/6 h-20">
                            <Image
                            fill
                            objectFit="cover"
                            src={event.img}
                            alt={event.title}
                            className="object-cover rounded-md"
                            />
                
                        </div>
                        <div className="sm:w-[63%] ml-[3%]">
                            <h3 className="text-xl font-semibold font-paragraph">{event.title}</h3>
                            <p className="text-[#999999] font-paragraph">
                                {event.location} - {event.time}
                            </p>
                        </div>
                
                    </div>
                    ))}
                </div>
            </div>
            
            <div className='flex justify-center mt-[3.5%] items-center gap-4 text-white font-paragraph'>
                <Link href='#' className="rounded-[50px] py-[21px] px-[28px] shadow-[0_0_0_4em_#6a008e_inset] hover:-translate-y-[3px] ease-in-out transition-transform duration-300">See All Events</Link>
            </div>
        </div>
    </section>
  )
}
