import CourseForm from "./CourseForm";

export default function Blockchain() {
    return (
      <div>
          <div className='relative h-screen bg-[url(/assets/img/courses/blockchain.webp)] bg-no-repeat bg-cover flex justify-center items-center'>
              <div className='flex flex-col gap-10 relative z-10'>
                  <p className='text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold font-dm text-center'>Blockchain</p>
                  <p className='font-medium text-center text-xl sm:text-2xl text-white italic font-ibm w-9/12 mx-auto'>Master smart contract development, decentralised applications, and blockchain architecture while building real blockchain solutions.</p>
              </div>
              <div className="absolute top-0 left-0 w-full h-full bg-[#00000086]"></div>
          </div>
  
          <div className="flex flex-wrap">
              <div className="w-full lg:w-1/2 p-[5%]">
                  <h3 className="font-dm text-3xl sm:text-4xl md:text-5xl w-5/6 text-head-primary">Blockchain</h3>
                  <p className="italic my-5 sm:text-2xl text-xl font-spartan">
                  Become a blockchain developer in 16 weeks. Master smart contract development, decentralised applications, and blockchain architecture while building real blockchain solutions.</p>
                  <p className="font-nuno">Learn Solidity, Web3.js, and essential blockchain frameworks. Create smart contracts, develop DApps, and understand blockchain security. Perfect for developers ready to enter the revolutionary world of blockchain technology.
                  </p>
                  <p className="font-nuno mt-5">Join the blockchain revolution and command premium salaries in this cutting-edge field.</p>
              </div>
              <div className="w-full h-[500px] lg:h-auto lg:w-1/2">
                  <CourseForm/>
              </div>
          </div>
      </div>
    )
  }
  