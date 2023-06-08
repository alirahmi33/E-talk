import Button from './Button';
import WatchVideo from './WatchVideo';

const AboutUs = () => {
    return (

        <section id="about" className=" relative bg-slate-50 sm:bg-contain bg-cover bg-[url('./src/assets/background.svg')]  bg-no-repeat bg-right   sm:w-full sm:h-screen -z-50">
            <div className="flex flex-col h-full sm:flex-row">
                <div>
                    <h1 className="flex w-auto h-40 px-0 py-4 mt-6 ml-16 text-2xl font-bold sm:text-6xl sm:mt-28">
                        Online Rea l-Time virtual Learning
                    </h1>
                    <p className="w-full px-0 ml-2 font-normal sm:w-8/12 sm:mt-8 sm:ml-16 text-gray">
                        We Provide a complete range of Products,from soft Skills to Management Strategies and from Finacial Reporting to Project Management.
                    </p>
                    <div className="flex flex-row py-14 ">
                        <Button />
                        <WatchVideo />
                    </div>
                </div>
                <div className="flex  bg-contain bg-[url('./src/assets/student_03.png')]  bg-no-repeat bg-right sm:mr-20 ">
                    <div className="flex items-center self-end h-20 mb-2 mr-2 bg-white rounded-md w-60  sm:mb-40">
                        <span className="  font-medium pl-2 text-[10px]">Catch up with your advisor<br />
                            <span className="text-xs font-semibold ">
                                Schedule Meeting
                            </span>
                        </span>
                        <div className="w-12 h-12  ml-8">
                            <img src='./src/assets/think.png' />
                        </div>
                    </div>

                    <div className="flex items-center self-end h-20 mb-2 mr-2 bg-white rounded-md w-60 sm:mb-6">
                        <span className="  font-medium pl-2 text-[10px]">RECOMMENDED GROUPS FOR YOU<br />
                            <span className="text-xs font-semibold ">
                                Community Service Org
                            </span>
                        </span>
                        <div className="w-12 h-12 pl-2 ">
                            <img src='./src/assets/next.png' />
                        </div>
                    </div>

                </div>

            </div>



        </section>


    )
}

export default AboutUs