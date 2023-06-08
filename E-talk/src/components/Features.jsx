import { features } from '../constants';

const FeatureCard = ({ title, content }) => (
    <div className="flex flex-col items-center space-x-8 sm:flex-row sm:mt-16">
        <span className="mb-6 font-mono font-bold sm:ml-10 sm:items-center">{title}</span>
        <p className="mt-6 mb-6 ml-0 sm:w-full sm:ml-20 text-gray sm:mt-0">
            {content}
        </p>
    </div>
)
const Features = () => {
    return (
        <section id="features" className="pt-20 bg-slate-50 sm:h-screen">
            <div className="flex sm:flex-row flex-col items-center   bg-[url('./src/assets/stars.png')]  bg-w-[177px] bg-h-[180px]  sm:bg-top bg-top-left  bg-no-repeat sm:space-x-40 ">
                <div className="mt-6 ml-4 bg-white sm:w-2/4 w-80 sm:h-96">
                    <h1 className="flex items-center px-12 py-12 ml-10 font-mono font-bold sm:ml-60 sm:py-0 sm:px-0 sm:m-10 sm:text-4xl">Mission & Vision</h1>
                    {features.map((feature, index) => (
                        <FeatureCard key={feature.id} {...feature} index={index} />
                    ))}

                </div>
                <div className="flex ">
                    <img className="flex justify-between mt-20 h-96 sm:h-full sm:mt-0" src='./src/assets/cycle.png' />
                    <div className="flex flex-col w-full mt-20 mb-6 ml-10 space-y-20 sm:mt-6 ">
                        <span className="text-2xl font-bold sm:text-4xl">15,000 <br />
                            <span className="font-medium sm:text-base text-normal">Students</span>
                        </span>
                        <span className="text-2xl font-bold sm:text-4xl">Since 1990 <br />
                            <span className="font-medium sm:text-base text-normal">founded</span>
                        </span>
                        <span className="text-2xl font-bold sm:text-4xl">6faculties <br />
                            <span className="font-medium sm:text-base text-normal">Offering applicants</span>
                        </span>
                    </div>
                </div>
            </div>




        </section>
    )
}

export default Features