import Form03 from '@/components/form03'
import Grid from '@/components/Grid'
import Layout from '@/components/Layout'
import SectionContainer from '@/components/SectionContainer'
import Head from 'next/head'


export default function omoss() {
  return (

    <>

      <Head>
        <title>Roliglek | Om oss</title>
        <link rel="icon" href="/static/roliglek/2021/cropped-webbplatsikon-roliglek-150x150.png" />
      </Head>


      <SectionContainer>
        <Layout>

          <h1 className=' md:block text-5xl text-gray-700 border-b-4 p-5 font-semibold'>Om oss</h1>
          <div className="space-y-2 pt-6 pb-8 md:space-y-5">

            <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
              På Roliglek hittar du massor av lekar för olika åldrar. Beskrivningarna innehåller instruktioner steg- för steg och illustrativa bilder så att du enkelt kan skapa din egen roliga lek
            </p>
          </div>

          <Grid />

          <div className="flex items-center justify-center pt-4">
            <Form03 />
          </div>
        </Layout>
      </SectionContainer>
    </>






  )
}
