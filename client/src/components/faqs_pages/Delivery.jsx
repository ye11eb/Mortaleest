import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Delivery({ ukrLoc, setIsMainOverlayed }) {
  const [isHiden, setIsHiden] = useState(false);

  useEffect(() => {
    setIsMainOverlayed(true);
  }, []);

  const navigate = useNavigate();

  const hiDeOverlay = () => {
    setIsHiden(true);
    setIsMainOverlayed(false);
    setTimeout(() => {
      navigate('/');
    }, 500);
  };

  return (
    <div
      className={isHiden ? 'Overlay hideOverlay' : 'Overlay showOverlay'}
    >
      <div className="overlay-top absolute_top faqs_page">
        <div className="ItemOverlay_top-box ">
          <div className="titleWarapperForBlur">
            <h1 className="headerOverlay">Delivery & Return</h1>
            <div
              className="crossHair_close"
              onClick={() => hiDeOverlay()}
            >
              <p className="close">+</p>
            </div>
          </div>
          <div className="overlay_Outline" />
        </div>
      </div>
      <div className="terms_container container">
        <div className="terms_rules_container">
          <div className="terms_rules">
            {ukrLoc ? (<p className="rule_subtitle">ДОСТАВКА ТА ПОВЕРНЕННЯ</p>) : (<p className="rule_subtitle">SHIPPING AND RETURNS</p>)}
            {ukrLoc ? (
              <p className="rule_text">
                ДОСТАВКА ПО ВСІХ КРАЇНАХ СВІТУ, ОКРІМ РОСІЇ ТА
                БІЛОРУСІ
              </p>
            ) : (
              <p className="rule_text">
                SHIPPING TO ALL COUNTRIES EXCEPT RUSSIA AND BELARUS
              </p>
            )}

            {ukrLoc ? (<p className="rule_subtitle">Світ:</p>) : (<p className="rule_subtitle">Worldwide:</p>)}
            {ukrLoc ? (
              <p className="rule_text">
                Ціна коливається в межах 10-30 € (Вартість доставки
                розраховуться від ваги та країни одержувача) Кінцева
                вартість сума автоматично обраховується при
                оформленні замовлення Гроші перед відправкою!
              </p>
            ) : (
              <p className="rule_text">
                The price ranges from 10-30 € (Shipping cost is calculated
                based on weight and the recipient's country)
                The final price is automatically calculated when placing an order
                Payment must be made before shipping!
              </p>
            )}

            {ukrLoc ? (<p className="rule_subtitle">Україна:</p>) : (<p className="rule_subtitle">Ukraine:</p>)}
            {ukrLoc ? (
              <p className="rule_text">
                Будь-яке замовлення 60-140 UAH Ви маєте сплатити
                доставку на пошті при отриманні!
              </p>
            ) : (
              <p className="rule_text">
                Any order costs 60-140 UAH
                You must pay for shipping at the post office upon receipt!
              </p>
            )}

            {ukrLoc ? (
              <p className="rule_subtitle">
                Оплата замовлення завжди здійснюється перед
                відправкою, післяплата не діє
              </p>
            ) : (
              <p className="rule_subtitle">
                Payment for the order is always made before shipping, cash on delivery is not
                available.
              </p>
            )}
            {ukrLoc ? (
              <p className="rule_text">
                Товар, замовлений у Mortaleest, ви можете повернути
                (обміняти) протягом 14 днів з моменту отримання,
                згідно із Законом України «Про захист прав
                споживача», якщо цей товар не потрапляє до переліку
                товарів належної якості, які не підлягають обміну
                (поверненню) згідно з Постановою Кабінету Міністрів
                України №172.
              </p>
            ) : (
              <p className="rule_text">
                You can return or exchange goods ordered from Mortaleest within 14 days of receipt,
                according to the Law of Ukraine "On Consumer Protection",
                if the goods do not fall into the list of goods of proper
                quality that are not subject to exchange (return) according
                to the Resolution of the Cabinet of Ministers of Ukraine No. 172.
              </p>
            )}

            {ukrLoc ? (
              <p className="rule_subtitle">
                Обов'язкові умови для повернення або обміну товару:
              </p>
            ) : (
              <p className="rule_subtitle">
                Mandatory conditions for returning or exchanging the goods:
              </p>
            )}
            <p className="rule_text">
              <div className="rule_text_li">
                {ukrLoc ? (
                  <p>
                    1. Товар має бути повністю укомплектований ;
                  </p>
                ) : (
                  <p>
                    1. The goods must be fully equipped ;
                  </p>
                )}
                {ukrLoc ? (
                  <p>
                    2. Наявність оригінальних та непошкоджених
                    ярликів ;
                  </p>
                ) : (
                  <p>
                    2. The presence of original and undamaged labels ;
                  </p>
                )}
                {ukrLoc ? (<p>3. Відсутність слідів експлуатації ;</p>)
                  : (<p>3. No signs of use ;</p>)}
              </div>
            </p>

            {ukrLoc ? (
              <p className="rule_subtitle">
                Для повернення/обміну товару та будь-яких запитаннь
                звертайтесь на пошту: !ПОШТА!@gmail.com
              </p>
            ) : (
              <p className="rule_subtitle">
                For returns/exchanges and any inquiries, please contact us at:
                !EMAIL!@gmail.com
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Delivery;
