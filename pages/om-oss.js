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


          <div className='w-full'>
            <Image
              src="/static/roliglek/2021/playground-removebg.png"
              alt="bild på roliglek "
              className=""
              width={600}
              height={400}
              layout=""
              quality={100}
              priority
              loading="eager"
            />
          </div>
          <div className='grid grid-cols-2'>

            <div className='w-full'>
              <Image
                src="/static/roliglek/pyssel/Cartoon Girl Meghan Jumping On Trampoline.H02.watermarked.2k.png"
                alt="bild på roliglek "
                className=""
                width={600}
                height={600}
                layout=""
                quality={100}
                priority
                loading="eager"
              />
            </div>
            <div className=' w-full'>
              <Image
                src="/static/roliglek/pyssel/Cartoon Boy Harry Holding Balloons.I01.watermarked.2k.png"
                alt="bild på roliglek "
                className=""
                width={600}
                height={600}
                layout=""
                quality={100}
                priority
                loading="eager"
              />
            </div>
            <div className='w-full'>
              <Image
                src="/static/roliglek/pyssel/Cartoon Boy Harry Playing Soccer.J02.watermarked.2k.png"
                alt="bild på roliglek "
                className=""
                width={600}
                height={600}
                layout=""
                quality={100}
                priority
                loading="eager"
              />
            </div>
            <div className='flex flex-wrap w-full'>
              <Image
                src="/static/roliglek/pyssel/Cartoon Boy Harry Skateboarding.J15.watermarked.2k.png"
                alt="bild på roliglek "
                className=""
                width={600}
                height={600}
                layout=""
                quality={100}
                priority
                loading="eager"
              />
            </div>


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
