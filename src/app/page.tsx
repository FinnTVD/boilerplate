import Login from '@/components/Login'

import {auth} from '@/auth'

export default async function Home({searchParams, params}: any) {
  const {viewport} = searchParams
  const session = await auth()

  return (
    <main>
      <section className='h-screen w-full bg-black'>
        <video
          src='/videos/banner.mp4'
          autoPlay
          loop
          muted
          className='size-full object-fill'
        ></video>
      </section>
      <div className='flex justify-center h-screen bg-white w-full items-center flex-col'>
        <div>Viewport:{viewport} </div>
        <div className='container bg-black'>
          <h1 className='text-[2rem] text-center tablet:text-red-500 text-green-500'></h1>
        </div>
        <Login session={session} />
      </div>
      <div className='h-screen bg-black'></div>
      <div className='h-screen bg-black'></div>
      <div className='h-screen bg-black'></div>
    </main>
  )
}
