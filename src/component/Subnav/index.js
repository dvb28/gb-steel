import { Navbar } from 'flowbite-react';
import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Subnav() {
    const navItems = [
        { title: 'Trang Chủ', to: '/' },
        { title: 'Về Công Ty', to: '#about' },
        { title: 'Dịch Vụ', to: '#services' },
        { title: 'Thành Tựu', to: '#achievement' },
    ];

    return (
        <div>
            <Navbar
                fluid={true}
                className="absolute top-10 left-0 right-0 mx-8 text-white"
                style={{ backgroundColor: 'transparent' }}
            >
                <Navbar.Brand href="https://flowbite.com/">
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                        GB-STEEL
                    </span>
                </Navbar.Brand>
                <Navbar.Collapse>
                    {navItems.map((item, index) => (
                        <NavLink
                            key={index}
                            className="line-run-animate-white cursor-pointer text-white hover:text-white"
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
        </div>
    );
}
