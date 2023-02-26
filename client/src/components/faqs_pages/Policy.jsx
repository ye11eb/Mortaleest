/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Policy({ setIsMainOverlayed }) {
  const [isHiden, setIsHiden] = useState(false);

  useEffect(() => {
    setIsMainOverlayed(true);
  }, []);

  const navigate = useNavigate();

  const hiDeOverlay = () => {
    setIsHiden(true);
    setTimeout(() => {
      setIsMainOverlayed(false);
      navigate('/');
    }, 500);
  };

  return (
    <div className={isHiden ? 'Overlay hideOverlay' : 'Overlay showOverlay'}>
      <div className="crossHair_close" onClick={() => hiDeOverlay()}>
        <p className="close">+</p>
      </div>
      <div className="terms_container container">
        <h1 className="headerOverlay">Privacy Policy</h1>
        <div className="terms_rules_container">
          <div className="terms_rules scroll">

            <p className="rule_subtitle">
              ПОЛІТИКА КОНФІДЕНЦІЙНОСТІ ТА ПРАВИЛА ОБРОБКИ COOKIE
            </p>

            <p className="rule_text">
              Ми дбаємо про захист ваших персональних даних, тому ми обробляємо їх відповідно до усіх вимог законодавства України, а також - там, де це можливо - законодавства Європейського Союзу. Користуючись нашим Веб-сайтом ви автоматично надаєте згоду на обробку Ваших персональних даних у відповідності із даною політикою.
            </p>

            <p className="rule_subtitle">
              1. ОБРОБКА ДАНИХ
            </p>
            <p className="rule_text">
              1.1. Коли ви відвідуєте наш Веб-сайт http://!МОРТАЛІСТ! (далі - Веб-сайт), розміщуєте на ньому замовлення, слідкуєте за нашими новинами та оновленнями, користуєтеся знижками, Ми просимо Вас надати нам свої персональні дані, зокрема, своє ім’я, прізвище, по-батькові, адресу електронної пошти, номер телефону та адресу доставки (країна, місто, вулиця, номер дому та апартаментів, поштовий індекс). 1.2. У майбутньому ми також можемо зберігати інформацію про: вибраний вами товар, замовлений вами товар, дату замовлення та дату оплати товару, суму оплаченого замовлення (товару), статус оплати замовлення (товару). 1.3. Ми будемо використовувати ваші персональні дані для наступних цілей: 1.3.1. обробки ваших замовлень, продажу та доставки вам наших товарів; 1.3.2. надсилання вам листів з нашими новинами, оновленнями, цікавими пропозиціями; 1.3.3. спілкування з вами. 1.4. Ми також збираємо інформацію (зокрема, про вашу IP-адресу, сторінки Веб-сайту, який ви відвідували) для складання та аналізу статистичних даних та для безпеки нашого Веб-сайту. 1.5. Всі ваші персональні дані обробляються фізичною особою-підприємством Волошин Маріанною Андріївною, який здійснює свою діяльність відповідно до законодавства України, юридична адреса: !ЮРИДИЧНА АДРЕСА! (далі - ФОП) та офіційно найманими працівниками, під повним контролем ФОП. Відповідно до законодавства України, ФОП Волошин Маріанна Андріївна є власником персональних даних, а відповідно до законодавства Європейського Союзу - їх контролером. 1.6. У маркетингових цілях, а також для послуг доставки, персональні дані можуть передаватися третім особам. Такі треті сторони обробляють ваші дані згідно з нашими інструкціями, але відповідно до політики конфіденційності зазначених сторін. Зверніть увагу, що, сервери з інформацією, яка зберігається, можуть бути розташовані за межами України. 1.7. Підставами для обробки ваших персональних даних можуть бути: 1.7.1. замовлення вами наших товарів (підставою є укладення та виконання договору, а також попередні дії, необхідні для його укладення); 1.7.2. ваша явна згода на обробку нами або третьою стороною ваших персональних даних (підставою є згода на обробку); 1.7.3. комерційна діяльність (дана діяльність - це наш законний інтерес та підстава для збору персональних даних). 1.8. Умови обробки ваших персональних даних залежать від мети їх обробки, а також від застосованої технології (це стосується файлів cookie). Наприклад, ваші персональні дані, пов’язані з придбанням та доставкою товарів, оброблятимуться протягом 90 (дев’яноста) календарних днів з дати вашого замовлення. Персональні дані для маркетингових цілей оброблятимуться довше - до 2 (двох) років, щоб ви завжди були в курсі наших новин, спеціальних пропозицій тощо. 1.9. Умови обробки ваших персональних даних третіми особами не встановлюються нами і повністю залежать від затверджених ними правил.
            </p>

            <p className="rule_subtitle">
              2. ПРАВА
            </p>
            <p className="rule_text">
              2.1. Ви завжди можете звернутися до офіційного тексту закону за таким посиланням:
              <a href="http://zakon3.rada.gov.ua/laws/show/2297-17">http://zakon3.rada.gov.ua/laws/show/2297-17</a>
              {' '}
              . 2.2. Ви маєте право: 2.2.1. знати джерела, з якого збираються ваші дані, де вони зберігаються, з якою метою вони обробляються, а також суб’єкта господарювання, який «керує» обробкою таких даних, та їх місцезнаходження (місце проживання); 2.2.2. отримувати від нас інформацію про умови доступу до ваших даних, зокрема інформацію про осіб, яким ваші дані можуть бути передані; 2.2.3. отримати доступ до ваших особистих даних. Зокрема, ви можете подати нам запит на те, чи ми обробляємо ваші персональні дані, і - запитати та отримати копію ваших персональних даних. Ми розглянемо такі запити протягом 30 календарних днів; 2.2.4. подати претензію із запереченням щодо обробки ваших персональних даних.Така претензія повинна бути мотивованою; 2.2.5. вимагати зміни або видалення ваших персональних даних, якщо такі дані обробляються незаконно або вони недостовірні. Така вимога повинна бути мотивованою; 2.2.6. захистити ваші персональні дані від незаконної обробки та випадкової втрати, знищення тощо; 2.2.7. звертатись в суд, Уповноваженого Верховної Ради України з прав людини або використовувати інші засоби захисту - якщо ви вважаєте, що ваші права були порушені; 2.2.8. зробити застереження, щоб обмежити обробку ваших персональних даних при наданні згоди на обробку. Таке застереження може стосуватися, наприклад, періоду обробки персональних даних або їх обсягу; 2.2.9. відкликати згоду, яку ви раніше давали на обробку ваших персональних даних. Ви не маєте право відкликати згоду лише в тому випадку, якщо така згода була єдиною підставою для обробки ваших персональних даних. Наприклад, якщо ми обробляємо ваші дані для того, щоб доставити вам товари (іншими словами, щоб виконати наше зобов'язання перед вами), ви не можете відкликати свою згоду, інакше ми не зможемо виконати ваше замовлення; 2.2.10. знати, як функціонує автоматична обробка ваших персональних даних (якщо така є), а також захист від «автоматизованого» рішення, яке може мати наслідки для вас (якщо рішення приймається програмним забезпеченням).
            </p>

            <p className="rule_subtitle">
              3. КУКІ
            </p>
            <p className="rule_text">
              3.1. «Cookie» - це невелика частина даних, яка надсилається з нашого Веб-сайту (або з іншого домену) і зберігається веб-браузером на вашому комп’ютері, мобільному телефоні або іншому портативному пристрої. 3.2. Файли cookie можуть використовуватися для зберігання ваших паролів або інших ідентифікаційних даних, налаштувань перегляду Веб-сайту, продуктів, які ви обираєте під час замовлення на Веб-сайті, а також для таких цілей, як збір статистики та маркетинг. 3.3. Файли cookie, збережені на нашому Веб-сайті, зчитуються Веб-сайтом кожного разу, коли ви знову відвідуєте Веб-сайт, і вам більше не потрібно повторно вводити паролі, вибираючи товари, які вже переміщено в кошик. 3.4. Файли cookie допомагають вам краще використовувати наш Веб-сайт, а також допомагають нам краще зрозуміти вас - дізнатися про ваші уподобання та запропонувати персоналізовані продукти. 3.5. Більшість веб-браузерів автоматично приймають файли cookie, однак ви можете змінити ці налаштування. Детальний опис того, як це зробити, можна знайти в Інтернеті, перейшовши на веб-сайт розробника вашого веб-браузера. На жаль, якщо ви вимкнете файли cookie, більша функціональність Веб-сайту буде недоступна для вас, включаючи можливість замовлення товарів через наш Веб-сайт. 3.6. Як і багато інших Веб-сайтів, ми використовуємо такі типи файлів cookie: 3.6.1. технічні файли cookie. Ці файли cookie є невід’ємною частиною належного функціонування нашого Веб-сайту і використовуються в технічних цілях, таких як збереження вибраних товарів, перехід до їх оплати тощо. Зазвичай ці файли cookie є «сесійними», тобто зберігаються до моменту, пока ви не закрили веб-браузер; 3.6.2. функціональні файли cookie. Ці файли cookie дозволяють нашому Веб-сайту зберігати логіни, вибирати мову, ваше місцезнаходження, тощо - для зручнішого використання Веб-сайту. Такі файли cookie зберігаються досить довго на вашому комп’ютері; 3.6.3. маркетингові файли cookie. Ці файли cookie використовуються нами для наближення наших продуктів до вас. Такі файли cookie допомагають нам персоналізувати ваші уподобання та пропонують лише ті продукти, які вас цікавлять. Ці файли cookie також зберігаються досить довго на вашому комп’ютері. 3.7. Ми надаємо можливість іншим організаціям через наш Веб-сайт розміщувати файли cookie на вашому пристрої, щоб треті сторони могли отримувати інформацію про ваші уподобання. Такі персональні дані обробляються відповідно до правил обробки відповідних третіх осіб. 3.8. Наш Веб-сайт, зокрема, використовує Google Analytics, послугу, яку надає Google Inc. Ця служба використовує файли cookie, щоб полегшити нам аналіз використання вами нашого Веб-сайту. Сформована інформація, як правило, передається та зберігається компанією Google Inc.на серверах, що знаходяться в Сполучених Штатах Америки (але не виключно). Google Inc. обробляє таку інформацію в автоматизованому режимі та у наших інтересах, ми, в свою чергу, на основі результатів аналізу - звітів, краще розуміємо ваші інтереси та потреби, як у наших продуктах, так і в зручності використання нашого Веб-сайту.
            </p>

            <p className="rule_subtitle">
              4. БЕЗПЕКА
            </p>
            <p className="rule_text">
              4.1. Ми цінуємо ваші персональні дані, тому ми серйозно ставимося до їх обробки. Ми використовуємо адекватні методи захисту персональних даних та забезпечуємо обмежений доступ до них. 4.2. Всі ваші персональні дані в електронному форматі зберігаються на серверах Hostinger International Ltd., Telegram LLC (для функціонування Telegram-боту). Всі операції з їх обробки відбуваються виключно в рамках цієї Політики та із зазначеною метою.
            </p>

            <p className="rule_subtitle">
              5. ПОСИЛАННЯ
            </p>
            <p className="rule_text">
              5.1. На нашому Веб-сайті ми можемо розміщувати посилання на інші Веб-сайти, зокрема на наші сторінки в соціальних мережах. У цьому випадку ми не встановлюємо правил обробки ваших персональних даних, які можна збирати на таких Веб-сайтах або в соціальних мережах, і ми не можемо нести відповідальність за таку обробку. Для отримання більш детальної інформації ви можете ознайомитися з правилами конфіденційності відповідних Веб-сайтів та соціальних мереж.
            </p>

            <p className="rule_subtitle">
              5. ПОСИЛАННЯ
            </p>
            <p className="rule_text">
              5.1. На нашому Веб-сайті ми можемо розміщувати посилання на інші Веб-сайти, зокрема на наші сторінки в соціальних мережах. У цьому випадку ми не встановлюємо правил обробки ваших персональних даних, які можна збирати на таких Веб-сайтах або в соціальних мережах, і ми не можемо нести відповідальність за таку обробку. Для отримання більш детальної інформації ви можете ознайомитися з правилами конфіденційності відповідних Веб-сайтів та соціальних мереж.
            </p>

            <p className="rule_subtitle">
              6. КОНТАКТИ
            </p>

            <p className="rule_text">
              Якщо у вас виникли запитання щодо обробки ваших персональних даних або ви хочете видалити свої дані зі списку розсилки чи інших баз даних, ви можете в будь-який час зв’язатися з нами за будь-яким із зазначених нижче контактів:
            </p>

            <p className="rule_subtitle">
              Фізична особа-підприємець: Волошин Маріанна Андріївна
              Юридична адреса: !ЮРИДИЧНА АДРЕСА!
              Email: !ПОШТА!@gmail.com
            </p>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Policy;