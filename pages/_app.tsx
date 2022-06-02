import '../styles/globals.css'
import type { AppProps } from 'next/app'
import HeaderWraper from '../layouts/HeaderWraper'

function MyApp({ Component, pageProps }: AppProps) {
  return (
     <HeaderWraper>
        <Component {...pageProps} />
     </HeaderWraper>
  )
}

export default MyApp
