import Link from 'next/link'
import React from 'react'
import {urlFor} from "../../sanity"
import Post from '../../typings'



interface props {
  posts:[Post]
}

const Posts:React.FC <props>= ({posts}) => {
  return (
    <div className='grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 md:gap-5 gap-3 p-2 md:p-6'>
      {
        posts.map(post=>{
          return(
            <Link href={`/post/${post.slug.current}`} passHref key={post._id}>
                <div>
                  <img src={urlFor(post.mainImage.asset).url()!} alt="imag" 
                    className='max-w-xl w-f'
                  />
                 <div className='flex justify-between p-5 bg-white'>
                     <div>
                         <h3>{post.title}</h3>
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