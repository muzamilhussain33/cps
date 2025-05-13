import React from 'react';
import { Link  } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/pagination';


import ClientImage from '../../assets/images/resource/client.png';
import ClientImage1 from '../../assets/images/resource/client1.png';
import ClientImage2 from '../../assets/images/resource/client2.png';
import ClientImage3 from '../../assets/images/resource/client3.png';
import ClientImage4 from '../../assets/images/resource/client4.png';
import ClientImage5 from '../../assets/images/resource/client5.png';
import ClientImage6 from '../../assets/images/resource/client6.png';
import ClientImage7 from '../../assets/images/resource/client7.png';
import ClientImage8 from '../../assets/images/resource/client8.png';
import ClientImage9 from '../../assets/images/resource/client9.png';

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 5,
    spaceBetween: 30,
    autoplay: {
        delay: 1200,
        disableOnInteraction: false,
    },
    loop: true,
    breakpoints: {
        320: {
            slidesPerView: 3,
        },
        575: {
            slidesPerView: 3,
        },
        767: {
            slidesPerView: 3,
        },
        991: {
            slidesPerView: 4,
        },
        1199: {
            slidesPerView: 5,
        },
        1350: {
            slidesPerView: 5,
        },
    }
};

function ClientHomeOne({ className }) {
    return (
        <>
            <section className="clients-section" id='clients'>
                <div className="auto-container">
                    <div className="sponsors-outer">
                        <Swiper {...swiperOptions} className="clients-carousel">
                            <SwiperSlide className="">
                                <Link  to="#"><img src={ClientImage} alt="Client 1" /></Link >
                            </SwiperSlide>
                            <SwiperSlide className="">
                                <Link  to="#"><img src={ClientImage1} alt="Client 2" /></Link >
                            </SwiperSlide>
                            <SwiperSlide className="">
                                <Link  to="#"><img src={ClientImage2} alt="Client 3" /></Link >
                            </SwiperSlide>
                            <SwiperSlide className="">
                                <Link  to="#"><img src={ClientImage3} alt="Client 4" /></Link >
                            </SwiperSlide>
                            <SwiperSlide className="">
                                <Link  to="#"><img src={ClientImage4} alt="Client 5" /></Link >
                            </SwiperSlide>
                            <SwiperSlide className="">
                                <Link  to="#"><img src={ClientImage5} alt="Client 6" /></Link >
                            </SwiperSlide>
                            <SwiperSlide className="">
                                <Link  to="#"><img src={ClientImage6} alt="Client 7" /></Link >
                            </SwiperSlide>
                            <SwiperSlide className="">
                                <Link  to="#"><img src={ClientImage7} alt="Client 8" /></Link >
                            </SwiperSlide>
                            <SwiperSlide className="">
                                <Link  to="#"><img src={ClientImage8} alt="Client 8" /></Link >
                            </SwiperSlide>
                            <SwiperSlide className="">
                                <Link  to="#"><img src={ClientImage9} alt="Client 8" /></Link >
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ClientHomeOne;
