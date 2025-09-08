export default function AboutUsInfo() {
  return (
    <section className='relative overflow-x-hidden'>
      <div className='py-8 px-6 sm:px-20 md:max-w-screen-md md:mx-auto lg:max-w-[1620px]'>
        <div className='mx-auto flex max-w-screen-lg  flex-col items-center justify-center  bg-contain py-[24px] md:py-[80px]'>
          <div className='px-[40px] text-center text-lg md:text-xl lg:text-3xl font-semibold text-white'>
            <h1>
              We are a team of passionate professionals eager to bring new ideas
              to life, innovate in technology, and tell memorable stories.
            </h1>
          </div>
          {/* <div className='relative mx-auto size-[400px] w-full sm:size-[440px] md:size-[480px] lg:size-[520px]'>
            <div className=''>
              <FrameAnimationCanvas frameCount={178} frameDuration={50} imagePath='/vid/aboutUsMotion' />
            </div>
          </div> */}
        </div>
      </div>
    </section>
  )
}
