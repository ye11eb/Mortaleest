/* eslint-disable no-nested-ternary */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import React, {
  useEffect, useLayoutEffect, useState, Component,
} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
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
  setOpenedItem,
  setIsMainOverlayed,
  zoommedImg,
  SetZooomImg,
}) {
  const dispatch = useDispatch();
  const manufactures = useSelector(
    (state) => state.manufactures.manufactures,
  );
  const [zoomFactor, setZoomFactor] = useState(2);
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
  let description = '';
  const [price, setPrice] = useState();
  const [priceValue, setPriceValue] = useState();

  const fetchManuLink = () => {
    function neadedItem(manu) {
      return manu.titleEng === window.location.href.slice(27);
    }
    setOpenedItem(manufactures.find(neadedItem));
  };

  useLayoutEffect(() => {
    fetchInfoItem();
  }, [openedItem]);

  const fetchInfoItem = () => {
    if (openedItem?.options) {
      setOptions(ukrLoc ? openedItem.options : openedItem.optionsEng);
      console.log(openedItem.options);
      setActualColor(openedItem.options[0].color);
      setActualSize(openedItem.optionsEng[0].OtherOptions.size);
      console.log(ukrLoc ? openedItem.options[0].color : openedItem.optionsEng[0].color);
      setCurrentColor(openedItem.options[0].OtherOptions);
      console.log(openedItem);
      setSizingText(ukrLoc ? openedItem.sizingText : openedItem.sizingTextEng);
      setMaterials(ukrLoc ? openedItem.materials : openedItem.materialsEng);
      setCare(ukrLoc ? openedItem.care : openedItem.careEng);
      setTitle(ukrLoc ? openedItem.title : openedItem.titleEng);
      description = ukrLoc ? openedItem.description : openedItem.descriptionEng;
      setPrice(ukrLoc ? openedItem.price : openedItem.priceEng);
      setPriceValue(ukrLoc ? openedItem.priceValue : openedItem.priceValueEng);
      setName(ukrLoc ? openedItem.name : openedItem.nameEng);
    }

    // setMaterials(ukrLoc ? openedItem.materials : openedItem.materialsEng);
    // setCare(ukrLoc ? openedItem.care : openedItem.careEng);
    // setTitle(ukrLoc ? openedItem.title : openedItem.titleEng);
    // setName(ukrLoc ? openedItem.name : openedItem.nameEng);
    // setPrice(ukrLoc ? openedItem.price : openedItem.priceEng);
    // description = ukrLoc ? openedItem.description : openedItem.descriptionEng;
    // setPrice(ukrLoc ? openedItem.price : openedItem.priceEng);
    // setPriceValue(ukrLoc ? openedItem.priceValue : openedItem.priceValueEng);\
    // console.log(options);
    // console.log(actualColor);
  };

  // console.table(options, actualSize, actualColor, currentColor);

  // console.log(currentColor);

  useEffect(() => {
    setIsMainOverlayed(true);
  }, []);

  useEffect(() => {
    dispatch(getAllManufactures());
  }, [dispatch]);
  useEffect(() => {
    fetchManuLink();
  }, [manufactures]);

  // useLayoutEffect(() => {
  //   fetchManuLink();
  // }, []);

  // console.log(openedItem);
  // console.log(window.location.href.slice(27));
  // const [options, setOptions] = useState();
  // const [actualSize, setActualSize] = useState('');
  // const [actualColor, setActualColor] = useState();
  // const [currentColor, setCurrentColor] = useState();
  // const [sizingText, setSizingText] = useState(ukrLoc ? openedItem.sizingText : openedItem.sizingTextEng);
  // const [materials, setMaterials] = useState(ukrLoc ? openedItem.materials : openedItem.materialsEng);
  // const [care, setCare] = useState(ukrLoc ? openedItem.care : openedItem.careEng);
  // const [isHiden, setIsHiden] = useState(false);
  // const [title, setTitle] = useState(ukrLoc ? openedItem.title : openedItem.titleEng);
  // const [name, setName] = useState(ukrLoc ? openedItem.name : openedItem.nameEng);
  // let description = '';
  // const [price, setPrice] = useState(ukrLoc ? openedItem.price : openedItem.priceEng);
  // const [priceValue, setPriceValue] = useState(ukrLoc ? openedItem.priceValue : openedItem.priceValueEng);

  const navigate = useNavigate();
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   setOptions(ukrLoc ? openedItem.options : openedItem.optionsEng);
  //   setTitle(ukrLoc ? openedItem.title : openedItem.titleEng);
  //   setPrice(ukrLoc ? openedItem.price : openedItem.priceEng);
  //   setName(ukrLoc ? openedItem.name : openedItem.nameEng);
  //   setPriceValue(ukrLoc ? openedItem.priceValue : openedItem.priceValueEng);
  //   setSizingText(ukrLoc ? openedItem.sizingText : openedItem.sizingTextEng);
  // }, [ukrLoc]);

  // useEffect(() => {
  //   setIsMainOverlayed(true);
  // }, []);

  // useLayoutEffect(() => {
  //   fetchInfoItem();
  // }, []);

  // const fetchInfoItem = () => {
  //   setOptions(ukrLoc ? openedItem.options : openedItem.optionsEng);
  //   setActualColor(options[0].color);
  //   setCurrentColor(options[0].OtherOptions);
  //   setMaterials(ukrLoc ? openedItem.materials : openedItem.materialsEng);
  //   setCare(ukrLoc ? openedItem.care : openedItem.careEng);
  //   setTitle(ukrLoc ? openedItem.title : openedItem.titleEng);
  //   setName(ukrLoc ? openedItem.name : openedItem.nameEng);
  //   setPrice(ukrLoc ? openedItem.price : openedItem.priceEng);
  //   description = ukrLoc ? openedItem.description : openedItem.descriptionEng;
  //   setPrice(ukrLoc ? openedItem.price : openedItem.priceEng);
  //   setPriceValue(ukrLoc ? openedItem.priceValue : openedItem.priceValueEng);
  // };

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

  const zoomIn = () => {
    setZoomFactor(zoomFactor + 1);
  };

  const zoomOut = () => {
    setZoomFactor(zoomFactor - 1);
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

  // const hiDeZoom = (hide) => {
  //   setIsHiden(true);
  //   setIsMainOverlayed(false);
  //   setTimeout(() => {
  //     navigateFunc();
  //   }, 500);
  // };

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

      {/* <ReactImageMagnify
        src="data:image/jpeg;base64,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"
          // zoomFactor={2}
        width={1200}
        height={1800}
      /> */}
      {/* <div onClick={() => zoomIn()}>Збільшити зум</div>
      <div onClick={() => zoomOut()}>Зменшити зум</div> */}
      {!zoommedImg && (
      <div
        className="crossHair_close"
        onClick={() => hiDeOverlay(navigateToMain)}
      >
        <p className="close">+</p>
      </div>
      )}
      <div className="item_overlay_main">
        <ItemSlider openedItem={openedItem} setIsHiden={setIsHiden} SetZooomImg={SetZooomImg} />
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
                className={color.size === 'one size' || color.size === 'один розмір'
                  ? (actualSize === `${color.size}`
                    ? 'sizeButton oneSizeButton'
                    : 'sizeButton oneSizeActiveButton')
                  : (actualSize === `${color.size}`
                    ? 'sizeButton activeSize'
                    : 'sizeButton')}
                onClick={() => changeSize(`${color.size}`)}
              >
                <p>{color.size}</p>
              </div>
            ))}
              </div>
              <div className="ItemSellect color">
                <p className="sellect_capture">Color</p>
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
