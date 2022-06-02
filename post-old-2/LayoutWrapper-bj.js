import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
// import Logo from '@/data/logo.svg'
import Link from '../components/Link'
import SectionContainer from '../components/SectionContainer'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Search from '../components/Search'
// import Footer from './Footer'
// import MobileNav from './MobileNav'
// import ThemeSwitch from './ThemeSwitch'
import MobileNav from '../components/MobileNav'

const LayoutWrapper = ({ children }) => {
  return (
    <SectionContainer>

      <div className="flex h-screen flex-col justify-between">
        <nav className=" flex flex1 py-8 flex-wrap justify-between cursor-pointer  space-x-8 ">
          <div className="hidden sm:block">
            {/* <nav className=" flex flex1  border-b flex-wrap justify-between cursor-pointer p-3 py-8 space-x-5 "> */}
            {/* <Logo /> */}
            <Link href="/" passHref>
              <h2 className="text-3xl cursor-pointer">Roliglek  </h2>
            </Link>
            <div className='flex space-x-4  text-xl'>
              <Link href="/bio" passHref>
                <p className="ms-5 pointer lead my-auto">/om oss</p>
              </Link>
              <Link href="/einar" passHref>
                <p className="ms-5 pointer lead my-auto">/einar</p>
              </Link>
            </div>

            <div className='flex space-x-4 text-xl'>

              {/* <Link href="/dev" passHref>
        <p className="ms-5 pointer lead my-auto">/dev</p>
      </Link> */}

              <Link href="/blogga" passHref>
                <p className="ms-5 pointer lead my-auto">/blogga</p>
              </Link>
            </div>
          </div>
          {/* <ThemeSwitch /> */}
          <MobileNav />
        </nav>
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper