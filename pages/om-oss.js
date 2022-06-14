import Form03 from '@/components/form03'
import Grid from '@/components/Grid'
import Layout from '@/components/Layout'
import SectionContainer from '@/components/SectionContainer'
import Head from 'next/head'
import Image from 'next/image'


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

            <p className="text-lg leading-7 text-gray-500 dark:text-gray-600">
              På Roliglek hittar du massor av lekar för olika åldrar. Beskrivningarna innehåller instruktioner steg- för steg och illustrativa bilder så att du enkelt kan skapa din egen roliga lek
            </p>
          </div>




          <div className=''>
            <div className=" relative flex flex-col justify-center items-center">
              <div className=" w-full max-w-4xl h-[420px] bg-blue-500 rounded-xl bg-texture bg-cover bg-center bg-blend-color-burn overflow-hidden">
                {/* <p className="p-8  text-lg  uppercase text-white transform -rotate-6 mix-blend-overlay filter blur-px" >På Roliglek hittar du massor av lekar för olika åldrar. </p> */}
                <h3 className="p-8  w-2/3 text-4xl font-black uppercase text-white transform -rotate-6 mix-blend-overlay filter blur-px">Vi älskar rörelse och glädje!  </h3>
              </div>
              <div className='absolute -bottom-16 -right-8 '>
                <Image
                  src="/static/roliglek/pyssel/Cartoon Boy Harry Skateboarding.J15.watermarked.2k.png"
                  alt="bild på roliglek "

                  width={350}
                  height={350}
                  layout=""
                  quality={100}
                  priority
                  loading="eager"
                />


              </div>
              <div className='absolute -bottom-16 -left-6  '>
                <Image
                  src="/static/roliglek/2021/Meghan Riding Scooter.png"
                  alt="bild på roliglek "

                  width={300}
                  height={300}
                  layout=""
                  quality={100}
                  priority
                  loading="eager"
                />
              </div>
            </div>
          </div>







          <section className='mt-40'>
            <Grid />

          </section>

          <div className="flex items-center justify-center pt-4">
            <Form03 />
          </div>
        </Layout>
      </SectionContainer>
    </>






  )
}
