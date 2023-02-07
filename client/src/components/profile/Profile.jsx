import axios from '../../utils/axios';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import AddManufacture from '../adminTools/AddManufacture';
import EditFirstInfo from './EditInfo/EditFirstInfo';
import EditEmailPass from './EditMail/EditEmailPass';

const Profile = ({ isStaff, itemForEdit }) => {
    const navigate = useNavigate();
    const [isHiden, setIsHiden] = useState(false);
    const [addShippingAddress, SetAddShippingAddress] = useState(false);
    const [newEmail, setNewEmail] = useState(false);
    const [userInfo, setUserInfo] = useState([]);
    const [manufactures, setManufactures] = useState([]);
    const [ordersIDs, setOrdersIds] = useState();
    const [orders, setOrders] = useState([]);

    const fetchUserInfo = async () => {
        try {
            const { data } = await axios.get('/auth/myInfo');
            setUserInfo(data);
            console.log(data['orders']);
            setOrdersIds(data['orders']);
            console.log(data);
            // console.log(userInfo['orders']);
            // setOrders(userInfo['orders'])
            // // setOrdersIds(orders)
            // console.log(orders);
            fetchOrders(data);
        } catch (error) {
            console.log(error);
        }
    };

    const fetchOrders = async (userData) => {
        try {
            const ordersData = await axios.get('/orders/getOrders');

            console.log(ordersData.data.orders[0].manufactures);
            // const {data} = await axios.get('/manufactures/getAllManufactures')
            // setManufactures(data)
            // console.log('loh');

            // userData['orders'].forEach((item) => {
            //   console.log(data.manufactures);
            //   data.manufactures.forEach((manufacture) => {
            //     console.log(item);
            //     console.log(manufacture._id);
            //     if(item == manufacture._id){
            //       console.log("huy");
            //       console.log(item);
            //     }
            //   })
            // })

            // setUserInfo(data)
            // console.log(userInfo);
            // setOrders(userInfo['orders'])
            // console.log(orders);
        } catch (error) {
            console.log(error);
        }
    };

    // if (userInfo.data) {
    //   setUserInfo(userInfo.data)
    //   console.log(loh);
    // }

    useEffect(() => {
        fetchUserInfo();
        // fetchOrders()
    }, []);

    if (!userInfo) {
        return <div>manufactures does not exist</div>;
    }

    const navigateToMain = () => {
        navigate('/');
    };

    const hiDeOverlay = (func) => {
        setIsHiden(true);
        setTimeout(() => {
            func();
        }, 500);
    };

    const navigateToEditAddres = () => {
        SetAddShippingAddress(true);
    };

    const openOverlay = (func) => {
        setTimeout(() => {
            func();
        }, 500);
    };

    return (
        <>
            {isStaff ? (
                <AddManufacture
                    isHiden={isHiden}
                    hiDeOverlay={hiDeOverlay}
                    navigateToMain={navigateToMain}
                    itemForEdit={itemForEdit}
                />
            ) : (
                <div
                    className={
                        isHiden ? 'Overlay hideOverlay' : 'Overlay showOverlay'
                    }
                >
                    <div
                        className="crossHair_close"
                        onClick={() => hiDeOverlay(navigateToMain)}
                    >
                        <p className="close">+</p>
                    </div>
                    <div className="account_main">
                        <h1 className="headerOverlay">ACCOUNT</h1>
                        <div className="account_split">
                            <div className="account_container">
                                {userInfo && (
                                    <div className="accName">
                                        <div className="account_img"></div>
                                        <div className="FullName">
                                            <p>{userInfo.firstName}</p>
                                            <p>{userInfo.secondName}</p>
                                        </div>
                                    </div>
                                )}

                                <div className="email_container">
                                    <p>Email</p>
                                    <p className="email">{userInfo.email}</p>
                                    <div onClick={() => setNewEmail(true)}>
                                        EDIT EMAIL <span></span>
                                    </div>
                                </div>

                                <div className="history">
                                    <div className="history_header">
                                        <p>History</p>
                                        <div></div>
                                    </div>
                                    <div className="history_orders">
                                        {ordersIDs &&
                                            ordersIDs.map((item) => {
                                                <div
                                                    className="history_order"
                                                    key={item._ID}
                                                >
                                                    {/* <img src="" alt="" /> */}
                                                    <div className="history_order_capture">
                                                        <p>item</p>
                                                        <p>Summ</p>
                                                        <p>Order placed on</p>
                                                        <p>Order delived</p>
                                                        <p>Quantity</p>
                                                    </div>

                                                    <div className="history_order_info">
                                                        <p>{item._ID}</p>
                                                        <p>$99,998</p>
                                                        <p>22.04.2024</p>
                                                        <p>01.05.2024</p>
                                                        <p>1</p>
                                                    </div>
                                                </div>;
                                            })}

                                        <div className="history_order">
                                            <img
                                                src="data:image/jpeg;base64,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"
                                                alt=""
                                            />
                                            <div className="history_order_capture">
                                                <p>Order number</p>
                                                <p>Summ</p>
                                                <p>Order placed on</p>
                                                <p>Order delived</p>
                                                <p>Quantity</p>
                                            </div>

                                            <div className="history_order_info">
                                                <p>000012034</p>
                                                <p>$99,998</p>
                                                <p>22.04.2024</p>
                                                <p>01.05.2024</p>
                                                <p>1</p>
                                            </div>
                                        </div>

                                        <div className="history_order">
                                            <img
                                                src="data:image/jpeg;base64,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"
                                                alt=""
                                            />
                                            <div className="history_order_capture">
                                                <p>Order number</p>
                                                <p>Summ</p>
                                                <p>Order placed on</p>
                                                <p>Order delived</p>
                                                <p>Quantity</p>
                                            </div>

                                            <div className="history_order_info">
                                                <p>000012034</p>
                                                <p>$99,998</p>
                                                <p>22.04.2024</p>
                                                <p>01.05.2024</p>
                                                <p>1</p>
                                            </div>
                                        </div>

                                        <div className="history_order">
                                            <img
                                                src="data:image/jpeg;base64,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"
                                                alt=""
                                            />
                                            <div className="history_order_capture">
                                                <p>Order number</p>
                                                <p>Summ</p>
                                                <p>Order placed on</p>
                                                <p>Order delived</p>
                                                <p>Quantity</p>
                                            </div>

                                            <div className="history_order_info">
                                                <p>000012034</p>
                                                <p>$99,998</p>
                                                <p>22.04.2024</p>
                                                <p>01.05.2024</p>
                                                <p>1</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="account_container_v2">
                                <h1 className="InfoHeader">Shipping adress</h1>

                                <div className="Personal_info_container">
                                    <p>Personal information</p>

                                    {userInfo && (
                                        <div className="Personal_info">
                                            <div className="Personal_info_capture">
                                                <p>First name</p>
                                                <p>Second name</p>
                                                <p>Number</p>
                                            </div>

                                            <div className="Personal_info_info">
                                                <p>{userInfo.firstName}</p>
                                                <p>{userInfo.secondName}</p>
                                                <p>
                                                    {userInfo.number
                                                        ? userInfo.number
                                                        : 'No info'}
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <div className="Address_info_container">
                                    <p>Adress</p>
                                    <div className="Account_address">
                                        <div className="Personal_info_capture">
                                            <p>Adress line 1</p>
                                            <p>Adress line 2</p>
                                            <p>Country / region</p>
                                            <p>City / town</p>
                                            <p>State</p>
                                            <p>Zipcode</p>
                                        </div>

                                        {userInfo && (
                                            <div className="Personal_info_info">
                                                <p>{userInfo.adress1}</p>
                                                <p>{userInfo.adress2}</p>
                                                <p>{userInfo.country}</p>
                                                <p>{userInfo.city}</p>
                                                <p>{userInfo.state}</p>
                                                <p>{userInfo.zipcode}</p>
                                            </div>
                                        )}
                                    </div>
                                    <div
                                        className="Edit_shipping_adress"
                                        onClick={() =>
                                            openOverlay(navigateToEditAddres())
                                        }
                                    >
                                        EDIT SHIPPING ADRESS <span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {addShippingAddress && (
                            <EditFirstInfo
                                fetchUserInfo={fetchUserInfo}
                                userInfo={userInfo}
                                SetAddShippingAddress={SetAddShippingAddress}
                            />
                        )}
                        {newEmail && (
                            <EditEmailPass
                                fetchUserInfo={fetchUserInfo}
                                userInfo={userInfo}
                                setNewEmail={setNewEmail}
                            />
                        )}
                    </div>
                </div>
            )}
        </>
    );
};

export default Profile;
