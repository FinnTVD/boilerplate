'use server'

import {signIn} from '@/auth'
import {revalidatePath} from 'next/cache'

type Values = {
  phone: string
  password: string
  redirectTo?: string
}

export const loginForm = async (values: Values) => {
  await signIn('credentials', {
    phone: values.phone,
    password: values.password,
    redirectTo: values.redirectTo,
  })
  revalidatePath('/')
}
