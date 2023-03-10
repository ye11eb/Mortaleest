import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Terms = () => {
  const [isHiden, setIsHiden] = useState(false)

  const navigate = useNavigate();

  const hiDeOverlay = () => {
    setIsHiden(true)
    setTimeout(() => {navigate('/')}, 500)
  }

  return (
    <div className={isHiden ? "Overlay hideOverlay" : "Overlay showOverlay"}> 
      <div className='crossHair_close' onClick={() => hiDeOverlay()}>
        <p className='close'>+</p>
      </div>
      <div className="terms_container container">
        <h1 className='headerOverlay'>Terms & conditions</h1>
        <div className="terms_rules_container">
          <div className="terms_rules scroll">

            <p className="rule_subtitle">
              УМОВИ ВИКОРИСТАННЯ ПЛАТФОРМИ ТА УМОВИ ДОГОВОРУ КУПІВЛІ-ПРОДАЖУ
            </p>
            <p className="rule_text">
              Ці Умови разом з будь-якими іншими документами, зазначеними в цих Умовах, визначають правила користування Платформою, умови публічного договору купівлі-продажу Товарів і надання послуг за допомогою Платформи. Будь ласка, уважно прочитайте ці Умови. Користуючись нашою Платформою або розміщуючи замовлення, Ви приймаєте на себе зобов'язання, передбачені цими Умовами. Якщо Ви не згодні з Умовами або будь-якої їх частиною, будь ласка, не використовуйте Платформу. Якщо у Вас виникли будь-які питання щодо цих Умов, Ви можете зв'язатися з нами за контактною інформацією.
            </p>

            <p className="rule_subtitle">
              1. ТЕРМІНИ ТА ВИЗНАЧЕННЯ
            </p>
            <p className="rule_text">
              1.1. Всі терміни з великої літери вживаються в наступних значеннях: 1.1.1. Веб-сайт - веб-сайт Продавця, розміщений в Інтернеті за адресою: http://!МОРТАЛІСТ! (також згадується як "Платформа"). 1.1.2. Ви - Користувач або Покупець, в залежності від контексту. 1.1.3. Договір - договір купівлі-продажу, укладений на відстані між Покупцем і Продавцем, умови якого визначаються цими Умовами. 1.1.4. Користувач - відвідувач Веб-сайту. 1.1.5. Покупець - Користувач, який розміщує на Платформі замовлення на покупку Товару, представленого на Платформі. 1.1.6. Продавець або Ми - фізична особа-підприємець Волошин Маріанна Андріївна, який здійснює свою діяльність відповідно до законодавства України, юридична адреса: !ЮРИДИЧНА АДРЕСА!. 1.1.7. Товар - одяг, взуття, аксесуари і будь-яка інша продукція з асортименту, представленого на Платформі для продажу. 1.1.8. Умови - ці умови використання Платформи та умови Договору.            
            </p>

            <p className="rule_subtitle">
              2. ЗАГАЛЬНІ ПОЛОЖЕННЯ
            </p>
            <p className="rule_text">
              2.1. Ці Умови є єдиними умовами, які діють щодо використання цієї Платформи, і замінюють будь-які інші умови. 2.2. Ці Умови можуть бути змінені в односторонньому порядку Продавцем, тому ми радимо Вам регулярно перевіряти їх актуальність, так як на момент використання Вами Платформи або розміщення замовлення, застосовуються Умови, що діють на такий момент. 2.3. Використовуючи Платформу, Ви погоджуєтесь з наступними положеннями: 2.3.1. Ви можете використовувати Платформу тільки з метою розміщення законних запитів і замовлень. 2.3.2. Ви не маєте права розміщувати спекулятивні або помилкові замовлення, або замовлення, що здійснені з метою шахрайства. Якщо у нас є підстави вважати, що Ви розмістили таке замовлення, ми маємо право скасувати таке замовлення і повідомити про це компетентні органи державної влади; 2.3.3. Розміщуючи замовлення на Платформі, Ви гарантуєте, що Ви повністю дієздатні і досягли 18-ти річного віку. Якщо Вам менше 18-ти років, Ви гарантуєте, що користуєтеся Платформою з дозволу батьків або опікуна/піклувальника; 2.3.4. Ви погоджуєтесь не копіювати, не відтворювати, не створювати, не перевидавати, не завантажувати, не друкувати, не публікувати, не публікувати повторно, не транслювати, не записувати, не передавати або будь-яким чином поширювати веб-сторінки або матеріали Платформи, або комп'ютерні коди, або елементи Платформ без попередньої письмової згоди Продавця. крім випадків, коли метою є особисте користування; 2.3.5. Ви не маєте права змінювати або розповсюджувати будь-який зміст Платформи, включаючи без обмежень розповсюдження логотипів і торгових марок Продавця. 2.3.6. Ви погоджуєтеся не завдавати шкоди, не порушувати і не впливати на безпеку будь-якої частини Платформи, її змісту або будь-якої пов'язаної з нею мережі або програмного забезпечення. 2.3.7. Продавець зберігає за собою право заблокувати доступ до Платформи будь-якому Користувачеві в разі порушення положень, зазначених вище в цьому розділі Умов. 2.3.8. Ви також повинні надати нам коректну адресу електронної пошти, поштову адресу та / або інші дані, і Ви погоджуєтеся, що ми маємо право на використання таких даних для ідентифікації Вас як користувача або Покупця, а також для контакту з Вами при необхідності (див. нашу Політику конфіденційності та використання файлів cookie на Платформі). 2.3.9. У разі якщо Ви надали неповну, некоректну або помилкову інформацію, ми не зможемо виконати Ваше замовлення.
            </p>

            <p className="rule_subtitle">
              3. ДОСТУПНІСТЬ ТОВАРІВ
            </p>
            <p className="rule_text">
              3.1.Товари, які ми пропонуємо на Платформі доступні на всій території України та світу, за винятком тимчасово окупованих територій і населених пунктів України, де органи державної влади України тимчасово не здійснюють свої повноваження. У разі якщо доставка на Вашу адресу неможлива, ми повідомимо Вам про це.            
            </p>

            <p className="rule_subtitle">
              4. УКЛАДЕННЯ ДОГОВОРУ
            </p>
            <p className="rule_text">
              4.1. Відповідно до Договору, Продавець передає у власність Покупця Товар, зазначений в замовленні Покупця, розміщеному за допомогою Платформи, а Покупець зобов'язується оплатити і прийняти Товар згідно з цими Умовами. 4.2. Звертаємо Вашу увагу, що фотографії, які супроводжують Товар на веб-сайті, є просто ілюстраціями до нього і можуть відрізнятися від фактичного зовнішнього вигляду Товару. Опис / характеристики, які супроводжують Товар, надають основну, але не вичерпну інформацію про такий Товар. Ви можете ознайомитися з описом Товару на Платформі, однак для отримання додаткової інформації Вам слід зв'язатися з нами. Всі сертифікати якості, що є обов’язковими відповідно до законодавства України, надаються на прохання Покупця. 4.3. Ви самостійно і на свій розсуд можете розмістити замовлення на http://!МОРТАЛІСТ!. У разі виникнення додаткових питань щодо розміщення замовлень, Ви можете звернутися за контактною адресою. 4.4. Підтверджуючи замовлення, Ви підтверджуєте, що Ви належним чином проінформовані Продавцем відповідно до частини 2 статті 13 Закону України "Про захист прав споживачів" про: 4.4.1. найменування та місцезнаходження Продавця; 4.4.2. порядок прийняття претензій; 4.4.3. основні характеристики і властивості обраного Товару; 4.4.4. ціною Товару, включаючи плату за доставку та умови оплати; 4.4.5. гарантійний термін Товару, умови його використання; 4.4.6. період прийняття пропозицій (оферти); 4.4.7. порядок розірвання Договору. 4.5. У разі необхідності уточнення будь-якої інформації, зазначеної вище, Ви можете звернутися до нас за контактною адресою. 4.6. Договір вважається укладеним, а пропозиція Продавця про його укладення вважається повністю прийнятою Покупцем, з моменту підтвердження замовлення Покупцем. 4.7. Після підтвердження і розміщення замовлення Ви отримаєте на Вашу електронну адресу електронне повідомлення з інформацією про Ваше замовлення. Будь ласка, уважно прочитайте це повідомлення. У разі виявлення помилок у Вашому замовленні, просимо негайно повідомити про це за допомогою форми зворотного зв'язку на Платформі.            
            </p>

            <p className="rule_subtitle">
              5. НАЯВНІСТЬ ТОВАРІВ
            </p>
            <p className="rule_text">
              5.1. Всі замовлення на Товари приймаються за умови їх наявності. 5.2. Якщо замовленого Вами товару немає в наявності, ми відразу, але не пізніше, ніж протягом тридцяти (30) днів, наступних за днем розміщення Вами замовлення, повідомимо Вам про це за допомогою відповідного електронного повідомлення на Вашу електронну адресу або зв’яжемось з Вами іншим шляхом і повідомимо про строки виготовлення Товару або будемо вправі виключити відповідний Товар з замовлення / скасувати замовлення. 5.3. У разі, якщо передплачений замовлення скасований повністю або частково, його вартість у відповідній частині повертається Покупцю.
            </p>

            <p className="rule_subtitle">
              6. ЦІНА І ОПЛАТА
            </p>
            <p className="rule_text">
              6.1. Ціни, зазначені на Веб-сайті, включають в себе встановлені законом податки, але не включають в себе вартість доставки. Ціна, повідомлена вам до здійснення покупки, зазначена в повідомленні про доставку і буде являти собою фактичну ціну вашого замовлення. 6.2. Ціни можуть бути змінені в будь-який час, проте (з урахуванням винятків, зазначених вище) будь-яка зміна не повинна впливати на замовлення, які були розміщені і підтверджені до відповідної зміни ціни. 6.3. Будь-ласка, майте на увазі, що ми не відшкодовуємо зміну ціни Товарів в разі дії знижок. 6.4. Ви можете оплатити замовлення за допомогою платіжних карт Visa, MasterCard, якщо інше не передбачено цими Умовами. Залежно від способу оплати та від суми Ваших операцій можуть застосовуватися певні обмеження.            
            </p>

            <p className="rule_subtitle">
              7. ДОСТАВКА
            </p>
            <p className="rule_text">
              7.1. Доставка товарів здійснюється уповноваженими або третіми особами по Нашому дорученню (такими як сервіси доставки "Нова Пошта" та інші). Всі умови доставки застосовуються відповідно до правил доставки вищезазначених осіб. 7.2.Доставка вважається виконаною або замовлення доставленим в момент підписання документів про отримання замовлення за узгодженою адресою доставки. 7.3. Разом з Товаром Продавець направляє Покупцеві відповідний розрахунковий документ (касовий чек) на електронну пошту або за номером телефону.
            </p>

            <p className="rule_subtitle">
              8. РИЗИК ВИПАДКОВОЇ ЗАГИБЕЛІ І ПЕРЕХІД ПРАВА ВЛАСНОСТІ
            </p>
            <p className="rule_text">
              8.1. Ризик випадкової загибелі Товару переходить до Вас з моменту виникнення права власності, а саме з моменту передачі Товару кур'єру для доставки.
            </p>

            <p className="rule_subtitle">
              9. ПРАВИЛА ОБМІНУ І ПОВЕРНЕННЯ ТОВАРУ
            </p>
            <p className="rule_text">
              9.1. Покупець має право протягом 14 (чотирнадцяти) робочих днів з дати отримання замовленого Товару належної якості (не рахуючи дня отримання Товару) обміняти цей товар на інший аналогічний товару у продавця, якщо отриманий товар не задовольнив Покупця за формою, габаритами , фасоном, кольором, розміром або з інших причин, або товар не може бути використаний Покупцем за призначенням. 9.2. Обмін Товару належної якості провадиться, якщо він не використовувався і якщо збережено його товарний вигляд, споживчі властивості, пломби і ярлики. 9.3. Перелік Товарів, що не підлягають обміну та поверненню на підставах, визначених у п. 10.1. цього Договору, затверджується Постановою Кабінету Міністрів України від 19 березня 1994 №172. 9.4. Вимоги Покупця про обмін Товару належної якості, а також вимоги Покупця про обмін (заміні) Товару з істотними недоліками, при наявності у Продавця Товару, необхідного для здійснення обміну або заміни, підлягають негайному задоволенню Продавцем, але в будь-якому випадку не пізніше 14 (чотирнадцяти) робочих днів з моменту отримання від Покупця зазначеного Товару. 9.5. Обмін Товару належної якості, а також обмін (заміна) Товару з істотними недоліками проводиться Продавцем при наявності у Покупця відповідного розрахункового документа встановленої форми (квитанції, товарного або касового чека), що підтверджує продаж Товару Покупцеві, з позначкою про дату продажу (дату передачі) товару . 9.6. Якщо на момент звернення Покупця до Продавця з вимогою про обмін Товару належної якості на інший аналогічний товар необхідно Покупцеві для обміну товару не виявиться у продажу у Продавця, Покупець має право: 9.7. або обміняти придбаний Товар на будь-який інший товар з числа Товарів, що є у продажу, Продавець з відповідним перерахуванням вартості Товару згідно чинного законодавства України; 9.8. або розірвати цей Договір; 9.9. або обміняти отриманий товар на інший аналогічний товар при першому ж його надходження в продаж у Продавця. При цьому Продавець зобов'язується в день надходження такого Товару в продаж повідомити про це Покупця; 9.10. Повернення Покупцем Товару належної якості, а також повернення Покупцем Товару з істотним недоліками в зв'язку з обміном або заміною такого Товару здійснюється в порядку, встановленому розділом 9 цього Договору.
            </p>

            <p className="rule_subtitle">
              10. ВІДПОВІДАЛЬНІСТЬ
            </p>
            <p className="rule_text">
              10.1. Наша відповідальність щодо будь-яких Товарів, придбаних через Платформу, обмежена вартістю такого Товару. 10.2. Продавець звільняється від відповідальності за порушення Умов, якщо таке порушення викликане дією обставин непереборної сили, що включають будь-які дії, події, не настання події, акт бездіяльності або непередбачувану ситуацію поза нашим обґрунтованим контролем, і, зокрема, включає без обмежень такі обставини: 10.2.1. страйки, блокування або інші конфлікти; 10.2.2. громадські заворушення, масові заворушення, вторгнення, терористичні атаки або загроза терористичних атак, військові дії (з оголошенням або без оголошення війни), загроза військових дій або підготовка до військових дій; 10.2.3. пожежі, вибухи, шторми, повені, землетруси, обвали, епідемії чи інші стихійні лиха; 10.2.4. неможливість використання залізниць, судів, повітряного транспорту або автомобілів, а також інших громадських і приватних транспортних засобів; 10.2.5. неможливість використання громадських або приватних телекомунікаційних мереж; 10.2.6. акти, декрети, постанови або обмеження будь-якого уряду; 10.2.7.будь-які страйки працівників транспортних компаній, пошти або інші види страйків в транспортних компаніях, ненадання послуг транспортними компаніями або аварійні випадки. 10.3. Ні в якому разі, ми не несемо відповідальність за: 10.3.1. непрямі збитки Покупця або третіх осіб, які виникли як похідні від основних збитків або шкоди, будь-яким способом і через правопорушень (включаючи недбалість) порушення умов Договору або з будь-яких інших причин, навіть якщо такі збитки або збиток можна було передбачити, включаючи без обмежень такі збитки:
              <div className="rule_text_li">
                <ul className='rule_text_ul'>
                  <li>втрата прибутку або доходу;</li> 
                  <li>втрачені комерційні можливості;</li> 
                  <li>не укладення договору;</li> 
                  <li>втрата очікуваних заощаджень;</li> 
                  <li>втрата даних;</li> 
                  <li>збитки в результаті некоректного управління і втрата робочого часу.</li> 
              </ul>
              </div>
              10.3.2. будь-які дії та / або бездіяльність, що є прямим або непрямим результатом будь-яких дій / бездіяльності будь-яких третіх осіб; 10.3.3. використання (неможливість використання) і будь-які наслідки використання (неможливості використання) Покупцем обраної ним форми оплати Товарів. 10.4. Наша Платформа може містити посилання на веб-сайти і матеріали третіх осіб. Такі посилання розміщені виключно в інформативних цілях, і ми не можемо контролювати зміст таких веб-сайтів і матеріалів. Відповідно, ми не несемо відповідальність будь-якого характеру за будь-які збитки чи шкоду, які можуть виникнути в результаті використання таких посилань.
            </p>

            <p className="rule_subtitle">
              11. ПОВІДОМЛЕННЯ І ЗВОРОТНІЙ ЗВ'ЯЗОК
            </p>
            <p className="rule_text">
              11.1. Ви можете відправляти будь-які повідомлення за контактною адресою на нашій Платформі. 11.2. Для спілкування з Вами, ми використовуємо Ваші контактні дані, зазначені при оформленні замовлення або запиту. Ми можемо відправляти Вам електронні повідомлення. 11.3. Ми будемо раді отримати Ваші коментарі та відгуки. Ви можете надсилати свої коментарі та відгуки за контактною інформацією на нашій Платформі та соціальних мережах або за формою зворотного зв’язку.             
            </p>

            <p className="rule_subtitle">
              12. ІНТЕЛЕКТУАЛЬНА ВЛАСНІСТЬ І ПЕРСОНАЛЬНІ ДАНІ 
            </p>
            <p className="rule_text">
              12.1. Права інтелектуальної власності на все програмне забезпечення, торговельні марки і матеріали, які надаються на Платформі або з її допомогою, належать Продавцю і / або ліцензіарам/ліцензіатам/правовласникам і захищені законодавством про авторське право та право інтелектуальної власності. Їх зберігання, друк і демонстрація можливі виключно для особистого використання. Ніхто, крім Продавця, не має право публікувати, змінювати, розповсюджувати або будь-яким іншим способом відтворювати в будь-якому форматі будь-які матеріали або їх копії, розміщений на Платформі, і не має право використовувати такі матеріали для будь-яких комерційних цілей. 12.2. Використовуючи Платформу, Ви даєте Продавцю свою згоду на обробку персональних даних відповідно до Закону України "Про захист персональних даних" та нашою Політикою конфіденційності та використання файлів cookie
            </p>

            <p className="rule_subtitle">
              13. ПЕРЕДАЧА ПРАВ І ЗОБОВ'ЯЗАНЬ 
            </p>
            <p className="rule_text">
              13.1. Договір, укладений між нами та Вами, є обов'язковим для Вас, нас, та наших відповідних правонаступників і цесіонаріїв. 13.2. Ви не маєте права відступати, обтяжувати або будь-яким іншим чином відчужувати Договір або будь-які права і зобов'язання, які виникають з такого Договору, без нашої попередньої письмової згоди, крім випадків, прямо зазначених в цих Умовах.. 13.3. Ми маємо право без Вашої згоди передавати, відступати, обтяжувати, передавати в рамках субпідряду або іншим чином відчужувати Договір в будь-який час протягом терміну дії Договору. Щоб уникнути двозначних тлумачень будь-яка така передача, поступка, обтяження або інше відчуження не впливають на Ваші права, надані Вам як покупцю чинним законодавством, не скасовують, не зменшують і не обмежують будь-яким іншим чином будь-яку гарантію, яка могла бути надана Вам нами. 
            </p>

            <p className="rule_subtitle">
              14. НЕДІЙСНІСТЬ ПОЛОЖЕНЬ
            </p>
            <p className="rule_text">
              14.1.У разі якщо будь-які положення цих Умов і / або положення Договору визнані судом або іншим компетентним органом недійсними повністю або в будь-який їх частини, або на думку обох сторін вони є такими, що не можуть бути виконані, таке положення виконується в максимально можливому обсязі для реалізації намірів сторін, а решта Умов та (або) Договору зберігають юридичну силу в повному обсязі.             
            </p>

            <p className="rule_subtitle">
              15. НАШЕ ПРАВО ЗМІНЮВАТИ ЦІ УМОВИ
            </p>
            <p className="rule_text">
              15.1. Розміщуючи замовлення, Ви приймаєте ці Умови, опубліковані на Платформі на момент розміщення Вашого замовлення. 15.2. Ми маємо право час від часу переглядати і змінювати ці Умови в односторонньому порядку.
            </p>

            <p className="rule_subtitle">             
              16. РЕКВІЗИТИ ВІДПОВІДАЛЬНОЇ ОСОБИ
            </p>
            <p className="rule_text">
              <ul>
                <li>Фізична особа-підприємець: Волошин Маріанна Андріївна</li>
                <li>Юридична адреса: !ЮРИДИЧНА АДРЕСА!</li>
                <li>Email: ПОШТА@gmail.com</li>
              </ul>
            </p>
            
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Terms