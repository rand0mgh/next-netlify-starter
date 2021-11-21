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
    <blockquote class="twitter-tweet" data-dnt="true"><p lang="en" dir="ltr">Welcome to the 🅱️etaverse. <a href="https://t.co/3MbP8FKXfd">pic.twitter.com/3MbP8FKXfd</a></p>&mdash; Sig! 🔜 MFF, FC, FWA (@sig_serg) <a href="https://twitter.com/sig_serg/status/1455555611719045126?ref_src=twsrc%5Etfw">November 2, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        <p className="description">
          Welcome to the Fetaverse.</code>
        </p>
  </main>

      <Footer />
    </div>
  )
}
