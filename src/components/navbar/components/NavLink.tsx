import Link from 'next/link'

type Props = {
  title: string
  href: string
  onLink?: () => void
}

export default function NavLink({ title, href, onLink }: Props) {
  return (
    <Link
      scroll={false}
      href={href}
      onClick={onLink}
      className='transition-all duration-300 hover:text-blue-300 text-white'
    >
      {title}
    </Link>
  )
}
