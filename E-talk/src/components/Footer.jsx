import { footerLinks, socialMedia } from '../constants';

const Footer = () => {
    return (
        <section className="px-6 py-6 bg-slate-50 sm:px-16 sm:py-16">
            <div className="flex flex-col items-center pt-10 sm:flex-row sm:justify-between sm:space-x-60">

                <div className="flex-[1.5] w-full flex flex-row  justify-between flex-wrap md:mt-0 mt-10">
                    <div className="flex-row sm:flex-col">
                        <h1 className="font-bold font-poppins  text-[18px] leading-[27px]">E-Talk</h1>
                        <p className="pt-10 font-bold">Take student Experince to the next level</p>
                        <div className="flex flex-row justify-center pt-10 md:mt-0">
                        {socialMedia.map((social, index) => (
                            <img
                                key={social.id}
                                src={social.icon}
                                alt={social.id}
                                className={`w-[54px] h-[54px] object-contain
                                 cursor-pointer ${index !== socialMedia.lenght - 1 ? 'mr-6' : 'mr-0'}`}
                            />
                        ))}
                    </div>
                    </div>
                    {footerLinks.map((footerLink) => (
                        <div key={footerLink.key} className="flex flex-col ss:my-0 my-4 min-w-[150px]">
                            <h4 className="font-poppins font-bold text-[18px] leading-[27px] ">
                                {footerLink.title}
                            </h4>
                            <ul className="mt-4 list-none">
                                {footerLink.links.map((link, index) => (
                                    <li key={link.name}
                                        className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer 
                ${index !== footerLink.links.lenght - 1 ?
                                                'mb-4' : 'mb-0'}`}>
                                        {link.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Footer