import React, { useEffect, useRef } from 'react'
import { Pagination } from 'swiper/modules'
import type { SwiperRef } from 'swiper/react'
import { Swiper, SwiperSlide } from 'swiper/react'

import CartMember from './CartMember'
import type { CartMemberProps } from './types'

type Props = {
  activeTab: number
  setActiveTab: React.Dispatch<React.SetStateAction<number>>
  result: CartMemberProps[]
}

export default function TeamCarousel({ activeTab, setActiveTab, result }: Props) {
  const sliderRef = useRef<SwiperRef>(null)

  useEffect(() => {
    sliderRef.current?.swiper.slideTo(activeTab)
  }, [activeTab])

  return (
    <div className='relative z-20'>
      <Swiper
        ref={sliderRef}
        onSlideChange={swiper => {
          setActiveTab(swiper.activeIndex)
        }}
        className='h-full '
        loopAddBlankSlides={true}
        modules={[Pagination]}
        slidesPerView='auto'
        breakpoints={{
          1920: {
            spaceBetween: 25
          },
          1280: {
            spaceBetween: 16
          },
          744: {
            spaceBetween: 22
          },
          0: {
            spaceBetween: 16
          }
        }}
      >
        {result.map((eachMember, index) => {
          return (
            <SwiperSlide
              key={index}
              className='inline-block h-[200px] w-[160px] !shrink sm:h-[240px] sm:w-[180px] md:h-[310px] md:w-[240px] lg:h-[340px] lg:w-[268px]'
            >
              <CartMember {...eachMember} />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}
