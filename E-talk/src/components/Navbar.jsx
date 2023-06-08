import { useState } from 'react';

import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <nav className='flex items-center justify-between w-full py-6 navbar '>
            <img src={logo} alt="E-talk" className="w-[80px] h-[20px] pl-4" />

            <ul className="items-center justify-center flex-1 hidden list-none sm:flex">
                {navLinks.map((nav, index) => (
                    <li
                        key={nav.id}
                        className={`font-poppins text-blue text-[16px]  cursor-pointer  ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} `}>
                        <a href={`#${nav.id}`}>
                            {nav.title}
                        </a>
                    </li>
                ))}
            </ul>
            <div
                className="sm:flex hidden  rounded border-2 border-purple px-8 mx-6 
                 pb-[6px] pt-2 text-xs font-bold uppercase leading-normal text-purple
                 transition duration-150 ease-in-out hover:border-success-600 hover:bg-neutral-500 
                 hover:bg-opacity-10 hover:text-success-600 focus:border-success-600 focus:text-success-600 
                 focus:outline-none focus:ring-0 active:border-success-700 active:text-success-700 
                 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                data-te-ripple-init>
                <a href='/#contactus'>Contact Us</a>
            </div>
            <div className="flex items-center justify-end flex-1 bg-white sm:hidden ">
                <img src={toggle ? close : menu}
                    alt="menu"
                    className="w-[28px] h-[28px] pr-3
                 object-conatin "
                    onClick={() => setToggle((prev) => !prev)} />
            </div>
            <div
                className={`${toggle ? 'flex' : 'hidden'}
            p-6 bg-white w-20 absolute
             top-20 right-0 mx-4 my-2 
            min-w-[140px] rounded-xl sidebar sm:hidden`}>
                <ul className="flex flex-col items-center justify-center list-none ">
                    {navLinks.map((nav, index) => (
                        <li
                            key={nav.id}
                            className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'} text-blue`}>
                            <Link to={`#${nav.id}`}>
                                {nav.title}
                            </Link>
                        </li>
                    ))}
                   
                </ul>
               
            </div>
        </nav>


    )
}

export default Navbar
