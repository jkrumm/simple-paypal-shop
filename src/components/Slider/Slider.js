import React, {Component} from "react";
import Slider from "react-slick";
import './Slider.scss';

export default class ImageSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 700,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplaySpeed: 4000,
            autoplay: true
        };
        return (
            <div className="image-slider">
                <Slider {...settings}>
                    {/* <div className="slide">
                        <video src="https://ik.imagekit.io/bfx2aftyt/SeaSpa/Auf_Homepage/SonnenuntergangSchnell_ya0_AQ5MK.mp4"></video>
                    </div> */}
                    <div className="slide">
                        {/* <div>Test</div> */}
                        <img alt="sdfg-1" src="https://ik.imagekit.io/bfx2aftyt/SeaSpa/Auf_Homepage/emerald-4641424_1920_1__mkzEL8xaj5X.jpg"/>
                    </div>
                    <div className="slide">
                        <img alt="aasd-2" src="https://ik.imagekit.io/bfx2aftyt/SeaSpa/Auf_Homepage/seaweed-3524238_1920_1__BPjDT2dQc.jpg"/>
                    </div>
                    <div className="slide">
                        <img alt="adaa-3" src="https://ik.imagekit.io/bfx2aftyt/SeaSpa/Auf_Homepage/home-3593729_1920-2_XGktxEelB.jpg"/>
                    </div>
                    {/* <div className="slide">
                        <img alt="adsad-4" src="https://ik.imagekit.io/bfx2aftyt/SeaSpa/Auf_Homepage/coming-soon-2550190_1280_tByU9nQ__.jpg"/>
                    </div> */}
                </Slider>
            </div>
        );
    }
}