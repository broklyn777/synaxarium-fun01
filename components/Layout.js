import Head from 'next/head'
import Header from './Header'
import Nav from './Nav'
// import Header from './Header'
// import Search from './Search'

export default function Layout({ title, keywords, description, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='keywords' content={keywords} />
        <meta name='description' content={description} />
        <link rel='icon' href='/favicon.ico' />
      </Head>


      {/* <Search /> */}
      <main className='container mx-auto my-7'>{children}</main>
    </div>
  )
}

Layout.defaultProps = {
  title: 'Välkommen till Roliglek.se',
  keywords: 'lek, pyssel,ha roligt',
  description: 'hitta lekar för alla tillfällen',
}
