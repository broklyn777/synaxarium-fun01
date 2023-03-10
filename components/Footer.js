import siteMetadata from '@/data/siteMetadata'
import Link from './Link'

export default function Footer() {
  return (
    <footer>
      <div className="mt-16 flex flex-col border-t-2 items-center">
        <div className="mb-3 flex space-x-4">

          {/* <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size="6" />
          <SocialIcon kind="github" href={siteMetadata.github} size="6" />
          <SocialIcon kind="facebook" href={siteMetadata.facebook} size="6" />
          <SocialIcon kind="youtube" href={siteMetadata.youtube} size="6" />
          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size="6" />
          <SocialIcon kind="twitter" href={siteMetadata.twitter} size="6" /> */}
        </div>
        <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{siteMetadata.author}</div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          {/* <Link href="/">{siteMetadata.title}</Link> */}
          <Link href="https://funfun01.vercel.app/">{siteMetadata.title}</Link>

        </div>
        <div className='flex flex-1'>
          <div className=" text-sm  text-gray-500 dark:text-gray-400">
            <Link href="">
              devBlog github  |
            </Link>
          </div>
          <div>{`  `}</div>
          <div className=" text-sm px-2 text-gray-500 dark:text-gray-400">
            <Link href="">
              FunFun |
            </Link>
          </div>
          <div>{`  `}</div>
          <div className="mb-8 text-sm text-gray-500 dark:text-gray-400">
            <Link href="https://vercel.com/dashboard">
              Vercel
            </Link>

          </div>
        </div>
      </div>
    </footer>
  )
}
