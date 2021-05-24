import React, {Component} from "react";
import Slider from "react-slick";
import './Slider.scss';

export default class ImageSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 2000,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplaySpeed: 9000,
            autoplay: true
        };
        return (
            <div className="image-slider">
                <Slider {...settings}>
                    {/* <div className="slide">
                        <video width="100%" controls autoplay>
                            <source src="movie.mp4" type="video/mp4"></source>
                        </video>
                    </div> */}
                    <div className="slide">
                        <img alt="adaa-8" src="https://ik.imagekit.io/bfx2aftyt/SeaSpa/Auf_Homepage/Slider/underwater-2966572_1920_X_iBYA-3vq7.jpg"/>
                    </div>
                    <div className="slide">
                        <img alt="adaa-6" src="https://ik.imagekit.io/bfx2aftyt/SeaSpa/Auf_Homepage/Slider/water-5366496_1920_kR6C4rDTR.jpg"/>
                    </div>
                    {/* <div className="slide">
                        <div>Test</div>
                        <img alt="sdfg-1" src="https://ik.imagekit.io/bfx2aftyt/SeaSpa/Auf_Homepage/emerald-4641424_1920_1__mkzEL8xaj5X.jpg"/>
                    </div>
                    <div className="slide">
                        <img alt="aasd-2" src="https://ik.imagekit.io/bfx2aftyt/SeaSpa/Auf_Homepage/seaweed-3524238_1920_1__BPjDT2dQc.jpg"/>
                    </div>  */}
                    {/* <div className="slide">
                        <img alt="adaa-3" src="https://ik.imagekit.io/bfx2aftyt/SeaSpa/Auf_Homepage/home-3593729_1920-2_XGktxEelB.jpg"/>
                    </div> */}
                    {/* <div className="slide">
                        <img alt="adaa-4" src="https://ik.imagekit.io/bfx2aftyt/SeaSpa/Auf_Homepage/WhatsApp_Image_2021-05-05_at_19.07.15_cDBQfq9Aol.jpeg"/>
                    </div>
                    <div className="slide">
                        <img alt="adaa-5" src="https://ik.imagekit.io/bfx2aftyt/SeaSpa/Auf_Homepage/WhatsApp_Image_2021-05-05_at_19.01.16_NToMncXR-bt.jpeg"/>
                    </div> */}
                    {/* <div className="slide">
                        <img alt="adaa-7" src="https://ik.imagekit.io/bfx2aftyt/SeaSpa/Auf_Homepage/Slider/sea-2755858_1920_lef84lTN2ITZ.jpg"/>
                    </div> */}
                    {/* <div className="slide">
                        <img alt="adsad-4" src="https://ik.imagekit.io/bfx2aftyt/SeaSpa/Auf_Homepage/coming-soon-2550190_1280_tByU9nQ__.jpg"/>
                    </div> */}
                </Slider>
            </div>
        );
    }
}