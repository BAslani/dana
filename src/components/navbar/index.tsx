'use client'

import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import ButtonSkewed from '../UI/buttons/ButtonSkewed'
import NavLinks from './components/NavLinks'
import SideBar from './components/SideBar'

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false)
  const [showDrawer, setShowDrawer] = useState(false)

  const changeHeaderStyle = () => {
    const scrollTop = window.scrollY
    if (scrollTop > 50) {
      setIsSticky(true)
    } else {
      setIsSticky(false)
    }
  }

  useEffect(() => {
    changeHeaderStyle()
    window.addEventListener('scroll', changeHeaderStyle)
    return () => window.removeEventListener('scroll', changeHeaderStyle)
  }, [])

  return (
    <div className='fixed z-50 w-full'>
      <nav
        id='site-header'
        className={classNames(
          'transition-all duration-300 w-full px-6',
          isSticky
            ? 'py-3 sm:py-2 md:py-4 bg-black/60 backdrop-blur-md'
            : 'sm:py-6 md:py-10 py-6'
        )}
      >
        <div className='mx-auto flex flex-row items-center justify-between md:max-w-screen-lg'>
          <Link
            scroll={false}
            href={'/'}
            className='h-6 w-28 sm:h-8 sm:w-36 md:h-9 md:w-40 lg:h-11 lg:w-[200px]'
          >
            <Image
              alt='logo'
              width={200}
              height={45}
              src={'/png/Dana-logo.png'}
            />
          </Link>
          <div className='hidden md:block'>
            <NavLinks />
          </div>
          <div>
            <div className='hidden md:block md:w-36 lg:w-48'>
              <ButtonSkewed
                onClick={() => console.log('clicked')}
                bgColor='blue300'
                textColor='gray950'
                title='Get in touch'
              />
            </div>
            <div className='w-[86px] md:hidden'>
              {showDrawer ? (
                <ButtonSkewed
                  onClick={() => setShowDrawer(false)}
                  bgColor='blue950'
                  textColor='gray50'
                  title='Close'
                />
              ) : (
                <ButtonSkewed
                  onClick={() => setShowDrawer(true)}
                  bgColor='blue300'
                  textColor='gray950'
                  title='Menu'
                />
              )}
            </div>
          </div>
        </div>
      </nav>
      <div className='relative md:hidden'>
        <SideBar showDrawer={showDrawer} onLink={() => setShowDrawer(false)} />
      </div>
    </div>
  )
}
