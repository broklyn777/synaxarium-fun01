import Image from './Image'
import Link from './Link'

const Card = ({ title, description, imgSrc, href }) => (
  <Link href={href} aria-label={`Link to ${title}`}>
    <div className=" pt-2" style={{ maxWidth: '544px' }}>
      <div
        className={`${imgSrc && 'h-full'
          }  overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 dark:border-gray-700`}
      >
        {imgSrc &&
          (href ? (

            <Image
              alt={title}
              src={imgSrc}
              className="object-cover object-center md:h-36 lg:h-48"
              width={544}
              height={406}
            />

          ) : (
            <Image
              alt={title}
              src={imgSrc}
              className="object-cover object-center md:h-36 lg:h-48"
              width={544}
              height={306}
            />
          ))}
        <div className="p-2">
          <h2 className=" flex text-xl text-gray-700 pb-1 font-semibold ">
            {href ? (
              <Link href={href} aria-label={`Link to ${title}`}>
                {title}
              </Link>
            ) : (
              title
            )}
          </h2>
          <p className='flex leading-[16px]  text-sm font-normal text-gray-500'>{description}</p>
          {href && (
            <Link
              href={href}
              className="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
              aria-label={`Link to ${title}`}
            >
              Läs mer&rarr;
            </Link>
          )}
        </div>
      </div>
    </div>
  </Link>


)



export default Card
