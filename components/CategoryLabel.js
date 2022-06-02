import Link from 'next/link'

export default function CategoryLabel({ children }) {
  const colorKey = {
    Tailwind: 'red',
    Inne: 'yellow',
    Sommar: 'green',
    React: 'sky',
    Next: 'blue',
    MDX: 'mdxYellow',


  }

  return (
    <div
      //  blogslug
      className={`px-2 py-1 bg-${colorKey[children]}-600 text-gray-100 font-semibold rounded`}
    >

      <Link href={`/blogg/category/${children.toLowerCase()}`}>{children}</Link>
    </div>
  )
}
