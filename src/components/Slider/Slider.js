import React, {Component} from "react";
import Slider from "react-slick";
import './Slider.scss';

export default class ImageSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplaySpeed: 3500,
            autoplay: true
        };
        return (
            <div className="image-slider">
                <Slider {...settings}>
                    <div>
                        <img alt="sdfg-1" src="https://ik.imagekit.io/bfx2aftyt/tr:ar-4-3,w-1250/SeaSpa/Pixabay/Wasser-Mystery_xijSSrvHX10.jpg"/>
                    </div>
                    <div>
                        <img alt="aasd-2" src="https://ik.imagekit.io/bfx2aftyt/tr:ar-4-3,w-1250/SeaSpa/Pixabay/Welle-Kraft_VhXxzMqNpt.jpg"/>
                    </div>
                    <div>
                        <img alt="adaa-3" src="https://ik.imagekit.io/bfx2aftyt/tr:ar-4-3,w-1250/SeaSpa/Pixabay/Welle-Kraft1_3C-uVgR-Eqt.jpg"/>
                    </div>
                    <div>
                        <img alt="adsad-4" src="https://ik.imagekit.io/bfx2aftyt/tr:ar-4-3,w-1250/SeaSpa/Pixabay/Seetang-Unterwasser-Welle_BURI_m0ude.jpg"/>
                    </div>
                </Slider>
            </div>
        );
    }
}