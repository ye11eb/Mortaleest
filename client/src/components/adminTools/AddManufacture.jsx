import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  createManufacture,
  changeManufacture,
  getAllManufactures,
} from '../../redux/features/Manufactures/manuSlice';

function AddManufacture({
  isHiden,
  hiDeOverlay,
  navigateToMain,
  itemForEdit,
  setIsMainOverlayed,
}) {
  const [oldImages, setOldImages] = useState([]);
  const [images, setImages] = useState([]);
  const [image, setImage] = useState('');
  const [titleEng, setTitleEng] = useState('');
  const [nameEng, setNameEng] = useState('');
  const [priceEng, setPriceEng] = useState();
  const [priceValueEng, setPriceValueEng] = useState('USD');
  const [descriptionEng, setDescriptionEng] = useState([]);
  const [descriptionEngPart, setDescriptionEngPart] = useState('');
  const [sizingTextEng, setSizingTextEng] = useState('');
  const [sizingImgEng, setSizingImgEng] = useState('');
  const [materialsEng, setMaterialsEng] = useState('');
  const [careEng, setCareEng] = useState('');
  const [optionsEng, setOptionsEng] = useState([]);
  const [colectionsEng, setColectionsEng] = useState('');
  const [clothesTypeEng, setClothesTypeEng] = useState('');
  const [preOrderTime, setPreorderTime] = useState('')
  const [preOrderTimeEng, setPreOrderTimeEng] = useState('')

  const [title, setTitle] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState();
  const [priceValue, setPriceValue] = useState('UAH');
  const [description, setDescription] = useState([]);
  const [descriptionPart, setDescriptionPart] = useState('');
  const [sizingText, setSizingText] = useState('');
  const [sizingImg, setSizingImg] = useState('');
  const [materials, setMaterials] = useState('');
  const [care, setCare] = useState('');
  const [options, setOptions] = useState([]);
  const [colections, setColections] = useState('');
  const [clothesType, setClothesType] = useState('');
  const [outOfStock, setOutofStock] = useState(false);
  const [preOrder, setPreOrder] = useState(false);
  const dispatch = useDispatch(false);
  const navigate = useNavigate(false);
  const [s, setS] = useState()

  useEffect(() => {
    checkIsItemEdited();
    return () => setIsMainOverlayed(false);
  }, []);

  const checkIsItemEdited = () => {
    if (itemForEdit !== '') {
      setOldImages(itemForEdit.imgUrl)
      setTitleEng(itemForEdit.titleEng);
      setNameEng(itemForEdit.nameEng);
      setPriceEng(itemForEdit.priceEng);
      setPriceValueEng(itemForEdit.priceValueEng);
      // setDescriptionEng(JSON.parse(itemForEdit.descriptionEng));
      setSizingTextEng(itemForEdit.sizingTextEng);
      setSizingImgEng(itemForEdit.sizingImgEng);
      setMaterialsEng(itemForEdit.materialsEng);
      setCareEng(itemForEdit.careEng);
      setColectionsEng(itemForEdit.colectionsEng);
      setClothesTypeEng(itemForEdit.clothesTypeEng);
      setOptions(JSON.parse(itemForEdit.options));
      setPreorderTime(itemForEdit.preOrderTime);

      setTitle(itemForEdit.title);
      setName(itemForEdit.name);
      setPrice(itemForEdit.price);
      setPriceValue(itemForEdit.priceValue);
      // setDescription(JSON.parse(itemForEdit.description));
      setSizingText(itemForEdit.sizingText);
      setSizingImg(itemForEdit.sizingImg);
      setMaterials(itemForEdit.materials);
      setCare(itemForEdit.care);
      setColections(itemForEdit.colections);
      setClothesType(itemForEdit.clothesType);
      setOptionsEng(JSON.parse(itemForEdit.optionsEng));
      setOutofStock(itemForEdit.outOfStock);
      setPreOrder(itemForEdit.preOrder);
      setPreOrderTimeEng(itemForEdit.preOrderTimeEng);
    }
  };

  const changeManuHandler = () => {
    try {
      const data = new FormData()

      data.append('_id', itemForEdit._id)
      images.forEach((el) => {
        data.append('images', el)
      })
      oldImages.forEach((el) => {
        data.append('oldImages', el)
      })
      data.append('title', title)
      data.append('name', name)
      data.append('price', price)
      data.append('priceValue', priceValue)
      data.append('colections', colections)
      data.append('clothesType', clothesType)
      data.append('description', JSON.stringify(description))
      data.append('sizingTextEng', sizingTextEng)
      data.append('sizingImgEng', sizingImgEng)
      data.append('materialsEng', materialsEng)
      data.append('careEng', careEng)
      data.append('titleEng', titleEng)
      data.append('nameEng', nameEng)
      data.append('priceEng', priceEng)
      data.append('priceValueEng', priceValueEng)
      data.append('colectionsEng', colectionsEng)
      data.append('clothesTypeEng', clothesTypeEng)
      data.append('descriptionEng', JSON.stringify(descriptionEng))
      data.append('sizingText', sizingText)
      data.append('sizingImg', sizingImg)
      data.append('materials', materials)
      data.append('care', care)
      data.append('outOfStock', outOfStock)
      data.append('preOrder', preOrder)
      data.append('options', JSON.stringify(options));
      data.append('optionsEng', JSON.stringify(optionsEng));
      data.append('preOrderTimeEng', preOrderTimeEng);
      data.append('preOrderTime', preOrderTime);

      clearformHeandler();
      dispatch(changeManufacture(data));
      dispatch(getAllManufactures());
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  const [optionColorEng, setOptionColorEng] = useState('');
  const [optionSizeEng, setOptionSizeEng] = useState('');
  const [optionQuantityEng, setOptionQuantityEng] = useState(1);

  const [optionColor, setOptionColor] = useState('');
  const [optionSize, setOptionSize] = useState('');
  const [optionQuantity, setOptionQuantity] = useState(1);

  const submitHandler = () => {
    try {
      const data = new FormData()
      images.forEach((el) => {
        data.append('images', el)
      })
      data.append('title', title)
      data.append('name', name)
      data.append('price', price)
      data.append('priceValue', priceValue)
      data.append('colections', colections)
      data.append('clothesType', clothesType)
      data.append('description', JSON.stringify(description))
      data.append('sizingTextEng', sizingTextEng)
      data.append('sizingImgEng', sizingImgEng)
      data.append('materialsEng', materialsEng)
      data.append('careEng', careEng)
      data.append('titleEng', titleEng)
      data.append('nameEng', nameEng)
      data.append('priceEng', priceEng)
      data.append('priceValueEng', priceValueEng)
      data.append('colectionsEng', colectionsEng)
      data.append('clothesTypeEng', clothesTypeEng)
      data.append('descriptionEng', JSON.stringify(descriptionEng))
      data.append('sizingText', sizingText)
      data.append('sizingImg', sizingImg)
      data.append('materials', materials)
      data.append('care', care)
      data.append('outOfStock', outOfStock)
      data.append('preOrder', preOrder)
      data.append('options', JSON.stringify(options));
      data.append('optionsEng', JSON.stringify(optionsEng));
      data.append('preOrderTimeEng', preOrderTimeEng);
      data.append('preOrderTime', preOrderTime);

      dispatch(createManufacture(data));
      dispatch(getAllManufactures());
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  const clearformHeandler = () => {
    setTitle('');
    setName('');
    setPrice('');
    setDescription('');
  };

  const addColor = () => {
    setOptions([...options, { color: optionColor, OtherOptions: [] }]);
  };

  const addOption = () => {
    options[options.length - 1].OtherOptions.push({
      size: optionSize,
      quantity: optionQuantity,
    });
  };

  const deleteAdedItem = (item, array, setArray) => {
    const itemsWhithoutDeleted = [];
    array.forEach((thing) => {
      if (thing === item) {
        return 0;
      }
      itemsWhithoutDeleted.push(thing);
    });
    setArray(itemsWhithoutDeleted);
  };

  const addColorEng = () => {
    setOptionsEng([
      ...optionsEng,
      { color: optionColorEng, OtherOptions: [] },
    ]);
  };

  const addOptionEng = () => {
    optionsEng[optionsEng.length - 1].OtherOptions.push({
      size: optionSizeEng,
      quantity: optionQuantityEng,
    });
    setS(!s)
  };

  const addDescPart = (setProp, prop, newPart) => {
    setProp([...prop,newPart])
  }


  const delDescPart = (setProp, prop, delPart) => {
    setProp(prop.filter((el) => el !== delPart))
  }

  return (
    <div
      className={
                    isHiden ? 'Overlay hideOverlay AdminTool' : 'Overlay showOverlay AdminTool'
                }
    >
      <div
        className="crossHair_close"
        onClick={() => hiDeOverlay(navigateToMain)}
      >
        <div />
      </div>
      <div className="branch scroll">
        <p className="capture addManu_capture">Options</p>
        <div className="options_item">
          {optionsEng.map((option) => (
            <div
              className="option_item_color_container"
              key={option.OtherOptions[0]}
            >
              <span
                className="option_item_color"
                onClick={() => deleteAdedItem(
                  option,
                  optionsEng,
                  setOptionsEng,
                )}
              >
                {option?.color}
              </span>
              {option.OtherOptions.map((item) => (
                <div
                  className="option_item_other"
                  key={item.size + item.quantity}
                >
                  <span>{item.size}</span>
                  <span>{item.quantity}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="options_item">
          {options.map((option) => (
            <div
              className="option_item_color_container"
              key={option.OtherOptions[0]}
            >
              <span
                className="option_item_color"
                onClick={() => deleteAdedItem(
                  option,
                  options,
                  setOptions,
                )}
              >
                {option?.color}
              </span>
              {option.OtherOptions.map((item) => (
                <div
                  className="option_item_other"
                  key={`${option.color + item.size}`}
                >
                  <span>{item.size}</span>
                  <span>{item.quantity}</span>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className='descriptionOptsWrapper'>
          <p className="capture addManu_capture">Description</p>
          {description.map((desc) => (
          <p className='descPartp'
            onClick={() => delDescPart(setDescription, description, desc)}
          >{desc}</p>
        ))}
        </div>

        <div className='descriptionOptsWrapper'>
          <p className="capture addManu_capture">Description eng</p>
          {descriptionEng.map((desc) => (
          <p className='descPartp'
            onClick={() => delDescPart(setDescriptionEng, descriptionEng, desc)}
          >{desc}</p>
        ))}
        </div>

      </div>
      <div className="addManufacture_box">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="addManufactureForm scroll"
        >
          <p className="capture">Add image</p>
          <div className="inputContainer options_input_box">
            <div className="field" htmlFor='field__input_file'>
              <label className='field__input_fileForm' htmlFor='field__input_file'>
                Click to add image
              </label>
              <label className="ha-screen-reader">
                title
              </label>
              <input
                type="file"
                id='field__input_file'
                className="field__input field__input_file"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </div>
            <p onClick={() => setImages([...images, image])}>
              +
            </p>
          </div>

          <span className="optionsRadioSubtitle">
            pre order
          </span>



          <div className="inputContainer">
            <div className={preOrder === true ? "radio radioChecked" : "radio"}
              onClick={() => setPreOrder(true)}>
              <p>TRUE</p>
            </div>
            <div className={preOrder === false ? "radio radioChecked" : "radio"}
              onClick={() => setPreOrder(false)}>
              <p>FALSE</p>
            </div>
          </div>

          {preOrder == true && 
            <div className="inputContainer inputContainer_description">
            <div className="field">
              <label className="ha-screen-reader">
                preOrderTime
              </label>
              <textarea
                className="field__input textArea"
                rows={5}
                cols={10}
                type="text"
                value={preOrderTime}
                onChange={(e) => setPreorderTime(e.target.value)}
              />
              <span
                className="field__label-wrap"
                aria-hidden="true"
              >
                <span className="field__label">
                  pre order time
                </span>
              </span>
            </div>
          </div>}

          <p className='optionsRadioSubtitle'>out of stock</p>
          <div className="inputContainer">
            <div className={outOfStock === true ? "radio radioChecked" : "radio"}
              onClick={() => setOutofStock(true)}>
              <p>TRUE</p>
            </div>
            <div className={outOfStock === false ? "radio radioChecked" : "radio"}
              onClick={() => setOutofStock(false)}>
              <p>FALSE</p>
            </div>
          </div>

            
          <div className="inputContainer">
            <div className="field">
              <label className="ha-screen-reader">
                title
              </label>
              <input
                className="field__input"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                maxLength="15"
              />
              <span
                className="field__label-wrap"
                aria-hidden="true"
              >
                <span className="field__label">title</span>
              </span>
            </div>
          </div>

          <div className="inputContainer">
            <div className="field">
              <label className="ha-screen-reader">
                title
              </label>
              <input
                className="field__input"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                maxLength="23"
              />
              <span
                className="field__label-wrap"
                aria-hidden="true"
              >
                <span className="field__label">name</span>
              </span>
            </div>
          </div>

          <div className="inputContainer">
            <div className="field">
              <label className="ha-screen-reader">
                title
              </label>
              <input
                className="field__input"
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
              <span
                className="field__label-wrap"
                aria-hidden="true"
              >
                <span className="field__label">price</span>
              </span>
            </div>
          </div>

          <div className="inputContainer">
            <div className="field">
              <label className="ha-screen-reader">
                title
              </label>
              <input
                className="field__input"
                type="text"
                value={priceValue}
                onChange={(e) => setPriceValue(e.target.value)}
              />
              <span
                className="field__label-wrap"
                aria-hidden="true"
              >
                <span className="field__label">
                  price value
                </span>
              </span>
            </div>
          </div>

          <div className="inputContainer options_input_box">
              <div className="field">
                <label className="ha-screen-reader">
                  title
                </label>
                <input
                  className="field__input"
                  type="text"
                  value={descriptionPart}
                  onChange={(e) => setDescriptionPart(e.target.value)}
                />
                <span className="field__label-wrap">
                  <span className="field__label">
                    {' '}
                    description
                  </span>
                </span>
              </div>
              <p onClick={() => addDescPart(setDescription, description, descriptionPart)}>+</p>
          </div>

          

          <div className="inputContainer inputContainer_description">
            <div className="field">
              <label className="ha-screen-reader">
                title
              </label>
              <textarea
                className="field__input textArea"
                rows={5}
                cols={10}
                type="text"
                value={sizingText}
                onChange={(e) => setSizingText(e.target.value)}
              />
              <span
                className="field__label-wrap"
                aria-hidden="true"
              >
                <span className="field__label">
                  sizing text
                </span>
              </span>
            </div>
          </div>

          <div className="inputContainer">
            <div className="field">
              <label className="ha-screen-reader">
                title
              </label>
              <input
                className="field__input"
                type="text"
                value={sizingImg}
                onChange={(e) => setSizingImg(e.target.value)}
              />
              <span
                className="field__label-wrap"
                aria-hidden="true"
              >
                <span className="field__label">
                  sizing imgurl
                </span>
              </span>
            </div>
          </div>

          <div className="inputContainer">
            <div className="field">
              <label className="ha-screen-reader">
                title
              </label>
              <input
                className="field__input"
                type="text"
                value={care}
                onChange={(e) => setCare(e.target.value)}
              />
              <span
                className="field__label-wrap"
                aria-hidden="true"
              >
                <span className="field__label">
                  care
                </span>
              </span>
            </div>
          </div>

          <div className="inputContainer">
            <div className="field">
              <label className="ha-screen-reader">
                title
              </label>
              <input
                className="field__input"
                type="text"
                value={materials}
                onChange={(e) => setMaterials(e.target.value)}
              />
              <span
                className="field__label-wrap"
                aria-hidden="true"
              >
                <span className="field__label">
                  materials
                </span>
              </span>
            </div>
          </div>

          <div className="inputContainer">
            <div className="field">
              <label className="ha-screen-reader">
                title
              </label>
              <input
                className="field__input"
                type="text"
                value={colections}
                onChange={(e) => setColections(e.target.value)}
              />
              <span
                className="field__label-wrap"
                aria-hidden="true"
              >
                <span className="field__label">
                  collections
                </span>
              </span>
            </div>
          </div>

          <div className="inputContainer">
            <div className="field">
              <label className="ha-screen-reader">
                title
              </label>
              <input
                className="field__input"
                type="text"
                value={clothesType}
                onChange={(e) => setClothesType(e.target.value)}
              />
              <span
                className="field__label-wrap"
                aria-hidden="true"
              >
                <span className="field__label">
                  clothes type
                </span>
              </span>
            </div>
          </div>

          <div className="options_field">
            <div className="inputContainer options_input_box">
              <div className="field">
                <label className="ha-screen-reader">
                  title
                </label>
                <input
                  className="field__input"
                  type="text"
                  value={optionColor}
                  onChange={(e) => setOptionColor(e.target.value)}
                />
                <span className="field__label-wrap">
                  <span className="field__label">
                    {' '}
                    color
                  </span>
                </span>
              </div>
              <p onClick={() => addColor()}>+</p>
            </div>

            <div className="inputContainer options_input_box">
              <div className="field">
                <label className="ha-screen-reader">
                  title
                </label>
                <input
                  className="field__input"
                  type="text"
                  value={optionSize}
                  onChange={(e) => setOptionSize(e.target.value)}
                />
                <span className="field__label-wrap">
                  <span className="field__label">
                    size
                  </span>
                </span>
              </div>
            </div>

            <div className="inputContainer options_input_box">
              <div className="field">
                <label className="ha-screen-reader">
                  title
                </label>
                <input
                  className="field__input"
                  type="number"
                  value={optionQuantity}
                  onChange={(e) => setOptionQuantity(e.target.value)}
                />
                <span className="field__label-wrap">
                  <span className="field__label">
                    {' '}
                    quantity
                  </span>
                </span>
              </div>
              <div onClick={() => addOption()}>+</div>
            </div>
          </div>

          <p className="capture">Eng version</p>

          {preOrder && 
            <div className="inputContainer inputContainer_description">
            <div className="field">
              <label className="ha-screen-reader">
                preOrderTime
              </label>
              <textarea
                className="field__input textArea"
                rows={5}
                cols={10}
                type="text"
                value={preOrderTimeEng}
                onChange={(e) => setPreOrderTimeEng(e.target.value)}
              />
              <span
                className="field__label-wrap"
                aria-hidden="true"
              >
                <span className="field__label">
                  pre order time
                </span>
              </span>
            </div>
          </div>}

          <div className="inputContainer">
            <div className="field">
              <label className="ha-screen-reader">
                title
              </label>
              <input
                className="field__input"
                type="text"
                value={titleEng}
                onChange={(e) => setTitleEng(e.target.value)}
                maxLength="15"
              />
              <span
                className="field__label-wrap"
                aria-hidden="true"
              >
                <span className="field__label">title</span>
              </span>
            </div>
          </div>

          <div className="inputContainer">
            <div className="field">
              <label className="ha-screen-reader">
                title
              </label>
              <input
                className="field__input"
                type="text"
                value={nameEng}
                onChange={(e) => setNameEng(e.target.value)}
                maxLength="23"
              />
              <span
                className="field__label-wrap"
                aria-hidden="true"
              >
                <span className="field__label">name</span>
              </span>
            </div>
          </div>

          <div className="inputContainer">
            <div className="field">
              <label className="ha-screen-reader">
                title
              </label>
              <input
                className="field__input"
                type="text"
                value={priceEng}
                onChange={(e) => setPriceEng(e.target.value)}
              />
              <span
                className="field__label-wrap"
                aria-hidden="true"
              >
                <span className="field__label">price</span>
              </span>
            </div>
          </div>

          <div className="inputContainer">
            <div className="field">
              <label className="ha-screen-reader">
                title
              </label>
              <input
                className="field__input"
                type="text"
                value={priceValueEng}
                onChange={(e) => setPriceValueEng(e.target.value)}
              />
              <span
                className="field__label-wrap"
                aria-hidden="true"
              >
                <span className="field__label">
                  price value
                </span>
              </span>
            </div>
          </div>

          <div className="inputContainer options_input_box">
              <div className="field">
                <label className="ha-screen-reader">
                  title
                </label>
                <input
                  className="field__input"
                  type="text"
                  value={descriptionEngPart}
                  onChange={(e) => setDescriptionEngPart(e.target.value)}
                />
                <span className="field__label-wrap">
                  <span className="field__label">
                    {' '}
                    description
                  </span>
                </span>
              </div>
              <p onClick={() => addDescPart(setDescriptionEng, descriptionEng, descriptionEngPart)}>+</p>
          </div>

          <div className="inputContainer inputContainer_description">
            <div className="field">
              <label className="ha-screen-reader">
                title
              </label>
              <textarea
                className="field__input textArea"
                rows={5}
                cols={10}
                type="text"
                value={sizingTextEng}
                onChange={(e) => setSizingTextEng(e.target.value)}
              />
              <span
                className="field__label-wrap"
                aria-hidden="true"
              >
                <span className="field__label">
                  sizing text
                </span>
              </span>
            </div>
          </div>

          <div className="inputContainer">
            <div className="field">
              <label className="ha-screen-reader">
                title
              </label>
              <input
                className="field__input"
                type="text"
                value={sizingImgEng}
                onChange={(e) => setSizingImgEng(e.target.value)}
              />
              <span
                className="field__label-wrap"
                aria-hidden="true"
              >
                <span className="field__label">
                  sizing imgurl
                </span>
              </span>
            </div>
          </div>

          <div className="inputContainer">
            <div className="field">
              <label className="ha-screen-reader">
                title
              </label>
              <input
                className="field__input"
                type="text"
                value={careEng}
                onChange={(e) => setCareEng(e.target.value)}
              />
              <span
                className="field__label-wrap"
                aria-hidden="true"
              >
                <span className="field__label">
                  care
                </span>
              </span>
            </div>
          </div>

          <div className="inputContainer">
            <div className="field">
              <label className="ha-screen-reader">
                title
              </label>
              <input
                className="field__input"
                type="text"
                value={materialsEng}
                onChange={(e) => setMaterialsEng(e.target.value)}
              />
              <span
                className="field__label-wrap"
                aria-hidden="true"
              >
                <span className="field__label">
                  materials
                </span>
              </span>
            </div>
          </div>

          <div className="inputContainer">
            <div className="field">
              <label className="ha-screen-reader">
                title
              </label>
              <input
                className="field__input"
                type="text"
                value={colectionsEng}
                onChange={(e) => setColectionsEng(e.target.value)}
              />
              <span
                className="field__label-wrap"
                aria-hidden="true"
              >
                <span className="field__label">
                  collections
                </span>
              </span>
            </div>
          </div>

          <div className="inputContainer">
            <div className="field">
              <label className="ha-screen-reader">
                title
              </label>
              <input
                className="field__input"
                type="text"
                value={clothesTypeEng}
                onChange={(e) => setClothesTypeEng(e.target.value)}
              />
              <span
                className="field__label-wrap"
                aria-hidden="true"
              >
                <span className="field__label">
                  clothes type
                </span>
              </span>
            </div>
          </div>

          <div className="options_field">
            <div className="inputContainer options_input_box">
              <div className="field">
                <label className="ha-screen-reader">
                  title
                </label>
                <input
                  className="field__input"
                  type="text"
                  value={optionColorEng}
                  onChange={(e) => setOptionColorEng(e.target.value)}
                />
                <span className="field__label-wrap">
                  <span className="field__label">
                    {' '}
                    color
                  </span>
                </span>
              </div>
              <p onClick={() => addColorEng()}>+</p>
            </div>

            <div className="inputContainer options_input_box">
              <div className="field">
                <label className="ha-screen-reader">
                  title
                </label>
                <input
                  className="field__input"
                  type="text"
                  value={optionSizeEng}
                  onChange={(e) => setOptionSizeEng(e.target.value)}
                />
                <span className="field__label-wrap">
                  <span className="field__label">
                    size
                  </span>
                </span>
              </div>
            </div>

            <div className="inputContainer options_input_box">
              <div className="field">
                <label className="ha-screen-reader">
                  title
                </label>
                <input
                  className="field__input"
                  type="text"
                  value={optionQuantityEng}
                  onChange={(e) => setOptionQuantityEng(e.target.value)}
                />
                <span className="field__label-wrap">
                  <span className="field__label">
                    {' '}
                    quantity
                  </span>
                </span>
              </div>
              <p onClick={() => addOptionEng()}>+</p>
            </div>
          </div>
          <label />
        </form>
        <div
          className="Add_manufacture_btn btn"
          onClick={
                            itemForEdit ? changeManuHandler : submitHandler
                        }
        >
          {itemForEdit ? (
            <p>CHANGE MANUFACTURE</p>
          ) : (
            <p>ADD MANUFACTURE</p>
          )}
          <span />
        </div>
      </div>
      <div className="branch scroll">
        <p className="capture addManu_capture">Images</p>
        {images.map((img) => (
          <div
            className="images_addManu"
            key={img}
            onClick={() => deleteAdedItem(img, images, setImages)}
          >
            <img src={URL.createObjectURL(img)} alt="" />
            <div>DELETE</div>
          </div>
        ))}
        {oldImages.map((img) => (
          <div
            className="images_addManu"
            key={img}
            onClick={() => deleteAdedItem(img, oldImages, setOldImages)}
          >
            <img src={`http://localhost:5000/${img}`} alt="" />
            <div>DELETE</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AddManufacture;
