/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link'
import React from 'react'

export default function GetInTouchMessage() {
  return (
    <div>
      <div className='absolute inset-0 top-[45%] -translate-y-1/2 px-3 sm:px-12 md:top-[5%] md:translate-y-5 md:px-[100px] lg:top-1/2 lg:-translate-y-1/2 lg:px-[160px]'>
        <h2 className='font-goldman text-heading-S-4 text-blue-400 sm:text-heading-M-4 md:text-heading-L-4 lg:text-heading-XL-4'>
          Get In Touch
        </h2>
        <p className='my-6 text-body-S-2 text-white sm:text-body-M-2 md:mt-6 md:text-body-L-2 lg:text-body-XL-2'>
          Ready to turn your ideas into reality? Take the first step towards
          success by reaching out to us today. Whether you have a groundbreaking
          idea or seek guidance to integrate technology into your business, we
          are here to partner with you on your journey to innovation and growth.
          Don't hesitate to connect with us – let's bring your vision to life
          together!
        </p>
        <Link
          href={'/contact-us'}
          className='mt-4 h-10 w-40 bg-blue-300 px-8 py-2 md:mt-6 md:h-12 md:w-[280px] md:text-body-L-2 lg:h-[52px] lg:w-[320px] lg:text-body-XL-2'
        >
          Contact us
        </Link>
      </div>
    </div>
  )
}
