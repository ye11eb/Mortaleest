import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllManufactures } from '../../redux/features/Manufactures/manuSlice';

function OrderDetails({ setOrderDetails, openedOrder }) {
  const [isHiden, setIsHiden] = useState(false);
  const dispatch = useDispatch();
  const [ordersManu, setOrdersManu] = useState([]);
  //   const [loadManu, setLoadManu] = useState();
  const manufactures = useSelector(
    (state) => state.manufactures.manufactures,
  );

  useEffect(() => {
    dispatch(getAllManufactures());
    fetchManuInfo();
  }, []);

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
      <div className="arrow_close" onClick={() => hiDeOverlay()}>
        <img src="../../public/img/other/arrow_register.svg" alt="" />
      </div>
      {/* <div className="account_main">
      </div> */}
      <div className="order_main_container">
        <h1 className="headerOverlay">ORDER DETAILS</h1>
        <div className="order_split container">
          <div className="branch">
            <div className="orderSubtitle orderBottomBorder"><p>Order status</p></div>
            <div className="order_info orderBottomBorder">
              <ul className="order_bold_text">
                <li>Order status</li>
                <li>Track number </li>
              </ul>
              <ul>
                <li>Delivered</li>
                <li>CB293678012PL</li>
              </ul>
            </div>

            <div className="orderSubtitle orderBottomBorder"><p>Customer information</p></div>
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
                <li>First name</li>
                <li>Second name</li>
                <li>Number</li>
                <li>Adress line 1</li>
                <li>Adress line 2</li>
                <li>Country / region</li>
                <li>City / town</li>
                <li>State</li>
              </ul>
            </div>
            <div className="orderSubtitle orderBottomBorder"><p>Customer information</p></div>
            <div className="order_info orderBottomBorder">
              <ul className="order_bold_text">
                <li>Order number</li>
                <li>Order placed on</li>
                <li>Total</li>
                <li>Delivery</li>
              </ul>
              <ul>
                <li>First name</li>
                <li>Second name</li>
                <li>Number</li>
                <li>Adress line 1</li>
              </ul>
            </div>
          </div>
          <div className="branch">
            <div className="history_orders_manu">
              <div className="container_for_scroll scroll">
                {/* {console.log(ordersManu)} */}
                {ordersManu && ordersManu.map((item) => (
                  <div className="history_order_manu" key={item.manufacture._id}>
                    <img src={item.manufacture.imgUrl[0]} alt="" />
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderDetails;
