
import Image from 'next/image'
import Link from 'next/link'
import CategoryLabel from './CategoryLabel'

export default function Post({ post, compact }) {
  // console.log(post) bra console
  return (
    //  blogslug
    // ändrat bg-white
    <Link href={`/lek/${post.slug}`} passHref legacyBehavior>
      <div className='w-full rounded-md bg-white pt-0 pb-2 border-b-2 cursor-pointer shadow-lg mt-2'>
        {!compact && (

          // ändrat height width 420- 600, fanns ingen objectFit=""
          <Image
            src={post.frontmatter.thumbnailUrl}
            alt=''
            height={300}
            width={500}
            className='mb-4 rounded-t-md'
            objectFit="cover"
          />
        )}

        <div className="px-2" >
          <div className='flex justify-between items-center tracking-tight'>

            <CategoryLabel>{post.frontmatter.category}</CategoryLabel>
          </div>



          <div className='mt-2 '>

            <h2 className='text-xl text-gray-700 pb-1 font-semibold '>
              {post.frontmatter.title}
            </h2>

            <p className=' leading-[16px]  text-sm font-normal text-gray-500'>{post.frontmatter.description}</p>
          </div>

        </div>
      </div>
    </Link>
  );
}
