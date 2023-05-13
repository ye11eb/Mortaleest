import React, { useState } from 'react';
import EditEmail from './EditEmail';
import axios from '../../../utils/axios';

function EditEmailPass({ userInfo, setNewEmail, fetchUserInfo }) {
  const [password, setPassword] = useState('');
  const [isHidenPass, setIsHidenPass] = useState(false);
  const [enterEmail, setEnterEmail] = useState(false);
  const [isPasswordIncorrect, setIsPasswordIncorrect] = useState(false);
  const token = window.localStorage.getItem('token');

  const navigateToProfile = () => {
    setNewEmail(false);
  };

  const hiDeOverlay = (func) => {
    setIsHidenPass(true);
    setTimeout(() => {
      func();
    }, 500);
  };

  const changePasswordHendler = (e) => {
    setPassword(e.target.value);
    setIsPasswordIncorrect(false);
  };

  const verifyPass = async (token, password) => {
    try {
      const { data } = await axios.post('auth/verifyPass', {
        token,
        password,
      });

      return data.status;
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async () => {
    try {
      const isCorrectPass = await verifyPass(token, password);
      if (isCorrectPass) {
        setEnterEmail(true);
      } else {
        setIsPasswordIncorrect(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className={
                isHidenPass ? 'register hideRegister' : 'register showRegister'
            }
    >
      <div className="arrow_closeWrapper">
        <div
          className="arrow_close"
          onClick={() => hiDeOverlay(navigateToProfile)}
        >
          <img src="../../public/img/other/arrow_register.svg" alt="" />
        </div>
      </div>
      <form
        className="Register_Container"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="headerOverlay">CHANGE MAIL</h1>
        <h4>Confirm your password</h4>

        <div className="auth_container Container_email">
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
                type="password"
                onChange={(e) => changePasswordHendler(e)}
                value={password}
                placeholder="gdsfgfdgd"
              />
              <span
                className="field__label-wrap"
                aria-hidden="true"
              >
                <span className="field__label">Password</span>
              </span>
            </div>
          </div>
          <p className={isPasswordIncorrect ? 'inputError' : 'inputError inputErrorhiden'}>incorrect password</p>
        </div>

        <div className="auth_submit" onClick={() => handleSubmit()}>
          <p>Next</p>
        </div>
      </form>
      {enterEmail && (
        <EditEmail
          password={password}
          fetchUserInfo={fetchUserInfo}
          setEnterEmail={setEnterEmail}
          setIsHidenPass={setIsHidenPass}
          userInfo={userInfo}
          setNewEmail={setNewEmail}
          token={token}
        />
      )}
    </div>
  );
}

export default EditEmailPass;
