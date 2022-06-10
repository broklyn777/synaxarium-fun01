
import Image from 'next/image'
import Link from 'next/link'
import CategoryLabel from './CategoryLabel'

export default function Post({ post, compact }) {
  // console.log(post)
  return (

    //  blogslug
    // ändrat bg-white
    <Link href={`/lek/${post.slug}`} passHref>
      <div className='w-full bg-gray-100 pt-0 border-b-2 border-pink-400 cursor-pointer shadow-md mt-2'>
        {!compact && (

          // ändrat height width 420- 600, fanns ingen objectFit=""
          <Image
            src={post.frontmatter.thumbnailUrl}
            alt=''
            height={250}
            width={500}
            className='mb-4 '
            objectFit="cover"
          />
        )}

        <div className="pb-3 px-1" >
          <div className='flex justify-between items-center tracking-tight'>

            <CategoryLabel>{post.frontmatter.category}</CategoryLabel>
          </div>



          <div className='mt-2'>

            <h2 className='text-xl text-gray-700 pb-1 font-semibold hover:underline decoration-primary-500'>
              {post.frontmatter.title}
            </h2>

            <p className=' leading-[16px]  text-sm font-normal text-gray-500'>{post.frontmatter.description}</p>
          </div>

        </div>
      </div>
    </Link>

  )
}
