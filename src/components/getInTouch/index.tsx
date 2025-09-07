'use client'

import Image from 'next/image'

import GetInTouchMessage from './components/GetInTouchMessage'

export default function GetInTouch() {
  const studio = 'venture'
  return (
    <div className='lg:mt-20'>
      <div
        className='relative hidden bg-cover bg-center bg-no-repeat py-[175px] lg:block'
        style={{
          backgroundImage: `url(/studios/${studio}/getInTouch/background-lg.png)`,
        }}
      >
        <Image
          src={`/studios/${studio}/getInTouch/cube-hand.png`}
          alt=''
          width={527}
          height={374}
          className='absolute -top-28 right-0 z-10'
        />
        <div className='relative mx-auto h-[400px] w-[1440px]'>
          <Image
            width={1600}
            height={1600}
            src={`/studios/${studio}/getInTouch/container-lg.png`}
            alt=''
            className='absolute inset-0'
          />
          <div className='absolute inset-0 flex items-center justify-center'>
            <GetInTouchMessage />
          </div>
        </div>
      </div>
      <div
        className='relative hidden bg-cover bg-center bg-no-repeat py-[149px] md:block lg:hidden'
        style={{
          backgroundImage: `url(/studios/${studio}/getInTouch/background-md.png)`,
        }}
      >
        <Image
          src={`/studios/${studio}/getInTouch/cube-hand.png`}
          alt=''
          width={305}
          height={216}
          className='absolute right-0 top-0 z-10'
        />
        <div className='relative mx-auto h-[350px] w-[900px]'>
          <Image
            width={900}
            height={900}
            src={`/studios/${studio}/getInTouch/container-md.png`}
            alt=''
            className='absolute inset-0'
          />
          <div className='absolute inset-0 flex items-center justify-center'>
            <GetInTouchMessage />
          </div>
        </div>
      </div>
      <div
        className='relative hidden bg-cover bg-center bg-no-repeat py-24 sm:block md:hidden'
        style={{
          backgroundImage: `url(/studios/${studio}/getInTouch/background-sm.png)`,
        }}
      >
        <Image
          src={`/studios/${studio}/getInTouch/cube-hand.png`}
          alt=''
          width={245}
          height={174}
          className='absolute right-0 top-0 z-10'
        />
        <div className='relative mx-auto h-[420px] w-[584px]'>
          <Image
            width={800}
            height={800}
            src={`/studios/${studio}/getInTouch/container-sm.png`}
            alt=''
          />
          <div className='absolute inset-0 flex items-center justify-center'>
            <GetInTouchMessage />
          </div>
        </div>
      </div>
      <div
        className='relative bg-cover bg-bottom bg-no-repeat py-24 sm:hidden'
        style={{
          backgroundImage: `url(/studios/${studio}/getInTouch/background-xs.png)`,
        }}
      >
        <Image
          src={`/studios/${studio}/getInTouch/cube-hand.png`}
          alt=''
          width={219}
          height={156}
          className='absolute right-0 top-0 z-10'
        />
        <div className='relative mx-auto h-[400px] w-[345px]'>
          <Image
            width={400}
            height={400}
            src={`/studios/${studio}/getInTouch/container-xs.png`}
            alt=''
            className='absolute inset-0'
          />
          <GetInTouchMessage />
        </div>
      </div>
    </div>
  )
}
