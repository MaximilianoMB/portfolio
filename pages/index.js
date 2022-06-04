import Head from 'next/head';
import Navbar from '../components/Navbar';
import HomePage from './homePage';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Max M.B.</title>
        <meta name="description" content="portfolio maxmb" />
        <link rel="icon" href="/caneca.ico" />
      </Head>

      <Navbar />
      <HomePage />
    </div>
  )
}
