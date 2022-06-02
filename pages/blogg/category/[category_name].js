import fs from 'fs'
import path from 'path'
import Link from 'next/link'
import Layout from '@/components/Layout'
import Post from '@/components/Post'
import CategoryList from '@/components/CategoryList'
import matter from 'gray-matter'
import { getPosts } from '@/lib/posts'
import CategoryListSm from '@/components/CategoryListSm'

export default function CategoryBlogPage({ posts, categoryName, categories }) {
  return (
    <Layout>
      <div className='flex justify-between'>

        <div className='   md:w-3/4 md:mr-10'>
          <div className='  md:hidden  w-full'>
            <CategoryListSm categories={categories} />
          </div>
          <h1 className='text-5xl  border-b-4 p-5 font-semibold'>
            /<span className='text-gray-800' >{categoryName}
              {/* /artiklar om  <span className='text-primary-500' >{categoryName} */}
            </span>
          </h1>

          <div className='grid md:grid-cols-2  gap-5'>
            {posts.map((post, index) => (
              <Post key={index} post={post} />
            ))}
          </div>
        </div>

        <div className='hidden md:block md:w-1/4'>
          <CategoryList categories={categories} />
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts'))

  const categories = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join('posts', filename),
      'utf-8'
    )

    const { data: frontmatter } = matter(markdownWithMeta)

    return frontmatter.category.toLowerCase()
  })

  const paths = categories.map((category) => ({
    params: { category_name: category },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params: { category_name } }) {
  const files = fs.readdirSync(path.join('posts'))

  const posts = getPosts()

  // Get categories for sidebar
  const categories = posts.map((post) => post.frontmatter.category)
  const uniqueCategories = [...new Set(categories)]

  // Filter posts by category
  const categoryPosts = posts.filter(
    (post) => post.frontmatter.category.toLowerCase() === category_name
  )

  return {
    props: {
      posts: categoryPosts,
      categoryName: category_name,
      categories: uniqueCategories,
    },
  }
}
