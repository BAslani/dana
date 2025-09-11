'use client'

import GlassStartupCard from './components/GlassStartupCard'

type Props = {
  DefaultStudio?: 'experiences' | 'accreditors' | 'partnerships'
}

export default function Clients({ DefaultStudio = 'experiences' }: Props) {
  const selectedStudio = DefaultStudio
  return (
    <div className='px-6 md:pt-20 lg:px-0'>
      <div className='mb-4 text-center text-white md:px-[200px] lg:mx-auto lg:w-[580px] lg:px-0'>
        <h3 className='text-xl md:text-2xl lg:text-3xl'>
          {selectedStudio === 'experiences' && (
            <p>
              <span className='text-white'>Experiences</span>
            </p>
          )}
          {selectedStudio === 'accreditors' && (
            <p>
              <span className='text-white'>Accreditors</span>
            </p>
          )}
          {selectedStudio === 'partnerships' && (
            <p>
              <span className='text-white'>Partnerships</span>
            </p>
          )}
        </h3>
      </div>
      <GlassStartupCard studio={DefaultStudio} />
    </div>
  )
}
