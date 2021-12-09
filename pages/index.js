import Head from 'next/head'
import BodyFirst from '../components/BodyFirst'
import CarouselPosts from '../components/CarouselPosts'
import Header from '../components/Header'
import Suggestion from '../components/Suggestion'
// import FeaturedPosts from '../sections/FeaturedPosts'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Canvas Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Suggestion />
      <CarouselPosts />
      <BodyFirst />
    </div>
  )
}
