import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>merp</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="merp" />
        <p className="description">
          dont ask why i registered <code>merp.ga</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
