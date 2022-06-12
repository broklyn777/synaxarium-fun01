import Card from '@/components/Card'
import Layout from '@/components/Layout'
import SectionContainer from '@/components/SectionContainer'
import projectsData from '@/data/projectsData'
import Head from 'next/head'

export default function Projects() {
  return (
    <>


      <Head>
        <title>Roliglek | Pyssel</title>
        <link rel="icon" href="/static/roliglek/2021/cropped-webbplatsikon-roliglek-150x150.png" />
      </Head>
      <SectionContainer>
        <Layout>
          <h1 className=' md:block text-5xl text-gray-700 border-b-4 p-5 font-semibold'>Pyssel</h1>

          <div className="space-y-2 pt-6 pb-8 md:space-y-5">

            <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
              På Pysselugglan hittar du massor av pyssel för olika åldrar. Beskrivningarna innehåller instruktioner steg- för steg och illustrativa bilder så att du enkelt kan skapa din egen kreation
            </p>
          </div>
          <div className="container py-12">
            <div className="-m-4 flex flex-wrap">
              {projectsData.map((d) => (
                <Card
                  key={d.title}
                  title={d.title}
                  description={d.description}
                  imgSrc={d.imgSrc}
                  href={d.href}
                />
              ))}
            </div>
          </div>

        </Layout>
      </SectionContainer>
    </>
  )
}
