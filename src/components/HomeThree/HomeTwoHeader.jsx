import React, { useEffect, useState  } from 'react';
import { Link  } from 'react-router-dom';
import logo1 from '../../assets/images/logo.png';
import logo2 from '../../assets/images/logo-2.png';
import logo4 from "../../assets/images/logo4.png"
import logo5 from "../../assets/images/logo5.png"
import logo3 from "../../assets/images/logo3.png"
import StickyMenu from '../../lib/StickyMenu';
import Navigation from '../Navigation.jsx';
import MobileMenu from '../MobileMenu.jsx';

function Header({ action, className, scroll }) {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isSearchPopupOpen, setSearchPopupOpen] = useState(false);
    useEffect(() => {
        StickyMenu(); // Initialize the sticky menu
    }, []);
    const toggleSearchPopup = () => {
        setSearchPopupOpen(prev => !prev);
        document.body.classList.toggle('moblie-search-active', !isSearchPopupOpen);
    };

    const closeSearchPopup = () => {
        setSearchPopupOpen(false);
        document.body.classList.remove('moblie-search-active');
    };
    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };

    const toggleMobileMenu = () => {
        setMobileMenuOpen(prev => !prev);
    };

    return (
        <>
        <header className={`main-header header-style-three ${className || ''}`}>
            {/* Header Top */}
            <div className="header-top">
                <div className="auto-container">
                    <div className="inner-container ">
                        <div className="top-left">
                            <ul className="social-icon-one">
                                <li><Link  to="https://www.facebook.com/share/1G5YY3q2tS/?mibextid=wwXIfr"><i className="fab fa-facebook"></i></Link ></li>
                                <li><Link to="https://www.tiktok.com/@coralplus.ae?_t=ZS-8wJc6gWSPDh&_r=1"><i className="fab fa-tiktok"></i></Link></li>
                                <li><Link to="https://g.co/kgs/p5DpJ8q"><i className="fab fa-google"></i></Link></li>
                            </ul>
                        </div>

                        <div className="top-right">
                            <ul className="list-style-one">
                                <li><i className="fa fa-envelope"></i> <Link  to="mailto:hr.callbackcrew@gmail.com">Sales@coralplus.ae</Link ></li>
                                <li><i className="fa fa-map-marker"></i> Deira, Dubai, U.A.E.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Header Top */}

            {/* Header Lower */}
            <div className="header-lower ">
                <div className="auto-container ">
                    <div className="main-box ">
                        <div className="logo-box ">
                            <div className="logo">
                                <Link  to="/"><img src={logo1} alt="Oitech" title="Oitech" /></Link >
                            </div>
                        </div>
                        <div className="nav-outer">
                            <nav className="nav main-menu">
                                <Navigation />
                            </nav>
                        </div>
                        {/* <div className="outer-box">
                            <div className="ui-btn-outer border-0">
                                <button className="ui-btn ui-btn search-btn" onClick={toggleSearchPopup}>
                                    <span className="icon lnr lnr-icon-search"></span>
                                </button>
                                <Link  to="#" className="ui-btn"><i className="lnr-icon-shopping-cart"></i></Link >
                            </div> */}

                            {/* Mobile Nav toggler */}
                            <div className="mobile-nav-toggler" onClick={toggleMobileMenu}>
                                <span className="icon lnr-icon-bars"></span>
                            </div>
                        {/* </div> */}
                    </div>
                </div>
            </div>
            {/* End Header Lower */}

            {/* Mobile Menu */}
            <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
                <div className="menu-backdrop" onClick={closeMobileMenu} />
                <nav className="menu-box">
                    <div className="upper-box">
                        <div className="nav-logo">
                            <Link  to="/"><img src={logo4} alt="Oitech" title="Oitech" /></Link >
                            <Link className='ml-15'  to="/"><img src={logo5} alt="Oitech" /></Link >
                        </div>
                        <div className="close-btn" onClick={closeMobileMenu}>
                            <i className="icon fa fa-times" />
                        </div>
                    </div>
                    <MobileMenu />
                    <ul className="contact-list-one">
                        <li>
                            {/*<!-- Contact Info Box -->*/}
                            <div className="contact-info-box">
                                <i className="icon lnr-icon-phone-handset"></i>
                                <span className="title">Call Now</span>
                                <a href="tel:+971588996975">+971588996975</a>
                            </div>
                        </li>
                        <li>
                            {/*<!-- Contact Info Box -->*/}
                            <div className="contact-info-box">
                                <span className="icon lnr-icon-envelope1"></span>
                                <span className="title">Send Email</span>
                                <a href="mailto:help@company.com">Sales@coralplus.ae</a>
                            </div>
                        </li>
                        {/* <li> */}
                            {/*<!-- Contact Info Box -->*/}
                            {/* <div className="contact-info-box">
                                <span className="icon lnr-icon-clock"></span>
                                <span className="title">Send Email</span>
                                Mon - Sat 8:00 - 6:30, Sunday - CLOSED
                            </div> */}
                        {/* </li> */}
                    </ul>
                    <ul className="social-Link d-flex justify-content-evenly">
                        <li><Link  to="https://www.facebook.com/share/1G5YY3q2tS/?mibextid=wwXIfr"><i className="fab fa-facebook"></i></Link ></li>
                        <li><Link to="https://www.tiktok.com/@coralplus.ae?_t=ZS-8wJc6gWSPDh&_r=1"><i className="fab fa-tiktok"></i></Link></li>
                        <li><Link to="https://g.co/kgs/p5DpJ8q"><i className="fab fa-google"></i></Link></li>
                    </ul>
                </nav>
            </div>
            {/* End Mobile Menu */}

            {/* Sticky Header */}
            <div className={`sticky-header ${scroll ? 'fixed-header animated slideInDown' : ''}`}>
                <div className="auto-container">
                    <div className="inner-container">
                        <div className="logo">
                            <Link  to="/"><img src={logo2} alt="Oitech" /></Link >
                        </div>

                        <div className="nav-outer">
                            <nav className="main-menu">
                                <div className="navbar-collapse show collapse clearfix">
                                    <Navigation />
                                </div>
                            </nav>

                            <div className="mobile-nav-toggler" onClick={toggleMobileMenu}>
                                <span className="icon lnr-icon-bars"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Sticky Header */}
        </header>
        <div className={`search-popup ${isSearchPopupOpen ? 'open' : ''}`}>
            <span className="search-back-drop" onClick={closeSearchPopup}></span>
            <button className="close-search" onClick={closeSearchPopup}><span className="fa fa-times" ></span></button>
            <div className="search-inner">
                <form method="post" action="/">
                    <div className="form-group">
                        <input type="search" name="search-field" placeholder="Search..." required />
                        <button type="submit"><i className="fa fa-search"></i></button>
                    </div>
                </form>
            </div>
        </div>
        
        </>
    );
}

export default Header;
