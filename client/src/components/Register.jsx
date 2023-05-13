import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { registerUser } from '../redux/features/auth/authSlice';

function Register({ setRegisterOver, isUaLocation, ukrLoc }) {
  const [firstName, setFirstName] = useState('');
  const [secondName, setSecondName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { status } = useSelector((state) => state.auth);
  const [isHiden, setIsHiden] = useState(false);
  const [isCorrectLogin, setIsCorrectLogin] = useState(true);
  const [inputError, setInputError] = useState('none');

  useEffect(() => {
    if (status) {
      toast(status);
    }
  }, [status]);

  const navigateToMain = () => {
    setRegisterOver(false);
  };

  const hiDeOverlay = (func) => {
    setIsHiden(true);
    setTimeout(() => {
      func();
    }, 500);
  };

  const dispatch = useDispatch();

  const changeHandler = (state, e) => {
    state(e);
    setIsCorrectLogin(false);
  };

  const handleSubmit = () => {
    if (email && email && firstName && secondName) {
      try {
        dispatch(registerUser({
          email, password, firstName, secondName,
        }))
          .then((res) => {
            setIsCorrectLogin(res.payload.message);
            setInputError(res.payload.message);
            if (res.payload.status) {
              setFirstName('');
              setSecondName('');
              setPassword('');
              setEmail('');
              hiDeOverlay(navigateToMain);
            }
          });
      } catch (error) {
        console.log(error);
      }
    } else {
      setIsCorrectLogin(true);
      setInputError(isUaLocation ? 'вам потрібно заповнити всі поля' : 'you need to fill in all the fields');
    }
  };

  return (
    <div
      className={
        isHiden ? 'register hideRegister' : 'register showRegister'
      }
    >
      <div
        className="arrow_close"
        onClick={() => hiDeOverlay(navigateToMain)}
      >
        <img src="../../public/img/other/arrow_register.svg" alt="" />
      </div>
      <form
        className="Register_Container"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="headerOverlay">{ukrLoc ? 'СТВОРИТИ АКАУНТ' : 'CREATE ACCOUN'}</h1>
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
                type="email"
                onChange={(e) => changeHandler(setEmail, e.target.value)}
                value={email}
                placeholder="gdsfgfdgd"
              />
              <span
                className="field__label-wrap"
                aria-hidden="true"
              >
                <span className="field__label">Email</span>
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
                type="password"
                placeholder="password"
                onChange={(e) => changeHandler(setPassword, e.target.value)}
                value={password}
              />
              <span
                className="field__label-wrap"
                aria-hidden="true"
              >
                <span className="field__label">{ukrLoc ? 'Пароль' : 'Password'}</span>
              </span>
            </div>
          </div>
          <p className={isCorrectLogin ? 'inputError' : 'inputError inputErrorhiden'}>{inputError}</p>
        </div>
        <div className="auth_submit btn" onClick={() => handleSubmit()}>
          <p>{ukrLoc ? 'Зареєструватись' : 'Register'}</p>
        </div>
      </form>
    </div>
  );
}

export default Register;
