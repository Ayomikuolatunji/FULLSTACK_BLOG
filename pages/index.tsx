import type { NextPage } from 'next'
import Head from 'next/head'
import Hero from '../components/home/Hero'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Ayoscript Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero/>
    </div>
  )
}

export default Home
