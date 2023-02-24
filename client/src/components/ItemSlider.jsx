import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export function ItemSlider({ openedItem }) {
  const settings = {
    className: 'center',
    centerMode: true,
    infinite: false,
    centerPadding: '120px',
    slidesToShow: 1,
    speed: 500,
    prewArrow: '.arrowPrev',
  };
  return (
    <div className="slider">
      <Slider {...settings}>
        {openedItem
                    && openedItem.imgUrl.map((img) => (
                      <div
                        className="slide slide-2"
                        key={openedItem.imgUrl.indexOf(img)}
                      >
                        <img src={img} alt="" />
                      </div>
                    ))}
      </Slider>
    </div>
  );
}
