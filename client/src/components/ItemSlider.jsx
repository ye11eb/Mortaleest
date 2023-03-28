/* eslint-disable no-unused-vars */
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useNavigate } from 'react-router-dom';

export function ItemSlider({ openedItem, setIsHiden, setIsMainOverlayed }) {
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
