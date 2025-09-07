/* eslint-disable @next/next/no-img-element */

'use client'

import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

type Props = {
  title: string
  children: React.ReactNode
}

export default function JobPosition({ title, children }: Props) {
  const [isOpen, setIsOpen] = useState(false)
  function onToggleAccordion() {
    setIsOpen((val) => !val)
  }
  return (
    <div className='bg-gray-900 text-white'>
      <button
        onClick={onToggleAccordion}
        className='flex w-full items-center justify-between p-5 text-[30px]'
      >
        <span className='font-goldman text-heading-S-4'>{title}</span>
        <span>
          <img
            className={classNames(
              'rotate-180 p-2 transition-all hover:cursor-pointer',
              isOpen && 'rotate-[360]'
            )}
            src='/svg/small-arrow-down.svg'
            alt='arrow icon'
          />
        </span>
      </button>
      <div
        className={classNames(
          'grid grid-rows-[0fr]  transition-all duration-500',
          isOpen && 'grid-rows-[1fr] '
        )}
      >
        <div
          className={classNames(
            'mx-[24px]  flex flex-col overflow-hidden transition-all duration-500',
            isOpen ? 'my-[12px]' : 'my-0'
          )}
        >
          {children}
          <Link
            href={'/contact-us'}
            className='mt-[24px] flex items-center justify-between gap-2 self-end bg-blue-300 px-[16px] py-[8px] text-white'
          >
            <Image
              src={'/svg/check.svg'}
              width={16}
              height={16}
              alt='icon'
              className='sm:size-[20px] md:size-[24px]'
            />
            <span className='text-gray-950'>Apply for this role</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
