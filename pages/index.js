import Head from 'next/head';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Max M.B.</title>
        <meta name="description" content="portfolio maxmb" />
        <link rel="icon" href="/caneca.ico" />
      </Head>

      <Navbar />
    </div>
  )
}
