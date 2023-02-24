import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { loginUser, checkIsAuth } from '../redux/features/auth/authSlice';
import Register from './Register';

export function Login() {
  const [registerOver, setRegisterOver] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { status } = useSelector((state) => state.auth);
  const isAuth = useSelector(checkIsAuth);

  // to hide overlay

  const [isHiden, setIsHiden] = useState(false);
  const navigate = useNavigate();

  const navigateToMain = () => {
    navigate('/');
  };

  const navigateToRegister = () => {
    // navigate('/register')
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

  useEffect(() => {
    if (status) {
      toast(status);
    }
    if (isAuth) {
      navigateToAccount();
    }
  }, [status]);

  const dispatch = useDispatch();

  const handleSubmit = () => {
    try {
      dispatch(loginUser({ email, password }));
      setPassword('');
      setEmail('');
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
        <div
          className="crossHair_close"
          onClick={() => hiDeOverlay(navigateToMain)}
        >
          <p className="close">+</p>
        </div>
        <form
          className="Register_Container"
          onSubmit={(e) => e.preventDefault()}
        >
          <h1 className="headerOverlay">Login</h1>
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
                  onChange={(e) => setEmail(e.target.value)}
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
            {/* <p>password</p> */}
            <div className="inputContainer">
              <div className="field">
                <label
                  htmlFor="first-name"
                  className="ha-screen-reader"
                >
                  Password
                </label>
                <input
                  id="first-name"
                  className="field__input"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  type="password"
                  placeholder="loh"
                />
                <span
                  className="field__label-wrap"
                  aria-hidden="true"
                >
                  <span className="field__label">
                    Password
                  </span>
                </span>
              </div>
            </div>
            <p className="resetPass">Forgot your password</p>
          </div>
          <div
            className="auth_submit btn"
            onClick={() => handleSubmit()}
          >
            <p>SIGN IN</p>
            <span />
          </div>
          <p
            className="switchAuth"
            onClick={() => navigateToRegister()}
          >
            Create account
          </p>
        </form>
      </div>

      {registerOver && <Register setRegisterOver={setRegisterOver} />}
    </>
  );
}
