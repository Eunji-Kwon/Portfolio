import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { useHistory } from 'react-router-dom';
import '../styles/CustomStyles.css';


function Archive() {

    const image1 = process.env.PUBLIC_URL + '/assets/imgs/ICET_LABCHECK.png';
    const image2 = process.env.PUBLIC_URL + '/assets/imgs/Pizza-Order-system-img.png';
    const image3 = process.env.PUBLIC_URL + '/assets/imgs/empty.PNG';

    const history = useHistory();

    const handleClick = () => {
      history.push('/archive'); // Navigate to '/archive' path
    };
    // Slide setting
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        centerMode: true, 
        centerPadding: '15px', 
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    };

    return (
        <section id="archive" className="p-5 bg-light">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-auto">
                        <h2>Archive</h2>
                    </div>
                    <div className="col-md">
                        <h3 className="archive-button" onClick={handleClick}>See more</h3>
                    </div>
                </div>
                   <p>This is the Archive section with a slide gallery.</p>

                {/* Slide gallery */}
                <Slider {...settings}>
                    <div className="col">
                        <div className="card custom-card">
                            <img className="card-img-top" src={image1} alt="Card image cap" />
                            <div className="card-body">
                                <p className="card-text">Example text for image 1.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card custom-card">
                            <img className="card-img-top" src={image2} alt="Card image cap" />
                            <div className="card-body">
                                <p className="card-text">Example text for image 2.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card custom-card">
                            <img className="card-img-top" src={image3} alt="Card image cap" />
                            <div className="card-body">
                                <p className="card-text">Example text for image 3.</p>
                            </div>
                        </div>
                    </div>
                    {/* 필요한 만큼 추가 */}
                </Slider>
            </div>
        </section>
    );
}

export default Archive;
