'use client'

import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { footerLinks, socialMedias } from './data'

export default function Footer() {
  return (
    <footer>
      <section
        className={classNames(
          'flex gap-[40px] mx-auto flex-col sm:flex-row justify-between  lg:mt-[-10.1rem] sm:mt-[-5.5rem] md:mt-[-9.5rem] mt-[-5rem] pb-[24px] pt-[120px] md:pt-[200px] sm:pt-[130px] lg:pt-[280px]  text-white',
          'lg:max-w-screen-lg'
        )}
      >
        <div className='flex flex-col items-center gap-[22px] sm:items-start'>
          <Image
            src='/svg/vizhen-logo.svg'
            width={132}
            height={30}
            alt='vhizen logo'
            className='md:h-[41px] md:w-[180px] lg:h-[47px] lg:w-[206px]'
          />
          <h1 className='text-center font-goldman text-heading-M-4 sm:max-w-[368px] sm:text-left md:max-w-[560px] md:text-heading-L-4 lg:max-w-[546px] lg:text-heading-XL-4 lg:leading-[33px]'>
            “Innovate, create, and see beyond ordinary with vizhen”
          </h1>
          <div className='flex items-center gap-[16px]'>
            {socialMedias.map(({ icon, link, alt }, index) => (
              <Link href={link} key={index}>
                <Image
                  src={icon}
                  alt={alt}
                  width={24}
                  height={24}
                  className='lg:size-[30px]'
                />
              </Link>
            ))}
          </div>
        </div>

        <div className='flex flex-col items-center justify-center  sm:items-stretch'>
          <div className='grid grid-cols-2 grid-rows-3 gap-x-[40px] gap-y-[20px] pl-4 sm:gap-x-[48px] sm:pl-0 lg:gap-x-[120px]'>
            {footerLinks.map(({ link, name }, index) => (
              <Link
                scroll={false}
                href={link}
                key={index}
                className='text-body-M-3 md:text-body-L-3 lg:text-body-XL-3'
              >
                {name}
              </Link>
            ))}
          </div>
        </div>
      </section>
      <div className='pb-[40px] pt-[15px] text-center text-gray-400'>
        &copy; 2025 AmiZad All right reserved.
      </div>
    </footer>
  )
}
