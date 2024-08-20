'use client'

import {loginForm} from '@/actions/loginForm'
import {logoutForm} from '@/actions/logoutForm'
import {callbackUrl} from '@/lib/constants'
import Link from 'next/link'

export default function Login({session}: {session: any}) {
  function handleSignIn() {
    loginForm({
      phone: '0824482956',
      password: 'Duc123!@#',
      redirectTo: callbackUrl,
    })
  }

  function handleSignOut() {
    logoutForm()
  }
  return (
    <div className='flex justify-center'>
      <div className='flex flex-col gap-[1rem]'>
        <button
          onClick={handleSignIn}
          className='w-[10rem h-[2.5rem] flex justify-center items-center rounded-lg'
        >
          SignIn
        </button>
        <button
          onClick={handleSignOut}
          className='w-[10rem h-[2.5rem] flex justify-center items-center rounded-lg'
        >
          SignOut
        </button>
        <div>
          <Link href='/'>Home</Link>
          <Link href='/products'>Products</Link>
        </div>
      </div>
    </div>
  )
}
