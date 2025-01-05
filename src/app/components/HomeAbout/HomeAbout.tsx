import { IoPeopleOutline } from "react-icons/io5";
import { GiBullseye } from "react-icons/gi";
import { LiaRocketSolid, LiaAwardSolid } from "react-icons/lia";

export default function HomeAbout() {
  return (
    <section className="flex flex-wrap flex-col md:flex-row">
        <div className="w-full md:w-[62%] px-[5%] py-[10%]">
            <h2 className="font-paragraph text-lg tracking-wider font-medium text-secondary mb-[5%]">WHY TRITEK ACADEMY</h2>
            <h3 className="font-heading text-4xl md:text-5xl sm:w-5/6 text-head-primary">We Care About Your Success.</h3>
            <p className="text-lg sm:text-2xl italic font-paragraph my-[5%] text-head-primary">We&apos;re not just another training provider. At Tritek Academy, we believe in transforming lives by equipping you with practical skills that matter. We ensure you feel valued, purposeful, and prepared for meaningful roles.</p>
            <p className="font-paragraph">We offer comprehensive, real-world training on courses designed to meet today&apos;s industry demands. Our hands-on projects help you build your portfolio and confidence while also supporting your career by giving you access to mentorship, career coaching, and interview preparation to land your dream job.</p>
            <p className="font-paragraph mt-[1.5%]">We remain committed to fostering a culture of growth and innovation, paving the way for fulfilling and rewarding careers in technology. With Tritek, your success is not just a goal — it&apos;s a guarantee backed by experience and dedication.</p>
            <div className="h-[1px] bg-[#ccc] my-[5%]"></div>
            <div className="flex flex-col justify-center items-center sm:flex-row sm:justify-between sm:items-start gap-5 sm:gap-2 text-secondary">
                <div className="font-heading text-center flex flex-col justify-center items-center">
                    <div className="h-24 w-24 mb-[1.5%] sm:mb-[2%] border-secondary border-2 border-solid rounded-[50%] flex justify-center items-center text-5xl">
                        <IoPeopleOutline/>
                    </div>
                    <h4 className="text-[32px] text-head-primary font-heading font-bold">5k</h4>
                    <p>Candidates</p>
                </div>
                <div className="font-heading text-center flex flex-col justify-center items-center">
                    <div className="h-24 w-24 mb-[1.5%] sm:mb-[2%] border-secondary border-2 border-solid rounded-[50%] flex justify-center items-center text-5xl">
                        <GiBullseye/>
                    </div>
                    <h4 className="text-[32px] text-head-primary font-bold">3k+</h4>
                    <p>Success Stories</p>
                </div>
                <div className="font-heading text-center flex flex-col justify-center items-center">
                    <div className="h-24 w-24 mb-[1.5%] sm:mb-[2%] border-secondary border-2 border-solid rounded-[50%] flex justify-center items-center text-5xl">
                        <LiaRocketSolid/>
                    </div>
                    <h4 className="text-[32px] text-head-primary font-bold">10k+</h4>
                    <p>Completed Classes</p>
                </div>
                <div className="font-heading text-center flex flex-col justify-center items-center">
                    <div className="h-24 w-24 mb-[1.5%] sm:mb-[2%] border-secondary border-2 border-solid rounded-[50%] flex justify-center items-center text-5xl">
                        <LiaAwardSolid/>
                    </div>
                    <h4 className="text-[32px] text-head-primary font-bold">10+</h4>
                    <p>Awards</p>
                </div>
                
            </div>
        </div>
        <div className="bg-[url(/assets/img/homeabout.webp)] bg-no-repeat bg-cover w-full md:w-[38%] relative h-[600px] md:h-auto">
            <div className="absolute top-0 left-0 w-full h-full bg-[#00000075]"></div>
        </div>
    </section>
  )
}
