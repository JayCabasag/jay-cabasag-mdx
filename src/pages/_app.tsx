import '../styles/globals.css'
import type { AppProps } from 'next/app'
import MainLayout from '@/layout'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const path = router.asPath

  return (
    <MainLayout path={path}>
      <Component {...pageProps} />
    </MainLayout>
  )
}
