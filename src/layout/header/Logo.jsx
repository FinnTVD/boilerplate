import Image from 'next/image'
import Link from 'next/link'

export default function Logo({isHover}) {
  return (
    <Link
      href={'/'}
      className='w-[7.8rem] h-[3.73rem] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
    >
      <Image
        className={`${
          isHover ? 'inset-0 brightness-0' : ''
        } size-full object-contain transition-all duration-500`}
        src={'/images/layout/header/logo.png'}
        alt='logo jenho'
        width={200}
        height={200}
      />
    </Link>
  )
}
