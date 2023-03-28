/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ItemSlider } from './ItemSlider';
import {
  getAllManufactures,
  deleteManufacture,
} from '../redux/features/Manufactures/manuSlice';

// eslint-disable-next-line import/prefer-default-export
export function ItemOverlay({
  ukrLoc,
  openedItem,
  setCartItems,
  cartItems,
  isStaff,
  setItemForEdit,
  setIsMainOverlayed,
}) {
  const [options, setOptions] = useState(
    ukrLoc ? openedItem.options : openedItem.optionsEng,
  );
  const [actualSize, setActualSize] = useState('');
  const [actualColor, setActualColor] = useState(options[0].color);
  const [currentColor, setCurrentColor] = useState(
    options[0].OtherOptions,
  );
  const [sizingText, setSizingText] = useState(ukrLoc ? openedItem.sizingText : openedItem.sizingTextEng);
  const [materials, setMaterials] = useState(ukrLoc ? openedItem.materials : openedItem.materialsEng);
  const [care, setCare] = useState(ukrLoc ? openedItem.care : openedItem.careEng);
  const [isHiden, setIsHiden] = useState(false);
  const [title, setTitle] = useState(ukrLoc ? openedItem.title : openedItem.titleEng);
  const [name, setName] = useState(ukrLoc ? openedItem.name : openedItem.nameEng);
  const [price, setPrice] = useState(ukrLoc ? openedItem.price : openedItem.priceEng);
  const description = ukrLoc ? openedItem.description : openedItem.descriptionEng;
  const [priceValue, setPriceValue] = useState(ukrLoc ? openedItem.priceValue : openedItem.priceValueEng);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    setOptions(ukrLoc ? openedItem.options : openedItem.optionsEng);
    setTitle(ukrLoc ? openedItem.title : openedItem.titleEng);
    setPrice(ukrLoc ? openedItem.price : openedItem.priceEng);
    setName(ukrLoc ? openedItem.name : openedItem.nameEng);
    setPriceValue(ukrLoc ? openedItem.priceValue : openedItem.priceValueEng);
  }, [ukrLoc]);

  useEffect(() => {
    setIsMainOverlayed(true);
  }, []);

  const navigateToMain = () => {
    navigate('/');
  };

  const navigateToProfile = () => {
    navigate('/profile');
  };

  const hiDeOverlay = (navigateFunc) => {
    setIsHiden(true);
    setIsMainOverlayed(false);
    setTimeout(() => {
      navigateFunc();
    }, 500);
  };

  const addToBag = () => {
    if (cartItems[0]) {
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
          price,
          priceValue,
          totalItemPrice: price,
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
        price,
        priceValue: openedItem.priceValue,
        totalItemPrice: price,
        size: actualSize,
        color: actualColor,
        quantity: 1,
      };
      setCartItems([...cartItems, orderBag]);
    }
  };

  const editItem = () => {
    setItemForEdit(openedItem);
    hiDeOverlay(navigateToProfile);
  };

  const DeleteItem = () => {
    const data = { _id: openedItem._id };
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
        <p className="close">+</p>
      </div>
      <div className="item_overlay_main">

        <ItemSlider openedItem={openedItem} setIsHiden={setIsHiden} />
        <div className="itemInfo manuOverlay">
          <div className="overlay-top absolute_top">
            <div className="ItemOverlay_top-box">
              <h1 className="itemTitle">{title}</h1>
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
                    className={
                            actualSize === `${color.size}`
                              ? 'sizeButton activeSize'
                              : 'sizeButton'
                        }
                    onClick={() => changeSize(`${color.size}`)}
                  >
                    <p>{color.size}</p>
                  </div>
                ))}
              </div>
              <div className="ItemSellect color">
                <p className="sellect_capture">Color</p>
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
              </div>
              {isStaff ? (
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
              ) : (
                <div>
                  <button
                    type="submit"
                    className="addToBag btn"
                    onClick={() => addToBag()}
                  >
                    {ukrLoc ? (
                      <p>В Корзину</p>
                    ) : (
                      <p>ADD TO BAG</p>
                    )}
                  </button>
                </div>
              )}
              <ul className="dropDownList_Item">
                <li className="OpenedDropDownList">
                  <div className="dropDownList_Item_fstLine">
                    {ukrLoc ? <p>Опис</p> : <p>Description</p>}
                  </div>
                  <div className="dropDownList_Item_element">
                    <p>
                      {description}

                    </p>
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
                        src={openedItem.sizingImg}
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
