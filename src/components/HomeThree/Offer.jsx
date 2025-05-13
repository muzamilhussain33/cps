import React, { useState } from 'react';
import ModalVideo from 'react-modal-video'; 
import Image6 from '../../assets/images/resource/benefits.jpeg'; // Adjust path to your image

function OfferSectionTwo() {
    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <section className="offer-section-three pt-0" id='offer'>
                <div className="auto-container">
                    <div className="row">
                        {/* Content Column */}
                        <div className="content-column col-lg-6 col-md-12 order-2">
                            <div className="inner-column wow fadeInRight">
                                <div className="sec-title">
                                    <span className="sub-title">Company Benefits</span>
                                    <h2>Always Deliver More than you Expected</h2>
                                </div>
                                <div className="info-box">
                                    <span className="count">01</span>
                                    <h5 className="title">Security & Surveillance Systems</h5>
                                    <div className="text">We deliver cutting-edge CCTV, ANPR, access control, intercoms, and other surveillance solutions tailored to your safety needs.</div>
                                </div>
                                <div className="info-box">
                                    <span className="count">02</span>
                                    <h5 className="title">Complete ELV & Electrical Services</h5>
                                    <div className="text">From structured cabling to PVC/GI piping, we ensure reliable ELV and electrical installations with precise execution and expert maintenance.</div>
                                </div>
                                <div className="info-box">
                                    <span className="count">03</span>
                                    <h5 className="title">IT Infrastructure & Telecom Solutions</h5>
                                    <div className="text">We provide turnkey IT systems, telephone (PABX) installations, and smart networking services built to support your organization’s growth.

</div>
                                </div>
                            </div>
                        </div>

                        {/* Image Column */}
                        <div className="image-column col-lg-6 col-md-12 col-sm-12">
                            <div className="inner-column wow fadeInLeft">
                                <div className="image-box">
                                    <figure className="image">
                                        <img src={Image6} alt="Offer Image" />
                                    </figure>
                                    {/* <div className="video-box">
                                        <a onClick={() => setOpen(true)} className="play-btn lightbox-image">
                                            <i className="icon fa fa-play"></i>
                                        </a>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Video Modal */}
            {/* <ModalVideo
                channel='youtube'
                autoplay
                isOpen={isOpen}
                videoId="Fvae8nxzVz4" // Update with your actual video ID
                onClose={() => setOpen(false)}
            /> */}
        </>
    );
}

export default OfferSectionTwo;
