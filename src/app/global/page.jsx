import ButtonCustom from '../../components/custom/button/ButtonCustom'

export default function page() {
  return (
    <main className='w-full h-screen flex justify-center items-center'>
      <ButtonCustom
        href={'/'}
        title={'EXPLORE NOW'}
      />
    </main>
  )
}
