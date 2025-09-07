import { usePathname } from 'next/navigation'

import { navLinkList } from '../data/navData'
import NavLink from './NavLink'

type Props = {
  onLink: () => void
}

export default function NavLinks({ onLink }: Props) {
  const pathName = usePathname()

  return (
    <ul className='flex flex-col gap-12 px-6 pt-10 sm:px-20 md:flex-row md:md:gap-6 md:px-0 md:pt-0 md:lg:gap-10'>
      {navLinkList.map((link, index) => {
        return (
          <li key={index}>
            <NavLink
              onLink={onLink}
              href={link.href}
              selected={pathName === link.slug}
              title={link.title}
            />
          </li>
        )
      })}
    </ul>
  )
}
