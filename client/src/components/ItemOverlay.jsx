import React, {
  useEffect, useLayoutEffect, useState,
} from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ItemSlider } from './ItemSlider';
import axios from '../utils/axios';
import {
  getAllManufactures,
  deleteManufacture,
} from '../redux/features/Manufactures/manuSlice';

export function ItemOverlay({
  ukrLoc,
  openedItem,
  setCartItems,
  cartItems,
  setItemForEdit,
  setOpenedItem,
  setIsMainOverlayed,
  SetZooomImg,
  isUaLocation,
}) {
  const dispatch = useDispatch();
  const manufactures = useSelector(
    (state) => state.manufactures.manufactures,
  );
  const [options, setOptions] = useState();
  const [actualSize, setActualSize] = useState('');
  const [actualColor, setActualColor] = useState();
  const [currentColor, setCurrentColor] = useState();
  const [sizingText, setSizingText] = useState();
  const [materials, setMaterials] = useState();
  const [care, setCare] = useState();
  const [isHiden, setIsHiden] = useState(false);
  const [title, setTitle] = useState();
  const [name, setName] = useState();
  const [images, setImages] = useState(openedItem?.imgUrl);
  const [description, setDescription] = useState([])
  const [price, setPrice] = useState();
  const [priceValue, setPriceValue] = useState();
  const [preorderTime, setPreorderTime] = useState('')
  const isRegistered = localStorage.getItem('token');
  const [outOfStock, setOutOfStock] = useState('');
  const [isActualyStaff, setIsActualyStaff] = useState(false)
  const [isCorrectAddToCart, setIsCorrectAddToCart] = useState(true)

  const fetchUserInfo = async () => {
    try {
      const {data} = await axios.get('/auth/myInfo');
      setIsActualyStaff(data.isStaff)
    } catch (error) {
      console.log(error);
    }
  };
  const fetchManuLink = () => {
    function neadedItem(manu) {
      return manu._id === window.location.href.slice(-24);
    }
    setOpenedItem(manufactures.find(neadedItem));
  };

  useLayoutEffect(() => {
    fetchInfoItem();
    fetchUserInfo()
  }, [openedItem]);


  const fetchInfoItem = () => {
    if (openedItem) {
      const parsedOptions = JSON.parse(openedItem.options)
      const parsedOptionsEng = JSON.parse(openedItem.optionsEng)
      setOptions(ukrLoc ? parsedOptions : parsedOptionsEng);
      setImages(openedItem?.imgUrl);
      setPreorderTime(ukrLoc ? openedItem.preOrderTime : openedItem.preOrderTimeEng);
      setActualColor(ukrLoc ? parsedOptions[0].color
        : parsedOptionsEng[0].color);
      setActualSize(ukrLoc ? parsedOptions[0].OtherOptions.size
        : parsedOptionsEng[0].OtherOptions.size);
      setSizingText(ukrLoc ? openedItem.sizingText : openedItem.sizingTextEng);
      setMaterials(ukrLoc ? openedItem.materials : openedItem.materialsEng);
      setCare(ukrLoc ? openedItem.care : openedItem.careEng);
      setTitle(ukrLoc ? openedItem.title : openedItem.titleEng);
      setDescription(ukrLoc ? JSON.parse(openedItem.description) : JSON.parse(openedItem.descriptionEng));
      setPrice(isUaLocation ? openedItem.price : openedItem.priceEng);
      setPriceValue(isUaLocation ? openedItem.priceValue : openedItem.priceValueEng);
      setName(ukrLoc ? openedItem.name : openedItem.nameEng);
      setCurrentColor(ukrLoc ? parsedOptions[0].OtherOptions
        : parsedOptionsEng[0].OtherOptions);
      setOutOfStock(openedItem.outOfStock);
    } else {
      fetchManuLink();
    }
  };

  useEffect(() => {
    setIsMainOverlayed(true);
  }, []);


  useEffect(() => {
    setIsCorrectAddToCart(true);
  }, [actualSize, actualColor]);


  useEffect(() => {
    dispatch(getAllManufactures());
  }, [dispatch]);


  useEffect(() => {
    fetchManuLink();
  }, [manufactures]);

  const navigate = useNavigate();

  const navigateToMain = () => {
    navigate('/');
  };

  const navigateToProfile = () => {
    navigate('/profile');
  };

  const navigateToLogin = () => {
    navigate('/login');
  };

  const hiDeOverlay = (navigateFunc) => {
    setIsHiden(true);
    setIsMainOverlayed(false);
    setTimeout(() => {
      navigateFunc();
    }, 500);
  };

  const addToBag = () => {
    if (!actualSize || !actualSize) {
      setIsCorrectAddToCart(false)
    }
    else if (!isRegistered) {
      hiDeOverlay(navigateToLogin);
    } else if (cartItems?.[0]) {
      if (cartItems.find((e) => e._id === openedItem._id)
     && cartItems.find((e) => e.size === actualSize)
     && cartItems.find((e) => e.color === actualColor)
      ) {
        const sameElPos = cartItems.findIndex((e) => e._id === openedItem._id
        && e.size === actualSize
        && e.color === actualColor);
        cartItems[sameElPos].quantity += 1;
      } else {
        const orderBag = {
          _id: openedItem._id,
          imgUrl: openedItem.imgUrl,
          title,
          name,
          price: openedItem.price,
          priceValue: openedItem.priceValue,
          priceEng: openedItem.priceEng,
          priceValueEng: openedItem.priceValueEng,
          totalItemPrice: openedItem.price,
          totalItemPriceEng: openedItem.priceEng,
          size: actualSize,
          color: actualColor,
          quantity: 1,
        };
        setCartItems([...cartItems, orderBag]);
      }
    } else {
      const orderBag = {
        _id: openedItem._id,
        imgUrl: openedItem.imgUrl,
        title,
        name,
        price: openedItem.price,
        priceValue: openedItem.priceValue,
        priceEng: openedItem.priceEng,
        priceValueEng: openedItem.priceValueEng,
        totalItemPrice: openedItem.price,
        totalItemPriceEng: openedItem.priceEng,
        size: actualSize,
        color: actualColor,
        quantity: 1,
      };
      setCartItems([orderBag]);
    }
  };

  const editItem = () => {
    setItemForEdit(openedItem);
    hiDeOverlay(navigateToProfile);
  };

  const DeleteItem = () => {
    const data = { _id: openedItem.titleEng === window.location.href.slice(27) };
    hiDeOverlay(navigateToMain);
    dispatch(deleteManufacture(data));
    dispatch(getAllManufactures());
    navigate('/');
  };

  const changeSize = (pickedSize) => {
    if (actualSize === pickedSize) {
      setActualSize('');
    } else {
      setActualSize(pickedSize);
    }
  };

  const changeColor = (pickedcolor) => {
    if (actualColor === `${pickedcolor}`) {
      setActualColor('');
    } else {
      setActualColor(`${pickedcolor}`);
    }
    for (let i = 0; i < options.length; i++) {
      if (options[i].color === pickedcolor) {
        setCurrentColor(options[i].OtherOptions);
      }
    }
  };

  return (
    <div
      className={
                isHiden ? 'itemOverlay hideOverlay productsOverlay' : 'itemOverlay showOverlay productsOverlay'
            }
    >

      <div
        className="crossHair_close"
        onClick={() => hiDeOverlay(navigateToMain)}
      >
        <div />
      </div>

      <div className="item_overlay_main">
        <ItemSlider
          images={images}
          setIsHiden={setIsHiden}
          SetZooomImg={SetZooomImg}
          ukrLoc={ukrLoc}
        />
        <div className="itemInfo manuOverlay">
          <div className="overlay-top absolute_top">
            <div className="ItemOverlay_top-box">
              <h1 className="itemTitle">{title}</h1>
              <p>{name}</p>
            </div>
            <div className="overlay_Outline" />
          </div>
          <div className="inherit_item_overlay">
            <span className="itemPrice">
              {price}
              {' '}
              <p>{priceValue}</p>
            </span>
            <div className="ItemSellect size">
              {ukrLoc ? (
                <p className="sellect_capture">Розмір</p>
              ) : (
                <p className="sellect_capture">Size</p>
              )}
              <div className="pickSize">
                {currentColor
            && currentColor.map((color) => (
              <div
                key={currentColor.indexOf(color)}
                className={color.size === 'one size' || color.size === 'один розмір'
                  ? (actualSize === `${color.size}`
                    ? 'sizeButton oneSizeActiveButton'
                    : 'sizeButton oneSizeButton')
                  : (actualSize === `${color.size}`
                    ? 'sizeButton activeSize'
                    : 'sizeButton')}
                onClick={() => changeSize(`${color.size}`)}
              >
                <p>{color.size}</p>
              </div>
            ))}
              </div>
              <p className={isCorrectAddToCart ?'inputError inputErrorhiden' : 'inputError'}>{ukrLoc ? 'вам потрібно вибрати розмір та колір для довалення в корзину' : 'you need to select the size and color to add to cart'}</p>
              <div className="ItemSellect color">
                {ukrLoc ? (
                  <p className="sellect_capture">Колір</p>
                ) : (
                  <p className="sellect_capture">Color</p>
                )}
                {options && (
                <div className="pickColor">
                  {options.map((option) => (
                    <div
                      key={options.indexOf(option)}
                      className={
                    actualColor === `${option.color}`
                      ? 'colorButton activeColor'
                      : 'colorButton'
                    }
                      onClick={() => changeColor(option.color)}
                    >
                      <p>{option.color}</p>
                    </div>
                  ))}
                </div>
                )}
              </div>
              {isActualyStaff ? (
                <div>
                  <button
                    type="submit"
                    className="addToBag"
                    onClick={() => editItem()}
                  >
                    <p>EDIT ITEM</p>
                  </button>
                  <button
                    type="submit"
                    className="addToBag"
                    onClick={() => DeleteItem()}
                  >
                    <p>DELETE ITEM</p>
                  </button>
                </div>
              ) : outOfStock === false ? (
                <div>
                  <button
                    type="submit"
                    className="addToBag btn"
                    onClick={() => addToBag()}
                  >
                    {ukrLoc ? (
                      <p>ДОБАВИТИ В КОРЗИНУ</p>
                    ) : (
                      <p>ADD TO BAG</p>
                    )}
                  </button>
                </div>
              ) : (
                <div>
                  <button
                    type="submit"
                    className="addToBag OutOfStockButton btn"
                  >
                    {ukrLoc ? (
                      <p>НЕМАЄ В НАЯВНОСТІ</p>
                    ) : (
                      <p>OUT OF STOCK</p>
                    )}
                  </button>
                </div>
              )}
              <ul className="dropDownList_Item">
                <li>{preorderTime}</li>
                <li className="OpenedDropDownList">
                  <div className="dropDownList_Item_fstLine">
                    {ukrLoc ? <p>Опис</p> : <p>Description</p>}
                  </div>
                  <div className="dropDownList_Item_element">
                  {description?.map((desc) => (
                    <p className='descPartp'
                    >{desc}</p>
                  ))}
                  </div>
                  <div className="manuOverlay_outline" />
                </li>
                <li className="OpenedDropDownList">
                  <div className="dropDownList_Item_fstLine">
                    {ukrLoc ? (
                      <p>Розмірності</p>
                    ) : (
                      <p>Sizing</p>
                    )}
                    {' '}
                  </div>
                  <div className="dropDownList_Item_element">
                    <p>
                      {sizingText}
                    </p>
                    <div>
                      <img
                        src={openedItem?.sizingImg}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="manuOverlay_outline" />
                </li>
                <li className="OpenedDropDownList">
                  <div className="dropDownList_Item_fstLine">
                    {ukrLoc ? (
                      <p>Матеріали & догляд</p>
                    ) : (
                      <p>Materials & care</p>
                    )}
                    {' '}
                  </div>
                  <div className="dropDownList_Item_element">
                    <p>{materials}</p>
                    <p>{care}</p>
                  </div>
                  <div className="manuOverlay_outline" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
