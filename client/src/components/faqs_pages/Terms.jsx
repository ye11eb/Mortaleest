/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Terms({ ukrLoc, setIsMainOverlayed }) {
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
            <h1 className="headerOverlay">Terms & conditions</h1>
            <div
              className="crossHair_close"
              onClick={() => hiDeOverlay()}
            >
              <div />
            </div>
          </div>
          <div className="overlay_Outline" />
        </div>
      </div>
      <div className="terms_container container">
        <div className="terms_rules_container">
          <div className="terms_rules">
            {ukrLoc ? (
              <p className="rule_subtitle">
                УМОВИ ВИКОРИСТАННЯ ПЛАТФОРМИ ТА УМОВИ ДОГОВОРУ
                КУПІВЛІ-ПРОДАЖУ
              </p>
            ) : (
              <p className="rule_subtitle">
                TERMS OF USE OF THE PLATFORM AND TERMS OF THE PURCHASE AGREEMENT
              </p>
            )}
            {ukrLoc ? (
              <p className="rule_text">
                Ці Умови разом з будь-якими іншими документами,
                зазначеними в цих Умовах, визначають правила
                користування Платформою, умови публічного договору
                купівлі-продажу Товарів і надання послуг за
                допомогою Платформи. Будь ласка, уважно прочитайте
                ці Умови. Користуючись нашою Платформою або
                розміщуючи замовлення, Ви приймаєте на себе
                зобов'язання, передбачені цими Умовами. Якщо Ви не
                згодні з Умовами або будь-якої їх частиною, будь
                ласка, не використовуйте Платформу. Якщо у Вас
                виникли будь-які питання щодо цих Умов, Ви можете
                зв'язатися з нами за контактною інформацією.
              </p>
            ) : (
              <p className="rule_text">
                These Terms, together with any other documents referred to
                in these Terms, govern the rules of using the Platform, the
                terms of the public purchase agreement for goods and services
                through the Platform. Please read these Terms carefully. By using
                our Platform or placing an order, you agree to the obligations set
                forth in these Terms. If you do not agree with the Terms or any part thereof,
                please do not use the Platform. If you have any questions regarding these Terms,
                you may contact us using the contact information provided.
              </p>
            )}

            {ukrLoc ? (
              <p className="rule_subtitle">
                1. ТЕРМІНИ ТА ВИЗНАЧЕННЯ
              </p>
            ) : (
              <p className="rule_subtitle">
                1. TERMS AND DEFINITIONS
              </p>
            )}
            {ukrLoc ? (
              <p className="rule_text">
                1.1. Всі терміни з великої літери вживаються в
                наступних значеннях: 1.1.1. Веб-сайт - веб-сайт
                Продавця, розміщений в Інтернеті за адресою:
                http://!МОРТАЛІСТ! (також згадується як
                "Платформа"). 1.1.2. Ви - Користувач або Покупець, в
                залежності від контексту. 1.1.3. Договір - договір
                купівлі-продажу, укладений на відстані між Покупцем
                і Продавцем, умови якого визначаються цими Умовами.
                1.1.4. Користувач - відвідувач Веб-сайту. 1.1.5.
                Покупець - Користувач, який розміщує на Платформі
                замовлення на покупку Товару, представленого на
                Платформі. 1.1.6. Продавець або Ми - фізична
                особа-підприємець Волошин Маріанна Андріївна, який
                здійснює свою діяльність відповідно до законодавства
                України, юридична адреса: !ЮРИДИЧНА АДРЕСА!. 1.1.7.
                Товар - одяг, взуття, аксесуари і будь-яка інша
                продукція з асортименту, представленого на Платформі
                для продажу. 1.1.8. Умови - ці умови використання
                Платформи та умови Договору.
              </p>
            ) : (
              <p className="rule_text">
                1.1. All terms with a capital letter are used in the
                following meanings: 1.1.1. Website - the Seller's
                website, located on the Internet at the address: http://!MORTALIST!
                (also referred to as the "Platform"). 1.1.2. You - the User or Buyer
                , depending on the context. 1.1.3. Agreement - a distance purchase
                agreement concluded between the Buyer and the Seller, the terms of
                which are determined by these Terms. 1.1.4. User - a visitor of the Website.
                1.1.5. Buyer - a User who places an order on the Platform to purchase a Product
                presented on the Platform. 1.1.6. Seller or We - a sole proprietor Voloshyn Marianna
                Andriivna, who carries out her activities in accordance with the
                legislation of Ukraine,
                legal address: !LEGAL ADDRESS!. 1.1.7. Product - clothing,
                footwear, accessories, and any
                other product from the assortment presented on the Platform
                for sale. 1.1.8. Terms - these
                terms of use of the Platform and the terms of the Agreement.
              </p>
            )}

            {ukrLoc ? (<p className="rule_subtitle">2. ЗАГАЛЬНІ ПОЛОЖЕННЯ</p>)
              : (<p className="rule_subtitle">2. GENERAL PROVISIONS</p>)}
            {ukrLoc ? (
              <p className="rule_text">
                2.1. Ці Умови є єдиними умовами, які діють щодо
                використання цієї Платформи, і замінюють будь-які
                інші умови. 2.2. Ці Умови можуть бути змінені в
                односторонньому порядку Продавцем, тому ми радимо
                Вам регулярно перевіряти їх актуальність, так як на
                момент використання Вами Платформи або розміщення
                замовлення, застосовуються Умови, що діють на такий
                момент. 2.3. Використовуючи Платформу, Ви
                погоджуєтесь з наступними положеннями: 2.3.1. Ви
                можете використовувати Платформу тільки з метою
                розміщення законних запитів і замовлень. 2.3.2. Ви
                не маєте права розміщувати спекулятивні або
                помилкові замовлення, або замовлення, що здійснені з
                метою шахрайства. Якщо у нас є підстави вважати, що
                Ви розмістили таке замовлення, ми маємо право
                скасувати таке замовлення і повідомити про це
                компетентні органи державної влади; 2.3.3.
                Розміщуючи замовлення на Платформі, Ви гарантуєте,
                що Ви повністю дієздатні і досягли 18-ти річного
                віку. Якщо Вам менше 18-ти років, Ви гарантуєте, що
                користуєтеся Платформою з дозволу батьків або
                опікуна/піклувальника; 2.3.4. Ви погоджуєтесь не
                копіювати, не відтворювати, не створювати, не
                перевидавати, не завантажувати, не друкувати, не
                публікувати, не публікувати повторно, не
                транслювати, не записувати, не передавати або
                будь-яким чином поширювати веб-сторінки або
                матеріали Платформи, або комп'ютерні коди, або
                елементи Платформ без попередньої письмової згоди
                Продавця. крім випадків, коли метою є особисте
                користування; 2.3.5. Ви не маєте права змінювати або
                розповсюджувати будь-який зміст Платформи, включаючи
                без обмежень розповсюдження логотипів і торгових
                марок Продавця. 2.3.6. Ви погоджуєтеся не завдавати
                шкоди, не порушувати і не впливати на безпеку
                будь-якої частини Платформи, її змісту або будь-якої
                пов'язаної з нею мережі або програмного
                забезпечення. 2.3.7. Продавець зберігає за собою
                право заблокувати доступ до Платформи будь-якому
                Користувачеві в разі порушення положень, зазначених
                вище в цьому розділі Умов. 2.3.8. Ви також повинні
                надати нам коректну адресу електронної пошти,
                поштову адресу та / або інші дані, і Ви
                погоджуєтеся, що ми маємо право на використання
                таких даних для ідентифікації Вас як користувача або
                Покупця, а також для контакту з Вами при
                необхідності (див. нашу Політику конфіденційності та
                використання файлів cookie на Платформі). 2.3.9. У
                разі якщо Ви надали неповну, некоректну або
                помилкову інформацію, ми не зможемо виконати Ваше
                замовлення.
              </p>
            )
              : (
                <p className="rule_text">
                  2.1. These Terms and Conditions are the only conditions that apply to the use of this Platform and replace any other conditions. 2.2. These Terms and Conditions may be unilaterally amended by the Seller, therefore we advise you to regularly check their relevance, as at the time of using the Platform or placing an order, the Terms and Conditions in effect at that time will apply. 2.3. By using the Platform, you agree to the following terms: 2.3.1. You may use the Platform solely for the purpose of placing lawful requests and orders. 2.3.2. You are not authorized to place speculative or erroneous orders, or orders made for the purpose of fraud. If we have reason to believe that you have placed such an order, we have the right to cancel it and report it to the competent state authorities. 2.3.3. By placing an order on the Platform, you warrant that you are fully capable and have reached the age of 18. If you are under 18, you guarantee that you are using the Platform with the permission of your parents or legal guardians. 2.3.4. You agree not to copy, reproduce, create, republish, upload, print, publish, republish, broadcast, record, transmit or otherwise distribute web pages or materials of the Platform, or computer codes, or elements of the Platform without the prior written consent of the Seller, except where the purpose is personal use; 2.3.5. You are not authorized to modify or distribute any content of the Platform, including without limitation the distribution of the Seller's logos and trademarks. 2.3.6. You agree not to damage, interfere with or affect the security of any part of the Platform, its content or any related network or software.2.3.7. The Seller reserves the right to block access to the Platform for any User who violates the provisions stated in this section of the Terms. This means that if a user violates any of the terms mentioned in this section, the seller has the right to block their access to the platform. It is important for users to follow the rules and regulations stated in the terms and conditions to avoid being blocked. 2.3.8. You must provide us with a valid email address, postal address, and/or other information, and you agree that we have the right to use such information to identify you as a user or purchaser and to contact you when necessary (see our Privacy Policy and use of cookies on the Platform). This means that users are required to provide accurate contact information such as email and postal address. The seller has the right to use this information to identify the user and to contact them when necessary. Users can refer to the seller's Privacy Policy to understand how their personal information is being used and handled on the platform. 2.3.9. If you provide incomplete, incorrect, or erroneous information, we will not be able to fulfill your order. This means that if a user provides incomplete or incorrect information, the seller will not be able to fulfill their order. It is important for users to provide accurate information to ensure that their orders are processed correctly.
                </p>
              )}

            {ukrLoc ? (<p className="rule_subtitle">3. ДОСТУПНІСТЬ ТОВАРІВ</p>) : (<p className="rule_subtitle">3. AVAILABILITY OF PRODUCTS</p>)}
            {ukrLoc ? (
              <p className="rule_text">
                3.1.Товари, які ми пропонуємо на Платформі доступні
                на всій території України та світу, за винятком
                тимчасово окупованих територій і населених пунктів
                України, де органи державної влади України тимчасово
                не здійснюють свої повноваження. У разі якщо
                доставка на Вашу адресу неможлива, ми повідомимо Вам
                про це.
              </p>
            ) : (
              <p className="rule_text">
                3.1. The products we offer on the Platform are available throughout Ukraine and the world, except for temporarily occupied territories and settlements in Ukraine where the Ukrainian government temporarily does not exercise its powers. If delivery to your address is not possible, we will notify you about it.
              </p>
            )}

            {ukrLoc ? (<p className="rule_subtitle">4. УКЛАДЕННЯ ДОГОВОРУ</p>) : (<p className="rule_subtitle">4. CONTRACT AGREEMENT</p>)}
            {ukrLoc ? (
              <p className="rule_text">
                4.1. Відповідно до Договору, Продавець передає у
                власність Покупця Товар, зазначений в замовленні
                Покупця, розміщеному за допомогою Платформи, а
                Покупець зобов'язується оплатити і прийняти Товар
                згідно з цими Умовами. 4.2. Звертаємо Вашу увагу, що
                фотографії, які супроводжують Товар на веб-сайті, є
                просто ілюстраціями до нього і можуть відрізнятися
                від фактичного зовнішнього вигляду Товару. Опис /
                характеристики, які супроводжують Товар, надають
                основну, але не вичерпну інформацію про такий Товар.
                Ви можете ознайомитися з описом Товару на Платформі,
                однак для отримання додаткової інформації Вам слід
                зв'язатися з нами. Всі сертифікати якості, що є
                обов’язковими відповідно до законодавства України,
                надаються на прохання Покупця. 4.3. Ви самостійно і
                на свій розсуд можете розмістити замовлення на
                http://!МОРТАЛІСТ!. У разі виникнення додаткових
                питань щодо розміщення замовлень, Ви можете
                звернутися за контактною адресою. 4.4. Підтверджуючи
                замовлення, Ви підтверджуєте, що Ви належним чином
                проінформовані Продавцем відповідно до частини 2
                статті 13 Закону України "Про захист прав
                споживачів" про: 4.4.1. найменування та
                місцезнаходження Продавця; 4.4.2. порядок прийняття
                претензій; 4.4.3. основні характеристики і
                властивості обраного Товару; 4.4.4. ціною Товару,
                включаючи плату за доставку та умови оплати; 4.4.5.
                гарантійний термін Товару, умови його використання;
                4.4.6. період прийняття пропозицій (оферти); 4.4.7.
                порядок розірвання Договору. 4.5. У разі
                необхідності уточнення будь-якої інформації,
                зазначеної вище, Ви можете звернутися до нас за
                контактною адресою. 4.6. Договір вважається
                укладеним, а пропозиція Продавця про його укладення
                вважається повністю прийнятою Покупцем, з моменту
                підтвердження замовлення Покупцем. 4.7. Після
                підтвердження і розміщення замовлення Ви отримаєте
                на Вашу електронну адресу електронне повідомлення з
                інформацією про Ваше замовлення. Будь ласка, уважно
                прочитайте це повідомлення. У разі виявлення помилок
                у Вашому замовленні, просимо негайно повідомити про
                це за допомогою форми зворотного зв'язку на
                Платформі.
              </p>
            ) : (<p className="rule_text">4.1. In accordance with the Agreement, the Seller transfers ownership of the Goods specified in the Buyer's order placed through the Platform to the Buyer, and the Buyer agrees to pay for and accept the Goods in accordance with these Terms. 4.2. Please note that the photographs accompanying the Goods on the website are merely illustrations of the Goods and may differ from the actual appearance of the Goods. The description/specifications accompanying the Goods provide basic but not exhaustive information about the Goods. You can familiarize yourself with the description of the Goods on the Platform, but for additional information, you should contact us. All mandatory quality certificates under Ukrainian law are provided at the request of the Buyer. 4.3. You can independently and at your discretion place an order on http://!MORTALIST!. In case of additional questions regarding placing orders, you can contact the contact address. 4.4. By confirming the order, you confirm that you have been properly informed by the Seller in accordance with Part 2 of Article 13 of the Law of Ukraine "On Consumer Protection" about: 4.4.1. the name and location of the Seller; 4.4.2. the procedure for accepting claims; 4.4.3. the basic characteristics and properties of the selected Goods; 4.4.4. the price of the Goods, including the delivery fee and payment terms; 4.4.5. the warranty period of the Goods, conditions of use; 4.4.6. the period for accepting proposals (offers); 4.4.7. the procedure for terminating the Agreement. 4.5. If you need clarification on any of the information above, you can contact us at the contact address. 4.6. The Agreement is considered concluded, and the Seller's proposal for its conclusion is considered fully accepted by the Buyer, from the moment of confirmation of the order by the Buyer. 4.7. After confirmation and placement of the order, you will receive an email to your email address with information about your order. Please read this message carefully. In case of errors in your order, please notify us immediately.</p>)}

            {ukrLoc ? (<p className="rule_subtitle">5. НАЯВНІСТЬ ТОВАРІВ</p>) : (<p className="rule_subtitle">5. AVAILABILITY OF GOODS</p>)}
            {ukrLoc ? (
              <p className="rule_text">
                5.1. Всі замовлення на Товари приймаються за умови
                їх наявності. 5.2. Якщо замовленого Вами товару
                немає в наявності, ми відразу, але не пізніше, ніж
                протягом тридцяти (30) днів, наступних за днем
                розміщення Вами замовлення, повідомимо Вам про це за
                допомогою відповідного електронного повідомлення на
                Вашу електронну адресу або зв’яжемось з Вами іншим
                шляхом і повідомимо про строки виготовлення Товару
                або будемо вправі виключити відповідний Товар з
                замовлення / скасувати замовлення. 5.3. У разі, якщо
                передплачений замовлення скасований повністю або
                частково, його вартість у відповідній частині
                повертається Покупцю.
              </p>
            ) : (
              <p className="rule_text">
                5.1. All orders for goods are accepted subject to their availability. 5.2. If the goods you ordered are not available, we will notify you immediately, but no later than thirty (30) days after the day you placed the order, by means of a corresponding electronic message to your email address or contact you by other means and inform you of the delivery times of the goods, or we may exclude the relevant goods from the order / cancel the order. 5.3. In case the prepaid order is cancelled completely or partially, its cost is returned to the buyer in the corresponding part.
              </p>
            )}

            {ukrLoc ? (<p className="rule_subtitle">6. ЦІНА І ОПЛАТА</p>) : (<p className="rule_subtitle">6.PRICE AND PAYMENTS</p>)}
            {ukrLoc ? (
              <p className="rule_text">
                6.1. Ціни, зазначені на Веб-сайті, включають в себе
                встановлені законом податки, але не включають в себе
                вартість доставки. Ціна, повідомлена вам до
                здійснення покупки, зазначена в повідомленні про
                доставку і буде являти собою фактичну ціну вашого
                замовлення. 6.2. Ціни можуть бути змінені в
                будь-який час, проте (з урахуванням винятків,
                зазначених вище) будь-яка зміна не повинна впливати
                на замовлення, які були розміщені і підтверджені до
                відповідної зміни ціни. 6.3. Будь-ласка, майте на
                увазі, що ми не відшкодовуємо зміну ціни Товарів в
                разі дії знижок. 6.4. Ви можете оплатити замовлення
                за допомогою платіжних карт Visa, MasterCard, якщо
                інше не передбачено цими Умовами. Залежно від
                способу оплати та від суми Ваших операцій можуть
                застосовуватися певні обмеження.
              </p>
            ) : (<p className="rule_text">6.1. The prices indicated on the Website include legally required taxes but do not include the cost of delivery. The price notified to you prior to making a purchase will be indicated in the delivery notification and will represent the actual price of your order. 6.2. Prices may be changed at any time, but (subject to the exceptions outlined above) any change should not affect orders that were placed and confirmed prior to the relevant price change. 6.3. Please note that we do not compensate for changes in the prices of Goods due to discounts. 6.4. You may pay for your order using Visa or MasterCard payment cards, unless otherwise provided for in these Terms. Depending on the payment method and the amount of your transactions, certain restrictions may apply.</p>)}

            {ukrLoc ? (<p className="rule_subtitle">7. ДОСТАВКА</p>) : (<p className="rule_subtitle">7. DELIVERY </p>)}
            {ukrLoc ? (
              <p className="rule_text">
                7.1. Доставка товарів здійснюється уповноваженими
                або третіми особами по Нашому дорученню (такими як
                сервіси доставки "Нова Пошта" та інші). Всі умови
                доставки застосовуються відповідно до правил
                доставки вищезазначених осіб. 7.2.Доставка
                вважається виконаною або замовлення доставленим в
                момент підписання документів про отримання
                замовлення за узгодженою адресою доставки. 7.3.
                Разом з Товаром Продавець направляє Покупцеві
                відповідний розрахунковий документ (касовий чек) на
                електронну пошту або за номером телефону.
              </p>
            ) : (
              <p className="rule_text">
                7.1. Delivery of goods is carried out by authorized or third parties on Our behalf (such as delivery services like "Nova Poshta" and others). All delivery conditions apply in accordance with the delivery rules of the aforementioned parties. 7.2. Delivery is considered completed or the order is considered delivered at the moment of signing the documents for receiving the order at the agreed delivery address. 7.3. Together with the Goods, the Seller sends the Buyer the relevant payment document (cash receipt) by email or phone number.
              </p>
            )}
            {ukrLoc ? (
              <p className="rule_subtitle">
                8. РИЗИК ВИПАДКОВОЇ ЗАГИБЕЛІ І ПЕРЕХІД ПРАВА
                ВЛАСНОСТІ
              </p>
            ) : (
              <p className="rule_subtitle">
                8. RISK OF ACCIDENTAL LOSS AND TRANSFER OF OWNERSHIP
              </p>
            )}
            {ukrLoc ? (
              <p className="rule_text">
                8.1. Ризик випадкової загибелі Товару переходить до
                Вас з моменту виникнення права власності, а саме з
                моменту передачі Товару кур'єру для доставки.
              </p>
            ) : (
              <p className="rule_text">
                8.1. The risk of accidental loss of the Goods passes to You from the moment of acquisition of ownership rights, namely from the moment of transfer of the Goods to the courier for delivery.
              </p>
            )}

            {ukrLoc ? (
              <p className="rule_subtitle">
                9. ПРАВИЛА ОБМІНУ І ПОВЕРНЕННЯ ТОВАРУ
              </p>
            ) : (
              <p className="rule_subtitle">
                9. RULES OF EXCHANGE AND RETURN OF GOODS
              </p>
            )}
            {ukrLoc ? (
              <p className="rule_text">
                9.1. Покупець має право протягом 14 (чотирнадцяти)
                робочих днів з дати отримання замовленого Товару
                належної якості (не рахуючи дня отримання Товару)
                обміняти цей товар на інший аналогічний товару у
                продавця, якщо отриманий товар не задовольнив
                Покупця за формою, габаритами , фасоном, кольором,
                розміром або з інших причин, або товар не може бути
                використаний Покупцем за призначенням. 9.2. Обмін
                Товару належної якості провадиться, якщо він не
                використовувався і якщо збережено його товарний
                вигляд, споживчі властивості, пломби і ярлики. 9.3.
                Перелік Товарів, що не підлягають обміну та
                поверненню на підставах, визначених у п. 10.1. цього
                Договору, затверджується Постановою Кабінету
                Міністрів України від 19 березня 1994 №172. 9.4.
                Вимоги Покупця про обмін Товару належної якості, а
                також вимоги Покупця про обмін (заміні) Товару з
                істотними недоліками, при наявності у Продавця
                Товару, необхідного для здійснення обміну або
                заміни, підлягають негайному задоволенню Продавцем,
                але в будь-якому випадку не пізніше 14
                (чотирнадцяти) робочих днів з моменту отримання від
                Покупця зазначеного Товару. 9.5. Обмін Товару
                належної якості, а також обмін (заміна) Товару з
                істотними недоліками проводиться Продавцем при
                наявності у Покупця відповідного розрахункового
                документа встановленої форми (квитанції, товарного
                або касового чека), що підтверджує продаж Товару
                Покупцеві, з позначкою про дату продажу (дату
                передачі) товару . 9.6. Якщо на момент звернення
                Покупця до Продавця з вимогою про обмін Товару
                належної якості на інший аналогічний товар необхідно
                Покупцеві для обміну товару не виявиться у продажу у
                Продавця, Покупець має право: 9.7. або обміняти
                придбаний Товар на будь-який інший товар з числа
                Товарів, що є у продажу, Продавець з відповідним
                перерахуванням вартості Товару згідно чинного
                законодавства України; 9.8. або розірвати цей
                Договір; 9.9. або обміняти отриманий товар на інший
                аналогічний товар при першому ж його надходження в
                продаж у Продавця. При цьому Продавець
                зобов'язується в день надходження такого Товару в
                продаж повідомити про це Покупця; 9.10. Повернення
                Покупцем Товару належної якості, а також повернення
                Покупцем Товару з істотним недоліками в зв'язку з
                обміном або заміною такого Товару здійснюється в
                порядку, встановленому розділом 9 цього Договору.
              </p>
            ) : (
              <p className="rule_text">
                9.1. The buyer has the right to exchange the goods of proper quality for another similar item from the seller within 14 (fourteen) working days from the date of receipt of the ordered goods of proper quality (excluding the day of receipt) if the received item does not satisfy the buyer in terms of form, size, style, color, or for any other reason, or if the item cannot be used by the buyer for its intended purpose. 9.2. The exchange of goods of proper quality is carried out if it has not been used and if its commercial appearance, consumer properties, seals, and labels have been preserved. 9.3. The list of goods that are not subject to exchange and return on the grounds specified in clause 10.1 of this Agreement is approved by Resolution of the Cabinet of Ministers of Ukraine No. 172 dated March 19, 1994. 9.4. The buyer's requirements for the exchange of goods of proper quality, as well as the buyer's requirements for the exchange (replacement) of goods with significant defects, if the seller has the necessary goods for exchange or replacement, are to be satisfied immediately by the seller, but in any case no later than 14 (fourteen) working days from the moment of receiving the item specified by the buyer. 9.5. The exchange of goods of proper quality, as well as the exchange (replacement) of goods with significant defects, is carried out by the seller if the buyer has the appropriate payment document of the established form (receipt, product or cash receipt), which confirms the sale of the goods to the buyer, with a mark indicating the date of sale (date of transfer) of the goods. 9.6. If at the time of the buyer's request to the seller for the exchange of goods of proper quality for another similar item, the necessary item for exchange is not available for sale by the seller, the buyer has the right to: 9.7. exchange the purchased item for any other item that is available for sale, with a corresponding transfer of the item's value in accordance with the current legislation of Ukraine; 9.8. terminate this Agreement; 9.9. or exchange the received item for another similar item upon its first arrival for sale by the seller. In this case, the Seller undertakes to inform the Buyer about the arrival of such Product for sale on the day of its arrival. 9.10. The return by the Buyer of a product of proper quality, as well as the return of a product with significant defects due to exchange or replacement, is carried out in the manner established by section 9 of this Agreement.
              </p>
            )}

            {ukrLoc ? (<p className="rule_subtitle">10. ВІДПОВІДАЛЬНІСТЬ</p>) : (<p className="rule_subtitle">10. RESPONSIBILITY </p>)}

            {ukrLoc ? (
              <p className="rule_text">
                10.1. Наша відповідальність щодо будь-яких Товарів,
                придбаних через Платформу, обмежена вартістю такого
                Товару. 10.2. Продавець звільняється від
                відповідальності за порушення Умов, якщо таке
                порушення викликане дією обставин непереборної сили,
                що включають будь-які дії, події, не настання події,
                акт бездіяльності або непередбачувану ситуацію поза
                нашим обґрунтованим контролем, і, зокрема, включає
                без обмежень такі обставини: 10.2.1. страйки,
                блокування або інші конфлікти; 10.2.2. громадські
                заворушення, масові заворушення, вторгнення,
                терористичні атаки або загроза терористичних атак,
                військові дії (з оголошенням або без оголошення
                війни), загроза військових дій або підготовка до
                військових дій; 10.2.3. пожежі, вибухи, шторми,
                повені, землетруси, обвали, епідемії чи інші
                стихійні лиха; 10.2.4. неможливість використання
                залізниць, судів, повітряного транспорту або
                автомобілів, а також інших громадських і приватних
                транспортних засобів; 10.2.5. неможливість
                використання громадських або приватних
                телекомунікаційних мереж; 10.2.6. акти, декрети,
                постанови або обмеження будь-якого уряду;
                10.2.7.будь-які страйки працівників транспортних
                компаній, пошти або інші види страйків в
                транспортних компаніях, ненадання послуг
                транспортними компаніями або аварійні випадки. 10.3.
                Ні в якому разі, ми не несемо відповідальність за:
                10.3.1. непрямі збитки Покупця або третіх осіб, які
                виникли як похідні від основних збитків або шкоди,
                будь-яким способом і через правопорушень (включаючи
                недбалість) порушення умов Договору або з будь-яких
                інших причин, навіть якщо такі збитки або збиток
                можна було передбачити, включаючи без обмежень такі
                збитки:
                <div className="rule_text_li">
                  <ul className="rule_text_ul">
                    <li>втрата прибутку або доходу;</li>
                    <li>втрачені комерційні можливості;</li>
                    <li>не укладення договору;</li>
                    <li>втрата очікуваних заощаджень;</li>
                    <li>втрата даних;</li>
                    <li>
                      збитки в результаті некоректного
                      управління і втрата робочого часу.
                    </li>
                  </ul>
                </div>
                10.3.2. будь-які дії та / або бездіяльність, що є
                прямим або непрямим результатом будь-яких дій /
                бездіяльності будь-яких третіх осіб; 10.3.3.
                використання (неможливість використання) і будь-які
                наслідки використання (неможливості використання)
                Покупцем обраної ним форми оплати Товарів. 10.4.
                Наша Платформа може містити посилання на веб-сайти і
                матеріали третіх осіб. Такі посилання розміщені
                виключно в інформативних цілях, і ми не можемо
                контролювати зміст таких веб-сайтів і матеріалів.
                Відповідно, ми не несемо відповідальність будь-якого
                характеру за будь-які збитки чи шкоду, які можуть
                виникнути в результаті використання таких посилань.
              </p>
            ) : (
              <p className="rule_text">
                10.1. Our liability for any Goods purchased through the Platform is limited to the value of such Goods. 10.2. The Seller shall be released from liability for any breach of the Terms if such breach is caused by force majeure circumstances, including any actions, events, non-events, acts of omission or unforeseeable situations beyond our reasonable control, and in particular includes without limitation the following circumstances: 10.2.1. strikes, lockouts or other labor disputes; 10.2.2. civil commotion, riots, invasions, terrorist attacks or threat of terrorist attacks, war (whether declared or not) or threat of preparation for war; 10.2.3. fires, explosions, storms, floods, earthquakes, subsidence, epidemics or other natural disasters; 10.2.4. inability to use railways, shipping, aircraft, motor transport, or other public or private transport means; 10.2.5. inability to use public or private telecommunications networks; 10.2.6. acts, decrees, regulations or restrictions of any government; 10.2.7. any strikes by workers of transport companies, post offices, or other types of strikes in transport companies, failure to provide services by transport companies or emergencies. 10.3. Under no circumstances do we accept liability for: 10.3.1. indirect losses of the Buyer or third parties arising as derivative from primary losses or damage in any way and through infringements (including negligence) of the terms of the Contract or for any other reason, even if such losses or damage were foreseeable, including without limitation such losses as:
                <div className="rule_text_li">
                  <ul className="rule_text_ul">
                    <li>loss of profit or income;</li>
                    <li>lost commercial opportunities;</li>
                    <li>failure to enter into a contract;</li>
                    <li>loss of expected savings;</li>
                    <li>loss of data;</li>
                    <li>
                      losses resulting from improper management and loss of working time.
                    </li>
                  </ul>
                </div>
                10.3.2. Any actions and/or inactions that are a direct or indirect result of the actions/inactions of any third party;10.3.3. The use (or inability to use) and any consequences of the use (or inability to use) by the Buyer of the chosen form of payment for Goods. 10.4. Our Platform may contain links to third-party websites and materials. Such links are provided for informational purposes only, and we cannot control the content of such websites and materials. Accordingly, we do not assume any liability of any kind for any damages or harm that may arise from the use of such links.
              </p>
            )}

            {ukrLoc ? (
              <p className="rule_subtitle">
                11. ПОВІДОМЛЕННЯ І ЗВОРОТНІЙ ЗВ'ЯЗОК
              </p>
            ) : (
              <p className="rule_subtitle">
                11. NOTIFICATIONS AND FEEDBACK
              </p>
            )}
            {ukrLoc ? (
              <p className="rule_text">
                11.1. Ви можете відправляти будь-які повідомлення за
                контактною адресою на нашій Платформі. 11.2. Для
                спілкування з Вами, ми використовуємо Ваші контактні
                дані, зазначені при оформленні замовлення або
                запиту. Ми можемо відправляти Вам електронні
                повідомлення. 11.3. Ми будемо раді отримати Ваші
                коментарі та відгуки. Ви можете надсилати свої
                коментарі та відгуки за контактною інформацією на
                нашій Платформі та соціальних мережах або за формою
                зворотного зв’язку.
              </p>
            ) : (
              <p className="rule_text">
                11.1. You may send any notifications to us through the contact address provided on our Platform. 11.2. To communicate with you, we use the contact information you provided when placing an order or making a request. We may send you electronic messages. 11.3. We welcome your comments and feedback. You can send your comments and feedback through the contact information on our Platform and social media channels or through the feedback form.
              </p>
            )}

            {ukrLoc ? (
              <p className="rule_subtitle">
                12. ІНТЕЛЕКТУАЛЬНА ВЛАСНІСТЬ І ПЕРСОНАЛЬНІ ДАНІ
              </p>
            ) : (
              <p className="rule_subtitle">
                12. INTELLECTUAL PROPERTY AND PERSONAL DATA
              </p>
            )}
            {ukrLoc ? (
              <p className="rule_text">
                12.1. Права інтелектуальної власності на все
                програмне забезпечення, торговельні марки і
                матеріали, які надаються на Платформі або з її
                допомогою, належать Продавцю і / або
                ліцензіарам/ліцензіатам/правовласникам і захищені
                законодавством про авторське право та право
                інтелектуальної власності. Їх зберігання, друк і
                демонстрація можливі виключно для особистого
                використання. Ніхто, крім Продавця, не має право
                публікувати, змінювати, розповсюджувати або
                будь-яким іншим способом відтворювати в будь-якому
                форматі будь-які матеріали або їх копії, розміщений
                на Платформі, і не має право використовувати такі
                матеріали для будь-яких комерційних цілей. 12.2.
                Використовуючи Платформу, Ви даєте Продавцю свою
                згоду на обробку персональних даних відповідно до
                Закону України "Про захист персональних даних" та
                нашою Політикою конфіденційності та використання
                файлів cookie
              </p>
            ) : (
              <p className="rule_text">
                12.1. Intellectual property rights to all software, trademarks, and materials provided on or through the Platform belong to the Seller and/or licensors/licensees/owners and are protected by copyright and intellectual property laws. Their storage, printing, and demonstration are possible only for personal use. No one except the Seller has the right to publish, modify, distribute, or in any other way reproduce in any format any materials or copies thereof placed on the Platform, and no one has the right to use such materials for any commercial purposes. 12.2. By using the Platform, you give the Seller your consent to the processing of personal data in accordance with the Law of Ukraine "On Protection of Personal Data" and our Privacy Policy and use of cookie files.
              </p>
            )}

            {ukrLoc ? (
              <p className="rule_subtitle">
                13. ПЕРЕДАЧА ПРАВ І ЗОБОВ'ЯЗАНЬ
              </p>
            ) : (
              <p className="rule_subtitle">
                13. TRANSFER OF RIGHTS AND OBLIGATIONS
              </p>
            )}
            {ukrLoc ? (
              <p className="rule_text">
                13.1. Договір, укладений між нами та Вами, є
                обов'язковим для Вас, нас, та наших відповідних
                правонаступників і цесіонаріїв. 13.2. Ви не маєте
                права відступати, обтяжувати або будь-яким іншим
                чином відчужувати Договір або будь-які права і
                зобов'язання, які виникають з такого Договору, без
                нашої попередньої письмової згоди, крім випадків,
                прямо зазначених в цих Умовах.. 13.3. Ми маємо право
                без Вашої згоди передавати, відступати, обтяжувати,
                передавати в рамках субпідряду або іншим чином
                відчужувати Договір в будь-який час протягом терміну
                дії Договору. Щоб уникнути двозначних тлумачень
                будь-яка така передача, поступка, обтяження або інше
                відчуження не впливають на Ваші права, надані Вам як
                покупцю чинним законодавством, не скасовують, не
                зменшують і не обмежують будь-яким іншим чином
                будь-яку гарантію, яка могла бути надана Вам нами.
              </p>
            ) : (
              <p className="rule_text">
                13.1. 13.1. The agreement between us and you is binding on you, us, and our respective successors and assigns. 13.2. You do not have the right to assign, encumber or otherwise transfer the agreement or any rights or obligations arising from such agreement without our prior written consent, except as expressly provided in these Terms. 13.3. We have the right to transfer, assign, encumber, subcontract or otherwise dispose of the agreement at any time during the term of the agreement without your consent. However, any such transfer, act, encumbrance, or other disposition does not affect your rights granted to you as a buyer by applicable law, nor does it cancel, reduce, or otherwise limit any warranty that may have been provided to you by us.
              </p>
            )}

            {ukrLoc ? (
              <p className="rule_subtitle">
                14. НЕДІЙСНІСТЬ ПОЛОЖЕНЬ
              </p>
            ) : (
              <p className="rule_subtitle">
                14. INVALIDITY OF PROVISIONS
              </p>
            )}
            {ukrLoc ? (
              <p className="rule_text">
                14.1.У разі якщо будь-які положення цих Умов і / або
                положення Договору визнані судом або іншим
                компетентним органом недійсними повністю або в
                будь-який їх частини, або на думку обох сторін вони
                є такими, що не можуть бути виконані, таке положення
                виконується в максимально можливому обсязі для
                реалізації намірів сторін, а решта Умов та (або)
                Договору зберігають юридичну силу в повному обсязі.
              </p>
            ) : (
              <p className="rule_text">
                14.1. If any provision of these Terms and/or the Contract is found by a court or other competent authority to be wholly or partly invalid, or both parties agree that they are incapable of being performed, that provision shall be enforced to the maximum extent possible to achieve the parties' intentions, and the remaining provisions of the Terms and/or the Contract shall remain in full force and effect.
              </p>
            )}

            {ukrLoc ? (
              <p className="rule_subtitle">
                15. НАШЕ ПРАВО ЗМІНЮВАТИ ЦІ УМОВИ
              </p>
            ) : (
              <p className="rule_subtitle">
                15. OUR RIGHT TO AMEND THESE TERMS
              </p>
            )}
            {ukrLoc ? (
              <p className="rule_text">
                15.1. Розміщуючи замовлення, Ви приймаєте ці Умови,
                опубліковані на Платформі на момент розміщення
                Вашого замовлення. 15.2. Ми маємо право час від часу
                переглядати і змінювати ці Умови в односторонньому
                порядку.
              </p>
            ) : (
              <p className="rule_text">
                15.1. By placing an order, you accept these Terms as published on the Platform at the time of placing your order.15.2. We have the right to review and amend these Terms from time to time, unilaterally.
              </p>
            )}

            {ukrLoc ? (
              <p className="rule_subtitle">
                16. РЕКВІЗИТИ ВІДПОВІДАЛЬНОЇ ОСОБИ
              </p>
            ) : (
              <p className="rule_subtitle">
                16. CONTACT DETAILS OF THE RESPONSIBLE PERSON
              </p>
            )}
            <p className="rule_text">
              <ul>
                {ukrLoc ? (
                  <li>
                    Фізична особа-підприємець: Волошин Маріанна
                    Андріївна
                  </li>
                ) : (
                  <li>
                    Individual entrepreneur: Voloshyn Marianna Andriivna
                  </li>
                )}
                {ukrLoc ? (<li>Юридична адреса: !ЮРИДИЧНА АДРЕСА!</li>) : (<li>Legal address: !LEGAL ADDRESS!</li>)}
                <li>
                  Email:
                  {' '}
                  <a href="mailto:mortaleest@gmail.com?subject=Feedback&body=Message">MORTALIST</a>
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Terms;
