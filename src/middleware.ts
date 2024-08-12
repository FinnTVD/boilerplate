import {NextResponse, userAgent} from 'next/server'
import type {NextRequest} from 'next/server'
const defaultLocale = 'en'
let locales = ['en', 'fr', 'it']

export function middleware(request: NextRequest) {
  const nextUrl = request.nextUrl
  const pathname = nextUrl.pathname

  const {device} = userAgent(request)
  const viewport =
    device.type === 'mobile'
      ? 'mobile'
      : device.type === 'tablet'
      ? 'tablet'
      : 'desktop'
  nextUrl.searchParams.set('viewport', viewport)
  nextUrl.searchParams.set('pathname', pathname)

  if (
    ['/manifest.json', '/favicon.ico', '/robots.txt', '/sitemap.xml'].includes(
      pathname,
    )
  )
    return

  if (
    pathname.startsWith(`/${defaultLocale}/`) ||
    pathname === `/${defaultLocale}`
  ) {
    return NextResponse.redirect(
      new URL(
        pathname.replace(
          `/${defaultLocale}`,
          pathname === `/${defaultLocale}` ? '/' : '',
        ),
        request.url,
      ),
    )
  }

  const pathnameIsMissingLocale = locales.every(
    (locale) =>
      !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
  )

  if (pathnameIsMissingLocale) {
    if (nextUrl.searchParams) {
      const newUrl = new URL(`/${defaultLocale}${pathname}`, request.url)
      newUrl.search = nextUrl.searchParams.toString()
      return NextResponse.rewrite(newUrl)
    }

    return NextResponse.rewrite(
      new URL(`/${defaultLocale}${pathname}`, request.url),
    )
  }
  const newUrl = new URL(`${pathname}`, request.url)
  newUrl.search = nextUrl.searchParams.toString()
  return NextResponse.rewrite(newUrl)
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|images|favicon.ico).*)'],
}
