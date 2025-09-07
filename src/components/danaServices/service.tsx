'use client'

import classNames from 'classnames'
import { motion, type MotionValue, useSpring, useTransform } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

import TooltipIcon from './TooltipIcon'

type ServiceDetailsProps = {
  scrollYProgress: MotionValue<number>
  serviceDetails: {
    vizhenIcon: string
    cubeImg: string
    title: string
    description: string
    icons: {
      icon: string
      iconHover: string
      tooltip: string
    }[]
    theme: string
  }
}

const spring = {
  stiffness: 100,
  damping: 30,
  restDelta: 0.001
}

export default function Service({ serviceDetails, scrollYProgress }: ServiceDetailsProps) {
  const deg = useTransform(scrollYProgress, [1, 0], [0, 360])
  const revDeg = useTransform(scrollYProgress, [1, 0], [360, 0])
  const springDeg = useSpring(deg, spring)
  const springRevDeg = useSpring(revDeg, spring)
  const { vizhenIcon, cubeImg, title, description, icons, theme } = serviceDetails
  return (
    <div className={classNames('flex overflow-y-visible flex-col justify-center items-center')}>
      <motion.div
        style={{ rotate: springDeg }}
        className='-mb-12 size-[120px] rounded-full border-2 border-dashed border-[#FFFFFF3D] p-4 sm:size-[160px] md:mb-[-4.5rem] md:size-[200px]'
      >
        <motion.div style={{ rotate: springRevDeg, aspectRatio: 1 }}>
          <Image src={cubeImg} alt='cube' width={150} height={150} />
        </motion.div>
      </motion.div>
      <div
        className={classNames(
          'h-full w-full bg-blue-900 rounded-[24px] bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 flex flex-col items-center  border border-blue-900 p-[24px] sm:px-[24px] sm:py-[40px] lg:py-[50px] lg:px-[40px]',
          title === 'Venture'
            ? 'sm:flex-row md:gap-[64px] sm:gap-[48px] lg:gap-[79px]'
            : 'md:flex-row gap-[24px] md:gap-[50px]'
        )}
      >
        <Image alt='vizhen' width={137} height={101} src={vizhenIcon} className='mb-2 h-[84px] w-[115px] sm:mb-0' />
        <div className='flex flex-col gap-5'>
          <h1 className='font-goldman text-heading-M-4 sm:max-w-[368px] sm:text-left md:max-w-[560px] md:text-heading-L-4 lg:max-w-[546px] lg:text-heading-XL-4 lg:leading-[33px]'>
            <span style={{ color: theme }}>{title}</span> Studio
          </h1>
          <p className='text-body-S-1 sm:text-body-M-3  md:text-body-L-3 lg:text-body-XL-3'>{description}</p>
          <TooltipIcon iconGroup={icons} title={title} theme={theme} />
        </div>
      </div>
    </div>
  )
}
