import Image from 'next/image'
import React from 'react'

import {
  partenshipsList,
  accreditorsList,
  experiencesList,
} from '../data/StartupItems'

type Props = {
  studio: 'experiences' | 'accreditors' | 'partnerships'
}

export default function GlassStartupCard({ studio }: Props) {
  const lists = {
    experiences: experiencesList,
    accreditors: accreditorsList,
    partnerships: partenshipsList,
  }
  return (
    <div className='relative mb-10 mt-10'>
      <div className='mx-auto grid grid-cols-2 gap-x-4 gap-y-16 rounded-xl border border-white/25 px-6 py-10 backdrop-blur-sm sm:max-w-[584px] sm:grid-cols-3 md:max-w-[1000px] md:px-[190px] md:py-[60px] lg:mx-auto lg:max-w-[960px] lg:px-40'>
        {lists[studio].map(({ img }, index) => {
          return (
            <React.Fragment key={index}>
              <div
                key={index}
                className='flex  h-[110px] flex-col justify-between gap-4 sm:items-center'
              >
                {/* <div className='flex items-center gap-4 sm:justify-center'>
                    <div className='relative size-6'>
                      <div
                        className={classNames(
                          'hexagon absolute inset-0 size-6',
                          {
                            'bg-blue-400': 'venture' === studio,
                            'bg-green-400': 'tech' === studio,
                            'bg-yellow-400': 'media' === studio,
                          }
                        )}
                      />
                      <div className='absolute -inset-2 backdrop-blur-sm'></div>
                    </div>
                    <h5 className='font-railway text-body-S-2 text-white md:text-body-L-2 lg:text-body-XL-2'>
                      {title}
                    </h5>
                  </div> */}
                <Image
                  alt=''
                  className='md:scale-125'
                  src={img.src}
                  height={img.h}
                  width={img.w}
                />
              </div>
            </React.Fragment>
          )
        })}
      </div>
    </div>
  )
}
