import { ReactElement } from "react"

interface SectionProps {
    id: string,
    title: string,
    subTitle: string,
    children: ReactElement
}

function Section({ id, children, title, subTitle }: SectionProps) {
    return (
        <section id={id} className="py-10 my-10 min-h-[100vh] flex items-center">
            <div className="w-full">
                <div className='text-center'>
                    <h6 className="uppercase">{subTitle}</h6>
                    <h2 className='text-4xl mt-3'>{title}</h2>
                </div>
                {children}
            </div>
        </section>
    )
}

export default Section