/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Policy({ ukrLoc, setIsMainOverlayed }) {
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
    <div className={isHiden ? 'Overlay hideOverlay' : 'Overlay showOverlay'}>
      <div className="overlay-top absolute_top faqs_page">
        <div className="ItemOverlay_top-box ">
          <div className="titleWarapperForBlur">
            <h1 className="headerOverlay">Privacy Policy</h1>
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

            {ukrLoc ? (
              <p className="rule_subtitle">
                ПОЛІТИКА КОНФІДЕНЦІЙНОСТІ ТА ПРАВИЛА ОБРОБКИ COOKIE
              </p>
            ) : (
              <p className="rule_subtitle">
                PRIVACY POLICY AND COOKIE PROCESSING RULES
              </p>
            )}

            {ukrLoc ? (
              <p className="rule_text">
                Ми дбаємо про захист ваших персональних даних, тому ми обробляємо їх відповідно до усіх вимог законодавства України, а також - там, де це можливо - законодавства Європейського Союзу. Користуючись нашим Веб-сайтом ви автоматично надаєте згоду на обробку Ваших персональних даних у відповідності із даною політикою.
              </p>
            ) : (
              <p className="rule_text">
                We care about protecting your personal data, and we process it in accordance with all the requirements of Ukrainian legislation and, where possible, European Union legislation. By using our Website, you automatically consent to the processing of your personal data in accordance with this policy.
              </p>
            )}

            {ukrLoc ? (
              <p className="rule_subtitle">
                1. ОБРОБКА ДАНИХ
              </p>
            ) : (
              <p className="rule_subtitle">
                1. DATA PROCESSING
              </p>
            )}
            { ukrLoc ? (
              <p className="rule_text">
                1.1. Коли ви відвідуєте наш Веб-сайт http://!МОРТАЛІСТ! (далі - Веб-сайт), розміщуєте на ньому замовлення, слідкуєте за нашими новинами та оновленнями, користуєтеся знижками, Ми просимо Вас надати нам свої персональні дані, зокрема, своє ім’я, прізвище, по-батькові, адресу електронної пошти, номер телефону та адресу доставки (країна, місто, вулиця, номер дому та апартаментів, поштовий індекс). 1.2. У майбутньому ми також можемо зберігати інформацію про: вибраний вами товар, замовлений вами товар, дату замовлення та дату оплати товару, суму оплаченого замовлення (товару), статус оплати замовлення (товару). 1.3. Ми будемо використовувати ваші персональні дані для наступних цілей: 1.3.1. обробки ваших замовлень, продажу та доставки вам наших товарів; 1.3.2. надсилання вам листів з нашими новинами, оновленнями, цікавими пропозиціями; 1.3.3. спілкування з вами. 1.4. Ми також збираємо інформацію (зокрема, про вашу IP-адресу, сторінки Веб-сайту, який ви відвідували) для складання та аналізу статистичних даних та для безпеки нашого Веб-сайту. 1.5. Всі ваші персональні дані обробляються фізичною особою-підприємством Волошин Маріанною Андріївною, який здійснює свою діяльність відповідно до законодавства України, юридична адреса: !ЮРИДИЧНА АДРЕСА! (далі - ФОП) та офіційно найманими працівниками, під повним контролем ФОП. Відповідно до законодавства України, ФОП Волошин Маріанна Андріївна є власником персональних даних, а відповідно до законодавства Європейського Союзу - їх контролером. 1.6. У маркетингових цілях, а також для послуг доставки, персональні дані можуть передаватися третім особам. Такі треті сторони обробляють ваші дані згідно з нашими інструкціями, але відповідно до політики конфіденційності зазначених сторін. Зверніть увагу, що, сервери з інформацією, яка зберігається, можуть бути розташовані за межами України. 1.7. Підставами для обробки ваших персональних даних можуть бути: 1.7.1. замовлення вами наших товарів (підставою є укладення та виконання договору, а також попередні дії, необхідні для його укладення); 1.7.2. ваша явна згода на обробку нами або третьою стороною ваших персональних даних (підставою є згода на обробку); 1.7.3. комерційна діяльність (дана діяльність - це наш законний інтерес та підстава для збору персональних даних). 1.8. Умови обробки ваших персональних даних залежать від мети їх обробки, а також від застосованої технології (це стосується файлів cookie). Наприклад, ваші персональні дані, пов’язані з придбанням та доставкою товарів, оброблятимуться протягом 90 (дев’яноста) календарних днів з дати вашого замовлення. Персональні дані для маркетингових цілей оброблятимуться довше - до 2 (двох) років, щоб ви завжди були в курсі наших новин, спеціальних пропозицій тощо. 1.9. Умови обробки ваших персональних даних третіми особами не встановлюються нами і повністю залежать від затверджених ними правил.
              </p>
            )
              : (
                <p className="rule_text">
                  1.1. When you visit our website http://!MORTALIST! (hereinafter referred to as the "Website"), place an order, follow our news and updates, use discounts, we ask you to provide us with your personal data, including your name, surname, patronymic, email address, phone number, and delivery address (country, city, street, house and apartment number, postal code). 1.2. In the future, we may also store information about the product you have selected, the product you have ordered, the date of the order, and the date of payment for the product, the amount paid for the order (product), and the payment status of the order (product). 1.3. We will use your personal data for the following purposes: 1.3.1. processing your orders, selling and delivering our products to you; 1.3.2. sending you letters with our news, updates, and interesting offers; 1.3.3. communicating with you. 1.4. We also collect information (including your IP address and the pages of the Website you have visited) for compiling and analyzing statistical data and for the security of our Website. 1.5. All your personal data is processed by the individual entrepreneur Voloshyn Marianna Andriivna, who operates in accordance with Ukrainian legislation, with a legal address: !LEGAL ADDRESS! (hereinafter referred to as the "IE") and officially employed workers under the full control of the IE. According to Ukrainian legislation, the IE Voloshyn Marianna Andriivna is the owner of personal data, and according to European Union legislation - their controller. 1.6. For marketing purposes and also for delivery services, personal data may be transferred to third parties. Such third parties process your data according to our instructions, but in accordance with the privacy policy of those parties. Please note that servers with stored information may be located outside of Ukraine. 1.7. The grounds for processing your personal data may be: 1.7.1. Your order of our products (the basis is the conclusion and execution of the contract, as well as the necessary prior actions for its conclusion); 1.7.2. Your explicit consent to the processing of your personal data by us or a third party (the basis is consent to processing); 1.7.3. Commercial activity (this activity is our legitimate interest and basis for collecting personal data). 1.8. The terms of processing your personal data depend on the purpose of their processing, as well as the technology used (this applies to cookie files). For example, your personal data related to the purchase and delivery of goods will be processed for 90 (ninety) calendar days from the date of your order. Personal data for marketing purposes will be processed for a longer period - up to 2 (two) years so that you are always informed of our news, special offers, etc. 1.9. The terms of processing your personal data by third parties are not established by us and depend entirely on the rules approved by them.
                </p>
              )}

            { ukrLoc ? (
              <p className="rule_subtitle">
                2. ПРАВА
              </p>
            ) : (
              <p className="rule_subtitle">
                2. RIGHTS
              </p>
            )}
            {ukrLoc ? (
              <p className="rule_text">
                2.1. Ви завжди можете звернутися до офіційного тексту закону за таким посиланням:
                <a href="http://zakon3.rada.gov.ua/laws/show/2297-17">http://zakon3.rada.gov.ua/laws/show/2297-17</a>
                {' '}
                . 2.2. Ви маєте право: 2.2.1. знати джерела, з якого збираються ваші дані, де вони зберігаються, з якою метою вони обробляються, а також суб’єкта господарювання, який «керує» обробкою таких даних, та їх місцезнаходження (місце проживання); 2.2.2. отримувати від нас інформацію про умови доступу до ваших даних, зокрема інформацію про осіб, яким ваші дані можуть бути передані; 2.2.3. отримати доступ до ваших особистих даних. Зокрема, ви можете подати нам запит на те, чи ми обробляємо ваші персональні дані, і - запитати та отримати копію ваших персональних даних. Ми розглянемо такі запити протягом 30 календарних днів; 2.2.4. подати претензію із запереченням щодо обробки ваших персональних даних.Така претензія повинна бути мотивованою; 2.2.5. вимагати зміни або видалення ваших персональних даних, якщо такі дані обробляються незаконно або вони недостовірні. Така вимога повинна бути мотивованою; 2.2.6. захистити ваші персональні дані від незаконної обробки та випадкової втрати, знищення тощо; 2.2.7. звертатись в суд, Уповноваженого Верховної Ради України з прав людини або використовувати інші засоби захисту - якщо ви вважаєте, що ваші права були порушені; 2.2.8. зробити застереження, щоб обмежити обробку ваших персональних даних при наданні згоди на обробку. Таке застереження може стосуватися, наприклад, періоду обробки персональних даних або їх обсягу; 2.2.9. відкликати згоду, яку ви раніше давали на обробку ваших персональних даних. Ви не маєте право відкликати згоду лише в тому випадку, якщо така згода була єдиною підставою для обробки ваших персональних даних. Наприклад, якщо ми обробляємо ваші дані для того, щоб доставити вам товари (іншими словами, щоб виконати наше зобов'язання перед вами), ви не можете відкликати свою згоду, інакше ми не зможемо виконати ваше замовлення; 2.2.10. знати, як функціонує автоматична обробка ваших персональних даних (якщо така є), а також захист від «автоматизованого» рішення, яке може мати наслідки для вас (якщо рішення приймається програмним забезпеченням).
              </p>
            ) : (
              <p className="rule_text">
                2.1. You can always refer to the official text of the law at the following link:
                <a href="http://zakon3.rada.gov.ua/laws/show/2297-17">http://zakon3.rada.gov.ua/laws/show/2297-17</a>
                {' '}
                .2.2. You have the right to: 2.2.1. know the sources from which your data is collected, where they are stored, for what purpose they are processed, as well as the business entity that "manages" the processing of such data and their location (place of residence); 2.2.2. receive information from us about the conditions for accessing your data, in particular information about persons to whom your data may be transferred; 2.2.3. access your personal data. In particular, you can request from us whether we process your personal data and - request and receive a copy of your personal data. We will consider such requests within 30 calendar days; 2.2.4. file a claim objecting to the processing of your personal data. Such a claim must be justified; 2.2.5. demand changes or deletion of your personal data if such data is processed illegally or is inaccurate. Such a demand must be justified; 2.2.6. protect your personal data from illegal processing and accidental loss, destruction, etc.; 2.2.7. apply to the court, the Authorized Person of the Verkhovna Rada of Ukraine for Human Rights, or use other means of protection - if you believe that your rights have been violated; 2.2.8. make a reservation to restrict the processing of your personal data when giving consent to processing. Such a reservation may relate, for example, to the period of processing personal data or their volume; 2.2.9. withdraw consent that you previously gave for the processing of your personal data. You do not have the right to withdraw your consent only in the case where such consent was the only basis for the processing of your personal data. For example, if we process your data to deliver goods to you (in other words, to fulfill our obligation to you), you cannot withdraw your consent, otherwise, we will not be able to fulfill your order; 2.2.10. know how the automatic processing of your personal data (if any) works, as well as protection against "automated" decisions that have legal consequences for you or similarly significantly affect your rights.
              </p>
            )}

            {ukrLoc ? (
              <p className="rule_subtitle">
                3. КУКІ
              </p>
            ) : (
              <p className="rule_subtitle">
                3. COOKIE
              </p>
            )}
            {ukrLoc ? (
              <p className="rule_text">
                3.1. «Cookie» - це невелика частина даних, яка надсилається з нашого Веб-сайту (або з іншого домену) і зберігається веб-браузером на вашому комп’ютері, мобільному телефоні або іншому портативному пристрої. 3.2. Файли cookie можуть використовуватися для зберігання ваших паролів або інших ідентифікаційних даних, налаштувань перегляду Веб-сайту, продуктів, які ви обираєте під час замовлення на Веб-сайті, а також для таких цілей, як збір статистики та маркетинг. 3.3. Файли cookie, збережені на нашому Веб-сайті, зчитуються Веб-сайтом кожного разу, коли ви знову відвідуєте Веб-сайт, і вам більше не потрібно повторно вводити паролі, вибираючи товари, які вже переміщено в кошик. 3.4. Файли cookie допомагають вам краще використовувати наш Веб-сайт, а також допомагають нам краще зрозуміти вас - дізнатися про ваші уподобання та запропонувати персоналізовані продукти. 3.5. Більшість веб-браузерів автоматично приймають файли cookie, однак ви можете змінити ці налаштування. Детальний опис того, як це зробити, можна знайти в Інтернеті, перейшовши на веб-сайт розробника вашого веб-браузера. На жаль, якщо ви вимкнете файли cookie, більша функціональність Веб-сайту буде недоступна для вас, включаючи можливість замовлення товарів через наш Веб-сайт. 3.6. Як і багато інших Веб-сайтів, ми використовуємо такі типи файлів cookie: 3.6.1. технічні файли cookie. Ці файли cookie є невід’ємною частиною належного функціонування нашого Веб-сайту і використовуються в технічних цілях, таких як збереження вибраних товарів, перехід до їх оплати тощо. Зазвичай ці файли cookie є «сесійними», тобто зберігаються до моменту, пока ви не закрили веб-браузер; 3.6.2. функціональні файли cookie. Ці файли cookie дозволяють нашому Веб-сайту зберігати логіни, вибирати мову, ваше місцезнаходження, тощо - для зручнішого використання Веб-сайту. Такі файли cookie зберігаються досить довго на вашому комп’ютері; 3.6.3. маркетингові файли cookie. Ці файли cookie використовуються нами для наближення наших продуктів до вас. Такі файли cookie допомагають нам персоналізувати ваші уподобання та пропонують лише ті продукти, які вас цікавлять. Ці файли cookie також зберігаються досить довго на вашому комп’ютері. 3.7. Ми надаємо можливість іншим організаціям через наш Веб-сайт розміщувати файли cookie на вашому пристрої, щоб треті сторони могли отримувати інформацію про ваші уподобання. Такі персональні дані обробляються відповідно до правил обробки відповідних третіх осіб. 3.8. Наш Веб-сайт, зокрема, використовує Google Analytics, послугу, яку надає Google Inc. Ця служба використовує файли cookie, щоб полегшити нам аналіз використання вами нашого Веб-сайту. Сформована інформація, як правило, передається та зберігається компанією Google Inc.на серверах, що знаходяться в Сполучених Штатах Америки (але не виключно). Google Inc. обробляє таку інформацію в автоматизованому режимі та у наших інтересах, ми, в свою чергу, на основі результатів аналізу - звітів, краще розуміємо ваші інтереси та потреби, як у наших продуктах, так і в зручності використання нашого Веб-сайту.
              </p>
            ) : (
              <p className="rule_text">
                3.1. "Cookie" is a small piece of data that is sent from our website (or another domain) and stored by your web browser on your computer, mobile phone, or other portable device. 3.2. Cookies may be used to store your passwords or other identifying information, website viewing preferences, products you choose when ordering from the website, and for purposes such as gathering statistics and marketing. 3.3. Cookies stored on our website are read by the website each time you visit, and you no longer need to re-enter passwords or select items that have already been added to the shopping cart. 3.4. Cookies help you better use our website and help us better understand you - learn about your preferences and offer personalized products. 3.5. Most web browsers automatically accept cookies, but you can change these settings. A detailed description of how to do this can be found on the internet by visiting the website of your web browser developer. Unfortunately, if you disable cookies, much of the website's functionality will be unavailable to you, including the ability to order products through our website. 3.6. Like many other websites, we use the following types of cookies: 3.6.1. technical cookies. These cookies are an integral part of our website's proper functioning and are used for technical purposes such as saving selected products, going to payment, and so on. Typically, these cookies are "session" cookies, meaning they are stored until you close the web browser; 3.6.2. functional cookies. These cookies allow our website to save logins, select language, your location, and so on for easier use of the website. Such cookies are stored for a fairly long time on your computer; 3.6.3. Marketing cookie files. We use these cookie files to bring our products closer to you. Such cookie files help us personalize your preferences and offer only those products that interest you. These cookie files are also stored for a relatively long time on your computer. 3.7. We provide other organizations with the ability to place cookie files on your device through our website, so that third parties can receive information about your preferences. Such personal data is processed in accordance with the processing rules of the respective third parties. 3.8. Our website, in particular, uses Google Analytics, a service provided by Google Inc. This service uses cookie files to facilitate our analysis of your use of our website. The generated information is usually transmitted to and stored by Google Inc. on servers located in the United States of America (but not exclusively). Google Inc. processes such information automatically and in our interests, and based on the results of the analysis - reports, we better understand your interests and needs, both in our products and in the convenience of using our website.
              </p>
            )}

            {ukrLoc ? (
              <p className="rule_subtitle">
                4. БЕЗПЕКА
              </p>
            ) : (
              <p className="rule_subtitle">
                4. SECURITY
              </p>
            )}
            {ukrLoc ? (
              <p className="rule_text">
                4.1. Ми цінуємо ваші персональні дані, тому ми серйозно ставимося до їх обробки. Ми використовуємо адекватні методи захисту персональних даних та забезпечуємо обмежений доступ до них. 4.2. Всі ваші персональні дані в електронному форматі зберігаються на серверах Hostinger International Ltd., Telegram LLC (для функціонування Telegram-боту). Всі операції з їх обробки відбуваються виключно в рамках цієї Політики та із зазначеною метою.
              </p>
            ) : (
              <p className="rule_text">
                4.1. We value your personal data, so we take their processing seriously. We use adequate methods to protect personal data and provide limited access to them. 4.2. All your personal data in electronic format is stored on the servers of Hostinger International Ltd. and Telegram LLC (for the functioning of the Telegram bot). All operations with their processing are carried out exclusively within the framework of this Policy and for the stated purpose.
              </p>
            )}

            {ukrLoc ? (
              <p className="rule_subtitle">
                5. ПОСИЛАННЯ
              </p>
            ) : (
              <p className="rule_subtitle">
                5. LINKS
              </p>
            )}
            {ukrLoc ? (
              <p className="rule_text">
                5.1. На нашому Веб-сайті ми можемо розміщувати посилання на інші Веб-сайти, зокрема на наші сторінки в соціальних мережах. У цьому випадку ми не встановлюємо правил обробки ваших персональних даних, які можна збирати на таких Веб-сайтах або в соціальних мережах, і ми не можемо нести відповідальність за таку обробку. Для отримання більш детальної інформації ви можете ознайомитися з правилами конфіденційності відповідних Веб-сайтів та соціальних мереж.
              </p>
            ) : (
              <p className="rule_text">
                5.1. On our Website, we may place links to other websites, including our pages on social networks. In this case, we do not establish rules for processing your personal data, which may be collected on such websites or social networks, and we cannot be held responsible for such processing. For more detailed information, you can familiarize yourself with the privacy policies of the relevant websites and social networks.
              </p>
            )}

            {ukrLoc ? (
              <p className="rule_subtitle">
                5. ПОСИЛАННЯ
              </p>
            ) : (
              <p className="rule_subtitle">
                5. LINKS
              </p>
            )}
            {ukrLoc ? (
              <p className="rule_text">
                5.1. На нашому Веб-сайті ми можемо розміщувати посилання на інші Веб-сайти, зокрема на наші сторінки в соціальних мережах. У цьому випадку ми не встановлюємо правил обробки ваших персональних даних, які можна збирати на таких Веб-сайтах або в соціальних мережах, і ми не можемо нести відповідальність за таку обробку. Для отримання більш детальної інформації ви можете ознайомитися з правилами конфіденційності відповідних Веб-сайтів та соціальних мереж.
              </p>
            ) : (
              <p className="rule_text">
                5.1. 5.1. On our Website, we may place links to other websites, including our pages on social networks. In this case, we do not establish rules for processing your personal data, which may be collected on such websites or social networks, and we cannot be held responsible for such processing. For more detailed information, you can familiarize yourself with the privacy policies of the relevant websites and social networks.
              </p>
            )}

            {ukrLoc ? (
              <p className="rule_subtitle">
                6. КОНТАКТИ
              </p>
            ) : (
              <p className="rule_subtitle">
                6. CONTACTS
              </p>
            )}

            {ukrLoc ? (
              <p className="rule_text">
                Якщо у вас виникли запитання щодо обробки ваших персональних даних або ви хочете видалити свої дані зі списку розсилки чи інших баз даних, ви можете в будь-який час зв’язатися з нами за будь-яким із зазначених нижче контактів:
              </p>
            ) : (
              <p className="rule_text">
                If you have any questions regarding the processing of your personal data or if you want to delete your data from our mailing list or other databases, you can contact us at any time using the following contacts:
              </p>
            )}

            {ukrLoc ? (
              <p className="rule_subtitle">
                Фізична особа-підприємець: Волошин Маріанна Андріївна
                Юридична адреса: !ЮРИДИЧНА АДРЕСА!
                Email: !ПОШТА!@gmail.com
              </p>
            ) : (
              <p className="rule_subtitle">
                Individual Entrepreneur: Voloshyn Marianna Andriivna
                Legal Address: !LEGAL ADDRESS!
                Email: !EMAIL!@gmail.com
              </p>
            )}

          </div>
        </div>

      </div>
    </div>
  );
}

export default Policy;
