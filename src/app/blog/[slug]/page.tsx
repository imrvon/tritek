import React from 'react'
import BlogPost from '../components/BlogPost/BlogPost'
import Header from '../../components/Header/Header'

export default function page({ params }: { params: { slug: string } }) {
  return (
    <div>
      <Header />
      <BlogPost params={{ slug: params.slug }} />
    </div>
  )
}
