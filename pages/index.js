
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'
import Image from 'next/image'
import Search from '@/components/Search'
import Hero from '@/components/Hero'
import { PageSEO } from '@/components/SEO'

//  blogslug

import Layout from '@/components/Layout'
import Post from '@/components/Post'
import { getPosts } from '@/lib/posts'

export default function HomePage({ posts }) {
  return (
    <>
      <Hero /><Layout>
        <h1 className='text-5xl border-b-4  p-5 font-semibold'>Senaste Lekar</h1>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
          {posts.map((post, index) => (
            <Post key={index} post={post} />
          ))}
        </div>
        {/* blogslug */}
        <Link href='/blogg'>
          <a className='block text-center bg-primary-500 text-white text-2xl font-bold rounded-md py-2 my-5  hover:text-white hover:bg-pink-500  w-full'>
            Alla lekar
          </a>
        </Link>
      </Layout>

    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      posts: getPosts().slice(0, 6),
    },
  }
}