import {headers} from 'next/headers'

export default function page() {
  const headersList = headers()
  const userAgent = headersList.get('user-agent')
  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      userAgent,
    )
  return <div>page isMobile:{isMobile}</div>
}
