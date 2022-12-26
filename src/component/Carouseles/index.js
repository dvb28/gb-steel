import React from 'react';
import { Carousel } from 'flowbite-react';
import { slide1, slide2, slide3, slide4 } from '../../assets/img/index';
import Subnav from '../Subnav';

export default function Carouseles() {
    const carouselesImages = [
        { img: slide1, alt: '...' },
        { img: slide2, alt: '...' },
        { img: slide3, alt: '...' },
        { img: slide4, alt: '...' },
    ];

    return (
        <div className="relative" style={{ height: window.innerHeight }}>
            <Carousel slideInterval={3500} className="brightness-[.55]">
                {carouselesImages.map((item, index) => (
                    <img
                        className="h-full object-cover"
                        key={index}
                        src={item.img}
                        alt={item.alt}
                    />
                ))}
            </Carousel>
            <Subnav />
            <div className="absolute top-0 left-0 right-0 flex h-8 items-center bg-[rgba(49,49,49,0.25)] text-left text-[14px] font-medium text-white">
                <span className="ml-8 px-4">Thanh Hà, Nam Sơn, Sóc Sơn, Hà Nội</span>
            </div>
            <div className="absolute top-[50%] left-[50%] flex translate-x-[-50%] translate-y-[-50%] items-center justify-center">
                <div className="text-[60px] font-semibold text-[white]">
                    Chào mừng đến với công ty TNHH GB-STEEL
                </div>
            </div>
        </div>
    );
}
