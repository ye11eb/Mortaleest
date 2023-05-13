import React, { useState } from 'react';
import axios from '../../../utils/axios';

function EditEmailPass({
  userInfo,
  setEnterEmail,
  setNewEmail,
  token,
  setIsHidenPass,
}) {
  const [email, setEmail] = useState(userInfo.email);
  const [isHidenEmail, setIsHidenEmail] = useState(false);
  const [isEmailIncorrect, setIsEmailIncorrect] = useState(false);
  const navigateToPrev = () => {
    setEnterEmail(false);
  };

  const hiDeOverlay = (func) => {
    setIsHidenEmail(true);
    setTimeout(() => {
      func();
    }, 500);
  };

  const navigateToProfile = () => {
    setNewEmail(false);
  };

  const changeMail = async (email, token) => {
    try {
      const { data } = await axios.post('auth/changeMail', {
        email,
        token,
      });

      return data.status;
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async () => {
    try {
      const isEmailCorrect = await changeMail(email, token);
      if (isEmailCorrect) {
        setIsHidenPass(true);
        setTimeout(() => {
          navigateToProfile();
        }, 500);
      } else {
        setIsEmailIncorrect(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className={
        isHidenEmail ? 'register hideRegister' : 'register showRegister'
      }
    >
      <div className="arrow_closeWrapper">
        <div
          className="arrow_close"
          onClick={() => hiDeOverlay(navigateToPrev)}
        >
          <img src="../../public/img/other/arrow_register.svg" alt="" />
        </div>
      </div>
      <form
        className="Register_Container"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="headerOverlay">CHANGE MAIL</h1>
        <h4> Enter your new email </h4>

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
                onChange={(e) => setEmail(e.target.value)}
                type="email"
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
          <p className={isEmailIncorrect ? 'inputError' : 'inputError inputErrorhiden'}>this email alredy exist</p>
        </div>

        <div className="auth_submit" onClick={() => handleSubmit()}>
          <p>Confirm</p>
        </div>
      </form>
    </div>
  );
}

export default EditEmailPass;
