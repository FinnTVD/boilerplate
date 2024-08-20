import Link from 'next/link'

export default function page({params}) {
  return (
    <div>
      <h1>page:{params.slug}</h1>
      <Link
        scroll={false}
        className='size-[3rem] flex items-center justify-center'
        href='/test/1'
      >
        1
      </Link>
      <Link
        scroll={false}
        className='size-[3rem] flex items-center justify-center'
        href='/test/1/2'
      >
        2
      </Link>
      <Link
        scroll={false}
        className='size-[3rem] flex items-center justify-center'
        href='/test/1/3'
      >
        3
      </Link>
    </div>
  )
}
