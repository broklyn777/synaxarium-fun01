
export default function grid() {
    return (


        <>
            {/* <Head>
        <title>Roliglek | Om oss</title>
        <link rel="icon" href="/static/roliglek/2021/cropped-webbplatsikon-roliglek-150x150.png" />
      </Head> */}
            <section className="grid leading-4 place-items-center">

                <div className="p-4 grid gap-4 grid-cols-3 xs:grid-cols-4  ">
                    <h1 className=" text-2xl xs:text-[30px]  md:text-[40px]  font-semibold col-span-3 grid gap-4 md:col-span-4 md:text-5xl md:grid-cols-3 lg:text-6xl">
                        <span className=" col-span-4 md:col-span-2 "> Välkommen till en roligare vardag och fest!</span>
                    </h1>

                    <p className="  sm:hidden row-start-2 text-lg leading-5  col-span-2 self-center md:pr-12 "> Vi älskar rörelse och vår gemenskap!</p>
                    <p className=" hidden sm:block row-start-2  col-span-2 self-center md:pr-12 md:text-lg"> Vi älskar rörelse och gemenskap! Vår vision är en vardag och fritid där vi rör oss mycket, och gör roliga saker tillsammans</p>

                    <div className=" bg-orange-500 h-auto square "></div>
                    <div className=" bg-green-500 h-auto square "></div>
                    <div className=" bg-pink-500 h-auto square "></div>
                    <div className=" bg-blue-500 h-auto square xs:col-start-2 "></div>

                    <div className=" bg-pink-500 h-auto square "></div>
                    <div className=" bg-blue-500 h-auto square "></div>

                    <div className=" bg-pink-500 h-auto square "></div>
                    <div className=" bg-blue-500 h-auto square "></div>



                    <p className="text-lg leading-5  self-center row-start-4 col-start-2 col-span-2 ">  Vår vision är en vardag där vi rör oss mycket och gör roliga saker tillsammans  </p>
                    <p className=" text-lg leading-5 col-span-3 "> På Roliglek.se ska du alltid kunna hitta lekar för alla tillfällen.</p>


                </div>

            </section>

        </>



    )
}
