import React, { useEffect, useState } from 'react';

function Country({ 
    ukrLoc,
    CountriesData,
    setClientCountry,
}) {
  const [Title, setTitle] = useState('');
  const [Text, setText] = useState('');
  const [closedCookies, setClosedCookies] = useState(true);

  useEffect(() => {
    setTitle(ukrLoc ? 'Оберіть свою країну ' : 'Choose your country');
    setText(ukrLoc ? 'нам потрібно знати вашу країну проживання щоб ціни на доставку були правильні' : 'we need to know your country of residence so that the shipping prices are correct');
  }, [ukrLoc]);

  

  return (
    <div className={closedCookies ? 'cookiesWraper' : 'cookiesWraper ClosedcookiesWraper'}>
      <div className="cookiesContainer">
        <h1>{Title}</h1>
        <p>{Text}</p>
        <div className="CountryPickSelect">
          <select id="input0" 
            defaultValue={CountriesData[0]}
            onChange={() => setClientCountry(document.getElementById('input0').value)}
          >
            {CountriesData.map((el) => (                       
                    <option value={el.Country}>{el.Country}</option>
            ))}
          </select>
          <div
            className="btn"
            onClick={() => setClosedCookies(false)}
          >
            <p>{ukrLoc ? 'ПРИЙНЯТИ' : 'ACCEPT'}</p>

          </div>
        </div>
        </div>
    </div>
  );
}

export default Country;
