import ResponsivePlayer from '@/components/ResponsivePlayer';
import Head from 'next/head';
import React from 'react';



export default function Projekt() {
    return (

        <>

            <Head>
                <title>Roliglek | Projekt</title>
                <link rel="icon" href="/static/roliglek/2021/cropped-webbplatsikon-roliglek-150x150.png" />
            </Head>
            <h1 className=' hidden md:block text-5xl text-primary-500 border-b-4 p-5 font-semibold'>Projekt</h1>


            {/* <Lesson /> */}
            <ResponsivePlayer url="https://youtu.be/sNFteclBopw?t" />
            <ResponsivePlayer url="https://youtu.be/z9Eo8gFOMp0" />


            <div className="prose lg:prose-xl">
                <h1>Hur gör man en Tonfisksallad med ägg - (Recept - God och Låg kalori)</h1>
                <p>
                    For years parents have espoused the health benefits of eating garlic bread with cheese to their
                    children, with the food earning such an iconic status in our culture that kids will often dress
                    up as warm, cheesy loaf for Halloween.
                </p>
                <p>
                    But a recent study shows that the celebrated appetizer may be linked to a series of rabies cases
                    springing up around the country.
                </p>

            </div>


        </>








    )
}

