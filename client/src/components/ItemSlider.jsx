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

  const navigate = useNavigate();

  const navigateToMain = () => {
    navigate('/');
  };

  const hiDeOverlay = (navigateFunc) => {
    setIsHiden(true);
    console.log('setIsHiden');
    setTimeout(() => {
      navigateFunc();
      setIsMainOverlayed(false);
    }, 500);
  };

  return (
    <div className="slider">
      <div
        className="crossHair_close"
        onClick={() => hiDeOverlay(navigateToMain)}
      >
        <p className="close">+</p>
      </div>
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
