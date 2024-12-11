"use client";

export default function Hero() {
  return (
    <div className="relative h-screen flex bg-cover bg-center bg-no-repeat bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/e6/Dubai_Marina_Skyline.jpg')] text-white items-center font-ibm">
       <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
      <div className="px-[5%] relative z-10 flex flex-col items-center gap-10 justify-center w-full">
        <h2 className="text-8xl font-bold text-center">Tritek News</h2>
        <p className="italic px-[15%] text-center text-[1.6rem]">
          We are a young and creative company and we offer you fresh business
          ideas.
        </p>
      </div>
    </div>
  );
}
