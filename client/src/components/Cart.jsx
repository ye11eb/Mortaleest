import { useEffect, useState, React } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import axios from '../utils/axios';
import { createOrder, payments } from '../redux/features/order/orderSlice';
import OrdersMenu from './adminTools/OrdersMenu';
import CartError from './CartError';

function Cart({
  cartItems,
  setCartItems,
  setIsMainOverlayed,
  isStaff,
  ukrLoc,
  isUaLocation,
  CountriesData,
}) {
  const windowsize = window.innerWidth;
  const [cartError, setCartError] = useState(false);
  const navigate = useNavigate();
  const [isHiden, setIsHiden] = useState(false);
  const [itemQuantity, setItemQuantity] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [userInfo, setUserInfo] = useState([]);
  const [deliveryPrice, setDeliveryPrice] = useState(0);
  const [showwedDeliveryPrice, setShowwedDeliveryPrice] = useState(0);
  let totalPrice = 0;
  const manufacturesCheckOut = [];
  const dispatch = useDispatch();
  const fetchUserInfo = async () => {
    try {
      const data = await axios.get('/auth/myInfo');
      const userData = data.data;
      setUserInfo(userData);
      setDeliveryPrice(isUaLocation ? infoCountry(userData).priceUkr : infoCountry(userData).price);
      setShowwedDeliveryPrice(isUaLocation ? infoCountry(userData).priceUkr / 100
        : infoCountry(userData).price / 100);
    } catch (error) {
      console.log(error);
    }
  };

  const infoCountry = (userData) => CountriesData.find((item) => item.Country === userData.country);

  const setItemQuantityFunc = () => {
    cartItems?.forEach((item) => {
      setItemQuantity([...itemQuantity, item]);
    });
  };

  const setSubtotalFunc = () => {
    cartItems?.forEach((item) => {
      totalPrice += isUaLocation ? item.totalItemPrice : item.totalItemPriceEng;
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
  }, []);

  const mapManufacturesCheckout = () => {
    cartItems?.forEach((item) => {
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
    const paymentId = uuid();
    if (paymentId
      && userInfo.firstName !== 'no info' && userInfo.secondName !== 'no info'
      && userInfo.number !== 'no info' && userInfo.adress1 !== 'no info'
      && userInfo.adress2 !== 'no info' && userInfo.country !== 'no info'
      && userInfo.email !== 'no info' && userInfo.state !== 'no info'
      && userInfo.city !== 'no info' && userInfo.zipcode !== 'no info'
      && manufacturesCheckOut && deliveryPrice
      && subtotal && subtotal + deliveryPrice
    ) {
      const data = {
        payment_id: paymentId,
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
        deliveryPrice: showwedDeliveryPrice,
        manufacturesPrice: subtotal,
        totalPrice: subtotal + showwedDeliveryPrice,
        payed: true,
        orderStatus: {
          eng: 'not payed',
          ukr: 'не оплачено',
        },
        trackNumber: 'noInfo',
        priceValue: isUaLocation ? 'UAH' : 'USD',
      };
      const paymentData = {
        payment_id: paymentId,
        totalPrice: subtotal * 100 + deliveryPrice,
        priceValue: isUaLocation ? 'UAH' : 'USD',
        manufacturesCheckOut,
      };

      dispatch(createOrder(data));
      dispatch(payments(paymentData))
        .then((res) => {
          window.location.replace(res.payload.data.checkout_url);
        });
      clearCart();
    } else {
      setCartError(true);
    }
  };

  const navigateToMain = () => {
    navigate('/');
  };

  const navigateAccount = () => {
    navigate('/profile');
  };

  const hiDeOverlay = (navigateTo) => {
    setIsHiden(true);
    setIsMainOverlayed(false);
    setTimeout(() => {
      navigateTo();
    }, 500);
  };

  const deleteCartItems = (item) => {
    setCartItems((cartItems) => cartItems.filter((cartItem) => cartItem !== item));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const findIndexCartItem = (item, action) => {
    cartItems?.forEach((element) => {
      if (element === item) {
        const idOfChangingElement = cartItems.indexOf(element);
        changeElement(action, idOfChangingElement);
      }
    });
  };

  const changeElement = (action, idOfChangingElement) => {
    setTimeout(() => {
      if (isUaLocation) {
        if (cartItems[idOfChangingElement]) {
          cartItems[idOfChangingElement].totalItemPrice = 0;
          cartItems[idOfChangingElement].quantity += action;
          cartItems[idOfChangingElement].totalItemPrice = cartItems[idOfChangingElement].price
                  * cartItems[idOfChangingElement].quantity;
          setItemQuantity(itemQuantity + 1);
        }
      } else if ((cartItems[idOfChangingElement])) {
        cartItems[idOfChangingElement].totalItemPricEng = 0;
        cartItems[idOfChangingElement].quantity += action;
        cartItems[idOfChangingElement].totalItemPriceEng = cartItems[idOfChangingElement].priceEng
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
      {cartError && (
      <CartError
        ukrLoc={ukrLoc}
        hiDeOverlay={hiDeOverlay}
        navigateAccount={navigateAccount}
      />
      )}
      {isStaff ? (
        <OrdersMenu
          ukrLoc={ukrLoc}
          isHiden={isHiden}
          hiDeOverlay={hiDeOverlay}
          navigateToMain={navigateToMain}
          isStaff={isStaff}
        />
      )
        : (
          <div
            className={isHiden ? 'hideOverlay Overlay' : 'showOverlay Overlay'}
          >
            {cartItems?.length ? (
              <>
                <div className="overlay-top absolute_top cart_page">
                  <div className="ItemOverlay_top-box">
                    <div className="titleWarapperForBlur">
                      <h1 className="headerOverlay">{ukrLoc ? 'КОРЗИНА' : 'CART'}</h1>
                      <div
                        className="crossHair_close"
                        onClick={() => hiDeOverlay(navigateToMain)}
                      >
                        <div />
                      </div>
                    </div>
                    <div className="cart_title">
                      <div className="cart_titles">
                        <p className="cart_longer_part">{ukrLoc ? 'Товар' : 'Product'}</p>
                        <p>{ukrLoc ? 'Всього' : 'Total'}</p>
                      </div>
                      <div className="overlay_Outline" />
                    </div>
                  </div>
                </div>
                <div className="MainCart_container">
                  <div>
                    <div className="cart_items_container container">
                      <div className="cart_items">
                        {cartItems?.map((item) => (
                          <div
                            className="cart_item"
                            key={item.title}
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
                                  <p>{item.title}</p>
                                  <span>
                                    {isUaLocation ? item.price : item.priceEng}
                                    <p>
                                      {isUaLocation ? 'UAH' : 'USD'}
                                    </p>
                                  </span>
                                </div>
                                <div className="cart_item_info_line2">
                                  <div className="cart_item_info_item">
                                    <div>
                                      <div>
                                        <p>{ukrLoc ? 'Розмір' : 'Size'}</p>
                                        <p>{item.size}</p>
                                      </div>
                                      <div>
                                        <p>{ukrLoc ? 'Колір' : 'Color'}</p>
                                        <p>{item.color}</p>
                                      </div>
                                    </div>
                                    <div className="cart_item_quantiti_div">
                                      <p>{ukrLoc ? 'Кількість' : 'Quantity'}</p>
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
                              <p>{isUaLocation ? item.totalItemPrice : item.totalItemPriceEng}</p>
                              <div className="cart_delete_item">
                                {window.innerWidth > 340 && <p>{ukrLoc ? 'Видалити' : 'Delete'}</p>}
                                {' '}
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
                                  <p>{ukrLoc ? 'Всього' : 'Total'}</p>
                                  <p>{ukrLoc ? 'Доставка' : 'Delivery'}</p>
                                  <p className="cart_bottom_price_subtotal">
                                    {ukrLoc ? 'Cума' : 'Subtotal'}
                                  </p>
                                </div>
                                <div className="cart_bottom_price_numbers">
                                  <div className="cart_price_numbers_fst">
                                    <p>{subtotal}</p>
                                    <p>{showwedDeliveryPrice}</p>
                                    <p className="cart_bottom_price_subtotal">
                                      {subtotal + showwedDeliveryPrice}
                                    </p>
                                  </div>
                                  <div className="cart_price_numbers_scnd">
                                    <p>{isUaLocation ? 'UAH' : 'USD'}</p>
                                    <p>{isUaLocation ? 'UAH' : 'USD'}</p>
                                    <p className="cart_bottom_price_subtotal">
                                      {isUaLocation ? 'UAH' : 'USD'}
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="cart_bottom_checkOut">
                                <div
                                  className="checkOut_btn btn"
                                  onClick={() => CheckOut()}
                                >
                                  <p>{ukrLoc ? 'ОПЛАТИТИ' : 'CHECK OUT'}</p>
                                </div>
                              </div>
                            </div>
                          ) : (
                            <div className="cartBottom_wraper">
                              <div className="cart_bottom_price">
                                <div className="cart_bottom_price_left">
                                  <div>
                                    <p>{ukrLoc ? 'Всього' : 'Total'}</p>
                                    <p>{ukrLoc ? 'Доставка' : 'Delivery'}</p>
                                  </div>
                                  <div className="cart_bottom_price_numbers">
                                    <div className="cart_price_numbers_fst">
                                      <p>{subtotal}</p>
                                      <p>{showwedDeliveryPrice}</p>
                                    </div>
                                    <div className="cart_price_numbers_scnd">
                                      <p>{isUaLocation ? 'UAH' : 'USD'}</p>
                                      <p>{isUaLocation ? 'UAH' : 'USD'}</p>
                                    </div>
                                  </div>
                                </div>

                                <div className="cart_bottom_price_right">
                                  <div>
                                    <p className="cart_bottom_price_subtotal">
                                      {ukrLoc ? 'Cума' : 'Subtotal'}
                                    </p>
                                    <p className="cart_bottom_price_subtotal_nums">
                                      {subtotal + showwedDeliveryPrice}
                                    </p>
                                    <p className="cart_bottom_price_subtotal_nums">
                                      {isUaLocation ? 'UAH' : 'USD'}
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="cart_bottom_checkOut">
                                <div
                                  className="checkOut_btn btn"
                                  onClick={() => CheckOut()}
                                >
                                  <p>{ukrLoc ? 'ОПЛАТИТИ' : 'CHECK OUT'}</p>
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
                  <h1 className="headerOverlay">{ukrLoc ? 'КОРЗИНА' : 'CART'}</h1>
                  <div
                    className="crossHair_close"
                    onClick={() => hiDeOverlay(navigateToMain)}
                  >
                    {/* <p className="close">+</p> */}
                    <div />
                  </div>
                </div>
                <div className="empty_cart">
                  <h1>{ukrLoc ? 'ВАША КОРЗИНА ПОРОЖНЯ' : 'YOUR CART IS EMPTY'}</h1>
                  <div
                    className="emempty_cart_btn btn"
                    onClick={() => hiDeOverlay(navigateToMain)}
                  >
                    <p>{ukrLoc ? 'ПРОДОВЖИТИ ПОКУПКИ' : 'CONTINUE SHOPPING'}</p>
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
