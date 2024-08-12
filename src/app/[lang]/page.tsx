import getDictionary from '../dictionaries'

export default async function Home({searchParams, params}: any) {
  const t = await getDictionary(params.lang)
  const {viewport} = searchParams
  const {lang} = params
  return (
    <main className='flex justify-center h-screen w-full items-center flex-col'>
      <div>Viewport:{viewport} </div>
      <div>Lang:{lang} </div>
      <div className='container bg-black'>
        <h1 className='text-[2rem] text-white text-center tablet:text-red-500'>
          {t.hello}
        </h1>
      </div>
    </main>
  )
}
