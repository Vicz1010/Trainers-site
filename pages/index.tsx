import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div className="relative h-screen  lg:h-[140vh] py-5">
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <Header />
        <h1 className="text-6xl font-bold py-3">
          Sneakers
        </h1>
      </main>

    </div>
  )
}

export default Home
