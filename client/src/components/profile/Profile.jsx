import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../../utils/axios';
import AddManufacture from '../adminTools/AddManufacture';
import EditFirstInfo from './EditInfo/EditFirstInfo';
import EditEmailPass from './EditMail/EditEmailPass';
import OrderDetails from './OrderDetails';

function Profile({
  isStaff, itemForEdit, setIsMainOverlayed, ukrLoc,
}) {
  const navigate = useNavigate();
  const [isHiden, setIsHiden] = useState(false);
  const [addShippingAddress, SetAddShippingAddress] = useState(false);
  const [orderDetails, setOrderDetails] = useState(false);
  const [newEmail, setNewEmail] = useState(false);
  const [userInfo, setUserInfo] = useState([]);
  const [usersOrders, setUsersOrders] = useState([]);
  const [openedOrder, setOpenedOrder] = useState();
  const editOrder = false;

  const fetchUserInfo = async () => {
    try {
      const { data } = await axios.get('/auth/myInfo');
      const ordersData = await axios.get('/orders/getOrders');
      setUserInfo(data);
      setUsersOrders([]);
      fetchUserOrders(ordersData, data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUserInfo();
    setIsMainOverlayed(true);
  }, []);

  const fetchUserOrders = (ordersData, data) => {
    ordersData.data.orders.forEach((element) => {
      if (data.orders.includes(element._id)) {
        usersOrders.push(element);
        setUsersOrders(usersOrders);
      }
    });
  };

  if (!userInfo) {
    return <div>manufactures does not exist</div>;
  }

  const navigateToMain = () => {
    navigate('/');
  };

  const hiDeOverlay = (func) => {
    setIsHiden(true);
    setIsMainOverlayed(false);
    setTimeout(() => {
      func();
    }, 500);
  };

  const navigateToEditAddres = () => {
    SetAddShippingAddress(true);
  };

  const showOrderDetails = (order) => {
    setOpenedOrder(order);
    setOrderDetails(true);
  };

  const openOverlay = (func) => {
    setTimeout(() => {
      func();
    }, 500);
  };

  return (
    <div>
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
          <div className="account_main">
            <div className="ItemOverlay_top-box">
              <div className="titleWarapperForBlur">
                <h1 className="headerOverlay">ACCOUNT</h1>
                <div
                  className="crossHair_close"
                  onClick={() => hiDeOverlay(navigateToMain)}
                >
                  <p className="close">+</p>
                </div>
              </div>
              <div className="overlay_Outline" />
            </div>
            <div className="account_split">
              <div className="account_container">
                {userInfo && (
                <div className="accName">
                  <div className="account_img" />
                  <div className="FullName">
                    <p>{userInfo.firstName}</p>
                    <p>{userInfo.secondName}</p>
                  </div>
                </div>
                )}

                <div className="email_container">
                  <p>Email</p>
                  <p className="email">{userInfo.email}</p>
                  <div onClick={() => setNewEmail(true)} className="btn">
                    <p>EDIT EMAIL</p>
                  </div>
                </div>
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
                    className="Edit_shipping_adress btn"
                    onClick={() => openOverlay(navigateToEditAddres())}
                  >
                    <p>EDIT SHIPPING ADRESS</p>
                  </div>
                </div>

              </div>

              <div className="account_container_v2">
                <div className="history">
                  <div className="history_header">
                    <p>History</p>
                    <div />
                  </div>
                  <div className="history_orders">
                    <div className="container_for_scroll">
                      {usersOrders && usersOrders.map((order) => (
                        <div
                          className="history_order"
                          onClick={() => showOrderDetails(order)}
                        >
                          <div className="history_order_capture">
                            <p>Order number</p>
                            <p>Summ</p>
                            <p>delivery price</p>
                            <p>Order placed on</p>
                            <p>Order status</p>
                          </div>

                          <div className="history_order_info">
                            <p>{order._id}</p>
                            <p>{order.deliveryPrice}</p>
                            <p>{order.manufacturesPrice}</p>
                            <p>{order.createdAt}</p>
                            <p>{ukrLoc ? order.orderStatus.ukr : order.orderStatus.eng}</p>
                          </div>

                          <div className="history_order_more">
                            <div>
                              <p>More</p>
                              <div className="arrow" />
                            </div>
                          </div>
                        </div>
                      ))}
                      <div className="bottom_outline" />
                    </div>
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
            {orderDetails && (
            <OrderDetails
              editOrder={editOrder}
              ukrLoc={ukrLoc}
              setOrderDetails={setOrderDetails}
              openedOrder={openedOrder}
            />
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;
