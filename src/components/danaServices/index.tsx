'use client'

import { useScroll } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'

import classNames from 'classnames'
import ScrollDownButton from '../UI/buttons/ScrollDownButton'
import { mediaService, techService, verntureService } from './data'
import Service from './service'

type Props = {
  hasDiagonal: boolean
}
export default function DanaServices({ hasDiagonal }: Props) {
  const target = useRef(null)
  const { scrollYProgress } = useScroll()
  return (
    <section
      ref={target}
      className=
      'relative z-10 overflow-x-hidden pb-10'
    >
      {/* floating shapes */}
      <div className='relative mx-auto  max-w-screen-lg '>
        <Image
          src={'/svg/rect-big.svg'}
          width={1920}
          height={30}
          alt='bg'
          className={classNames(hasDiagonal ? 'hidden md:block' : 'hidden')}
        />
        <Image
          src={'/svg/rect-sm.svg'}
          width={1920}
          height={30}
          alt='bg'
          className={classNames(hasDiagonal ? 'md:hidden' : 'hidden')}
        />
        <div
          style={{ display: hasDiagonal ? '' : 'none' }}
          className='absolute left-0 top-0 z-[-1] hidden size-[50rem] rounded-full bg-[#3040E4] opacity-25 blur-[150px] md:block'
        ></div>
        <div
          style={{ display: hasDiagonal ? '' : 'none' }}
          className='absolute right-0 top-0 z-[-1] hidden size-[50rem] rounded-full bg-[#3040E4] opacity-25 blur-[150px] md:block'
        ></div>
        <div
          style={{ display: hasDiagonal ? '' : 'none' }}
          className='absolute -top-12 z-[-1] block size-[38rem] rounded-full bg-[#3040E4] opacity-20 blur-[90px] md:hidden'
        ></div>
        <div
          style={{ display: hasDiagonal ? '' : 'none' }}
          className='absolute right-24 top-[900%] z-[-1] block size-56 rounded-full  bg-[#FF6B0040] opacity-100 blur-[90px] sm:top-[300%]'
        ></div>
      </div>

      {/* content */}
      <div className='mx-auto max-w-screen-lg text-gray-50'>
        <div className='px-6'>
          <h1 className='my-10 text-center text-xl md:text-2xl lg:text-3xl leading-[19px] sm:leading-[24px] md:leading-[28px] lg:mb-10 lg:leading-[43px]'>
            <span style={{ color: verntureService.theme }}>Dana</span>{' '}
            Services
          </h1>
          <Service
            serviceDetails={verntureService}
            scrollYProgress={scrollYProgress}
          />
          <div className='my-5 flex items-center justify-center'>
            <ScrollDownButton hasAnimation={false} />
          </div>
          <div className='grid grid-cols-1 grid-rows-1 gap-[40px] sm:grid-cols-2 lg:gap-[70px] '>
            <Service
              serviceDetails={techService}
              scrollYProgress={scrollYProgress}
            />
            <Service
              serviceDetails={mediaService}
              scrollYProgress={scrollYProgress}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
