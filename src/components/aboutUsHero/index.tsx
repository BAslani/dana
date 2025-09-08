'use client'

import classNames from 'classnames'
import ScrollDownButton from '../UI/buttons/ScrollDownButton'

export default function AboutUsHero() {
  return (
    <div
      style={{ backgroundImage: 'url(/png/about-us-hero.png)' }}
      className={classNames(
        `h-dvh transition-all duration-500 bg-cover bg-center bg-no-repeat `
      )}
    >
      <div className='relative top-4 mx-auto flex h-full max-w-screen-lg flex-col items-center justify-center'>
        <div className='absolute bottom-[8%]'>
          <ScrollDownButton hasAnimation />
        </div>
      </div>
    </div>
  )
}
