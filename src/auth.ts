import NextAuth from 'next-auth'
// import Google from 'next-auth/providers/google'
import Credentials from 'next-auth/providers/credentials'
// import postData from './lib/postData'
import {callbackUrl} from './lib/constants'
import postData from './lib/postData'
import {ZodError} from 'zod'
import {env} from './lib/environment'

export const {
  handlers: {GET, POST},
  auth,
  signIn,
  signOut,
} = NextAuth({
  pages: {
    signIn: callbackUrl,
  },
  callbacks: {
    async jwt({token, user, trigger, session}) {
      // if (trigger === 'update') {
      //   return {...token, ...session.user}
      // }
      return {...token, ...user}
    },
    async session({session, token}) {
      session.user = token as any
      return session
    },
  },
  session: {
    strategy: 'jwt',
  },
  providers: [
    // Google({
    //   clientId: process.env.GOOGLE_CLIENT_ID,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    // }),
    // Facebook({
    //   clientId: process.env.FACEBOOK_CLIENT_ID,
    //   clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    // }),
    Credentials({
      name: 'Credentials',
      credentials: {
        phone: {},
        password: {},
      },
      authorize: async (credentials) => {
        try {
          const request = {
            api: '/custom/v1/customer/loginCustomer',
            body: JSON.stringify({
              phone: credentials?.phone,
              password: credentials?.password,
              type: 'phone',
            }),
          }
          const res = await postData(request)
          console.log('🚀 ~ authorize: ~ res:', res)
          if (res?.user_id) {
            return {
              ...res,
              user: {
                user_id: res?.user_id,
                avatar: res?.avatar,
                picture_profile: res?.picture_profile,
                display_name: res?.display_name,
                first_name: res?.first_name,
                last_name: res?.last_name,
                user_email: res?.user_email,
                user_registered: res?.user_registered,
                user_login: res?.user_login,
              },
            }
          }
          return null
        } catch (error) {
          if (error instanceof ZodError) {
            // Return `null` to indicate that the credentials are invalid
            return null
          }
        }
      },
    }),
  ],
  secret: env.AUTH_SECRET,
})
