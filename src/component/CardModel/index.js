import { Card } from 'flowbite-react';
import React from 'react';

export default function CardModel({
    className,
    alt = '...',
    img = 'https://flowbite.com/docs/images/blog/image-1.jpg',
    title,
    children,
}) {
    return (
        <div className="shadow-drop-2-bottom max-w-xs cursor-pointer transition-all duration-500">
            <Card
                className="h-[450px] max-h-[450px]"
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc={img}
            >
                <h5 className="text-[17px] font-medium tracking-tight text-gray-900 dark:text-white">
                    {title}
                </h5>
                <div className="font-normal text-gray-700 dark:text-gray-400">{children}</div>
            </Card>
        </div>
    );
}
