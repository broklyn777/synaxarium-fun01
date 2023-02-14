import Link from 'next/link'

export default function Pagination({ currentPage, numPages }) {
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = `/lek/page/${currentPage - 1}`
  const nextPage = `/lek/page/${currentPage + 1}`
  //  blogslug
  if (numPages === 1) return <></>

  return (
    <div className='mt-6'>
      <ul className='flex pl-0 list-none my-2'>
        {!isFirst && (
          <Link href={prevPage} passHref legacyBehavior>
            <li className='relative block py-2 px-3 leading-tight bg-white border border-gray-300 text-gray-800 mr-1 hover:bg-gray-200 cursor-pointer'>
              Föregående
            </li>
          </Link>
        )}
        {Array.from({ length: numPages }, (_, i) => (
          <Link href={`/lek/page/${i + 1}`} key={`page-${i}`} passHref legacyBehavior>
            <li className='relative block py-2 px-3 leading-tight bg-white border border-gray-300 text-gray-800 mr-1 hover:bg-gray-200 cursor-pointer'>
              {i + 1}
            </li>
          </Link>
        ))}

        {!isLast && (
          <Link href={nextPage} passHref legacyBehavior>
            <li className='relative block py-2 px-3 leading-tight bg-white border border-gray-300 text-gray-800 mr-1 hover:bg-gray-200 cursor-pointer'>
              Nästa
            </li>
          </Link>
        )}
      </ul>
    </div>
  );
}
