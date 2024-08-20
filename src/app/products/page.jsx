import Link from 'next/link'

export default function page() {
  return (
    <>
      <Link
        href='/'
        className='text-[10rem]'
      >
        Home
      </Link>
      <main className='w-full grid grid-cols-4 gap-[1.5rem] h-fit'>
        {Array(12)
          .fill(0)
          .map((item, index) => (
            <div
              className='w-full h-[20rem] bg-gray-500'
              key={index}
            ></div>
          ))}
      </main>
    </>
  )
}
