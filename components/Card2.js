import Link from '@/components/Link'
import Image from 'next/image'

const Card = ({ title, description, imgSrc, href }) => (
  <div className="" style={{ maxWidth: '500' }}>
    <div className="h-full border-2 border-gray-200 border-opacity-60 dark:border-gray-700 rounded-md mt-2 overflow-hidden">
      {href ? (
        <Link href={href} aria-label={`Link to ${title}`}>
          <Image
            alt={title}
            src={imgSrc}
            className="lg:h-48 md:h-36 object-cover object-center"
            width={544}
            height={406}
          />
        </Link>
      ) : (
        <Image
          alt={title}
          src={imgSrc}
          className="lg:h-48 md:h-36 object-cover object-center"
          width={544}
          height={260}
        />
      )}
      <div className="p-2">
        <div className='flex justify-between items-center tracking-tight'>


        </div>
        <h2 className="text-xl text-gray-700 pb-1 text-t font-semibold  ">
          {href ? (
            <Link href={href} aria-label={`Link to ${title}`}>
              {title}
            </Link>
          ) : (
            title
          )}
        </h2>

        <p className=" leading-4 text-gray-500 max-w-none dark:text-gray-400 ">
          {description}
        </p>
        {href && (
          <Link
            href={href}
            className="text-base font-medium leading-6 text-blue-500 hover:text-blue-600 dark:hover:text-blue-400"
            aria-label={`Link to ${title}`}
          ></Link>
        )}
      </div>
    </div>
  </div>
)

export default Card
