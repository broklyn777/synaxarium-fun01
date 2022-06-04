import CategoryList from '@/components/CategoryList'
import CategoryListSm from '@/components/CategoryListSm'
import Layout from '@/components/Layout'
import Pagination from '@/components/Pagination'
import Post from '@/components/Post'
import { POSTS_PER_PAGE } from '@/config/index'
import { getPosts } from '@/lib/posts'
import fs from 'fs'
import path from 'path'

export default function BlogPage({ posts, numPages, currentPage, categories }) {
  return (

    //  ********* /blogga *********

    <Layout>

      <div className='flex flex-col-reverse justify-between -mt-10 md:flex-row'>
        <div className='md:w-3/4 md:mr-10'>
          <h1 className='hidden md:block text-5xl text-primary-500 border-b-4 p-5 font-semibold'>Alla lekar</h1>


          {/* ändrat från md:grid-cols-2   */}
          <div className='md:grid md:grid-cols-2 xl:grid-cols-3 gap-5'>
            {posts.map((post, index) => (
              <Post key={index} post={post} />
            ))}
          </div>

          <Pagination currentPage={currentPage} numPages={numPages} />
        </div>

        <div className='hidden md:block w-full md:w-1/4'>
          <CategoryList categories={categories} />
        </div>

        <div className=' md:hidden  w-full'>
          <CategoryListSm categories={categories} />
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts'))

  const numPages = Math.ceil(files.length / POSTS_PER_PAGE)

  let paths = []

  for (let i = 1; i <= numPages; i++) {
    paths.push({
      params: { page_index: i.toString() },
    })
  }

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const page = parseInt((params && params.page_index) || 1)

  const files = fs.readdirSync(path.join('posts'))

  const posts = getPosts()

  // Get categories for sidebar
  const categories = posts.map((post) => post.frontmatter.category)
  const uniqueCategories = [...new Set(categories)]

  const numPages = Math.ceil(files.length / POSTS_PER_PAGE)
  const pageIndex = page - 1
  const orderedPosts = posts.slice(
    pageIndex * POSTS_PER_PAGE,
    (pageIndex + 1) * POSTS_PER_PAGE
  )

  return {
    props: {
      posts: orderedPosts,
      numPages,
      currentPage: page,
      categories: uniqueCategories,
    },
  }
}
