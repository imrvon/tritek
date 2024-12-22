import CourseForm from "./CourseForm";

export default function AI() {
  return (
    <div>
        <div className='relative h-screen bg-[url(/assets/img/courses/ai.webp)] bg-no-repeat bg-cover flex justify-center items-center'>
            <div className='flex flex-col gap-10 relative z-10'>
                <p className='text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold font-dm text-center'>Artificial Intelligence</p>
                <p className='font-medium text-center text-xl sm:text-2xl text-white italic font-ibm w-9/12 mx-auto'>You&apos;ll create chatbots, develop recommendation systems, and build predictive models using the same tools and frameworks used by tech giants.</p>
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-[#00000086]"></div>
        </div>

        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2 p-[5%]">
                <h3 className="font-dm text-3xl sm:text-4xl md:text-5xl w-5/6 text-head-primary">Artificial Intelligence</h3>
                <p className="italic my-5 sm:text-2xl text-xl font-spartan">
                Transform into a sought-after AI professional in just 16 weeks. Master machine learning algorithms, neural networks, and deep learning while building real AI applications that solve business problems. Companies are desperately seeking AI talent – with salaries starting at $120,000.</p>
                <p className="font-nuno">Our AI course goes beyond theory. You&apos;ll create chatbots, develop recommendation systems, and build predictive models using the same tools and frameworks used by tech giants. Work directly with TensorFlow, PyTorch, and OpenAI&apos;s cutting-edge technologies.</p>
            </div>
            <div className="w-full lg:w-1/2">
                <CourseForm courseTitle="Artificial Intelligence" />
            </div>
        </div>
    </div>
  )
}
