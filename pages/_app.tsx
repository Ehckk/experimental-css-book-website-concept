import type { AppProps } from 'next/app'
import Layout from '../components/layout'
import '../styles/globals.css'
import { AppWrapper } from '../context/state'

function App({ Component, pageProps: { ...pageProps } }: AppProps) {
  return (
    <AppWrapper>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppWrapper>
  )
}

export default App
