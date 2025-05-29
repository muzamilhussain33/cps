import { Link  } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useEffect, useRef } from 'react';
import icon1 from '../../assets/images/resource/png/cctv.png';
import icon2 from '../../assets/images/resource/png/ANPR.png';
import icon3 from '../../assets/images/resource/png/ACCESS-AGTES.png';
import icon4 from '../../assets/images/resource/png/ATTENDANCE- MACHINES.png';
import icon5 from '../../assets/images/resource/png/DOOR-ACCESS-CONTROLS.png';
import icon6 from '../../assets/images/resource/png/GATE-BARRIERS.png';
import icon7 from '../../assets/images/resource/png/INTERCOMS.png';
import icon8 from '../../assets/images/resource/png/s1.jpeg';
import icon9 from '../../assets/images/resource/png/LIGHT-FIXING.png';
import icon10 from '../../assets/images/resource/png/SECURITY-ALARM.png';
import icon11 from '../../assets/images/resource/png/SPEAKER-SYSTEMS.png';
import icon12 from '../../assets/images/resource/png/TELEPHONES.png';
import icon13 from "../../assets/images/resource/sidra.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/pagination';

function ServicesHomeThree({ className }) {
	const sliderRef = useRef();

	useEffect(() => {
  setTimeout(() => {
    sliderRef.current?.slickGoTo(0); // force re-rendering
  }, 100);
}, []);

	const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,           // enable autoplay
  autoplaySpeed: 3000,      // time between slides in ms (3000ms = 3 seconds)
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 540,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};



    return (
        <>
        <section className={`services-section-three ${className || ''}`} id='services'>
        <div className="auto-container">
			<div className="sec-title text-center">	
				<span className=" ">Expert team with years of experience and Professionalism</span>
				<br />
				<h2 className='sub-title fs-1 mt-3'>Services We Offer</h2>
			</div>
			<div className="outer-box">
				<div className="row justify-content-center">
					<Slider {...settings}>
					<div className="service-block-three col wow fadeInUp ">
						<div className="inner-box">
							<img src={icon1} className='icon p-10 ' alt="" />
							<h6 className="title"><Link>AI BASED CCTV<br/> CAMERA SYSTEM</Link ></h6>
							<div className="text">Home & Business</div>
						</div>
					</div>

					<div className="service-block-three col wow fadeInUp ">
						<div className="inner-box">
							<img src={icon13} className='icon p-10 ' alt="" />
							<h6 className="title"><Link>SIRA APPROVALS </Link ></h6>
							<div className="text">NOC/ AMC <br/>
								New or existing licenses</div>
						</div>
					</div>

					<div className="service-block-three col wow fadeInUp ">
						<div className="inner-box">
							<img src={icon8} className='icon p-10 ' alt="" />
							<h6 className="title"><Link>ELV/MEP <br/> System Drawings </Link ></h6>
							<div className="text">AutoCAD Architectural <br/>
								drawings,SSD, SPC, SVG, Security Alarm</div>
						</div>
					</div>

					<div className="service-block-three col wow fadeInUp" data-wow-delay="200ms">
						<div className="inner-box ">
							<img src={icon2} className='icon p-10 ' alt="" />
							<h6 className="title"><Link>ANPR SYSTEM</Link ></h6>
							<div className="text">Installation & maintenance</div>
						</div>
					</div>

					<div className="service-block-three col wow fadeInUp" data-wow-delay="400ms">
						<div className="inner-box ">
							<img src={icon3} className='icon p-10 ' alt="" />
							<h6 className="title"><Link>ACCESS GATES <br/>SYSTEM</Link ></h6>
							<div className="text">Turnstiles/ Parking Barriers Smart recognition system</div>
						</div>
					</div>

					<div className="service-block-three col wow fadeInUp" data-wow-delay="600ms">
						<div className="inner-box ">
							<img src={icon4} className='icon p-10 ' alt="" />
							<h6 className="title"><Link>ATTENDANCE <br/>MACHINES</Link ></h6>
							<div className="text">Time attendece system biometrice/phase/cards</div>
						</div>
					</div>

					<div className="service-block-three col wow fadeInUp" data-wow-delay="800ms">
						<div className="inner-box">
							<img src={icon5} className='icon p-10 ' alt="" />
							<h6 className="title"><Link>DOOR <br/>ACCESS CONTROLS </Link ></h6>
							<div className="text">Magnetic lock/smart access</div>
						</div>
					</div>
					<div className="service-block-three col wow fadeInUp" data-wow-delay="800ms">
						<div className="inner-box">
							<img src={icon6} className='icon p-10 ' alt="" />
							<h6 className="title"><Link>GATE <br/>BARRIERS</Link ></h6>
							<div className="text">Smart access/Integration 
							with car number plate recognition</div>
						</div>
					</div>
					<div className="service-block-three col wow fadeInUp" data-wow-delay="800ms">
						<div className="inner-box">
							<img src={icon7} className='icon p-10 ' alt="" />
							<h6 className="title"><Link>INTERCOMS <br/> DEVIECES</Link ></h6>
							<div className="text">Audio/video/mobile access</div>
						</div>
					</div>
					{/* <div className="service-block-three col wow fadeInUp" data-wow-delay="800ms">
						<div className="inner-box">
							<img src={icon8} className='icon p-10 ' alt="" />
							<h6 className="title"><Link  to="/service-details">IT <br/>SECURITY&ELV SOLUTIONS </Link ></h6>
							<div className="text">Providing the solutions for tech business</div>
						</div>
					</div> */}
					<div className="service-block-three col wow fadeInUp" data-wow-delay="800ms">
						<div className="inner-box">
							<img src={icon9} className='icon p-10 ' alt="" />
							<h6 className="title"><Link>LIGHT <br/>FIXING</Link ></h6>
							<div className="text">Shop, Office, Warehouse etc</div>
						</div>
					</div>
					<div className="service-block-three col wow fadeInUp" data-wow-delay="800ms">
						<div className="inner-box">
							<img src={icon10} className='icon p-10 ' alt="" />
							<h6 className="title"><Link>ALARM <br/>SYSTEM</Link ></h6>
							<div className="text">Grade 3 Integra, Sira Appoved System </div>
						</div>
					</div>
					<div className="service-block-three col wow fadeInUp" data-wow-delay="800ms">
						<div className="inner-box">
							<img src={icon11} className='icon p-10 ' alt="" />
							<h6 className="title"><Link>SPEAKER <br/>SYSTEMS</Link ></h6>
							<div className="text">Public address system</div>
						</div>
					</div>
					<div className="service-block-three col wow fadeInUp" data-wow-delay="800ms">
						<div className="inner-box">
							<img src={icon12} className='icon p-10 ' alt="" />
							<h6 className="title"><Link>TELEPHONE <br/>SYSTEM</Link ></h6>
							<div className="text">Ip based PABX system</div>
						</div>
					</div>
					</Slider>
				</div>
			</div>
		</div>
        </section>      
        </>
    );
}

export default ServicesHomeThree;
