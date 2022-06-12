import Layout from '@/components/Layout'
import Pagination from '@/components/Pagination'
import Post from '@/components/Post'
import SectionContainer from '@/components/SectionContainer'
import { posts2_PER_PAGE } from '@/config/index'
import { getposts2 } from '@/lib/posts2'
import fs from 'fs'
import path from 'path'

export default function BlogPage2({ posts2, title, description, numPages, currentPage, categories }) {
  // console.log(posts2)
  return (

    //  ********* /blogga *********


    <>

      <SectionContainer>
        <Layout>

          <div className='flex flex-col-reverse justify-between -mt-10 md:flex-row'>
            <div className='md:w-3/4 md:mr-10'>
              {/* <h1 className=' hidden md:block text-5xl text-gray-500 border-b-4 p-5 font-semibold'>Alla lekar</h1> */}


              {/* ändrat från md:grid-cols-2   */}
              <div className='md:grid md:grid-cols-2 xl:grid-cols-3 gap-5'>
                {posts2.map((post, index) => (
                  <Post key={index} post={post} />
                ))}
              </div>

              <Pagination currentPage={currentPage} numPages={numPages} />
            </div>




          </div>
        </Layout>
      </SectionContainer>
    </>
  )
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts2'))

  const numPages = Math.ceil(files.length / posts2_PER_PAGE)

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

  const files = fs.readdirSync(path.join('posts2'))

  const posts2 = getposts2()

  // Get categories for sidebar
  const categories = posts2.map((post) => post.frontmatter.category)
  const uniqueCategories = [...new Set(categories)]

  const numPages = Math.ceil(files.length / posts2_PER_PAGE)
  const pageIndex = page - 1
  const orderedposts2 = posts2.slice(
    pageIndex * posts2_PER_PAGE,
    (pageIndex + 1) * posts2_PER_PAGE
  )

  return {
    props: {
      posts2: orderedposts2,
      numPages,
      currentPage: page,
      categories: uniqueCategories,
    },
  }
}
