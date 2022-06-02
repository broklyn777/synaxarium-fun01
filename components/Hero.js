/* eslint-disable @next/next/no-img-element */
import Image from 'components/Image'
import Link from '@/components/Link'





const Hero = () => {
  return (
    <section className="grid  lg:grid-rows-1 lg:grid-cols-2 items-center justify-between mt-6 min-w-screen">
      <div className="flex flex-col  justify-center w-full h-full md:pr-8 mb-10 xl:mb-0">
        <div className="md:flex bg-gr  md:flex-row items-center">

          <h2 className="ml-2 text-center md:text-left text-4xl font-semibold font-display leading-tight sm:text-4xl sm:leading-none md:text-5xl lg:text-5xl xl:text-6xl">
            Välkommen <br /> till en ny leksida!
          </h2>
          {/* <h2 className="ml-2 text-3xl font-extrabold font-display leading-tight sm:text-4xl sm:leading-none md:text-5xl lg:text-5xl xl:text-6xl">
            Ha <span className='text-sky-500' >Roligt</span> pro
          </h2> */}
        </div>
        <div aria-hidden="true" className="absolute rounded-full -z-50 right-[50px] -top-[50px]    w-[220px] h-[220px] lg:w-[150px] lg:-top-[160px] lg:h-[150px] bg-pink-500 grid place-items-center">
        </div>
        <div aria-hidden="true" className="absolute rounded-full -z-10 top-[120px]   w-[150px] h-[150px] lg:w-[350px] lg:-top-[160px] lg:h-[350px] bg-pink-500 grid place-items-center">
        </div>
        <div className='pl-4'>
          <p className="mt-2 text-center  text-lg md:text-left ">

            Äntligen är sommaren här, och med den kommer möjligheten att vara ute en hel del! Varma dagar, och långa, ljusa kvällar gör att barnen kan leka ute mycket.
          </p>
        </div>


        <Link href="https://twitter.com">
          <a
            className="my-3 pl-4 font-bold text-md text-left md:text-sm leading-6 text-sky-500 hover:underline flex flex-row items-center"
            target="_blank"
            rel="noreferrer noopener"
          >
            <svg
              fill="currentColor"
              stroke="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              className="w-4 h-4 mr-1"
            >
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
            </svg>

            ...vi sprider även gädje på twitter

          </a>
        </Link>
      </div>

      <div className='relative'>
        <div>
          <div aria-hidden="true" className=" absolute rounded-full -z-30  w-[100px] h-[100px]   md:w-[340px] md:h-[340px] bg-pink-500 grid overflow-hidden place-items-center">
          </div>
        </div>


        <div className='relative'>
          <div aria-hidden="true" className="absolute rounded-full -z-40  w-[120px] h-[120px]   -top-[220px] lg:top-[10px] right-[40px] lg:-left-[280px]   md:w-[300px] md:h-[300px] bg-sky-500 grid place-items-center overflow-hidden">
          </div>
        </div>
        <div className=' w-full'>
          <Image
            src="/image/roliglek-2205/undraw_winners.svg"
            alt="bild på roliglek "
            className=""
            width={400}
            height={400}
            layout=""
            quality={60}
            priority
            loading="eager"
          />
        </div>
      </div>





    </section>
  )
}

export default Hero
