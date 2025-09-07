import classNames from 'classnames'
import Link from 'next/link'
import React from 'react'

type Props = {
  title: string
  href: string
  selected: boolean
  onLink: () => void
}

export default function NavLink({ title, selected, href, onLink }: Props) {
  const hoverEffect = {
    venture: 'hover:text-blue-300',
    tech: 'hover:text-green-300',
    media: 'hover:text-yellow-300',
  }
  const selectedColor = {
    venture: 'border-b text-blue-300 border-blue-300',
    tech: 'border-b text-green-300 border-green-300',
    media: 'border-b text-yellow-300 blorder-yellow-300',
  }
  return (
    <Link
      scroll={false}
      href={href}
      onClick={onLink}
      className={classNames(
        'font-railway md:text-body-L-2 lg:text-body-XL-2 transition-all duration-300',
        selected ? selectedColor['venture'] : 'text-gray-50',
        hoverEffect['venture']
      )}
    >
      {title}
    </Link>
  )
}
