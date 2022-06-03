import { GetStaticProps, NextPage } from 'next'
import React from 'react'
import { sanityClient } from '../../sanity'
import Post from '../../typings'

interface props{
  post:Post
}

const Slug:NextPage<props> = ({post}) => {
  console.log(post);
  return (
    <div>
          <main>

          </main>
    </div>
  )
}

export default Slug


export const getStaticPaths=async()=>{
    const query= `*[_type=="post"]{
        _id,
        slug {
          current
        }
      }  
      `
      const posts=await sanityClient.fetch(query)
       const paths=posts.map((post:Post)=>({
        params:{
          slug:post.slug.current
      }
       }))
      return{
         paths,
         fallback: 'blocking'
      }
}


export const getStaticProps:GetStaticProps = async ({params}) => {

      const query = `*[_type == "post" && slug.current == $slug][0]{
        _id,
        title,
        description,
        slug,
        mainImage,
        author ->{
        name,
        image
      }
      }`
      const post = await sanityClient.fetch(query,{
        slug:params?.slug
      })
      if(!post){
          return {
            notFound:true
          }
      }
      return {
        props: {
          post,
        },
      }
}