import Head from 'next/head';
import Navbar from '../components/Navbar';
import HomePage from './homePage';
import Stack from './stack';
import Projetos from './projetos';
import Contato from './contato';
import Footer from "../components/Footer";

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
      <Stack />
      <Projetos />
      <Contato />
      <Footer />
    </div>
  )
}
