import classNames from 'classnames'
import React from 'react'

enum TextColors {
  gray50 = 'text-gray-50',
  gray950 = 'text-gray-950'
}

enum BgColors {
  blue300 = 'bg-blue-300',
  blue950 = 'bg-blue-950'
}

type Props = {
  title: string
  textColor: keyof typeof TextColors
  bgColor: keyof typeof BgColors
  onClick: () => void
}

export default function ButtonSkewed({ title, bgColor, textColor, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className={classNames(
        'transition-all duration-300 hover:bg-blue-400 py-[5px] w-full skew-x-[-30deg]',
        BgColors[bgColor]
      )}
    >
      <p
        className={classNames('text-body-S-2 sm:text-body-L-2 lg:text-body-XL-2 skew-x-[30deg]', TextColors[textColor])}
      >
        {title}
      </p>
    </button>
  )
}
