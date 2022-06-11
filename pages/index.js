
import Hero from '@/components/Hero'
//  blogslug
import Layout from '@/components/Layout'
import NewsletterForm from '@/components/NewsletterForm'
import Post from '@/components/Post'
import { getPosts } from '@/lib/posts'
import Link from 'next/link'


export default function HomePage({ posts }) {
  return (
    <>
      <Hero />
      <NewsletterForm />
      <div className='h-5'>
        <script async data-uid="cb203ab160" src="https://successful-producer-6718.ck.page/cb203ab160/index.js"></script>

      </div>

      <Layout>
        <h1 className='text-5xl border-b-4  p-5 font-semibold'>Senaste Lekar</h1>

        <div className='grid md:grid-cols-2  lg:grid-cols-3 md:gap-5'>
          {posts.map((post, index) => (
            <Post key={index} post={post} />
          ))}
        </div>
        {/* blogslug */}
        <Link href='/lek'>
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