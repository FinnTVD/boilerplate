import {headers} from 'next/headers'
export default async function layout({
  children,
  params,
}: {
  children: React.ReactNode
  params: {lang: string}
}) {
  console.log('🚀 ~ lang:', params.lang)

  return (
    <>
      {/* <div className='h-[500px] bg-green-300'></div> */}
      {children}
      <div className='h-[500px] bg-red-400'>slide</div>
    </>
  )
}
