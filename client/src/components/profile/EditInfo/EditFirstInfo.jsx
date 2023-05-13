import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import EditSecondInfo from './EditSecondInfo';

function EditFirstInfo({
  SetAddShippingAddress, fetchUserInfo, userInfo, CountriesData, ukrLoc,
}) {
  const [firstName, setFirstName] = useState(userInfo.firstName);
  const [secondName, setSecondName] = useState(userInfo.secondName);
  const [number, setNumber] = useState(userInfo.number);
  const { status } = useSelector((state) => state.auth);
  const [secondInfo, setSecondInfo] = useState(false);
  const [isHidenFirst, setIsHidenFirst] = useState(false);
  const [isInfoIncorrect, setIsInfoIncorrect] = useState(false);

  useEffect(() => {
    if (status) {
      toast(status);
    }
  }, [status]);

  const auditData = () => {
    if (firstName && secondName && number) {
      setSecondInfo(true);
    } else {
      setIsInfoIncorrect(true);
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
    setIsHidenFirst(true);
    setTimeout(() => {
      func();
    }, 500);
  };

  return (
    <div
      className={
                isHidenFirst ? 'register hideRegister' : 'register showRegister'
            }
    >
      <div className="arrow_close" onClick={() => hiDeOverlay(navigateToProfile)}>
        <img src="../../public/img/other/arrow_register.svg" alt="" />
      </div>
      <form
        className="Register_Container"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="headerOverlay">{ukrLoc ? 'ІНФОРМАЦІЯ ДЛЯ ДОСТАВКИ' : 'ADD SHIPPING INFO'}</h1>
        <h4>
          {ukrLoc ? 'Введіть свою особисту інформацію' : 'Enter your personal information'}
        </h4>
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
                onChange={(e) => changeHandler(setFirstName, e.target.value)}
                value={firstName}
                placeholder="gdsfgfdgd"
              />
              <span
                className="field__label-wrap"
                aria-hidden="true"
              >
                <span className="field__label">{ukrLoc ? "Ім'я" : 'First name'}</span>
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
                onChange={(e) => changeHandler(setSecondName, e.target.value)}
                value={secondName}
                placeholder="gdsfgfdgd"
              />
              <span
                className="field__label-wrap"
                aria-hidden="true"
              >
                <span className="field__label">
                  {ukrLoc ? 'Прізвище' : 'Second name'}
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
                type="number"
                pattern="[1-9]"
                onChange={(e) => changeHandler(setNumber, e.target.value)}
                value={number}
                placeholder="gdsfgfdgd"
              />
              <span
                className="field__label-wrap"
                aria-hidden="true"
              >
                <span className="field__label">{ukrLoc ? 'Номер' : 'Number'}</span>
              </span>
            </div>
          </div>
          <p className={isInfoIncorrect ? 'inputError' : 'inputError inputErrorhiden'}>{ukrLoc ? 'вам потрібно заповнити всі поля' : 'you need to fill in all the fields'}</p>
        </div>
        <div
          className="auth_submit"
          onClick={() => auditData()}
        >
          <p>Next</p>
        </div>
      </form>
      {secondInfo && (
        <EditSecondInfo
          userInfo={userInfo}
          fetchUserInfo={fetchUserInfo}
          setIsHidenFirst={setIsHidenFirst}
          SetAddShippingAddress={SetAddShippingAddress}
          setSecondInfo={setSecondInfo}
          firstName={firstName}
          setFirstName={setFirstName}
          secondName={secondName}
          setSecondName={setSecondName}
          number={number}
          setNumber={setNumber}
          CountriesData={CountriesData}
          ukrLoc={ukrLoc}
        />
      )}
    </div>
  );
}

export default EditFirstInfo;
