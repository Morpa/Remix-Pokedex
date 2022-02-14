import nProgressUrl from 'nprogress/nprogress.css'
import {
  Links,
  LinksFunction,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from 'remix'
import type { MetaFunction } from 'remix'

import { useNProgress } from './hooks/use-nprogress'

import globalStyle from '~/styles/global.css'
import typeStyle from '~/styles/type-colors.css'

export const meta: MetaFunction = () => {
  return { title: 'Pokedex' }
}

export const links: LinksFunction = () => [
  { href: 'https://fonts.googleapis.com', rel: 'preconnect' },
  {
    href: 'https://fonts.gstatic.com',
    rel: 'preconnect',
    crossOrigin: 'anonymous'
  },
  {
    href: 'https://fonts.gstatic.com',
    rel: 'preconnect',
    crossOrigin: 'anonymous'
  },
  {
    href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=VT323&display=swap',
    rel: 'stylesheet'
  },
  { rel: 'stylesheet', href: nProgressUrl },
  { href: globalStyle, rel: 'stylesheet' },
  { href: typeStyle, rel: 'stylesheet' }
]

export default function App() {
  useNProgress()

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  )
}
