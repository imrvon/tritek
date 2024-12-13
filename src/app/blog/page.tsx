import React from 'react'
import Header from '../components/Header/Header'
import Hero from './components/Hero/Hero'
import PostsBody from './components/PostsBody/PostsBody'
export default function blog() {
  return (
    <div>
      <Header />
      <Hero />  
      <PostsBody />
    </div>
  )
}
