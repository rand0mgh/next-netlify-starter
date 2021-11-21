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
<iframe width="560" height="315" src="https://www.youtube.com/embed/YiVReYMaEoY?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <p className="description">
          Welcome to the Fetaverse.</code>
        </p>
  </main>

      <Footer />
    </div>
  )
}
