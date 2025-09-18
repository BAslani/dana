'use client'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import Image from 'next/image'
import React, { useState } from 'react'

import ChangeIndexSlideButton from './ChangeIndexSlideButton'
import { carouselImgs } from './data'
import TeamCarousel from './TeamCarousel'
import type { CartMemberProps } from './types'

export default function OurTeam() {
  const [activeTab, setActiveTab] = useState(0)

  const result = carouselImgs.reduce((acc: CartMemberProps[], item) => {
    if (item.team === 'venture') {
      return [...acc, item]
    }
    return acc
  }, [])

  return (
    <section id='our_team'>
      <div className='mx-auto max-w-screen-md py-10'>
        <div className='flex items-center justify-center'>
          <h1 className='mb-8 inline-block border-b border-b-gray-950 text-center leading-[19px] text-white sm:leading-[24px] md:leading-[28px] lg:leading-[43px] text-lg md:text-xl lg:text-2xl'>
            Our <span className='text-blue-400'>Team</span>
          </h1>
        </div>
        {/* <div className='relative z-30'>
          <FilterTeams selectState={setSelected} selected={selected} />
        </div> */}

        <div className='flex max-w-screen-lg items-center justify-center gap-3'>
          <ChangeIndexSlideButton
            direction='left'
            onActiveTab={() => setActiveTab((prev) => prev - 1)}
          />

          {/* carousel */}
          <div className='relative max-w-[345px] sm:max-w-[584px] md:max-w-[1000px] lg:max-w-[1440px]'>
            {/* floading shapeds around carousel : */}
            {/* <Image
              src={'/svg/dotts.svg'}
              alt='dotts'
              width={70}
              height={70}
              className='absolute -left-6 -top-6 z-10 hidden sm:block'
            />
            <Image
              src={'/svg/dotts.svg'}
              alt='dotts'
              width={70}
              height={70}
              className='absolute -bottom-6 -right-6 z-10 hidden sm:block'
            /> */}
            {/* floading shapeds around carousel : */}

            <TeamCarousel
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              result={result}
            />
          </div>

          <ChangeIndexSlideButton
            direction='right'
            onActiveTab={() => setActiveTab((prev) => prev + 1)}
          />
        </div>
        {/* buttons for mobile version */}
        <div className='mt-5 flex justify-center gap-3 text-gray-50 sm:hidden'>
          <button
            onClick={() => setActiveTab((prev) => prev - 1)}
            className='grid place-items-center border border-blue-600 p-1.5 transition-all hover:bg-blue-700'
          >
            <Image
              src={'/svg/arrow.svg'}
              alt='icon'
              width={20}
              height={20}
              className='rotate-180'
            />
          </button>
          <button
            onClick={() => setActiveTab((prev) => prev + 1)}
            className='grid place-items-center border border-blue-600 p-1.5 transition-all hover:bg-blue-700'
          >
            <Image src={'/svg/arrow.svg'} alt='icon' width={20} height={20} />
          </button>
        </div>
      </div>
    </section>
  )
}
