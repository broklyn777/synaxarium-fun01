import Link from 'next/link'

//  blogslug
export default function CategoryListSm({ categories }) {
  return (
    <div className=' w-full px-2 bg-white rounded-lg shadow-md mt-6'>
      <h3 className='text-2xl text-center font-bold bg-gray-300 text-gray-700 py-3 rounded'>
        Alla Kategorier/Tags
      </h3>


      <div className='grid grid-cols-5 font-bold gap-x-1 gap-y-1 mt-4 px2 rounded text-center '>
        {categories.map((category, index) => (

          // eslint-disable-next-line @next/next/link-passhref
          <Link key={index} href={`/blogg/category/${category.toLowerCase()}`}>
            <li className='list-none px-0 py-1 bg-pink-500 text-white rounded-md cursor-pointer hover:bg-primary-500'>{category}</li>

          </Link>
        ))}
      </div>
      {/* <ul className='divide-y divide-gray-300'>
        {categories.map((category, index) => (

          // eslint-disable-next-line @next/next/link-passhref
          <Link key={index} href={`/blogg/category/${category.toLowerCase()}`}>
            <li className='p-4 cursor-pointer hover:bg-gray-50'>{category}</li>

          </Link>
        ))}
      </ul> */}
    </div>
  )
}

// <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
//   {posts.map((post, index) => (
//     <Post key={index} post={post} />
//   ))}
// </div>
