/* eslint-disable import/no-named-as-default */
/* eslint-disable react/jsx-closing-tag-location */
import { useEffect, useState, React } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from '../utils/axios';
import { createOrder } from '../redux/features/order/orderSlice';
import OrdersMenu from './adminTools/OrdersMenu';

function Cart({
  cartItems, setCartItems, setIsMainOverlayed, isStaff, ukrLoc,
}) {
  const windowsize = window.innerWidth;
  const navigate = useNavigate();
  const [isHiden, setIsHiden] = useState(false);
  const [itemQuantity, setItemQuantity] = useState([]);
  // const [idOfChangingEl, setIdOfChangingEl] = useState()
  const [subtotal, setSubtotal] = useState(0);
  const deliveryPrice = 20;
  let totalPrice = 0;
  const [userInfo, setUserInfo] = useState([]);
  const manufacturesCheckOut = [];

  const dispatch = useDispatch();

  const fetchUserInfo = async () => {
    try {
      const data = await axios.get('/auth/myInfo');
      const userData = data.data;
      setUserInfo(userData);
    } catch (error) {
      console.log(error);
    }
  };

  const setItemQuantityFunc = () => {
    cartItems.forEach((item) => {
      setItemQuantity([...itemQuantity, item]);
    });
  };

  const setSubtotalFunc = () => {
    cartItems.forEach((item) => {
      totalPrice += item.totalItemPrice;
    });
    setSubtotalfunc(totalPrice);
  };

  const setSubtotalfunc = (totalPrice) => {
    setSubtotal(totalPrice);
  };

  useEffect(() => {
    setSubtotalFunc();
    fetchUserInfo();
  }, [itemQuantity]);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [subtotal]);

  useEffect(() => {
    setItemQuantityFunc();
    setIsMainOverlayed(true);
    // setCartItems(localStorage.getItem('cart', cartItems));
  }, []);

  const mapManufacturesCheckout = () => {
    cartItems.forEach((item) => {
      manufacturesCheckOut.push({
        manufactureId: item._id,
        manufactureSize: item.size,
        manufactureColor: item.color,
        manufactureQuantity: item.quantity,
        manufactureTotalPrice: item.totalItemPrice,
      });
    });
  };

  const CheckOut = () => {
    mapManufacturesCheckout();
    const data = {
      firstName: userInfo.firstName,
      secondName: userInfo.secondName,
      number: userInfo.number,
      adress1: userInfo.adress1,
      adress2: userInfo.adress2,
      country: userInfo.country,
      userEmail: userInfo.email,
      state: userInfo.state,
      city: userInfo.city,
      zipcode: userInfo.zipcode,
      manufactures: manufacturesCheckOut,
      deliveryPrice,
      manufacturesPrice: subtotal,
      totalPrice: subtotal + deliveryPrice,
      payed: false,
      orderStatus: {
        eng: 'accepted',
        ukr: 'прийнято',
      },
      trackNumber: 'noInfo',
      priceValue: cartItems[0].priceValue,
    };
    dispatch(createOrder(data));
  };

  const navigateToMain = () => {
    navigate('/');
  };

  const hiDeOverlay = () => {
    setIsHiden(true);
    setIsMainOverlayed(false);
    setTimeout(() => {
      navigateToMain();
    }, 500);
  };

  const deleteCartItems = (item) => {
    setCartItems((cartItems) => cartItems.filter((cartItem) => cartItem !== item));
  };

  const findIndexCartItem = (item, action) => {
    cartItems.forEach((element) => {
      if (element === item) {
        const idOfChangingElement = cartItems.indexOf(element);
        changeElement(action, idOfChangingElement);
      }
    });
  };

  const changeElement = (action, idOfChangingElement) => {
    setTimeout(() => {
      if (cartItems[idOfChangingElement]) {
        cartItems[idOfChangingElement].totalItemPrice = 0;
        cartItems[idOfChangingElement].quantity += action;
        cartItems[idOfChangingElement].totalItemPrice = cartItems[idOfChangingElement].price
                * cartItems[idOfChangingElement].quantity;
        setItemQuantity(itemQuantity + 1);
      }
    }, 50);
  };

  function ChangeQuantity(item, action) {
    if (item.quantity === 1 && action === -1) {
      return 0;
    }
    findIndexCartItem(item, action);
    setSubtotalFunc();
  }

  return (
    <div>
      {isStaff ? (
        <OrdersMenu
          ukrLoc={ukrLoc}
          isHiden={isHiden}
          hiDeOverlay={hiDeOverlay}
          navigateToMain={navigateToMain}
        />
      )
      // eslint-disable-next-line react/jsx-wrap-multilines
        : (<div
            className={isHiden ? 'hideOverlay Overlay' : 'showOverlay Overlay'}
        >
          {cartItems.length ? (
            <>
              <div className="overlay-top absolute_top cart_page">
                <div className="ItemOverlay_top-box">
                  <div className="titleWarapperForBlur">
                    <h1 className="headerOverlay">CART</h1>
                    <div
                      className="crossHair_close"
                      onClick={() => hiDeOverlay()}
                    >
                      <p className="close">+</p>
                    </div>
                  </div>
                  <div className="cart_title">
                    <div className="cart_titles">
                      <p className="cart_longer_part">Product</p>
                      <p>Total</p>
                    </div>
                    <div className="overlay_Outline" />
                  </div>
                </div>
              </div>
              <div className="MainCart_container">
                <div>
                  <div className="cart_items_container container">
                    <div className="cart_items">
                      {cartItems.map((item) => (
                        <div
                          className="cart_item"
                          key={item.title + item.name}
                        >
                          <div className="cart_product">
                            <div className="cart_img">
                              <img
                                src={item.imgUrl[0]}
                                alt=""
                              />
                            </div>
                            <div className="cart_item_info">
                              <div className="cart_item_info_line1">
                                <p className="cart_item_title">
                                  {item.capture}
                                </p>
                                <p>{`${item.title}${item.name}`}</p>
                                <span>
                                  {item.price}
                                  <p>
                                    {item.priceValue}
                                  </p>
                                </span>
                              </div>
                              <div className="cart_item_info_line2">
                                <div className="cart_item_info_item">
                                  <div>
                                    <div>
                                      <p>Size</p>
                                      <p>{item.size}</p>
                                    </div>
                                    <div>
                                      <p>Color</p>
                                      <p>{item.color}</p>
                                    </div>
                                  </div>
                                  <div className="cart_item_quantiti_div">
                                    <p>Quantity</p>
                                    <div className="cart_change_quantity">
                                      <div className="cart_item_minus cart_item_sign" onClick={() => ChangeQuantity(item, -1)}>
                                        <div className="cart_sign_container">
                                          <img src="./img/other/CartMinus.svg" alt="" />
                                        </div>
                                      </div>
                                      <p className="cart_quantity_number">{item.quantity}</p>
                                      <div className="cart_item_plus cart_item_sign" onClick={() => ChangeQuantity(item, +1)}>
                                        <div className="cart_sign_container">
                                          <img src="./img/other/CartPlus.svg" alt="" />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="cart_total">
                            <p>{item.totalItemPrice}</p>
                            <div className="cart_delete_item">
                              {window.innerWidth > 340 && <p>Delete</p>}
                              <div
                                className="cart_delete"
                                onClick={() => deleteCartItems(item)}
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                      <div className="cart_bottom">
                        <div className="overlay_Outline" />
                        {windowsize > 800 ? (
                          <div className="cartBottom_wraper">
                            <div className="cart_bottom_price">
                              <div>
                                <p>Total</p>
                                <p>Delivery</p>
                                <p className="cart_bottom_price_subtotal">
                                  Subtotal
                                </p>
                              </div>
                              <div className="cart_bottom_price_numbers">
                                <div className="cart_price_numbers_fst">
                                  <p>{subtotal}</p>
                                  <p>{deliveryPrice}</p>
                                  <p className="cart_bottom_price_subtotal">
                                    {subtotal + deliveryPrice}
                                  </p>
                                </div>
                                <div className="cart_price_numbers_scnd">
                                  <p>{cartItems[0].priceValue}</p>
                                  <p>{cartItems[0].priceValue}</p>
                                  <p className="cart_bottom_price_subtotal">
                                    {cartItems[0].priceValue}
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="cart_bottom_checkOut">
                              <div
                                className="checkOut_btn btn"
                                onClick={() => CheckOut()}
                              >
                                <p>CHECK OUT</p>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div className="cartBottom_wraper">
                            <div className="cart_bottom_price">
                              <div className="cart_bottom_price_left">
                                <div>
                                  <p>Total</p>
                                  <p>Delivery</p>
                                </div>
                                <div className="cart_bottom_price_numbers">
                                  <div className="cart_price_numbers_fst">
                                    <p>{subtotal}</p>
                                    <p>{deliveryPrice}</p>
                                  </div>
                                  <div className="cart_price_numbers_scnd">
                                    <p>{cartItems[0].priceValue}</p>
                                    <p>{cartItems[0].priceValue}</p>
                                  </div>
                                </div>
                              </div>

                              <div className="cart_bottom_price_right">
                                <div>
                                  <p className="cart_bottom_price_subtotal">
                                    Subtotal
                                  </p>
                                  <p className="cart_bottom_price_subtotal_nums">
                                    {subtotal + deliveryPrice}
                                  </p>
                                  <p className="cart_bottom_price_subtotal_nums">
                                    {cartItems[0].priceValue}
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="cart_bottom_checkOut">
                              <div
                                className="checkOut_btn btn"
                                onClick={() => CheckOut()}
                              >
                                <p>CHECK OUT</p>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </>
          ) : (
            <div className="MainCart_container cart_page">
              <div className="ItemOverlay_top-box container">
                <h1 className="headerOverlay">CART</h1>
                <div
                  className="crossHair_close"
                  onClick={() => hiDeOverlay()}
                >
                  <p className="close">+</p>
                </div>
              </div>
              <div className="empty_cart">
                <h1>YOUR CART IS EMPTY</h1>
                <div
                  className="emempty_cart_btn btn"
                  onClick={() => hiDeOverlay()}
                >
                  <p>CONTINUE SHOPPING</p>
                </div>
              </div>
            </div>
          )}
        </div>
        )}
    </div>
  );
}
export default Cart;
