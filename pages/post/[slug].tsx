import { GetStaticProps, NextPage } from 'next'
import React from 'react'
import PortableText from "react-portable-text"
import Form from '../../components/comments/Form'
import { sanityClient, urlFor } from '../../sanity'
import Post from '../../typings'

interface props{
  post:Post
}

const Slug:NextPage<props> = ({post}) => {
  console.log(post);
  console.log(post.body);
  return (
    <div className='p-4'>
          <main>
          <img 
            src={urlFor(post.mainImage.asset).url()!} 
            alt="imag" 
              className='h-60 object-cover  w-full group-hover:scale-105 transition-transform ease-in-out duration-200 border'
            />
            <article className='max-w-5xl mx-auto'> 
                  <h3 className='text-lg font-bold'>{post.title}</h3>
                  <p>{post.description} by {post.author.name}</p>
                <div className="div flex items-center space-x-3">
                   <img src={urlFor(post.author.image).url()} alt="img"  className='w-12 h-12 rounded-full'/>
                   <p>
                     blog post by <span className='text-yellow-500'> {post.author.name}</span> publish-at {" "}{new Date(post.publishedAt).toLocaleDateString()}
                   </p>
                </div>
                <PortableText
                     className='mt-7 img'
                     dataset={"production"}
                     projectId="c3lbf9qu"
                     content={post.body}
                     serializers={{
                      div:(props:any)=>{
                        return <div className='mt-60'>{props.children}</div>
                      },
                      h1: (props:any) => <h1 style={{ color: "red" }} {...props} />,
                      li: ({ children }:any) => <li className="special-list-item">{children}</li>
                        }
                     }
                />
            </article>
            <hr className='max-w-6xl mx-auto border border-green my-5'/>
            <Form postId={post._id}/>
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
        body,
        publishedAt,
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
        revalidate: 1,
      }
}