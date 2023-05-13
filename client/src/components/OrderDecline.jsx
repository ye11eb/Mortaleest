import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function OrderDecline({ setIsMainOverlayed, isUaLocation }) {
  const navigate = useNavigate();
  const [isHiden, setIsHiden] = useState(false);

  const hiDeOverlay = () => {
    setIsHiden(true);
    setIsMainOverlayed(false);
    setTimeout(() => {
      navigate('/');
    }, 500);
  };

  return (
    <div
      className={isHiden ? 'hideOverlay Overlay' : 'showOverlay Overlay'}
    >
      <div className="MainCart_container cart_page">
        <div className="ItemOverlay_top-box container">
          {isUaLocation
            ? (<h1 className="headerOverlay">СТАТУС ПОКУПКИ</h1>)
            : (<h1 className="headerOverlay">ORDER STATUS</h1>)}
          <div
            className="crossHair_close"
            onClick={() => hiDeOverlay()}
          >
            <div />

          </div>
        </div>
        {isUaLocation
          ? (
            <div className="order_ended">
              <h1>ПОМИЛКА ОПЛАТИ ; (</h1>
              <p>будь ласка, перевірте дані та спробуйте ще раз</p>
              <p>за додатковими питаннями звертайтесь на пошту: mortaleest@gmail.com</p>
              <div
                className="emempty_cart_btn btn"
                onClick={() => hiDeOverlay()}
              >
                <p>ПРОДОВЖИТИ ПОКУПКИ</p>
              </div>
            </div>
          )
          : (
            <div className="order_ended">
              <h1>PAYMENT ERROR ; (</h1>
              <p>please check the data and try again</p>
              <p>for additional questions, please contact: mortalest@gmail.com</p>
              <div
                className="emempty_cart_btn btn"
                onClick={() => hiDeOverlay()}
              >
                <p>CONTINUE SHOPPING</p>
              </div>
            </div>
          )}
      </div>
    </div>

  );
}

export default OrderDecline;
