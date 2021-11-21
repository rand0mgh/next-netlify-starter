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
        <Header title="Welcome to the <code>Fetaverse</code>." />
<blockquote class="twitter-tweet" data-theme="dark"><p lang="und" dir="ltr"><a href="https://t.co/gU5KYTqDpa">https://t.co/gU5KYTqDpa</a> <a href="https://t.co/4G0DGNjrGo">pic.twitter.com/4G0DGNjrGo</a></p>&mdash; Tytolis (@Tytolisss) <a href="https://twitter.com/Tytolisss/status/1455707549194330116?ref_src=twsrc%5Etfw">November 3, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
      </main>

      <Footer />
    </div>
  )
}
