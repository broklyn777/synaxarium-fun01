import Link from 'next/link';

export default function CategoryLabel({ children }) {
  const colorKey = {
    Alla: 'red',
    Inne: 'yellow',
    Sommar: 'green',
    Många: 'sky',
    Ute: 'blue',
    Lära: 'mdxYellow',
    Leta: 'fuchsia',
    Rörelse: 'lime',


  }

  return (
    <div
      //  blogslug
      className={`px-2 py-1 bg-${colorKey[children]}-600 text-gray-100 font-semibold rounded`}
    >

      <Link
        href={`/lek/category/${children.toString().toLowerCase()}`}
        legacyBehavior>{children}</Link>
    </div>
  );
}
// tolowercase