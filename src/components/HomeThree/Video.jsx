import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import VideoThumbnail from '../../assets/images/resource/video-img.jpeg'; // Adjust the path as necessary

function VideoHomeTwo({ className }) {
    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <section className={`video-section ${className || ''}`}>
                <div className="auto-container">
                    <div className="outer-box">
                        <div className="title-box text-center">
                            <h3 className="title fs-1">SECURITY SYSTEMS<br />IT INFRASTRUCTURES 
                                        COMPLETE ELV SOLUTIONS</h3>
                            <div className="text">
                                It is not just a profession; <br />it's a passion for our company. We tend to believe...
                            </div>
                        </div>
                        <div className="video-box wow fadeInUp d-flex justify-content-center">
                            <figure className="">
                                <img src={VideoThumbnail} alt="Video Thumbnail" />
                            </figure>
                            {/* <div className="content">
                                <a onClick={() => setOpen(true)} className="play-btn lightbox-image">
                                    <i className="icon fa fa-play"></i>
                                </a>
                                <h2 className="title">Watch Video</h2>
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>
            {/* <ModalVideo
                channel='youtube'
                autoplay
                isOpen={isOpen}
                videoId="Fvae8nxzVz4" // Use your video ID here
                onClose={() => setOpen(false)}
            /> */}
        </>
    );
}

export default VideoHomeTwo;
