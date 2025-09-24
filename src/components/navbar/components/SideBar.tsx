import { useRouter } from 'next/navigation'

import ButtonSkewed from '@/components/UI/buttons/ButtonSkewed'
import NavLinks from './NavLinks'

type Props = {
  showDrawer: boolean
  onLink: () => void
}

export default function SideBar({ showDrawer, onLink }: Props) {
  const router = useRouter()
  return (
    <aside
      className={`absolute left-0 flex h-[calc(100vh-70px)] flex-col justify-between overflow-hidden bg-[#000000D9] pb-20 transition-all sm:h-[calc(100vh-80px)] ${
        showDrawer ? 'w-full' : 'w-0'
      }`}
    >
      <NavLinks onLink={onLink} />
      <div className='mx-auto mb-5 w-3/5'>
        <ButtonSkewed
          bgColor='blue300'
          textColor='gray950'
          title='Get in touch'
          onClick={() => {
            window.location.href = 'tel:+989126786785'
          }}
        />
      </div>
    </aside>
  )
}
