import React from 'react'
import { sanityClient } from '../../sanity'

const Slug = () => {
  return (
    <div>
          <main>

          </main>
    </div>
  )
}

export default Slug


export const getStaticProps=async()=>{
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