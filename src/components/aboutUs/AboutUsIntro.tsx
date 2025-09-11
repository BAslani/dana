import Image from 'next/image'

export default function AboutUsIntro() {
  return (
    <section id='about_us' className='relative isolate overflow-hidden'>
      <Image
        alt='cube on a platform'
        className='absolute left-1/2 top-1/2 z-[-1] w-[280px] -translate-x-1/2 translate-y-[-40%] sm:w-[430px] md:w-[416px] md:translate-y-[-20%] lg:w-[563px] lg:-translate-y-1/3'
        src={'/png/about-us-intro-background.png'}
        width={563}
        height={762}
      />
      <div className='size-full flex-col justify-center md:flex'>
        <div className='flex flex-col gap-[250px] py-6 sm:gap-[324px] md:mx-auto md:h-[517px] md:max-w-screen-lg md:flex-row md:items-center md:gap-24 lg:gap-40 lg:h-[758px] lg:py-10'>
          <div className='mx-auto w-[280px] bg-gradient-to-bl from-transparent via-transparent to-[#507CF820] p-px backdrop-blur-md sm:w-[430px] md:w-[340px] md:self-end lg:w-[640px]'>
            <div className='flex size-full flex-col items-center gap-[10px] px-6 py-4 md:gap-6'>
              <h3 className='text-2xl text-blue-400'>
                Mission and Vision Statement
              </h3>
              <p className='text-center text-body-S-2 text-gray-50 sm:text-body-M-2 md:text-justify md:text-body-L-2 lg:text-body-XL-2'>
                <span className='font-semibold'>Mission:</span> To deliver
                sustainable, scalable, secure, and efficient solutions for data
                infrastructure by leveraging cutting-edge technologies and
                innovative approaches to meet the growing needs of organizations
                and ensure optimal data center performance.
                <br /> <span className='font-semibold'>Vision:</span> To become
                the most trusted and leading business partner in data center
                infrastructure across the Middle East, providing standardized,
                reliable, and knowledge-driven services that prioritize customer
                trust and continuous innovation.
              </p>
            </div>
          </div>
          <div className='mx-auto flex w-[280px] flex-col items-center gap-[10px] px-6 py-4 backdrop-blur-md sm:w-[430px] md:w-[340px] md:gap-6 md:self-start lg:w-[640px]'>
            <h3 className='text-2xl text-blue-400'>About our story</h3>
            <p className='text-justify text-body-S-2 text-gray-50 sm:text-body-M-2 md:text-body-L-2 lg:text-body-XL-2'>
              Dana Innovation Core Engineering, a knowledge-driven IT company,
              specializes in data center infrastructure. With a team of skilled
              engineers, it offers innovative and adaptable solutions to meet
              project needs. By addressing industry gaps through thorough
              analysis, the company has built a robust platform combining IT,
              infrastructure, project management, and expertise to seize future
              opportunities.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
