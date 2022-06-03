import type { NextPage } from 'next'
import Head from 'next/head'
import Hero from '../components/home/Hero'
import {sanityClient,urlFor} from "../sanity"
import Post from '../typings'

interface props {
  posts:[Post]
}

const Home: NextPage<props> = (props) => {

   console.log(props.posts)
  return (
    <div>
      <Head>
        <title>Ayoscript Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero/>
    </div>
  )
}

export default Home



export const getServerSideProps=async()=>{
  const query= `*[_type=="post"]{
    _id,
    title,
    description,
    slug,
    mainImage,
    slug,
    author ->{
    name,
    image
   }
  }  

  `
  const res=await sanityClient.fetch(query)

  return{
    props:{
      posts:res
    }
  }
}