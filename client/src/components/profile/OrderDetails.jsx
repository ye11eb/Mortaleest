import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllManufactures } from '../../redux/features/Manufactures/manuSlice';
import {
  changeOrder,
} from '../../redux/features/order/orderSlice';

function OrderDetails({
  setOrderDetails, openedOrder, ukrLoc, editOrder, isStaff,
}) {
  const [width, setWidth] = useState(window.innerWidth)
  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  window.addEventListener('resize', handleWindowSizeChange);
  const [isHiden, setIsHiden] = useState(false);
  const dispatch = useDispatch();
  const [ordersManu, setOrdersManu] = useState([]);
  const [trackNumber, setTrackNumber] = useState();
  const [orderStatus, setOrderStatus] = useState();
  const manufactures = useSelector(
    (state) => state.manufactures.manufactures,
  );

  useEffect(() => {
    dispatch(getAllManufactures());
    fetchManuInfo();
    setTrackNumber(openedOrder.trackNumber);
  }, []);

  const changeOrderInfo = () => {
    try {
      const data = {
        _id: openedOrder._id,
        firstName: openedOrder.firstName,
        secondName: openedOrder.secondName,
        number: openedOrder.number,
        adress1: openedOrder.adress1,
        adress2: openedOrder.adress2,
        country: openedOrder.country,
        city: openedOrder.city,
        state: openedOrder.state,
        zipcode: openedOrder.zipcode,
        userEmail: openedOrder.userEmail,
        manufactures: openedOrder.manufactures,
        deliveryPrice: openedOrder.deliveryPrice,
        manufacturesPrice: openedOrder.manufacturesPrice,
        totalPrice: openedOrder.totalPrice,
        priceValue: openedOrder.priceValue,
        orderStatus: JSON.parse(orderStatus),
        trackNumber,
      };
      dispatch(changeOrder(data));
    } catch (error) {
      console.log(error);
    }
  };

  const fetchManuInfo = () => {
    manufactures.forEach((manufacture) => {
      openedOrder.manufactures.forEach((orderItem) => {
        if (manufacture._id === orderItem.manufactureId) {
          ordersManu.push({ manufacture, orderItem });
        }
      });
      setOrdersManu(ordersManu);
    });
  };
  const hiDeOverlay = () => {
    setIsHiden(true);
    setTimeout(() => {
      setOrderDetails(false);
    }, 500);
  };
  return (
    <div className={isHiden ? 'Overlay orderOverlay hideRegister' : 'Overlay orderOverlay showRegister'}>
      <div className="order_main_container">
        <div className="ItemOverlay_top-box">
          <div className="titleWarapperForBlur">
            <h1 className="headerOverlay">ORDER DETAILS</h1>
            <div className="arrow_close" onClick={() => hiDeOverlay()}>
              <img src="../../public/img/other/arrow_register.svg" alt="" />
            </div>
          </div>
          <div className="cart_title">
            <div className="cart_titles">
              <p className="cart_longer_part">Product</p>
              {width > 800 && <p>Total</p>}
            </div>
            <div className="overlay_Outline" />
          </div>
        </div>
        <div className="order_split container">
          <div className="branch">
            <div className={isStaff ? 'order_info orderBottomBorder orderStatusForAdmin' : 'order_info orderBottomBorder'}>
              <ul className="order_bold_text">
                <li>Order status</li>
                <li>Track number </li>
              </ul>
              <ul>
                <li>
                  {editOrder ? (
                    <form className="select_form">
                      <select
                        name="select "
                        id="select_"
                        onChange={() => setOrderStatus(document.getElementById('select_').value)}
                      >
                        <option value='{"eng":"accepted","ukr":"прийнято"}'>accepted</option>
                        <option value='{"eng":"in the way","ukr":"В дорозі"}'>in the way</option>
                        <option value='{"eng":"at the post office","ukr":"у відділені пошти"}'>at the post office</option>
                        <option value='{"eng":"ended","ukr":"завершено"}'>ended</option>
                        <option value='{"eng":"not payed","ukr":"не оплачено"}'>not payed</option>
                        <option value='{"eng":"denied","ukr":"відмовлено"}'>denied</option>
                      </select>
                    </form>
                  )
                    : (
                      <li>
                        {ukrLoc ? openedOrder.orderStatus.ukr
                          : openedOrder.orderStatus.eng}
                      </li>
                    )}

                </li>
                {editOrder ? (
                  <div className="inputContainer">
                    <div className="field">
                      <label className="ha-screen-reader">
                        Track number
                      </label>
                      <input
                        className="field__input"
                        type="text"
                        value={trackNumber}
                        onChange={(e) => setTrackNumber(e.target.value)}
                      />
                      <span
                        className="field__label-wrap"
                        aria-hidden="true"
                      >
                        <span className="field__label">title</span>
                      </span>
                    </div>
                  </div>
                )
                  : openedOrder.trackNumber}
              </ul>
            </div>

            <div className="orderSubtitle"><p>Customer information</p></div>
            <div className="order_info orderBottomBorder">
              <ul className="order_bold_text">
                <li>First name</li>
                <li>Second name</li>
                <li>Number</li>
                <li>Adress line 1</li>
                <li>Adress line 2</li>
                <li>Country / region</li>
                <li>City / town</li>
                <li>State</li>
              </ul>
              <ul>
                <li>{openedOrder.firstName}</li>
                <li>{openedOrder.secondName}</li>
                <li>{openedOrder.number}</li>
                <li>{openedOrder.adress1}</li>
                <li>{openedOrder.adress2}</li>
                <li>{openedOrder.country}</li>
                <li>{openedOrder.city}</li>
                <li>{openedOrder.state}</li>
              </ul>
            </div>
            <div className="orderSubtitle"><p>Order information</p></div>
            <div className="order_info orderBottomBorder">
              <ul className="order_bold_text">
                <li>Order number</li>
                <li>Order placed on</li>
                <li>Total</li>
                <li>Delivery</li>
              </ul>
              <ul>
                <li className="openedOrder_id">
                  {openedOrder._id}
                </li>
                <li>{openedOrder.createdAt}</li>
                <li>
                  {openedOrder.totalPrice}
                  <span>{openedOrder.priceValue}</span>
                </li>
                <li>
                  {openedOrder.deliveryPrice}
                  <span>{openedOrder.priceValue}</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="branch">
            <div className="history_orders_manu">
              <div className="container_for_scroll ">
                {ordersManu && ordersManu.map((item) => (
                  <div className="history_order_manu" key={item.manufacture._id}>
                    <img alt="" src={`http://localhost:5000/${item.manufacture.imgUrl[0]}`}/>
                    <div className="history_order_manu_text">
                      <div className="history_order_manu_capture">
                        <p>{item.manufacture.titleEng}</p>
                        <p>{item.manufacture.nameEng}</p>
                        <p>{item.manufacture.priceEng + item.manufacture.priceValueEng}</p>
                      </div>

                      <div className="history_order_manu_info">
                        <ul>
                          <li>Size</li>
                          <li>Color</li>
                          <li>Quantity</li>
                        </ul>
                        <ul>
                          <li>{item.orderItem.manufactureSize}</li>
                          <li>{item.orderItem.manufactureColor}</li>
                          <li>{item.orderItem.manufactureQuantity}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
                {editOrder && (
                <div
                  className="Edit_shipping_adress btn"
                  onClick={() => changeOrderInfo()}
                >
                  <p>SAVE INFO</p>
                </div>
                )}
                <div className="bottom_outline" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderDetails;
