'use client'

import classNames from 'classnames'
import { AnimatePresence } from 'framer-motion'
import { useState } from 'react'

import TimeLineContainer from './TimeLineContainer'

export default function TimeLine() {
  const [activeYear, setActiveYear] = useState(2024)
  return (
    <section className='relative'>
      <div className='mx-auto max-w-screen-lg py-20'>
        <h1 className='pb-2 text-center font-goldman text-gray-50 sm:text-heading-M-2 md:text-heading-L-2 lg:text-heading-XL-2'>
          {/* title section */}
          <div className='mb-12 flex items-center justify-center gap-0 sm:mb-20 md:gap-3'>
            <p className='text-heading-S-2 md:text-heading-M-1'>
              <span className='text-blue-500'>Dana</span> Timeline
            </p>
          </div>
          {/* flaoting cubes */}
          <hr className='blur-[1.9px]' />
          <div className='px-[24px] sm:px-[80px] md:px-[227px] lg:px-[360px]'>
            <div className='flex h-32 translate-y-[-40%] items-center justify-between overflow-hidden'>
              {[2021, 2022, 2023, 2024].map((year) => (
                <button
                  onClick={() => {
                    setActiveYear(() => year)
                  }}
                  key={year}
                  className='flex flex-col'
                >
                  <span
                    className={classNames(
                      'transition-all duration-colors-1000 duration-500',
                      activeYear === year
                        ? 'text-[80px] relative bottom-[4px] text-blue-500 rotate-180'
                        : 'text-[50px]'
                    )}
                  >
                    &#x2B22;
                  </span>
                  <span className='text-heading-S-5 leading-5 sm:text-heading-M-5 md:text-heading-L-5 lg:text-heading-XL-5'>
                    {year}
                  </span>
                </button>
              ))}
            </div>
          </div>
          {/* animated project container */}
          <div className='mt-16 px-4'>
            <AnimatePresence mode='wait'>
              <TimeLineContainer key={activeYear} year={activeYear} />
            </AnimatePresence>
          </div>
        </h1>
      </div>
    </section>
  )
}
