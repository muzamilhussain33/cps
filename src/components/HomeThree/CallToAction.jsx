import React from 'react';
import { Link  } from 'react-router-dom';
import BackgroundImage from '../../assets/images/background/4.jpg'; 

function CallToActionFour({ className }) {
    return (
        <section
            className={`call-to-action-four ${className || ''}`}
            style={{ backgroundImage: `url(${BackgroundImage})` }}
        >
            <div className="auto-container">
                <div className="outer-box wow fadeInUp">
                    <div className="title-box">
                        <div className="sub-title text-warning">We’re here to secure your home and business.</div>
                        <h3 className="title">Looking for the Best Security & IT Solutions?</h3>
                    </div>
                    <div className="btn-box">
                        <Link to='/' className="theme-btn btn-style-two hvr-light">
                            <span className="btn-title">Discover more</span>
                        </Link >
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CallToActionFour;
