
import Image from 'next/image'
import Link from 'next/link'
import CategoryLabel from './CategoryLabel'

export default function Post({ post, compact }) {
  return (

    //  blogslug
    // ändrat bg-white
    <Link href={`/blogg/${post.slug}`} passHref>
      <div className='w-full px-2 py-2 bg-gray-100 rounded-lg cursor-pointer shadow-md mt-6'>
        {!compact && (

          // ändrat height width 420- 600, fanns ingen objectFit=""
          <Image
            src={post.frontmatter.thumbnailUrl}
            alt=''
            height={250}
            width={500}
            className='mb-4 rounded'
            objectFit="cover"
          />
        )}


        <div className='flex justify-between items-center'>

          <CategoryLabel>{post.frontmatter.category}</CategoryLabel>
        </div>



        <div className='mt-2'>

          <a className='text-lg text-gray-700 font-semibold hover:underline decoration-primary-500'>
            {post.frontmatter.title}
          </a>

          <p className=' leading-[18px] font-thin text-gray-600'>{post.frontmatter.description}</p>
        </div>

        {/* {!compact && (
          <div className='flex justify-between items-center mt-6'>



            <div className='flex items-center'>

              <h3 className='text-gray-700 '>
                {post.frontmatter.author}
              </h3>
            </div>
          </div>
        )} */}
      </div>
    </Link>

  )
}
