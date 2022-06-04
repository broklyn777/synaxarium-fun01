import Head from 'next/head'
// import Header from './Header'
// import Search from './Search'

export default function Layout({ title, keywords, description, children }) {
  return (
    <div>
      <Head>
        <title>Roliglek | Pyssel</title>
        <meta
          name="description"
          content="Lekar, Pyssel, tävling, bus"
        />
      </Head>


      {/* <Search /> */}
      <main className='container mx-auto my-7'>{children}</main>
    </div>
  )
}


