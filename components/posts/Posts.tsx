import Link from 'next/link'
import React from 'react'
import {urlFor} from "../../sanity"
import Post from '../../typings/typings'



interface props {
  posts:[Post]
}

const Posts:React.FC <props>= ({posts}) => {
  return (
    <div className='grid sm:grid-cols-2 md:grid-cols-4 grid-cols-1 md:gap-5 gap-3 p-2 md:p-6 max-w-7xl mx-auto'>
      {
        posts.map(post=>{
          return(
            <Link href={`/post/${post.slug.current}`} passHref key={post._id}>
                <div className='group border rounded-xl shadow-2xl'>
                  <img 
                  src={urlFor(post.mainImage.asset).url()!} 
                  alt="imag" 
                    className='h-60 object-cover group-hover:scale-105 transition-transform ease-in-out duration-200 rounded-t-xl'
                  />
                  <div className="langauge p-5">
                    <span className=''>
                      {post.language}
                    </span>
                  </div>
                 <div className='flex justify-between p-5 bg-white'>
                     <div>
                         <h3 className='text-lg font-bold'>{post.title}</h3>
                         <p>{post.description} by {post.author.name}</p>
                     </div>
                     <img src={urlFor(post.author.image).url()} alt="img"  className='w-12 h-12 rounded-full'/>
                 </div>
                </div>
            </Link>
          )
        })
      }
    </div>
  )
}

export default Posts