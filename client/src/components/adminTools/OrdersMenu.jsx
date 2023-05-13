import React, { useEffect, useState } from 'react';
import axios from '../../utils/axios';
import OrderDetails from '../profile/OrderDetails';

function OrdersMenu({
  isHiden, hiDeOverlay, navigateToMain, ukrLoc,
}) {
  const [orders, setOrders] = useState();
  const [allOrders, setAllOrders] = useState();
  const [orderDetails, setOrderDetails] = useState(false);
  const [openedOrder, setOpenedOrder] = useState();
  const [orderNum, setOrderNum] = useState();
  const editOrder = true;

  useEffect(() => {
    fetchUserInfo();
  }, []);

  const showOrderDetails = (order) => {
    setOpenedOrder(order);
    setOrderDetails(true);
  };

  const fetchUserInfo = async () => {
    try {
      const ordersData = await axios.get('/orders/getOrders');
      setAllOrders(ordersData.data.orders);
      setOrders(ordersData.data.orders);
    } catch (error) {
      console.log(error);
    }
  };

  const changedFilterOpt = (opt) => {
    if (opt) {
      setOrders(allOrders.filter((element) => element.orderStatus?.eng === opt));
    } else {
      setOrders(allOrders);
    }
  };

  const changedFilterId = (id) => {
    if (id) {
      setOrders(allOrders.filter((element) => element._id === id));
    } else {
      setOrders(allOrders);
    }
  };

  return (
    <div
      className={
                    isHiden ? 'Overlay hideOverlay AdminTool' : 'Overlay showOverlay AdminTool'
                }
    >
      <div className="found_order">
        <div>
          <input
            type="text"
            value={orderNum}
            onChange={(e) => setOrderNum(e.target.value)}
          />
          <div type="submit" onClick={() => changedFilterId(orderNum)} className="btn"><p>знайти</p></div>
        </div>
        <form>
          <select
            name="select "
            id="select_id"
            onChange={() => changedFilterOpt(document.getElementById('select_id').value)}
          >
            <option value="">all</option>
            <option value="accepted">accepted</option>
            <option value="in the way">in the way</option>
            <option value="at the post office">at the post office</option>
            <option value="ended">ended</option>
            <option value="not payed">not payed</option>
            <option value="denied">denied</option>
          </select>
        </form>
      </div>
      {orderDetails && (
        <OrderDetails
          ukrLoc={ukrLoc}
          editOrder={editOrder}
          setOrderDetails={setOrderDetails}
          openedOrder={openedOrder}
        />
      )}
      <div
        className="crossHair_close"
        onClick={() => hiDeOverlay(navigateToMain)}
      >
        <p className="close">+</p>
      </div>
      <div className="branch">
        <div className="history">
          <div className="history_header">
            <p>History</p>
            <div />
          </div>
          <div className="history_orders">
            <div className="container_for_scroll">
              {orders && orders.map((order) => (
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
                    <p>{order.orderStatus?.eng}</p>
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
  );
}

export default OrdersMenu;
