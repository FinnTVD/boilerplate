export default function page({params}: {params: {page: string; slug: string}}) {
  console.log('🚀 ~ page ~ params:', params.slug)
  return <div className='h-[500px] bg-green-300'>banner{params.page}</div>
}
