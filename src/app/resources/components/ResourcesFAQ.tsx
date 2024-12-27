'use client'
import faqData from './ResourcesFAQData'

export default function ResourcesFAQ() {

  return (
    <div className='pb-[7%] faq'>
        <div className='flex flex-wrap justify-between mt-[2.5%]'>
            {
                faqData.map((data)=> (
                    <div className='tritek_faq resources w-full mb-[2%] font-paragraph' key={data.id}>
                        <div className='border-solid border-black border-[1px] p-[3.5%]'>
                            <details className="">
                                <summary className='relative flex items-center gap-4 cursor-pointer after:absolute after:top-1/2 after:-translate-y-1/2 after:transition-transform after:duration-500 after:delay-0 after:ease-in-out after:right-[1%] after:text-2xl'>
                                    <h3 className='text-primary-color font-semibold text-xl !w-[85%] sm:w-full'>{data.name}</h3>
                                </summary>
                            </details>
                            <div className='one'>
                                <p className=''>{data.description}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
        
    </div>
  )
}
