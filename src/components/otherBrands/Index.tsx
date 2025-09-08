'use client'

import 'swiper/css'
import 'swiper/css/pagination'

import Image from 'next/image'
import Link from 'next/link'

import { logos } from './data'

export default function OtherBrands() {
  return (
    <div className='overflow-x-hidden'>
      <div className='mx-auto max-w-screen-lg'>
        <h1 className='pb-2 text-center sm:text-lg md:text-2xl lg:text-3xl text-gray-50 sm:text-heading-M-2 md:text-heading-L-2 lg:text-heading-XL-2'>
          Our <span className='text-blue-500'>Partners</span>
        </h1>
        <div className='flex items-center justify-around sm:py-4 lg:py-8'>
          {logos.map((src, index) => {
            return (
              <Link href={src.href} target='_blank' key={index}>
                <div className='group'>
                  <Image
                    className='aspect-[1.5/3] size-[120px] object-contain p-4 group-hover:hidden sm:size-[150px]  lg:!mx-12 lg:size-[190px]'
                    src={src.imgWhite}
                    alt='logo'
                    width={190}
                    height={190}
                  />
                  <Image
                    className='hidden aspect-[1.5/3] size-[120px] object-contain p-4 group-hover:block sm:size-[150px]  lg:!mx-12 lg:size-[190px]'
                    src={src.imgBlue}
                    alt='logo'
                    width={190}
                    height={190}
                  />
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
