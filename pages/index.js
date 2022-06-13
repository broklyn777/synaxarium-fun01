
import Card2 from '@/components/Card2'
import Form03 from '@/components/form03'
import Hero from '@/components/Hero'
//  blogslug
import Layout from '@/components/Layout'
import Post from '@/components/Post'
import projectsDataP from '@/data/projectsDataP'
import { getPosts } from '@/lib/posts'
import Link from 'next/link'


export default function HomePage({ posts }) {
  return (
    <>
      <Hero />
      <div className="flex items-center justify-center pt-4">
        <Form03 />
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
        <Link href='/static/roliglek/pyssel/paper-doll-chain-sjojungfrur.pdf'>
          <a target="_blank" rel="noopener noreferrer" className='block text-center bg-pink-500 text-white text-2xl font-bold rounded-md py-2 my-5  hover:text-white hover:bg-sky-500  w-full'>
            Veckans PDF
          </a>
        </Link>
        <h1 className='text-5xl border-b-4  p-5 font-semibold'>Senaste pyssel</h1>

        <div className=" grid md:grid-cols-2  lg:grid-cols-3 md:gap-5">
          {projectsDataP.map((d) => (
            <Card2
              key={d.title}
              title={d.title}
              description={d.description}
              imgSrc={d.imgSrc}
              href={d.href}
            />
          ))}
        </div>
        {/* <div className='container mx-auto grid md:grid-cols-2 w-full lg:grid-cols-3 md:gap-5'>
          <CardPyssel />

        </div> */}

        {/* <CardTest /> */}
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