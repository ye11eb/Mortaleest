import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deliveryInfo } from '../../../redux/features/auth/authSlice';

const EditSecondInfo = ({
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
}) => {
    const [adress1, setAdress1] = useState(userInfo.adress1);
    const [adress2, setAdress2] = useState(userInfo.adress2);
    const [country, SetCountry] = useState(userInfo.country);
    const [city, SetCity] = useState(userInfo.city);
    const [state, setState] = useState(userInfo.state);
    const [zipcode, setZipcode] = useState(userInfo.zipcode);
    const { status } = useSelector((state) => state.auth);
    const [isHidenSecond, setIsHidenSecond] = useState(false);

    useEffect(() => {
        fetchUserInfo();
    }, []);

    const navigateToFirst = () => {
        setSecondInfo(false);
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

    const dispatch = useDispatch();

    const handleSubmit = () => {
        try {
            dispatch(
                deliveryInfo({
                    firstName,
                    secondName,
                    number,
                    adress1,
                    adress2,
                    country,
                    city,
                    state,
                    zipcode,
                })
            );
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
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div
            className={
                isHidenSecond
                    ? 'register hideRegister'
                    : 'register showRegister'
            }
        >
            <span
                className="arrow_auth"
                onClick={() => hiDeOverlay(navigateToFirst)}
            >
                <img src="../../public/img/other/arrow_register.svg" alt="" />
            </span>
            <form
                className="Register_Container"
                onSubmit={(e) => e.preventDefault()}
            >
                <h1 className="headerOverlay">ADD SHIPPING ADRESS</h1>
                <h4> Enter your personal information </h4>
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
                                onChange={(e) => setAdress1(e.target.value)}
                                value={adress1}
                                placeholder="gdsfgfdgd"
                            />
                            <span
                                className="field__label-wrap"
                                aria-hidden="true"
                            >
                                <span className="field__label">
                                    Address line 1
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
                                onChange={(e) => setAdress2(e.target.value)}
                                value={adress2}
                                placeholder="gdsfgfdgd"
                            />
                            <span
                                className="field__label-wrap"
                                aria-hidden="true"
                            >
                                <span className="field__label">
                                    Address line 1
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
                                onChange={(e) => SetCountry(e.target.value)}
                                value={country}
                                placeholder="gdsfgfdgd"
                            />
                            <span
                                className="field__label-wrap"
                                aria-hidden="true"
                            >
                                <span className="field__label">
                                    Country / region
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
                                onChange={(e) => SetCity(e.target.value)}
                                value={city}
                                placeholder="gdsfgfdgd"
                            />
                            <span
                                className="field__label-wrap"
                                aria-hidden="true"
                            >
                                <span className="field__label">
                                    City / town
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
                                onChange={(e) => setState(e.target.value)}
                                value={state}
                                placeholder="gdsfgfdgd"
                            />
                            <span
                                className="field__label-wrap"
                                aria-hidden="true"
                            >
                                <span className="field__label">State</span>
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
                                onChange={(e) => setZipcode(e.target.value)}
                                value={zipcode}
                                placeholder="gdsfgfdgd"
                            />
                            <span
                                className="field__label-wrap"
                                aria-hidden="true"
                            >
                                <span className="field__label">Zipcode</span>
                            </span>
                        </div>
                    </div>
                </div>

                <div className="auth_submit" onClick={() => handleSubmit()}>
                    <p>Next</p>
                </div>
            </form>
        </div>
    );
};

export default EditSecondInfo;
