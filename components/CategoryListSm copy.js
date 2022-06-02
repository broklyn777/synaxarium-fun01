import Link from 'next/link'
//  blogslug
export default function CategoryListSm({ categories }) {
  return (
    <div className='  w-full p-5 bg-white rounded-lg shadow-md mt-6'>
      <h3 className='text-2xl bg-gray-800 text-white p-3 rounded'>
        Kategorier--Small
      </h3>

      <div className="grid place-items-center min-h-screen">
        {/* <!-- Responsive Grid Layout --> */}
        <div className="p-4 max-w-5xl grid gap-4 grid-cols-2  md:grid-cols-4 lg:gap-6">
          <h1 className="text-4xl font-extrabold col-span-2 grid gap-4 grid-cols-2 md:col-span-3 md:text-5xl md:grid-cols-3 lg:text-6xl">
            <span className="md:col-span-2">Grid layout with Tailwind CSS.</span>
          </h1>
          <p className="row-start-2 col-start-2 self-center md:col-start-1 md:col-span-2 md:pr-12 md:text-lg">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio hic itaque alias officiis.</p>
          <div className="bg-blue-500 h-auto square">1</div>
          <div className=" bg-blue-500 h-auto square">2</div>
          <div className=" bg-pink-500 h-auto square">3</div>
          <div className=" bg-blue-500 h-auto square md:col-start-2">4</div>
          <div className=" bg-pink-500 h-auto square">5</div>
          <div className=" bg-blue-500 h-auto square">6</div>
          <div className=" bg-blue-500 h-auto square">7</div>
          <div className=" bg-pink-500 h-auto square">8</div>
          <p className="self-center md:text-lg md:col-span-2 md:text-center md:px-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit, and some more.</p>
        </div>
      </div>
      <ul className='divide-y divide-gray-300'>
        {categories.map((category, index) => (

          // eslint-disable-next-line @next/next/link-passhref
          <Link key={index} href={`/blogg/category/${category.toLowerCase()}`}>
            <li className='p-4 cursor-pointer hover:bg-gray-50'>{category}</li>

          </Link>
        ))}
      </ul>
    </div>
  )
}
