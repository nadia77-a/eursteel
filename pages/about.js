import Head from 'next/head'
import Header from '../components/Header'

export default function About() {
  return (
    <>
      <Head>
        <title>Our About | My Construction Website</title>
      </Head>
      <Header />
      <h1>Our About</h1>
      <ul>
        <li>Service 1</li>
        <li>Service 2</li>
        <li>Service 3</li>
      </ul>
    </>
  )
}
