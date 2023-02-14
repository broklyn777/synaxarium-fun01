
import Link from 'next/link';

//  blogslug
export default function CategoryListSm({ categories }) {
  // console.log(categories)
  return (
    <div className=' w-full p-2 border-y-2    mt-2'>
      <Link href="/lek" passHref legacyBehavior>
        <h1 className='text-3xl text-center  font-bold pt-2 cursor-pointer  text-primary-500  rounded'>
          Alla lekar
        </h1>
      </Link>


      <div className='grid grid-cols-4 font-bold gap-x-1 gap-y-1 mt-4 px-2 rounded text-center '>
        {categories.map((category, index) => (


          <Link
            key={index}
            href={`/lek/category/${category.toLowerCase()}`}
            legacyBehavior>
            <li className='list-none px-0 py-1 bg-pink-500 text-white rounded-md cursor-pointer hover:bg-primary-500'>{category}</li>

          </Link>
        ))}
      </div>

    </div>
  );
}


