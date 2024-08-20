import {cn} from '@/lib/utils'
import Link from 'next/link'

export default function ButtonCustom({
  href,
  className = '',
  title,
  ...props
}: {
  href: string
  className?: string
  title: string
}) {
  return (
    <Link
      href={href}
      {...props}
      className={cn(
        'w-fit h-[2.73rem] border-[0.9px] border-black/30 flex justify-center items-center px-[1.34rem] relative before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-[calc(100%-0.56rem)] before:h-[calc(100%+0.56rem)] before:border-[0.9px] before:border-black/30 group before:hover:w-full before:hover:h-full transition-all duration-700 hover:border-transparent before:transition-all before:duration-700',
        className,
      )}
    >
      {title}
      <ICArrowBtn />
    </Link>
  )
}

const ICArrowBtn = () => {
  return (
    <div className='relative w-[1rem] h-full flex justify-center items-center overflow-hidden ml-[1rem]'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='4'
        height='7'
        viewBox='0 0 4 7'
        fill='none'
        className='w-[1rem] h-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:translate-x-[1.5rem] transition-all duration-500'
      >
        <path
          d='M1.10747 2.51575L2.48515 3.61789L1.10747 4.72004L1.63176 3.88118L1.79631 3.61789L1.63176 3.35461L1.10747 2.51575Z'
          fill='black'
          stroke='black'
          strokeWidth='0.4'
        />
      </svg>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='4'
        height='7'
        viewBox='0 0 4 7'
        fill='none'
        className='w-[1rem] h-auto absolute top-1/2 left-1/2 -translate-x-[1.5rem] -translate-y-1/2 group-hover:-translate-x-1/2 transition-all duration-500'
      >
        <path
          d='M1.10747 2.51575L2.48515 3.61789L1.10747 4.72004L1.63176 3.88118L1.79631 3.61789L1.63176 3.35461L1.10747 2.51575Z'
          fill='black'
          stroke='black'
          strokeWidth='0.4'
        />
      </svg>
    </div>
  )
}
