import CardP from '@/components/CardP'
import projectsDataP from '@/data/projectsDataP'

export default function CardPyssel() {
    return (
        <>



            <div className="container py-12">
                <div className=" flex flex-wrap">
                    {projectsDataP.map((d) => (
                        <CardP
                            key={d.title}
                            title={d.title}
                            description={d.description}
                            imgSrc={d.imgSrc}
                            href={d.href}
                        />
                    ))}
                </div>
            </div>

        </>
    )
}
