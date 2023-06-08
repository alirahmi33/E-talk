import styles from '../style';
const ContactUs = () => {
    return (
        <section id='contactus' className="bg-slate-50   sm:h-[424px] h-[310px]   sm:pt-20  pt-2 sm:bg-contain bg-cover bg-center bg-[url('./src/assets/bg_contact.svg')] bg-no-repeat">
            <div className="flex flex-col items-center justify-center">
                <h1 className="pt-0 text-2xl font-bold text-center text-white sm:text-4xl">
                    Enter Your email to Get The latest news
                </h1>
                <p className="pt-6 text-center text-white font-base sm:pt-10">
                    You will get the latest notifivations about the latest school news
                </p>
                <div className={`${styles.flexCenter} mt-10 space-x-2 rounded-lg bg-lightest sm:mt-10 sm:w-3/8 w-6/8 sm:h-16 h-14 sm:space-x-32 `}>
                    <input type="email" placeholder="Enter Your email address" className="pl-2 text-white bg-lightest font-base" />
                    <button className="justify-center w-20 h-8 text-white rounded-md bg-purple sm:w-20 sm:mr-2 border-lightest sm:h-10 font-base">
                        Submit
                    </button>
                </div>
            </div>
        </section>
    )
}

export default ContactUs