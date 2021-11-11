import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (
        <div className="container">
            <Carousel >
                <Carousel.Item>
                    <img
                        className="slider d-block w-100"
                        src="https://wallpaperaccess.com/full/4258.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h2 className="text-danger">Yamaha Motor Co., Ltd. is a Japanese manufacturer of motorcycles.</h2>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="slider d-block w-100"
                        src="https://www.teahub.io/photos/full/6-62804_yamaha-motorcycles-r1-yamaha-bikes-wallpapers-desktop.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h2 className="text-danger">Yamaha Motor Co., Ltd. is a Japanese manufacturer of motorcycles.</h2>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="slider d-block w-100"
                        src="https://www.hdnicewallpapers.com/Walls/Big/Bikes/2020_Yamaha_YZF_R1_New_Bike_Wallpaper.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h2 className="text-danger">Yamaha Motor Co., Ltd. is a Japanese manufacturer of motorcycles.</h2>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;