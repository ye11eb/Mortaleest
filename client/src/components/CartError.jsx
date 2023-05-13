import React, { useEffect, useState } from 'react';

function CartError({ ukrLoc, hiDeOverlay, navigateAccount }) {
  const [Title, setTitle] = useState('');
  const [Text, setText] = useState('');
  const [closedCookies, setClosedCookies] = useState(true);

  const goToAccount = () => {
    setClosedCookies(false);
    hiDeOverlay(navigateAccount);
  };

  useEffect(() => {
    setTitle(ukrLoc ? 'Введених данних не достатньо для покупки' : 'The data entered is insufficient to make a purchase');
    setText(ukrLoc ? 'Нам потрібно більше данних для доставки ваших товарівб перейдіть у налаштування акаунту та додайте необхідну інформацію' : 'We need more data to deliver your goods, go to account settings and add the necessary information');
  }, [ukrLoc]);

  return (
    <div className={closedCookies ? 'cookiesWraper' : 'cookiesWraper ClosedcookiesWraper'}>
      <div className="cartErorContainer">
        <h1>{Title}</h1>
        <p>{Text}</p>
        <div
          className="btn"
          onClick={() => goToAccount()}
        >
          <p>{ukrLoc ? 'ПЕРЕЙТИ ДО АКАУНТУ' : 'GO TO ACCOUNT'}</p>

        </div>
      </div>
    </div>
  );
}

export default CartError;
