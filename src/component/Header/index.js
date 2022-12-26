import { Navbar } from 'flowbite-react';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
    const [navStatus, setNavStatus] = useState(window.scrollY > 177);

    const handleScrollY = () => {
        window.scrollY < 177 ? setNavStatus(false) : setNavStatus(true);
    };

    window.addEventListener('scroll', handleScrollY);

    const navItems = [
        { title: 'Trang Chủ', to: '/' },
        { title: 'Về Công Ty', to: '#about' },
        { title: 'Dịch Vụ', to: '#services' },
        { title: 'Thành Tựu', to: '#achievement' },
    ];

    return (
        <Navbar
            fluid={true}
            rounded={true}
            className={`fixed top-0 right-0 left-0 z-50 bg-[hsla(0,0%,100%,1)] ${
                navStatus
                    ? 'm-3 opacity-100 shadow-[0_1px_10px_0_rgba(0,0,0,0.1)]'
                    : 'z-[-10] m-0 opacity-0'
            } transition-all duration-[400ms]`}
        >
            <Navbar.Brand href="https://flowbite.com/">
                <span className="my-1 self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                    GB-STEEL
                </span>
            </Navbar.Brand>
            <Navbar.Collapse>
                {navItems.map((item, index) => (
                    <NavLink
                        to={item.to}
                        key={index}
                        className="line-run-animate-black"
                        onClick={(e) =>
                            document
                                .querySelector(`${item.to}`)
                                .scrollIntoView({ behavior: 'smooth', block: 'center' })
                        }
                    >
                        {item.title}
                    </NavLink>
                ))}
            </Navbar.Collapse>
        </Navbar>
    );
}
