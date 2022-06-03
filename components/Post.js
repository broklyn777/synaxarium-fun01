
import Image from 'next/image'
import Link from 'next/link'
import CategoryLabel from './CategoryLabel'

export default function Post({ post, compact }) {
  return (

    //  blogslug
    // ändrat bg-white
    <Link href={`/blogg/${post.slug}`} passHref>
      <div className='w-full  bg-gray-100 rounded-lg cursor-pointer shadow-md mt-6'>
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

        <div className="pb-3 px-1" >
          <div className='flex justify-between items-center tracking-tight'>

            <CategoryLabel>{post.frontmatter.category}</CategoryLabel>
          </div>



          <div className='mt-2'>

            <a className='text-lg text-gray-700 font-semibold hover:underline decoration-primary-500'>
              {post.frontmatter.title}
            </a>

            <p className=' leading-[18px] font-extralight text-gray-600'>{post.frontmatter.description}</p>
          </div>

        </div>
      </div>
    </Link>

  )
}
