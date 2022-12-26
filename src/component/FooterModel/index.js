import React from 'react';
import { Footer } from 'flowbite-react';

export default function FooterModel() {
    return (
        <Footer container={true}>
            <Footer.Copyright href="#" by="GB_STEEL" year={2023} />
            <Footer.LinkGroup>
                <Footer.Link href="#">Về Công Ty</Footer.Link>
                <Footer.Link href="#">Dịch Vụ</Footer.Link>
                <Footer.Link href="#">Thành Tựu</Footer.Link>
                <Footer.Link href="#">Liên Hệ</Footer.Link>
            </Footer.LinkGroup>
        </Footer>
    );
}
