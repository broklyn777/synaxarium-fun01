import Link from 'next/link'

//  blogslug
export default function CategoryListSm({ categories }) {
  // console.log(categories)
  return (
    <div className=' w-full p-2 border-y-2    mt-2'>
      <h3 className='text-2xl text-center font-bold pt-2  text-gray-700  rounded'>
        Alla Kategorier/Tags
      </h3>


      <div className='grid grid-cols-4 font-bold gap-x-1 gap-y-1 mt-4 px-2 rounded text-center '>
        {categories.map((category, index) => (

          // eslint-disable-next-line @next/next/link-passhref
          <Link key={index} href={`/lek/category/${category.toLowerCase()}`}>
            <li className='list-none px-0 py-1 bg-pink-500 text-white rounded-md cursor-pointer hover:bg-primary-500'>{category}</li>

          </Link>
        ))}
      </div>

    </div>
  )
}


