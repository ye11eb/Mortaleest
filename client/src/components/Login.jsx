import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { loginUser, checkIsAuth } from '../redux/features/auth/authSlice';
import Register from './Register';

export function Login({ isUaLocation, ukrLoc }) {
  const [registerOver, setRegisterOver] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { status } = useSelector((state) => state.auth);
  const isAuth = useSelector(checkIsAuth);
  const [isCorrectLogin, setIsCorrectLogin] = useState(false);
  const [inputError, setInputError] = useState('none');

  const [isHiden, setIsHiden] = useState(false);
  const navigate = useNavigate();

  const navigateToMain = () => {
    navigate('/');
  };

  const navigateToRegister = () => {
    setRegisterOver(true);
  };

  const navigateToAccount = () => {
    navigate('/profile');
  };

  const hiDeOverlay = (func) => {
    setIsHiden(true);
    setTimeout(() => {
      func();
    }, 500);
  };

  const changeHandler = (state, e) => {
    state(e);
    setIsCorrectLogin(false);
  };

  useEffect(() => {
    if (status) {
      toast(status);
    }
    if (isAuth) {
      hiDeOverlay(navigateToAccount);
    }
  }, [status]);

  const dispatch = useDispatch();

  const handleSubmit = () => {
    try {
      dispatch(loginUser({ email, password }))
        .then((res) => {
          if (ukrLoc) {
            setIsCorrectLogin(res.payload.message.ukr);
            setInputError(res.payload.message.ukr);
          } else {
            setIsCorrectLogin(res.payload.message.eng);
            setInputError(res.payload.message.eng);
          }
          if (res.payload.status) {
            setPassword('');
            setEmail('');
          }
        });
      console.table(password, email);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div
        className={isHiden ? 'login hideOverlay' : 'login showOverlay'}
      >
        <div className="crossHair_close_wraper container">
          <div
            className="crossHair_close"
            onClick={() => hiDeOverlay(navigateToMain)}
          >
            <div />
          </div>
        </div>
        <form
          className="Register_Container"
          onSubmit={(e) => e.preventDefault()}
        >
          <h1 className="headerOverlay">{ukrLoc ? 'Вхід' : 'Login'}</h1>
          <div className="auth_container Container_email">
            <div className="inputContainer">
              <div className="field">
                <label
                  htmlFor="first-name"
                  className="ha-screen-reader"
                >
                  Email
                </label>
                <input
                  id="first-name"
                  className="field__input"
                  onChange={(e) => changeHandler(setEmail, e.target.value)}
                  value={email}
                  type="email"
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

          <div className="auth_container Container_password">
            <div className="inputContainer">
              <div className="field">
                <label
                  htmlFor="first-name"
                  className="ha-screen-reader"
                >
                  {ukrLoc ? 'пароль' : 'password'}
                </label>
                <input
                  id="first-name"
                  className="field__input"
                  onChange={(e) => changeHandler(setPassword, e.target.value)}
                  value={password}
                  type="password"
                  placeholder="loh"
                />
                <span
                  className="field__label-wrap"
                  aria-hidden="true"
                >
                  <span className="field__label">
                    {ukrLoc ? 'пароль' : 'password'}
                  </span>
                </span>
              </div>
            </div>
            <p className={isCorrectLogin ? 'inputError' : 'inputError inputErrorhiden'}>{inputError}</p>
          </div>
          <div
            className="auth_submit btn"
            onClick={() => handleSubmit()}
          >
            <p>{ukrLoc ? 'ВВІЙТИ' : 'SIGN IN'}</p>
            <span />
          </div>
          <p
            className="switchAuth"
            onClick={() => navigateToRegister()}
          >
            {ukrLoc ? 'Створити акаунт' : 'Create account'}
          </p>
        </form>
      </div>

      {registerOver && (
      <Register
        setRegisterOver={setRegisterOver}
        isUaLocation={isUaLocation}
        ukrLoc={ukrLoc}
      />
      )}
    </>
  );
}
