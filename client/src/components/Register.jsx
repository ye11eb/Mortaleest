import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../redux/features/auth/authSlice';
import { toast } from 'react-toastify';

const Register = ({ setRegisterOver }) => {
    const [firstName, setFirstName] = useState('');
    const [secondName, setSecondName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { status } = useSelector((state) => state.auth);
    const [isHiden, setIsHiden] = useState(false);

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

    const handleSubmit = () => {
        try {
            dispatch(registerUser({ email, password, firstName, secondName }));
            setFirstName('');
            setSecondName('');
            setPassword('');
            setEmail('');
            hiDeOverlay(navigateToMain);
        } catch (error) {
            console.log(error);
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
                <h1 className="headerOverlay">CREATE ACCOUNT</h1>
                <div className="auth_container Container_email">
                    <div className="inputContainer">
                        <div className="field">
                            <label
                                for="first-name"
                                className="ha-screen-reader"
                            >
                                First name
                            </label>
                            <input
                                id="first-name"
                                className="field__input"
                                onChange={(e) => setFirstName(e.target.value)}
                                value={firstName}
                                placeholder="gdsfgfdgd"
                            />
                            <span
                                className="field__label-wrap"
                                aria-hidden="true"
                            >
                                <span className="field__label">First name</span>
                            </span>
                        </div>
                    </div>
                </div>

                <div className="auth_container Container_email">
                    <div className="inputContainer">
                        <div className="field">
                            <label
                                for="first-name"
                                className="ha-screen-reader"
                            >
                                First name
                            </label>
                            <input
                                id="first-name"
                                className="field__input"
                                onChange={(e) => setSecondName(e.target.value)}
                                value={secondName}
                                placeholder="gdsfgfdgd"
                            />
                            <span
                                className="field__label-wrap"
                                aria-hidden="true"
                            >
                                <span className="field__label">
                                    Second name
                                </span>
                            </span>
                        </div>
                    </div>
                </div>

                <div className="auth_container Container_email">
                    <div className="inputContainer">
                        <div className="field">
                            <label
                                for="first-name"
                                className="ha-screen-reader"
                            >
                                First name
                            </label>
                            <input
                                id="first-name"
                                className="field__input"
                                type="email"
                                onChange={(e) => setEmail(e.target.value)}
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
                                for="first-name"
                                className="ha-screen-reader"
                            >
                                First name
                            </label>
                            <input
                                id="first-name"
                                className="field__input"
                                type="password"
                                placeholder="password"
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
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

                <div className="auth_submit btn" onClick={() => handleSubmit()}>
                    <p>Register</p>
                </div>
            </form>
        </div>
    );
};

export default Register;
