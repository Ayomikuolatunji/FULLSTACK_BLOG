import Link from 'next/link'
import React from 'react'
import Post from '../../typings'



interface props {
  posts:[Post]
}

const Posts:React.FC <props>= ({posts}) => {
  return (
    <div>
      {
        posts.map(post=>{
          return(
            <Link href={`/post/${post.slug.current}`} passHref>
              <h1>{post.title}</h1>
              <p>{post.description}</p>
            </Link>
          )
        })
      }
    </div>
  )
}

export default Posts