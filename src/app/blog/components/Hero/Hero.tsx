"use client";

export default function Hero() {
  return (
    <div className="relative min-h-screen flex bg-cover bg-center bg-no-repeat bg-[url('/assets/img/blog.webp')] text-white items-center font-heading">
       <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
      <div className="px-[5%] relative z-10 flex flex-col items-center gap-10 justify-center w-full">
        <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold text-center font-dm">News</h2>
        <p className="italic px-[5%] lg:px-[20%] font-heading text-center text-[1.3rem] sm:text-[1.4rem] md:text-[1.6rem] lg:text-[1.6rem]  " >Explore insights, stories, and updates that inspire and inform. Dive into our latest articles to stay connected with our journey.
        </p>
      </div>
    </div>
  );
}
