import Layout from '@/components/Layout'
import Post from '@/components/Post'
import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'

export default function CategoryBlogPage2({ posts2, categoryName, categories }) {
  // console.log(categories)
  return (
    <Layout>
      <div className='flex justify-between'>

        <div className='   md:w-3/4 md:mr-10'>
          <div className='  md:hidden  w-full'>

          </div>
          <h1 className='text-5xl  border-b-4 p-5 font-semibold'>
            {/* slash deleted */}
            <span className='text-gray-800' >{categoryName}
              {/* /artiklar om  <span className='text-primary-500' >{categoryName} */}
            </span>
          </h1>

          <div className='grid md:grid-cols-2  gap-5'>
            {posts2.map((post, index) => (
              <Post key={index} post={post} />
            ))}
          </div>
        </div>

        <div className='hidden md:block md:w-1/4'>

        </div>
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts2'))

  const categories = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join('posts2', filename),
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

  const files = fs.readdirSync(path.join('posts2'))

  const posts2 = getposts2()

  // Get categories for sidebar
  const categories = posts2.map((post) => post.frontmatter.category)
  const uniqueCategories = [...new Set(categories)]

  // Filter posts2 by category
  const categoryposts2 = posts2.filter(
    (post) => post.frontmatter.category.toLowerCase() === category_name
  )

  return {
    props: {
      posts2: categoryposts2,
      categoryName: category_name,
      categories: uniqueCategories,
    },
  }
}
// tolowercase