import type { NextPage } from 'next'
import Head from 'next/head'
import Hero from '../components/home/Hero'
import Posts from '../components/posts/Posts'
import {sanityClient,urlFor} from "../sanity"
import Post from '../typings/typings'

interface props {
  posts:[Post]
}

const Home: NextPage<props> = ({posts}) => {

   console.log(posts)
  return (
    <div>
      <Head>
        <title>Ayoscript Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero/>
      <Posts posts={posts}/>
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
    language,
    slug,
    publishedAt,
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
    },
  }
}