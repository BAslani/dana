'use client'

import Link from 'next/link'
import React from 'react'

type Props = {
  title: string
  href: string
  onClick?: () => void // optional callback (for closing drawer)
}

export default function NavLink({ title, href, onClick }: Props) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    try {
      // Build a full URL from the href (works for "#id", "/#id", "/other#id")
      const url = new URL(href, window.location.href)
      const hash = url.hash // includes leading '#', or empty string
      const isSamePath = url.pathname === window.location.pathname

      if (hash && isSamePath) {
        // SAME-PAGE anchor -> perform smooth scroll with header offset
        e.preventDefault()

        const id = hash.replace('#', '')
        const target = document.getElementById(id)
        if (!target) {
          // fallback: set hash so browser handles it
          window.location.hash = hash
          onClick?.()
          return
        }

        // measure header (dynamic height)
        const header = document.getElementById('site-header')
        const headerHeight = header ? header.getBoundingClientRect().height : 0

        // compute final scroll position (small extra gap: 8px)
        const targetY =
          target.getBoundingClientRect().top + window.scrollY - headerHeight - 8

        window.scrollTo({ top: targetY, behavior: 'smooth' })

        // update the URL hash without jumping
        window.history.pushState(null, '', hash)

        // accessibility: focus the target so keyboard/screen-reader users know where we are
        try {
          target.setAttribute('tabindex', '-1')
          ;(target as HTMLElement).focus({ preventScroll: true })
        } catch {
          // ignore focus failures on older browsers
        }

        onClick?.()
      } else {
        // Not a same-page hash: allow Next.js Link to handle navigation normally
        // (do not preventDefault)
        onClick?.()
      }
    } catch {
      // If URL parsing fails, just let Link act normally
      onClick?.()
    }
  }

  return (
    <Link
      href={href}
      onClick={handleClick}
      className='transition-all duration-300 hover:text-blue-300 text-white'
    >
      {title}
    </Link>
  )
}
