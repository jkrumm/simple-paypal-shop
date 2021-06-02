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
                        <div className="text">handerlesen</div>
                        <img alt="adaa-1" src="https://ik.imagekit.io/bfx2aftyt/SeaSpa/Auf_Homepage/Slider/Neu/seaweed-2672698_1920_Wufh3tER0.jpg"/>
                    </div>

                    <div className="slide">
                        {/* <div className="text">Schonend getrocknet</div> */}
                        <img alt="adaa-2" src="https://ik.imagekit.io/bfx2aftyt/SeaSpa/Auf_Homepage/Slider/Neu/seaweed-270426_1920_Z57uad12g.jpg"/>
                    </div>

                    <div className="slide">
                        {/* <div className="text">Aus Irland</div> */}
                        <img alt="adaa-3" src="https://ik.imagekit.io/bfx2aftyt/SeaSpa/Auf_Homepage/Slider/Neu/river-6162706_1920_MBqUTBC7T.jpeg"/>
                    </div>
                </Slider>
            </div>
        );
    }
}