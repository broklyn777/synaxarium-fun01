
import Link from 'next/link'
//  blogslug
export default function CategoryList({ categories }) {
  return (
    <div className=' w-full p-5 bg-white rounded-lg shadow-md mt-6'>
      <h3 className='text-2xl bg-gray-800 text-white p-3 rounded'>
        Kategorier
      </h3>
      <ul className='divide-y divide-gray-300'>
        {categories.map((category, index) => (


          <Link
            key={index}
            href={`/lek/category/${category.toLowerCase()}`}
            legacyBehavior>
            <li className='p-4 cursor-pointer hover:bg-gray-50'>{category}</li>

          </Link>
        ))}
      </ul>
    </div>
  );
}
