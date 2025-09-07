'use client'

import classNames from 'classnames'
import Image from 'next/image'
import React from 'react'

type Props = {
  hasAnimation: boolean
}

export default function ScrollDownButton({ hasAnimation = false }: Props) {
  const scroolDown = () => {
    window.scrollBy({
      behavior: 'smooth',
      top: window.innerHeight - window.innerHeight * 0.4,
    })
  }
  return (
    <button onClick={scroolDown}>
      <Image
        src={'/png/arrow-down-animation.png'}
        className={classNames(
          'size-[70px] sm:size-[100px] md:size-[70px] lg:size-auto',
          hasAnimation ? 'animate-jump' : ''
        )}
        alt='logo'
        width={100}
        height={100}
      />
    </button>
  )
}
