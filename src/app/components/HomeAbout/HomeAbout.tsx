import { IoPeopleOutline } from "react-icons/io5";
import { GiBullseye } from "react-icons/gi";
import { LiaRocketSolid, LiaAwardSolid } from "react-icons/lia";

export default function HomeAbout() {
  return (
    <section className="flex flex-wrap">
        <div className="w-[62%] px-[5%] py-[10%]">
            <h2 className="font-spartan text-lg tracking-wider font-medium text-secondary mb-[5%]">WHY TRITEK</h2>
            <h3 className="font-dm text-5xl w-5/6 text-head-primary">Empowering Careers in Technology</h3>
            <p className="text-2xl italic font-ibm my-[5%] text-head-primary">We are proud to have helped over 5,000 individuals transition seamlessly into the ever-evolving world of technology. </p>
            <p className="font-nuno">Our proven track record highlights our ability to guide aspiring tech professionals through every step of their career path. From foundational learning to advanced expertise, we ensure our approach is tailored to each individual's unique goals and aspirations.</p>
            <p className="font-nuno mt-[1.5%]">We remain committed to fostering a culture of growth and innovation, paving the way for fulfilling and rewarding careers in technology. With Tritek, your success is not just a goal—it's a guarantee backed by experience and dedication.</p>
            <div className="h-[1px] bg-[#ccc] my-[5%]"></div>
            <div className="flex justify-between text-secondary">
                <div className="font-spartan text-center flex flex-col justify-center items-center">
                    <div className="h-24 w-24 mb-[2%] border-secondary border-2 border-solid rounded-[50%] flex justify-center items-center text-5xl">
                        <IoPeopleOutline/>
                    </div>
                    <h4 className="text-[32px] text-head-primary text-spartan font-bold">1.4K</h4>
                    <p>Candidates</p>
                </div>
                <div className="font-spartan text-center flex flex-col justify-center items-center">
                    <div className="h-24 w-24 mb-[2%] border-secondary border-2 border-solid rounded-[50%] flex justify-center items-center text-5xl">
                        <GiBullseye/>
                    </div>
                    <h4 className="text-[32px] text-head-primary text-spartan font-bold">400+</h4>
                    <p>Success Stories</p>
                </div>
                <div className="font-spartan text-center flex flex-col justify-center items-center">
                    <div className="h-24 w-24 mb-[2%] border-secondary border-2 border-solid rounded-[50%] flex justify-center items-center text-5xl">
                        <LiaRocketSolid/>
                    </div>
                    <h4 className="text-[32px] text-head-primary text-spartan font-bold">100+</h4>
                    <p>Completed Projects</p>
                </div>
                <div className="font-spartan text-center flex flex-col justify-center items-center">
                    <div className="h-24 w-24 mb-[2%] border-secondary border-2 border-solid rounded-[50%] flex justify-center items-center text-5xl">
                        <LiaAwardSolid/>
                    </div>
                    <h4 className="text-[32px] text-head-primary text-spartan font-bold">4</h4>
                    <p>Awards</p>
                </div>
                
            </div>
        </div>
        <div className="bg-[url(/assets/img/homeabout.webp)] bg-no-repeat bg-cover w-[38%] relative">
            <div className="absolute top-0 left-0 w-full h-full bg-[#00000075]"></div>
        </div>
    </section>
  )
}
