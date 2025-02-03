"use client";

export default function Hero() {
  return (
    <div className="relative h-[30rem] lg:h-screen flex bg-cover bg-center bg-no-repeat bg-[url(/assets/img/careers/careers.webp)] text-white items-center font-ibm">
       <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
      <div className="px-[5%] relative z-10 flex flex-col items-center gap-10 justify-center w-full">
        <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold text-center">Careers</h2>
        <p className="italic px-[5%] lg:px-[20%] font-ibm text-center text-[1.3rem] sm:text-[1.4rem] md:text-[1.6rem] lg:text-[1.6rem]  " >
          We are a young and creative company and we offer you a lot of opportunities to work with us.
        </p>
      </div>
    </div>
  );
}
