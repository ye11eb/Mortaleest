import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../../utils/axios';
import AddManufacture from '../adminTools/AddManufacture';
import EditFirstInfo from './EditInfo/EditFirstInfo';
import EditEmailPass from './EditMail/EditEmailPass';
import OrderDetails from './OrderDetails';
import { useDispatch } from 'react-redux';

function Profile({
  isStaff, itemForEdit, setIsMainOverlayed, ukrLoc, CountriesData,
}) {
  const navigate = useNavigate();
  const [isHiden, setIsHiden] = useState(false);
  const [addShippingAddress, SetAddShippingAddress] = useState(false);
  const [orderDetails, setOrderDetails] = useState(false);
  const [newEmail, setNewEmail] = useState(false);
  const [userInfo, setUserInfo] = useState([]);
  const [usersOrders, setUsersOrders] = useState([]);
  const [usersNotChanged, setUsersNotChanged] = useState([]);
  const [isActualyStaff, setIsActualyStaff] = useState(false)
  const [openedOrder, setOpenedOrder] = useState();
  const editOrder = false;

  const fetchUserInfo = async () => {
    try {
      const { data } = await axios.get('/auth/myInfo');
      const ordersData = await axios.get('/orders/getOrders');
      setUserInfo(data);
      setIsActualyStaff(data.isStaff)
      setUsersNotChanged([]);
      fetchUserOrders(ordersData, data);
    } catch (error) {
      console.log(error);
    }
  };

  const Unlogin = () => {
    localStorage.removeItem('token');
  };

  useEffect(() => {
    fetchUserInfo();
    setIsMainOverlayed(true);
  }, []);

  useEffect(() => {
    fetchUserInfo();
  }, [addShippingAddress, newEmail]);

  const fetchUserOrders = (ordersData, data) => {
    const fetcheduserOredrs = [];
    ordersData.data.orders.forEach((element) => {
      if (data.orders.includes(element._id)) {
        fetcheduserOredrs.push(element);
        setUsersNotChanged(fetcheduserOredrs);
      }
    });
  };

  useEffect(() => {
    changeorderData();
  }, [usersNotChanged]);

  const changeorderData = () => {
    const changedOrders = [];
    usersNotChanged.forEach((el) => {
      el.createdAt = el.createdAt.slice(0, 10);
      changedOrders.push(el);
    });
    setUsersOrders(changedOrders);
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
      {isActualyStaff ? (
        <AddManufacture
          isHiden={isHiden}
          hiDeOverlay={hiDeOverlay}
          navigateToMain={navigateToMain}
          itemForEdit={itemForEdit}
          setIsMainOverlayed={setIsMainOverlayed}
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
                <h1 className="headerOverlay">{ukrLoc ? 'АКАУНТ' : 'ACCOUNT'}</h1>
                <div
                  className="crossHair_close"
                  onClick={() => hiDeOverlay(navigateToMain)}
                >
                  <div />
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
                  <p>{ukrLoc ? 'email' : 'email'}</p>
                  <p className="email">{userInfo.email}</p>
                  <div onClick={() => setNewEmail(true)} className="btn">
                    <p>{ukrLoc ? 'ЗМІНИТИ ЕМАIL' : 'EDIT EMAIL'}</p>
                  </div>
                </div>
                <div className="Personal_info_container">
                  <p>{ukrLoc ? 'Персональна інформація' : 'Personal information'}</p>

                  {userInfo && (
                    <div className="Personal_info">
                      <div className="Personal_info_capture">
                        <p>{ukrLoc ? 'Імя' : 'First name '}</p>
                        <p>{ukrLoc ? 'Прізвище' : 'Second name'}</p>
                        <p>{ukrLoc ? 'Номер' : 'Number'}</p>
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
                  <p>{ukrLoc ? 'Aдрес' : 'Address'}</p>
                  <div className="Account_address">
                    <div className="Personal_info_capture">
                      <p>{ukrLoc ? 'Aдресний рядок 1' : 'Address line 1'}</p>
                      <p>{ukrLoc ? 'Aдресний рядок 2' : 'Address line 2'}</p>
                      <p>{ukrLoc ? 'Країна' : 'Country / region'}</p>
                      <p>{ukrLoc ? 'Місто' : 'City / town'}</p>
                      <p>{ukrLoc ? 'Область' : 'State'}</p>
                      <p>{ukrLoc ? 'ЗІП код' : 'Zipcode'}</p>
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
                    <p>{ukrLoc ? 'ЗМІНИТИ АДРЕС ДОСТАВКИ' : 'EDIT SHIPPING ADDRES'}</p>
                  </div>
                  <div
                    className="btn"
                    onClick={() => Unlogin()}
                  >
                    <p>{ukrLoc ? 'ВИЙТИ' : 'UNLOGIN'}</p>
                  </div>
                </div>

              </div>

              <div className="account_container_v2">
                <div className="history">
                  <div className="history_header">
                    <p>{ukrLoc ? 'Історія' : 'History'}</p>
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
                            <p>{ukrLoc ? 'Номер замовлення' : 'Order number'}</p>
                            <p>{ukrLoc ? 'Сума' : 'Summ'}</p>
                            <p>{ukrLoc ? 'Ціна доставки' : 'delivery price'}</p>
                            <p>{ukrLoc ? 'Дата замовлення' : 'Order placed on'}</p>
                            <p>{ukrLoc ? 'Статус замовлення' : 'Order status'}</p>
                          </div>

                          <div className="history_order_info">
                            <p>{order._id}</p>
                            <p>
                              {`${order.totalPrice}
                              ${order.priceValue}`}
                            </p>
                            <p>
                              {`${order.deliveryPrice} 
                              ${order.priceValue}`}
                            </p>
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
              CountriesData={CountriesData}
              ukrLoc={ukrLoc}
            />
            )}
            {newEmail && (
            <EditEmailPass
              fetchUserInfo={fetchUserInfo}
              userInfo={userInfo}
              setNewEmail={setNewEmail}
              ukrLoc={ukrLoc}
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
