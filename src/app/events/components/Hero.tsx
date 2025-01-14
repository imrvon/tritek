"use client";

export default function Hero() {
  return (
    <div className="relative h-[30rem] lg:h-screen flex bg-cover bg-center bg-no-repeat bg-[url('https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] text-white items-center font-ibm">
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
      <div className="px-[5%] relative z-10 flex flex-col items-center gap-10 justify-center w-full">
        <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold text-center">
          Events
        </h2>
        <p className="italic px-[5%] lg:px-[20%] font-ibm text-center text-[1.3rem] sm:text-[1.4rem] md:text-[1.6rem] lg:text-[1.6rem]  ">
          Top events to attend with friends and family and also business
          partners.
        </p>
      </div>
    </div>
  );
}
