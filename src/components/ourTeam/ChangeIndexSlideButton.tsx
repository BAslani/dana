import classNames from 'classnames'
import Image from 'next/image'
import React from 'react'

type Props = {
  onActiveTab: () => void
  direction: 'right' | 'left'
  studio?: string
}

export default function ChangeIndexSlideButton({
  onActiveTab,
  direction,
  studio,
}: Props) {
  return (
    <button
      onClick={onActiveTab}
      className={classNames(
        'p-2 hidden shrink-0 transition-all',
        direction === 'right' ? 'rotate-180' : 'rotate-0',
        studio
          ? {
              'hover:bg-blue-700': studio === 'venture',
              'hover:bg-green-700': studio === 'tech',
              'hover:bg-yellow-700': studio === 'media',
            }
          : 'hover:bg-blue-700'
      )}
    >
      <Image
        alt='arrow icon'
        src={'/svg/small-arrow.svg'}
        width={40}
        height={40}
      />
    </button>
  )
}
