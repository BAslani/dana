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
      className='font-railway md:text-body-L-2 lg:text-body-XL-2 transition-all duration-300 hover:text-blue-300'
    >
      {title}
    </Link>
  )
}
