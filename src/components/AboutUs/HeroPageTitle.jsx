import React from 'react';
import { Link  } from 'react-router-dom';
import PageTitleBackground from '../../assets/images/background/page-title.jpg'; // Import the background image

function HeroPageTitle({ title, breadcrumb = [] }) {
    return (
        <>
            <section className="page-title" style={{ backgroundImage: `url(${PageTitleBackground})` }}>
                <div className="auto-container">
                    <div className="title-outer">
                        <h1 className="title">{title}</h1>
                        <ul className="page-breadcrumb">
                            {breadcrumb.map((value, index) => (
                                <li key={index} className="breadcrumb-item">
                                    <Link  to={value.Link }>{value.title}</Link >
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
}

export default HeroPageTitle;
