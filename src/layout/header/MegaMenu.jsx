import ICX from '@/components/icons/ICX'
import {cn} from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
export default function MegaMenu({isHover, setIsHover}) {
  return (
    <div
      onMouseMove={() => isHover && setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className={cn(
        'absolute top-0 left-0 w-full h-0 opacity-0 origin-top pointer-events-none bg-background overflow-hidden transition-all duration-700 ease-in-out [&.active]:opacity-100 [&.active]:h-[87.918vh] [&.active]:pointer-events-auto z-[1]',
        isHover && 'active',
      )}
    >
      <div className='container h-full relative pt-[8.131rem] flex flex-col justify-between z-[5] pb-[3.62rem]'>
        <ICX className='absolute top-[-1rem] right-0 size-[1.5rem] cursor-pointer active:scale-90 transition-all duration-100' />
        <div>
          <h2 className='font-beautique text-[4rem] text-[#323232] font-normal leading-[1.1] tracking-[0.08rem]'>
            COLLECTION
          </h2>
          <ul className='grid grid-cols-2 w-[34.44rem] gap-y-[1rem] mt-[4.7rem]'>
            {Array(10)
              .fill(0)
              .map((item, index) => (
                <li key={index}>
                  <Link
                    href={'/'}
                    className='h-[2rem] flex items-center text-[#929292] text-[1rem] font-medium font-karla leading-[1.2] tracking-[0.01rem] relative before:absolute before:bottom-0 before:left-1/2 before:h-[1px] before:bg-primary before:w-0 before:transition-all before:duration-300 before:origin-center before:hover:w-full before:-translate-x-1/2 duration-300 transition-all w-fit'
                  >
                    Dress {index + 1}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
        <div className='flex space-x-[2.69rem]'>
          <div className='w-[23.6875rem] font-karla text-[#120D03] text-[0.75rem] leading-[1.33] tracking-[0.04063rem] uppercase'>
            <span className='font-bold'>SHOWROOM</span>
            <Link
              className='font-normal block'
              href='/'
            >
              47A Jalan Sutera Tanjung 8/2, Taman Sutera 81300. Johor Bahru.
              Malaysia
            </Link>
          </div>
          <div className='w-[23.6875rem] font-karla text-[#120D03] text-[0.75rem] leading-[1.33] tracking-[0.04063rem] uppercase'>
            <span className='font-bold'>Mail</span>
            <Link
              className='font-normal block'
              href='mailto: jewelra.sdn.bhd@gmail.com'
            >
              jewelra.sdn.bhd@gmail.com
            </Link>
          </div>
        </div>
      </div>
      <Image
        className='absolute bottom-0 left-0 w-[27.0642rem] h-[27.4375rem] object-cover pointer-events-none z-[1]'
        src={'/images/layout/header/logo-shadow.png'}
        alt='logo shadow'
        width={864}
        height={878}
      />
    </div>
  )
}
