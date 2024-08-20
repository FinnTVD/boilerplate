'use client'
import {useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Logo from './Logo'
import MegaMenu from './MegaMenu'

import {cn} from '@/lib/utils'

export default function Header() {
  const [isHover, setIsHover] = useState(false)
  return (
    <header className='fixed top-0 left-0 z-20 w-full h-[4.125rem] bg-transparent flex justify-center items-center'>
      <nav
        onMouseMove={() => isHover && setIsHover(true)}
        className='relative container flex justify-between items-center z-[2]'
      >
        <Logo isHover={isHover} />
        <ul
          className={cn(
            'flex justify-center items-center space-x-[1.45rem] [&.active_li_a]:!text-primary *:h-fit',
            isHover && 'active',
          )}
        >
          <li>
            <Link
              onMouseMove={() => setIsHover(true)}
              href={'/'}
              className='text-white text-[0.875rem] font-medium leading-[1.2] tracking-[-0.014rem] uppercase transition-all duration-200 h-[1.5rem] flex items-center'
            >
              COLLECTION
            </Link>
          </li>
          <li
            className={cn(
              'relative before:absolute before:bottom-0 before:left-1/2 before:h-[1px] before:bg-white before:w-0 before:transition-all before:duration-300 before:origin-center before:hover:w-full before:-translate-x-1/2 duration-300 transition-all [&.active]:before:bg-primary',
              isHover && 'active',
            )}
          >
            <Link
              onMouseMove={() => isHover && setIsHover(true)}
              href={'/'}
              className='text-white text-[0.875rem] font-medium leading-[1.2] tracking-[-0.014rem] uppercase transition-all duration-200 h-[1.5rem] flex items-center'
            >
              BEST SELLER
            </Link>
          </li>
          <li>
            <Link
              onMouseMove={() => setIsHover(true)}
              href={'/'}
              className='text-white text-[0.875rem] font-medium leading-[1.2] tracking-[-0.014rem] uppercase transition-all duration-200 h-[1.5rem] flex items-center'
            >
              READY TO WEAR
            </Link>
          </li>
        </ul>
        <div className='flex items-center'>
          <ul
            className={cn(
              'flex justify-center items-center space-x-[1.45rem] [&.active_li_a]:!text-primary',
              isHover && 'active',
            )}
          >
            <li>
              <Link
                onMouseMove={() => setIsHover(true)}
                href={'/'}
                className='text-white text-[0.875rem] font-medium leading-[1.2] tracking-[-0.014rem] uppercase transition-all duration-200 h-[1.5rem] flex items-center'
              >
                ABOUT US
              </Link>
            </li>
            <li>
              <Link
                onMouseMove={() => setIsHover(true)}
                href={'/'}
                className='text-white text-[0.875rem] font-medium leading-[1.2] tracking-[-0.014rem] uppercase transition-all duration-200 h-[1.5rem] flex items-center'
              >
                HELP & SUPPORT
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <MegaMenu
        isHover={isHover}
        setIsHover={setIsHover}
      />
      <div
        className={cn(
          'fixed top-[85.3vh] container left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-end z-[5] pointer-events-none h-fit duration-500 transition-all [&.active]:opacity-100 opacity-0 ease-in-out',
          isHover && 'active',
        )}
      >
        <Image
          className='w-[34.8rem] h-[10.5rem] object-contain'
          src={'/images/layout/header/name.png'}
          alt='branch jenho'
          width={1114}
          height={336}
        />
      </div>
    </header>
  )
}
