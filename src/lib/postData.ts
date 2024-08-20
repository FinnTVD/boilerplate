import {env} from 'process'

type Request = {
  api: string
  body: any
  headers?: any
}

export default async function postData(request: Request) {
  try {
    const res = await fetch(`${env.API}${request.api}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...request.headers,
      },
      body: request.body,
    })

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      // throw new Error('Failed to fetch data')
      return res.json()
    }

    return res.json()
  } catch (error: unknown) {
    // Convert the error to a string or handle based on its type
    const errorMessage = error instanceof Error ? error.message : String(error)
    throw new Error(`${env.API}${request.api}: ${errorMessage}`)
  }
}
