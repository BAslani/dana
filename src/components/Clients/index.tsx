'use client'

import classNames from 'classnames'

import GlassStartupCard from './components/GlassStartupCard'

type Props = {
  DefaultStudio?: string
}

export default function Clients({ DefaultStudio }: Props) {
  const studio = 'venture'
  const selectedStudio = DefaultStudio || studio
  return (
    <div className='px-6 sm:px-[80px] md:px-[140px] md:pt-20 lg:px-0'>
      <div className='mb-4 text-center text-white md:px-[200px] lg:mx-auto lg:w-[580px] lg:px-0'>
        <h3 className='font-goldman text-heading-S-2 md:text-heading-M-2 lg:text-heading-XL-2'>
          {selectedStudio === 'venture' && (
            <p>
              <span className='text-blue-500'>Venture Studio</span> Startups
            </p>
          )}
          {selectedStudio === 'tech' && (
            <p>
              <span className='text-green-500'>Tech Studio</span> Projects
            </p>
          )}
          {selectedStudio === 'media' && (
            <p>
              <span className='text-yellow-500'>Media Studio</span> Projects
            </p>
          )}
        </h3>
        <p className='mt-4 font-railway text-body-S-2 md:text-body-S-1'>
          {selectedStudio === 'venture' &&
            'We empower visionaries to bring their ideas to life and ignite their startup journey'}
          {selectedStudio === 'tech' &&
            'From concept to execution, we engineer solutions that surpass expectations'}
          {selectedStudio === 'media' &&
            'Crafting your brand story, we bring your brand to life'}
        </p>
      </div>
      <GlassStartupCard studio={DefaultStudio || studio} />
      <div className='mb-4 text-center text-white md:px-[200px] lg:mx-auto lg:w-[580px] lg:px-0'>
        <button
          className={classNames(
            'mt-2 px-4 py-2 sm:px-8 md:px-12 text-black md:text-body-XL-1 lg:text-body-XL-2',
            {
              'bg-blue-300': DefaultStudio === 'venture',
              'bg-green-500': DefaultStudio === 'tech',
              'bg-yellow-500': DefaultStudio === 'media',
            }
          )}
        >
          {DefaultStudio === 'venture' && 'Begin your startup journey'}
          {DefaultStudio === 'tech' && 'Start your tech project'}
          {DefaultStudio === 'media' && 'Breathe life into your brand'}
        </button>
      </div>
    </div>
  )
}
