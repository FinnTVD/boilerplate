export default function page({params}: {params: {slug: string}}) {
  return <div className='h-[500px] bg-green-300'>banner{params.slug}</div>
}
