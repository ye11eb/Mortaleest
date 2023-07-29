import React, { useEffect, useState } from 'react';

function Cookies({ ukrLoc }) {
  const [Title, setTitle] = useState('');
  const [Text, setText] = useState('');
  const [closedCookies, setClosedCookies] = useState(true);

  useEffect(() => {
    setTitle(ukrLoc ? 'Прийняти кукі' : 'Accept Cookies?');
    setText(ukrLoc ? 'Цей веб-сайт використовує файли cookie, щоб запропонувати вам кращий досвід перегляду. Натиснувши «Прийняти», ви погоджуєтеся з цим, як зазначено в нашій Політиці конфіденційності' : 'This website uses cookies to offer you better browsing experience. By clicking accept, you agree to this, as outlined in our Privacy Policy');
  }, [ukrLoc]);

  return (
    <div className={closedCookies ? 'cookiesWraper' : 'cookiesWraper ClosedcookiesWraper'}>
      <div className="cookiesContainer">
        <h1>{Title}</h1>
        <p>{Text}</p>
        <div
          className="btn"
          onClick={() => setClosedCookies(false)}
        >
          <p>{ukrLoc ? 'ПРИЙНЯТИ' : 'ACCEPT'}</p>

        </div>
      </div>
    </div>
  );
}

export default Cookies;
