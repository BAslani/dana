import Image from 'next/image'

import type { TooltipIconProps } from './type'

export default function TooltipIcon({ iconGroup, theme }: TooltipIconProps) {
  return (
    <div className='flex items-center justify-between gap-2 '>
      {iconGroup.map(({ icon, iconHover, tooltip }, index) => (
        <div
          key={index}
          className='size-14 sm:size-24 relative group flex flex-col justify-center items-center'
        >
          <Image
            src={icon}
            width={100}
            height={100}
            alt='icon'
            className='absolute  inset-0 transition-all object-cover opacity-100 group-hover:opacity-0'
          />
          <Image
            src={iconHover}
            width={100}
            height={100}
            alt='icon'
            className='absolute  inset-0 transition-all object-cover opacity-0 group-hover:opacity-100'
          />

          <span className=' absolute top-3 z-20 scale-[0.8] opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100'>
            <div className='absolute  left-1/2 top-[calc(100%+4rem)] w-auto -translate-x-1/2 opacity-0 transition-all duration-300 group-hover:opacity-100 md:top-[calc(100%+5rem)]'>
              <div className='bottom-full right-0 flex items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-[#98989880] px-2 py-1 text-white'>
                <div
                  style={{ backgroundColor: theme }}
                  className='size-2 rounded-full'
                ></div>
                {tooltip}
                <svg
                  className='absolute bottom-full  right-0 h-4 w-full rotate-180 text-[#98989880]'
                  x='0px'
                  y='0px'
                  viewBox='0 0 255 255'
                >
                  <polygon
                    className='fill-current'
                    points='0,0 127.5,127.5 255,0'
                  />
                </svg>
              </div>
            </div>
          </span>
        </div>
      ))}
    </div>
  )
}
