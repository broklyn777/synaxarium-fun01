import headerNavLinks from '@/data/headerNavLinks'
import Footer from './Footer'
import Link from './Link'
import MobileNav from './MobileNav'
import SectionContainer from './SectionContainer'
import { PageSEO } from './SEO'


// import ThemeSwitch from './ThemeSwitch'

const LayoutWrapper = ({ children }) => {
  return (
    <SectionContainer>
      <PageSEO />
      <div className="flex h-screen flex-col justify-between">
        <header className="flex items-center justify-between py-10">
          <div>
            {/* ändrat emot tims orginalet */}
            <Link href="/" src="/static/images/logo.png" aria-label="Roligare lekar blogg">
              <div className="flex items-center justify-between">

                <div className="mr-3">



                  {/* <Logo /> */}
                </div>
                <h2 className='pl-5 font-semibold text-sky-500 text-4xl'>
                  <span className='text-primary-500'>R</span>
                  <span className='text-pink-500'>o</span>
                  <span className='text-yellow-500'>l</span>
                  <span className='text-green-500'>i</span>
                  <span className='text-primary-500'>g</span>
                  <span className='text-pink-500'>L</span>
                  <span className='text-yellow-500'>e</span>
                  <span className='text-green-500'>k</span>
                  <span className='text-gray-300'>.se</span>



                </h2>
                {/* 
                {typeof siteMetadata.headerTitle === 'string' ? (
                  <div className="hidden h-6 text-3xl text-sky-500 font-semibold sm:block">
                    {siteMetadata.headerTitle}
                  </div>
                ) : (
                  siteMetadata.headerTitle
                )} */}
              </div>
            </Link>
          </div>
          <div className="flex items-center text-lg leading-5">
            <div className="hidden sm:block">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="p-1 font-normal text-gray-900 dark:text-gray-100 sm:p-4"
                >
                  {link.title}
                </Link>
              ))}
            </div>
            {/* <ThemeSwitch /> */}
            <MobileNav />
          </div>
        </header>
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
