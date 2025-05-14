import React, { useState } from 'react';
import { Link  } from 'react-router-dom';
import ModalVideo from 'react-modal-video';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Importing the images
import ArrowIcon from '../../assets/images/main-slider/arrow.png'; // Arrow icon
import Image1 from '../../assets/images/main-slider/3.jpeg'; // First image
import Image2 from '../../assets/images/main-slider/3.jpeg'; // Second image (use a different image if needed)

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    autoplay: {
        delay: 8500,
        disableOnInteraction: false,
    },
    loop: true,
};

function BannerSectionTwo({ className }) {
    const [isOpen, setOpen] = useState(false);
    
    return (
        <>
            <section className={`banner-section-two ${className || ''}`} id='home'>
                <Swiper {...swiperOptions} className="banner-carousel owl-theme">
                    {/* Slide Item 1 */}
                    <SwiperSlide className="slide-item">
                        <div className="bg-image" style={{ backgroundImage: `url(${Image1})`, filter: "blur(2px)"}}></div>
                        <div className="auto-container ">
                            <div className="content-box">
                                <span className="animate-2 text-warning fs-5 ">Your Security is our First Priority</span>
                                <h1 className="title animate-3">Security and IT Solutions for Home & Business</h1>
                                
                                <div className="btn-box animate-4">
                                    <a  href="#offer" className="theme-btn btn-style-one">
                                    <span className="btn-title">Discover more</span></a>  
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    {/* Slide Item 2 */}
                    <SwiperSlide className="slide-item">
                        <div className="bg-image" style={{ backgroundImage: `url(${Image2})`, filter: "blur(2px)" }}></div>
                        <div className="auto-container">
                            <div className="content-box">
                                <span className="animate-2 text-warning fs-5">Your Security is our First Priority</span>
                                <h1 className="title animate-3">Security and IT Solutions for Home & Business</h1>
                                <div className="btn-box animate-4">
                                    <a  href="#offer" className="theme-btn btn-style-one">
                                    <span className="btn-title">Discover more</span></a>  
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </section>
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setOpen(false)} />
        </>
    );
}

export default BannerSectionTwo;
