import React from 'react';
import ContactImage from '../../assets/images/resource/contact.jpg'; 
import { FaWhatsapp } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { BsBrowserChrome } from "react-icons/bs";

function ContactSectionTwo() {
    return (
        <section className="contact-section-two pull-up mt-20" id='contact'>
            <div className="auto-container">
                <div className="row">
                    {/* Info Column */}
                    <div className="info-column col-xl-7 col-lg-6 col-md-12 col-sm-12 order-2">
                        <div className="inner-column wow fadeInRight">
                            <div className="sec-title">
                                <div className="sub-title">Get to know</div>
                                {/* <h3>OUR MISSION</h3> */}
                            </div>
                            <figure className="image overlay-anim">
                                <img src={ContactImage} alt="Contact" />
                            </figure>
                            <div className="info-box">
                                <span className="icon fa fa-check"></span>
                                <h5 className="title">OUR MISSION</h5>
                                <div className="text">
                                To deliver the best reliable solution in IT infrastructures, security systems, ELV solutions,
                                and help our clients to improve business efficiency.
                                </div>
                            </div>
                            <div className="info-box">
                                <span className="icon fa fa-check"></span>
                                <h5 className="title">OUR VISION</h5>
                                <div className="text">
                                To be the most valued & preferred service provider for all our clients
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form Column */}
                    <div className="form-column col-xl-5 col-lg-6 col-md-12 col-sm-12">
                        <div className="inner-column">
                            {/* Contact Form */}
                            <div className="contact-form light wow fadeInLeft">
                                <div className="title-box">
                                    <span className="sub-title">Contact us</span>
                                    <h3>GET IN TOUCH</h3>
                                </div>

                                {/* Contact Form */}
                                <form method="post" action="get" id="contact-form">
                                    <div className="form-group">
                                        {/* <input type="text" name="full_name" placeholder="Your Name" required /> */}
                                    </div>

                                    <div className="form-group">
                                        {/* <input type="text" name="Email" placeholder="Email Address" required /> */}
                                        <FaWhatsapp className='mr-10'/>
                                        +971588996975, +971588838616
                                    </div>

                                    <div className="form-group">
                                        {/* <input type="text" name="Phone" placeholder="Phone Number" required /> */}
                                        <CgMail className='mr-10'/>
                                        info@coralplus.ae
                                    </div>

                                    <div className="form-group">
                                        {/* <textarea name="message" placeholder="Write a Message" required></textarea> */}
                                        <BsBrowserChrome className='mr-10'/>
                                        www.coralplus.ae
                                    </div>

                                    {/* <div className="form-group">
                                        <button className="theme-btn btn-style-one" type="submit" name="submit-form">
                                            <span className="btn-title">Send a message</span>
                                        </button>
                                    </div> */}
                                </form>
                            </div>
                            {/* End Contact Form */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactSectionTwo;
