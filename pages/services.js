import Head from 'next/head'
import Header from '../components/Header'

export default function Services() {
  return (
    <>
      <Head>
        <title>Our Services | My Construction Website</title>
      </Head>
      <Header />
      <h1>Our Services</h1>
      <ul>
        <li>Service 1</li>
        <li>Service 2</li>
        <li>Service 3</li>
      </ul>
    </>
  )
}
