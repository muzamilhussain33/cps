// MobileMenu.jsx
import { useState } from "react";
import { Link  } from "react-router-dom"; // Ensure correct import for react-router-dom
import PDFViewer from "./PDFViewer";

const MobileMenu = () => {
    const [isActive, setIsActive] = useState({ status: false, key: "" });
    const [isSubActive, setSubIsActive] = useState({ status: false, key: "" });

    const handleClick = (key) => {
        setIsActive((prevState) =>
            prevState.key === key
                ? { status: false, key: "" }
                : { status: true, key }
        );
    };
    const handleSubClick = (key) => {
        // Handle second-level menu toggle
        setSubIsActive((prevState) =>
            prevState.key === key
                ? { status: false, key: "" }
                : { status: true, key }
        );
    };

    return (
        <>

        <ul className="navigation">
            <li>
                <Link  href="/">Home</Link >
                {/* <ul className={isActive.key === 1 ? "d-block" : "d-none"}>
                    <li><Link  to="/">Home page 01</Link ></li>
                    <li><Link  to="/home-two">Home page 02</Link ></li>
                    <li><Link  to="/home-three">Home page 03</Link ></li>
                    <li><Link  to="/home-four">Home page 04</Link ></li>
                    <li><Link  to="/home-five">Home page 05</Link ></li>
                </ul> */}
                {/* <div className={isActive.key === 1 ? "dropdown-btn active" : "dropdown-btn"} onClick={() => handleClick(1)} >
                    <i className="fa fa-angle-down"></i>
                </div> */}
            </li>
            <li>
               
                    <li><a  href='#about'>About</a ></li>
                   <li><a  href="#services">Services</a ></li>
                    {/* <li className="dropdown">
                        <Link  to="#">Team</Link >
                        <ul className={isSubActive.key === 8 ? "d-block" : "d-none"}>
                            <li><Link  to="/page-team">Team List</Link ></li>
                            <li><Link  to="/page-team-details">Team Details</Link ></li>
                        </ul>
                        <div className={isSubActive.key === 8 ? "dropdown-btn active" : "dropdown-btn"} onClick={() => handleSubClick(8)} >
                            <i className="fa fa-angle-down"></i>
                        </div> */}
                    {/* </li>
                    <li><Link  to="/page-faq">Faq</Link ></li>
                    <li><Link  to="/page-pricing">Pricing</Link ></li>
                    <li><Link  to="/page-testimonial">Testimonials</Link ></li>
                    <li><Link  to="/page-404">404</Link ></li>
                    <li><Link  to="elements">Elements</Link ></li>
                </ul> */}
               
            </li>
            <li>
                <li><a  href="#clients">Clients</a ></li>
                {/* <ul className={isActive.key === 5 ? "d-block" : "d-none"}>
                    <li><Link  to="/services">Services List</Link ></li>
                    <li><Link  to="/service-details">Service Details</Link ></li>
                </ul> */}
                {/* <div className={isActive.key === 5 ? "dropdown-btn active" : "dropdown-btn"} onClick={() => handleClick(5)} >
                    <i className="fa fa-angle-down"></i>
                </div> */}
            </li>
            {/* <li className="dropdown">
                <Link  to="#">Shop</Link >
                <ul className={isActive.key === 6 ? "d-block" : "d-none"}>
                    <li><Link  to="/products">Products</Link ></li>
                    <li><Link  to="/products-sidebar">Products with Sidebar</Link ></li>
                    <li><Link  to="/products-details">Product Details</Link ></li>
                    <li><Link  to="/cart">Cart</Link ></li>
                    <li><Link  to="/checkout">Checkout</Link ></li>
                </ul>
                <div className={isActive.key === 6 ? "dropdown-btn active" : "dropdown-btn"} onClick={() => handleClick(6)} >
                    <i className="fa fa-angle-down"></i>
                </div>
            </li> */}
            {/* <li className="dropdown">
                <Link  to="#">News</Link >
                <ul className={isActive.key === 4 ? "d-block" : "d-none"}>
                    <li><Link  to="/news-grid">News Grid</Link ></li>
                    <li><Link  to="/news-details">News Details</Link ></li>
                </ul>
                <div className={isActive.key === 4 ? "dropdown-btn active" : "dropdown-btn"} onClick={() => handleClick(4)} >
                    <i className="fa fa-angle-down"></i>
                </div>
            </li> */}
           <li><a href='#contact'>Contact</a ></li>
           {/* <li><a href="/company-profile.pdf" download>
  Download Company Profile (PDF)
</a></li> */}
           <li><PDFViewer /></li> 
        </ul>

        </>
    );
};

export default MobileMenu;