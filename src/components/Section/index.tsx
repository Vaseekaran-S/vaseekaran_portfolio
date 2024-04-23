import { ReactElement } from "react"

interface SectionProps {
    title: string,
    subTitle: string,
    children: ReactElement
}

function Section({ children, title, subTitle }: SectionProps) {
    return (
        <section>
            <div className="py-10 min-h-[100vh]">
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