import React, { useEffect, useState } from 'react';
import axios from '../../../utils/axios';

function EditSecondInfo({
  setIsHidenFirst,
  userInfo,
  SetAddShippingAddress,
  fetchUserInfo,
  setSecondInfo,
  firstName,
  secondName,
  number,
  setFirstName,
  setSecondName,
  setNumber,
  CountriesData,
  ukrLoc,
}) {
  const [adress1, setAdress1] = useState(userInfo.adress1);
  const [adress2, setAdress2] = useState(userInfo.adress2);
  const [country, SetCountry] = useState(userInfo.country);
  const [city, SetCity] = useState(userInfo.city);
  const [state, setState] = useState(userInfo.state);
  const [zipcode, setZipcode] = useState(userInfo.zipcode);
  const [isHidenSecond, setIsHidenSecond] = useState(false);
  const [isInfoIncorrect, setIsInfoIncorrect] = useState(false);

  useEffect(() => {
    fetchUserInfo();
  }, []);

  const navigateToFirst = () => {
    setSecondInfo(false);
  };

  const auditData = () => {
    if (adress1 && adress2 && country && city && state && zipcode) {
      handleSubmit();
    } else {
      setIsInfoIncorrect(ukrLoc ? 'вам потрібно заповнити всі поля' : 'you need to fill in all the fields');
    }
  };

  const changeHandler = (state, e) => {
    state(e);
    setIsInfoIncorrect(false);
  };

  const navigateToProfile = () => {
    SetAddShippingAddress(false);
  };

  const hiDeOverlay = (func) => {
    setIsHidenSecond(true);
    setTimeout(() => {
      func();
    }, 500);
  };

  const UpdataDeliveryInfo = async () => {
    try {
      const { data } = await axios.post('auth/deliveryInfo', {
        firstName,
        secondName,
        number,
        adress1,
        adress2,
        country,
        city,
        state,
        zipcode,
      });

      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async () => {
    try {
      const isWentWell = await UpdataDeliveryInfo();

      if (isWentWell.status) {
        setFirstName('');
        setSecondName('');
        setNumber('');
        setAdress1('');
        setAdress2('');
        SetCountry('');
        SetCity('');
        setState('');
        setZipcode('');
        setIsHidenFirst(true);
        setTimeout(() => {
          navigateToProfile();
        }, 500);
      } else {
        setIsInfoIncorrect(isWentWell.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className={
                isHidenSecond
                  ? 'register addShippingAddresSeccond hideRegister'
                  : 'register addShippingAddresSeccond showRegister'
            }
    >
      <div className="arrow_close" onClick={() => hiDeOverlay(navigateToFirst)}>
        <img src="../../public/img/other/arrow_register.svg" alt="" />
      </div>
      <form
        className="Register_Container"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="headerOverlay">{ukrLoc ? 'AДРЕС ДЛЯ ДОСТАВКИ' : 'ADD SHIPPING ADRESS'}</h1>
        <h4>
          {ukrLoc ? 'Введіть свою особисту інформацію' : 'Enter your personal information'}
        </h4>

        <div className="addShippingAddresInner">
          <div className="auth_container Container_email">
            <div className="inputContainer">
              <div className="field">
                <label
                  htmlFor="first-name"
                  className="ha-screen-reader"
                >
                  First name
                </label>
                <input
                  id="first-name"
                  className="field__input"
                  onChange={(e) => changeHandler(setAdress1, e.target.value)}
                  value={adress1}
                  placeholder="gdsfgfdgd"
                />
                <span
                  className="field__label-wrap"
                  aria-hidden="true"
                >
                  <span className="field__label">
                    {ukrLoc ? 'Aдресний рядок 1' : 'Address line 1'}
                  </span>
                </span>
              </div>
            </div>
          </div>

          <div className="auth_container Container_email">
            <div className="inputContainer">
              <div className="field">
                <label
                  htmlFor="first-name"
                  className="ha-screen-reader"
                >
                  First name
                </label>
                <input
                  id="first-name"
                  className="field__input"
                  onChange={(e) => changeHandler(setAdress2, e.target.value)}
                  value={adress2}
                  placeholder="gdsfgfdgd"
                />
                <span
                  className="field__label-wrap"
                  aria-hidden="true"
                >
                  <span className="field__label">
                    {ukrLoc ? 'Aдресний рядок 2' : 'Address line 2'}
                  </span>
                </span>
              </div>
            </div>
          </div>

          <div className="auth_container Container_email">
            <div className="inputContainer">
              <div className="field">
                {/* <label
                  htmlFor="first-name"
                  className="ha-screen-reader"
                >
                  First name
                </label> */}
                <select
                  name="select "
                  id="select_id"
                  value={country}
                  onChange={() => changeHandler(SetCountry, document.getElementById('select_id').value)}
                >
                  <option value="no info">{ukrLoc ? 'Виберіть країну' : 'Choose country'}</option>
                  {CountriesData.map((item) => (
                    <option value={item.Country}>{item.Country}</option>
                  ))}
                </select>
                {/* <span
                  className="field__label-wrap"
                  aria-hidden="true"
                >
                  <span className="field__label">
                    Country / region
                  </span>
                </span> */}
              </div>
            </div>
          </div>

          <div className="auth_container Container_email">
            <div className="inputContainer">
              <div className="field">
                <label
                  htmlFor="first-name"
                  className="ha-screen-reader"
                >
                  First name
                </label>
                <input
                  id="first-name"
                  className="field__input"
                  onChange={(e) => changeHandler(SetCity, e.target.value)}
                  value={city}
                  placeholder="gdsfgfdgd"
                />
                <span
                  className="field__label-wrap"
                  aria-hidden="true"
                >
                  <span className="field__label">
                    {ukrLoc ? 'Місто' : 'City / town'}
                  </span>
                </span>
              </div>
            </div>
          </div>

          <div className="auth_container Container_email">
            <div className="inputContainer">
              <div className="field">
                <label
                  htmlFor="first-name"
                  className="ha-screen-reader"
                >
                  First name
                </label>
                <input
                  id="first-name"
                  className="field__input"
                  onChange={(e) => changeHandler(setState, e.target.value)}
                  value={state}
                  placeholder="gdsfgfdgd"
                />
                <span
                  className="field__label-wrap"
                  aria-hidden="true"
                >
                  <span className="field__label">{ukrLoc ? 'Область' : 'State'}</span>
                </span>
              </div>
            </div>
          </div>

          <div className="auth_container Container_email">
            <div className="inputContainer">
              <div className="field">
                <label
                  htmlFor="first-name"
                  className="ha-screen-reader"
                >
                  First name
                </label>
                <input
                  id="first-name"
                  className="field__input"
                  onChange={(e) => changeHandler(setZipcode, e.target.value)}
                  value={zipcode}
                  placeholder="gdsfgfdgd"
                />
                <span
                  className="field__label-wrap"
                  aria-hidden="true"
                >
                  <span className="field__label">{ukrLoc ? 'ЗІП код' : 'Zipcode'}</span>
                </span>
              </div>
            </div>
            <p className={isInfoIncorrect ? 'inputError' : 'inputError inputErrorhiden'}>{isInfoIncorrect}</p>
          </div>

          <div className="auth_submit" onClick={() => auditData()}>
            <p>Next</p>
          </div>
        </div>
      </form>
    </div>
  );
}

export default EditSecondInfo;
