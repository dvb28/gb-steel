import { Table } from 'flowbite-react';
import React from 'react';
import { ginza, slide2 } from 'src/assets/img';
import CardModel from 'src/component/CardModel';
import Carouseles from 'src/component/Carouseles';
import FooterModel from 'src/component/FooterModel';

export default function Home() {
    return (
        <>
            <Carouseles />
            {/* Về Công Ty */}
            <div>
                <div id="about" className="anm-white my-16 text-[26px] font-medium uppercase">
                    Hồ Sơ Công Ty
                </div>
                <div className="mx-auto w-[85%]">
                    <Table>
                        <Table.Head>
                            <Table.HeadCell>Công Ty</Table.HeadCell>
                            <Table.HeadCell>Thông tin</Table.HeadCell>
                            <Table.HeadCell>
                                <span className="sr-only">Edit</span>
                            </Table.HeadCell>
                        </Table.Head>
                        <Table.Body className="divide-y">
                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell className="font-medium text-gray-900 dark:text-white">
                                    Tên công ty
                                </Table.Cell>
                                <Table.Cell>CÔNG TY TNHH GB-STEEL</Table.Cell>
                            </Table.Row>
                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell className="font-medium text-gray-900 dark:text-white">
                                    Ngày thành lập
                                </Table.Cell>
                                <Table.Cell>11/1/2023</Table.Cell>
                            </Table.Row>
                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell className="font-medium text-gray-900 dark:text-white">
                                    Chủ tịch hội đồng thành viên
                                </Table.Cell>
                                <Table.Cell>Trần Giáp</Table.Cell>
                            </Table.Row>
                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell className="font-medium text-gray-900 dark:text-white">
                                    Trụ sở chính
                                </Table.Cell>
                                <Table.Cell>Thanh Hà, Nam Sơn, Sóc Sơn, Hà Nội</Table.Cell>
                            </Table.Row>
                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell className="font-medium text-gray-900 dark:text-white">
                                    Dịch vụ cung cấp
                                </Table.Cell>
                                <Table.Cell>
                                    <div>Bản vẽ kết cấu thép</div>
                                    <div>Bóc tách vật tư</div>
                                    <div>Dự toán công trình</div>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell className="font-medium text-gray-900 dark:text-white">
                                    Nhân viên
                                </Table.Cell>
                                <Table.Cell>8 người</Table.Cell>
                            </Table.Row>
                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell className="font-medium text-gray-900 dark:text-white">
                                    Phần mềm chuyên dụng
                                </Table.Cell>
                                <Table.Cell>
                                    <div>専用：S/F REAL4</div>
                                    <div>汎用: 実寸法師, Ari3</div>
                                </Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>
                </div>
            </div>
            {/* Dịch vụ */}
            <div className="relative my-12">
                <div className="absolute z-40 h-full w-full">
                    <div
                        id="services"
                        className="mb-10 pt-10 text-[26px] font-bold uppercase text-white"
                    >
                        Dịch Vụ
                    </div>
                    <ul className="grid grid-cols-3 justify-items-center text-[19px] font-medium text-white max-[701px]:grid-cols-1">
                        <li className="services-btn mb-10 w-[50%] border px-7 py-6">
                            <span>Bản vẽ kết cấu thép</span>
                        </li>
                        <li className="services-btn mb-10 w-[50%] border px-7 py-6">
                            <span>Bóc tách vật tư</span>
                        </li>
                        <li className="services-btn mb-10 w-[50%] border px-7 py-6">
                            <span>Dự toán công trình</span>
                        </li>
                    </ul>
                </div>
                <div
                    className="relative bg-fixed brightness-[.62]"
                    style={{
                        backgroundImage: `url("${slide2}")`,
                    }}
                >
                    <div className="relative h-[265px] max-[912px]:h-[365px] max-[701px]:h-[495px] max-[701px]:h-[575px]"></div>
                </div>
            </div>
            {/* Thành tựu */}
            <div>
                <div id="achievement" className="my-16 text-[26px] font-medium uppercase">
                    Các thành tựu
                </div>
                <ul className="grid grid-cols-3 justify-items-center max-[1024px]:grid-cols-1">
                    <li className="mb-20">
                        <CardModel title="Nhà Kho Xây Dựng Mới">
                            <div className="flex justify-center text-left text-[14px]">
                                <ul>
                                    <li className="text-center font-semibold">2165t</li>
                                    <li className="font-semibold">Phạm vi công việc</li>
                                    <li>- Bản vẽ tổng thể</li>
                                    <li>- Bản vẽ chi tiết</li>
                                    <li>- Bóc tách vật tư</li>
                                </ul>
                            </div>
                        </CardModel>
                    </li>
                    <li className="mb-20">
                        <CardModel title="Logitstic Tokyo công ty TOMBOW">
                            <div className="flex justify-center text-left text-[14px]">
                                <ul>
                                    <li className="text-center font-semibold">1241t</li>
                                    <li className="font-semibold">Phạm vi công việc</li>
                                    <li>- Bản vẽ tổng thể</li>
                                    <li>- Bản vẽ chi tiết</li>
                                    <li>- Bóc tách vật tư</li>
                                </ul>
                            </div>
                        </CardModel>
                    </li>
                    <li className="mb-20">
                        <CardModel title="Khách sạn GINZA" img={ginza}>
                            <div className="flex justify-center text-left text-[14px]">
                                <ul>
                                    <li className="text-center font-semibold">1110t</li>
                                    <li className="font-semibold">Phạm vi công việc</li>
                                    <li>- Bản vẽ tổng thể</li>
                                    <li>- Bản vẽ chi tiết</li>
                                    <li>- Bóc tách vật tư</li>
                                </ul>
                            </div>
                        </CardModel>
                    </li>
                </ul>
            </div>
            {/* Footer */}
            <FooterModel />
        </>
    );
}
