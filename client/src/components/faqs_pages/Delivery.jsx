import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Delivery = () => {
    const [isHiden, setIsHiden] = useState(false);

    const navigate = useNavigate();

    const hiDeOverlay = () => {
        setIsHiden(true);
        setTimeout(() => {
            navigate('/');
        }, 500);
    };

    return (
        <div
            className={isHiden ? 'Overlay hideOverlay' : 'Overlay showOverlay'}
        >
            <div className="crossHair_close" onClick={() => hiDeOverlay()}>
                <p className="close">+</p>
            </div>
            <div className="terms_container container">
                <h1 className="headerOverlay">Delivery & Return</h1>
                <div className="terms_rules_container">
                    <div className="terms_rules scroll">
                        <p className="rule_subtitle">ДОСТАВКА ТА ПОВЕРНЕННЯ</p>
                        <p className="rule_text">
                            ДОСТАВКА ПО ВСІХ КРАЇНАХ СВІТУ, ОКРІМ РОСІЇ ТА
                            БІЛОРУСІ
                        </p>

                        <p className="rule_subtitle">Світ:</p>
                        <p className="rule_text">
                            Ціна коливається в межах 10-30 € (Вартість доставки
                            розраховуться від ваги та країни одержувача) Кінцева
                            вартість сума автоматично обраховується при
                            оформленні замовлення Гроші перед відправкою!
                        </p>

                        <p className="rule_subtitle">Україна:</p>
                        <p className="rule_text">
                            Будь-яке замовлення 60-140 UAH Ви маєте сплатити
                            доставку на пошті при отриманні!
                        </p>

                        <p className="rule_subtitle">
                            Оплата замовлення завжди здійснюється перед
                            відправкою, післяплата не діє
                        </p>
                        <p className="rule_text">
                            Товар, замовлений у Mortaleest, ви можете повернути
                            (обміняти) протягом 14 днів з моменту отримання,
                            згідно із Законом України «Про захист прав
                            споживача», якщо цей товар не потрапляє до переліку
                            товарів належної якості, які не підлягають обміну
                            (поверненню) згідно з Постановою Кабінету Міністрів
                            України №172.
                        </p>

                        <p className="rule_subtitle">
                            Обов'язкові умови для повернення або обміну товару:
                        </p>
                        <p className="rule_text">
                            <div className="rule_text_li">
                                <p>
                                    1. Товар має бути повністю укомплектований ;
                                </p>
                                <p>
                                    2. Наявність оригінальних та непошкоджених
                                    ярликів ;
                                </p>
                                <p>3. Відсутність слідів експлуатації ;</p>
                            </div>
                        </p>

                        <p className="rule_subtitle">
                            Для повернення/обміну товару та будь-яких запитаннь
                            звертайтесь на пошту: !ПОШТА!@gmail.com
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Delivery;
