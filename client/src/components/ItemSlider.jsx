import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export function ItemSlider({
  SetZooomImg, images,
}) {
  const settings = {
    infinite: false,
    slidesToShow: 1,
    speed: 500,
    prewArrow: '.arrowPrev',
    centerMode: true,
  };

  return (
    <div className="slider">

      <Slider {...settings}>
        {images
                    && images.map((img) => (
                      <div
                        className="slide slide-2"
                      >
                        <img
                          src={img}
                          alt=""
                          onClick={() => SetZooomImg(img)}
                        />
                      </div>
                    ))}
      </Slider>
    </div>
  );
}
