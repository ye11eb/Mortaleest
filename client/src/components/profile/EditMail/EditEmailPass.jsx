import React, { useEffect, useState } from 'react';
import EditEmail from './EditEmail';

const EditEmailPass = ({ userInfo, setNewEmail, fetchUserInfo }) => {
    const [password, setPassword] = useState('');
    const [isHidenPass, setIsHidenPass] = useState(false);
    const [enterEmail, setEnterEmail] = useState(false);

    const navigateToProfile = () => {
        setNewEmail(false);
    };

    const hiDeOverlay = (func) => {
        setIsHidenPass(true);
        setTimeout(() => {
            func();
        }, 500);
    };

    const handleSubmit = () => {
        setEnterEmail(true);
    };

    return (
        <div
            className={
                isHidenPass ? 'register hideRegister' : 'register showRegister'
            }
        >
            <span
                className="arrow_auth"
                onClick={() => hiDeOverlay(navigateToProfile)}
            >
                <img src="../../public/img/other/arrow_register.svg" alt="" />
            </span>
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
                                for="first-name"
                                className="ha-screen-reader"
                            >
                                Password
                            </label>
                            <input
                                id="first-name"
                                className="field__input"
                                onChange={(e) => setPassword(e.target.value)}
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
                />
            )}
        </div>
    );
};

export default EditEmailPass;
