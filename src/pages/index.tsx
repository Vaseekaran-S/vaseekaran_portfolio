
import { ReactTyped }  from 'react-typed';

export const Home = () => {

    return (
        <div className="py-10 text-white">
            <section className="px-5">
                <div className="grid grid-cols-12 min-h-[100vh] items-center">
                    <div className="col-span-12 lg:col-span-6">
                        <div className="flex-center h-full w-full">
                            <img src="/images/vaseekaran/img2.jpg" alt="img" className="max-w-[300px] rounded" />
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-6">
                        Hello World!
                        <h2 className="text-6xl mt-3">
                            <ReactTyped 
                                strings={["I'm Vaseekaran Saminathan."]}
                                typeSpeed={100}
                                showCursor
                            />
                        </h2>
                    </div>
                </div>
            </section>
        </div>
    )
}