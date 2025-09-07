import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import Image from 'next/image'
import React, { useRef } from 'react'

import type { CartMemberProps } from './types'

export default function CartMember({
  imagePath,
  position,
  name,
  team,
}: CartMemberProps) {
  const spring = {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  }

  const x = useMotionValue(240 / 2)
  const y = useMotionValue(310 / 2)
  const target = useRef<HTMLDivElement>(null)
  const rotateXtransform = useTransform(y, [0, 240], [25, -25])
  const rotateX = useSpring(rotateXtransform, spring)
  const rotateYtransform = useTransform(x, [0, 310], [-25, 25])
  const rotateY = useSpring(rotateYtransform, spring)
  const hoverColor = {
    tech: '#042F1750',
    venture: '#0C0C8950',
    media: '#43320E50',
  }
  return (
    <div
      onMouseMove={(e) => {
        x.set(e.nativeEvent.offsetX)
        y.set(e.nativeEvent.offsetY)
      }}
      onMouseLeave={() => {
        x.set(240 / 2)
        y.set(310 / 2)
      }}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
        }}
        ref={target}
        className='group relative inline-block h-[200px] w-[160px] sm:h-[240px] sm:w-[180px] md:h-[310px] md:w-[240px] lg:h-[340px] lg:w-[268px]'
      >
        <Image
          src={imagePath}
          alt='member'
          width={268}
          height={340}
          className='inline-block size-full '
        />
        <div
          style={{
            backgroundColor: hoverColor[team as keyof typeof hoverColor],
          }}
          className='absolute inset-0  z-10 flex opacity-0 transition-all duration-300 group-hover:opacity-90'
        >
          <div className='mt-auto'>
            <h3 className='pl-2 text-card-S-2 text-gray-50 sm:text-card-M-2 md:pl-4 md:text-card-X-2 lg:pb-8 lg:text-card-XL-2'>
              {name}
            </h3>
            <p className='pb-4 pl-2 text-card-S-2 text-gray-50 sm:text-card-M-2 md:pl-4 md:text-card-X-2 lg:pb-8 lg:text-card-XL-2'>
              {position}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
