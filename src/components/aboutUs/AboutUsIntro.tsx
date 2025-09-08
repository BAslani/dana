import Image from 'next/image'

export default function AboutUsIntro() {
  return (
    <section className='relative isolate overflow-hidden'>
      <Image
        alt='cube on a platform'
        className='absolute left-1/2 top-1/2 z-[-1] w-[280px] -translate-x-1/2 translate-y-[-40%] sm:w-[430px] md:w-[416px] md:translate-y-[-20%] lg:w-[563px] lg:-translate-y-1/3'
        src={'/png/about-us-intro-background.png'}
        width={563}
        height={762}
      />
      <div className='size-full flex-col justify-center bg-gradient-to-t from-[#11275A] to-transparent md:flex'>
        <div className='flex flex-col gap-[250px] py-6 sm:gap-[324px] md:mx-auto md:h-[517px] md:max-w-screen-lg md:flex-row md:items-center md:gap-24 lg:gap-40 lg:h-[758px] lg:py-10'>
          <div className='mx-auto w-[280px] bg-gradient-to-bl from-transparent via-transparent to-[#507CF820] p-px backdrop-blur-md sm:w-[430px] md:w-[340px] md:self-end lg:w-[640px]'>
            <div className='flex size-full flex-col items-center gap-[10px] px-6 py-4 md:gap-6'>
              <h3 className='font-goldman text-heading-S-2 text-blue-400 sm:text-heading-M-2 md:text-heading-L-2 lg:text-heading-XL-2'>
                Our Mission
              </h3>
              <p className='text-center text-body-S-2 text-gray-50 sm:text-body-M-2 md:text-justify md:text-body-L-2 lg:text-body-XL-2'>
                At Vizhen Group, we aim to empower visionaries and innovators,
                propelling them toward success in the digital landscape. With a
                commitment to excellence and a passion for creativity, we strive
                to unlock the full potential of transformative ideas, driving
                positive change and reshaping industries.
              </p>
            </div>
          </div>
          <div className='mx-auto flex w-[280px] flex-col items-center gap-[10px] px-6 py-4 backdrop-blur-md sm:w-[430px] md:w-[340px] md:gap-6 md:self-start lg:w-[640px]'>
            <h3 className='font-goldman text-heading-S-2 text-blue-400 sm:text-heading-M-2 md:text-heading-L-2 lg:text-heading-XL-2'>
              About our story
            </h3>
            <p className='text-center text-body-S-2 text-gray-50 sm:text-body-M-2 md:text-justify md:text-body-L-2 lg:text-body-XL-2'>
              At Vizhen, our story is one of relentless innovation and
              unwavering commitment to excellence. As a collective of dynamic
              studios, we are fueled by passion and driven by purpose. Our ethos
              is rooted in the belief that transformative ideas, when cultivated
              with precision and passion, have the potential to reshape
              industries and drive positive change.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
