import React,{ useEffect, useState } from "react";
import {ItemSlider} from "./ItemSlider.jsx";
import {useNavigate} from 'react-router-dom';
import { getAllManufactures, deleteManufacture } from '../redux/features/Manufactures/manuSlice';
import { useDispatch } from "react-redux";


export const ItemOverlay = ({ukrLoc, openedItem, setCartItems ,cartItems, isStaff, itemForEdit, setItemForEdit}) => {
  const [options, setOptions] = useState(ukrLoc ? openedItem.options : openedItem.optionsEng)
  const [actualSize, setActualSize] = useState('')
  const [actualColor, setActualColor] = useState(options[0]['color'])
  const [descriptionOpened, setDescriptionOpened] = useState(false)
  const [sizingOpened, setSizingOpened] = useState(false)
  const [materialsOpened, setMaterialsOpened] = useState(false)
  const [currentColor, setCurrentColor] = useState(options[0]['OtherOptions'])
  const [isHiden, setIsHiden] = useState(false)
  const [title, setTitle] = useState(ukrLoc ? openedItem.title : openedItem.titleEng)
  const [name, setName] = useState(ukrLoc ? openedItem.name : openedItem.nameEng)
  const [price, setPrice] = useState(ukrLoc ? openedItem.price : openedItem.priceEng)
  const [description, setDescription] = useState(ukrLoc ? openedItem.description : openedItem.descriptionEng)
  const [priceValue, setPriceValue] = useState(ukrLoc ? openedItem.priceValue : openedItem.priceValueEng)

  const navigate = useNavigate();
  const dispatch = useDispatch()


  
  useEffect(() => {
    setOptions(ukrLoc ? openedItem.options : openedItem.optionsEng)
    setTitle(ukrLoc ? openedItem.title : openedItem.titleEng)
    setPrice(ukrLoc ? openedItem.price : openedItem.priceEng)
    setName(ukrLoc ? openedItem.name : openedItem.nameEng)
    setPriceValue(ukrLoc ? openedItem.priceValue : openedItem.priceValueEng)
  }, [ukrLoc]);

  const navigateToMain = () => {
    navigate('/')
  }

  const navigateToProfile = () => {
    navigate('/profile')
  }

  const hiDeOverlay = (navigateFunc) => {
    setIsHiden(true)
    setTimeout(() => {navigateFunc()}, 500)
  }


//add to bag

  const addToBag = () => {
    const orderBag = {
      '_id' : openedItem._id,
      'imgUrl': openedItem.imgUrl,
      'title': title,
      'name': name,
      'price' : price,
      'priceValue' : openedItem.priceValue,
      'totalItemPrice' : price,
      'size' : actualSize,
      'color' : actualColor,
      'quantity' : 1, 
    }
    setCartItems([...cartItems, orderBag])
  }

  const editItem = () => {
    setItemForEdit(openedItem)
    hiDeOverlay(navigateToProfile)
  }

  const DeleteItem = () => {
    const data = {'_id' : openedItem['_id']}
    hiDeOverlay(navigateToMain)
    dispatch(deleteManufacture(data))
    dispatch(getAllManufactures())
    navigate('/')
  }

  const changeSize = (pickedSize) => {
    if (actualSize == pickedSize) {
      setActualSize('')
    }else {
      setActualSize(pickedSize)
    }

    
  }

  const changeColor = (pickedcolor) => {
    if (actualColor == `${pickedcolor}`) {
      setActualColor('')
    }else {
      setActualColor(`${pickedcolor}`)
    }
    for(let i=0; i < options.length;i++){
      if(options[i]['color'] == pickedcolor){
        setCurrentColor(options[i]['OtherOptions'])
      }
    }
    
  }


  return (
    <div className={isHiden ? "itemOverlay hideOverlay" : "itemOverlay showOverlay"}>
      <div className="item_overlay_main">
        <ItemSlider openedItem={openedItem}/>
        <div className="itemInfo">
          <div className="overlay-top">
            <h1 className="itemTitle">{title}</h1>
            <div className='crossHair_close' onClick={() => hiDeOverlay(navigateToMain)}>
              <p className='close'>+</p>
            </div>
          </div>
          <span className="itemPrice">{price} <p>{priceValue}</p></span>
          <div className="ItemSellect size">
            {ukrLoc ? (<p className="sellect_capture">Розмір</p>) : (<p className="sellect_capture">Size</p>)}
            <div className="pickSize">
              {currentColor && currentColor.map((color) => (
                <div key={currentColor.indexOf(color)} className={actualSize == `${color['size']}` ? "sizeButton activeSize" : "sizeButton"} 
                onClick={() => changeSize(`${color['size']}`)}><p>{color['size']}</p></div>
              ))}
            </div>
          <div className="ItemSellect color">
            <p className="sellect_capture">Color</p>
            <div className="pickColor">
              {options.map((option) => (
                <div key={options.indexOf(option)} className={actualColor == `${option.color}` ? "colorButton activeColor" : "colorButton"} 
                onClick={() => changeColor(option.color)}><p>{option.color}</p></div>
              ))}
            </div> 
            </div>
            {isStaff ? (
            <div>
              <button type="submit" className="addToBag" onClick={() => editItem()}><p>EDIT ITEM</p></button>
              <button type="submit" className="addToBag" onClick={() => DeleteItem()}><p>DELETE ITEM</p></button>
            </div>) 
            : 
            (<div><button type="submit"className="addToBag" onClick={() => addToBag()}>{ukrLoc ?  (<p>В Корзину</p>) : (<p>ADD TO BAG</p>)}</button></div>)}
            <ul className="dropDownList_Item">
              <li onClick={() => setDescriptionOpened(!descriptionOpened)} className={descriptionOpened &&'OpenedDropDownList'}>
                <div className="dropDownList_Item_fstLine">
                  {ukrLoc ? <p>Опис</p> : <p>Description</p> }
                  <div className="arrow"></div>
                </div> 
                {descriptionOpened && <div className="dropDownList_Item_element"><p>{description}</p></div>}
              </li>
              <li onClick={() => setSizingOpened(!sizingOpened)} className={sizingOpened && 'OpenedDropDownListPhoto'}>
                <div className="dropDownList_Item_fstLine">
                {ukrLoc ? <p>Розмірності</p> : <p>Sizing</p> } <div className="arrow"></div>
                </div>
                {sizingOpened && <div className="dropDownList_Item_element"><img src="
                data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYUExcVFBUYFxQYGBIaFxgYFxocGhcYGBcbGhwcFxwdISwkHR0pHhocJTYlKS8yNTMzHSI5PjkzPSwyNDABCwsLEA4QHhISHDIpJCkwPT04PTg0MDIyOz0wPT0yMDA9MjI5MjIwMjA9Ozk9PT09PTQyOzs0PTw9MjIzMDI0MP/AABEIAKwBJQMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAAAwQFAgEGB//EAEMQAAIBAwEHAQQGCAQEBwAAAAECEQADEiEEBRMiMVFhQTJxgZEjM1JzobFCYnKCkrKzwQZTotEVY5PDFCQ0dOHi8f/EABgBAQEBAQEAAAAAAAAAAAAAAAABAgME/8QAIxEBAQACAgEEAgMAAAAAAAAAAAECEQMhQRIxUaETYdHh8P/aAAwDAQACEQMRAD8A/XqUpQeMwAJJgDUk9APNQ2tttOQFuIxPQBgSfdrr8KiW2LjuXEhGVUU6qDirF4+1LRJ6Y6RJm1dtBwVcBlPUMJHyNB1Sq2xkjNCSQjAKSZJUqGEn1iSJOpAEyZNWaBXlxwoLMQFGpJMADyT0r2qdi2LjG42oV3W2p6LgxRmj7RYHX0EARLSEg263p9IuugkwGPZSdCfdVivGEgg6g6EHoR5qrs6YObY9grki/YggMo7LzKQPSSOkABbpSlAqLabwtoztMKrMY6wokx8qlqpvf/0937u7/KazldS2LjJbJflPZuh1Vh0ZVYT1giRNUdp3zbtpcdg0WnCNAEljj7Ouo5xVjdZmzaI1GFv+UV8vvX6jbf8A3Nv/ALNcuXkuOG58PRw8Uyz9N9tz7fXbPeV1V1MqwBB7g1Ts72tuttgGi67osgdVynLXQch/CqWyH/w17gn6m7LWeyP1dPAPtD4iqW7x9HsX39//AL1ZvNep58/Szhnd8ePv+GttG+QrsiWrtwoQGKLIUwDEkiTBGg71Mu8l4TXXV7apOQdCG07D161QQXrF27hYNxLj5hldViUVYIYzPL+NQ713hxdlvgoyOmIZSQSCSpBBGhBHrS8mUltvfxr4JxY2ySddd777XV35Mf8Al9ojvwv/AJq4u2rxeEQQ2AcSNGWYMeQeo81UTeF8kTsjASJPFt6Dv1rj/EnLbW6DF1GXh9TkzEKUgdchp8j6VfXZjct71+tM+iXKY61v97Xl21TdNoSWCh2IHKoJgBj3PWO1WqyP8OKDa4ky9xi1w+ucxj4CxiB4rXrrhlcsd3y5cmMxys+P9SlKVtgpSlApSlApSlApSlApSlApSlApSlBV2BuVvtcS5mOhBLEgR+zjB9RB9atVTvkLetkEZOGRh6lQrOrR1OJBH75qfabuFt3AkqrEDuQJighstN65BkBbeXh+bSe+JBI9NO9W6h2NAqKFYMInIRzljLNppqST8amoOb10IpZuigkxqYHYepqPY0K2wG9rVm8MxLMB8SaldAwKsAQQQQRIIPUEVSsXxbBS5kIZ4JVyuBcleaCNFIGp0igvVVQ5XWPpbUJP6zkMw+ACH96rYqtu76pD6sMz+05zP4saCxSlKBXjoCCD0IIPuNe0oMLZLO12rYtqtl0QYqzO6sVGiyoUiY81xtG5LjbI9oMrXXuB2JlVLF1YxoSAAIHurU2feVu5GJaCQqko6qxOUYMygMOU6gkdO4ry9vO2kyx5SqkKjsZZxbAAVSTzkDT39K4/hlmrb7advzZTuSS7293nsK3kKHQ6MjDqrrqrDyDWbsW6biJswYqWtXLjvBMEMH9nTU847etXjvm0Cg+kl2KACzdJDhSxVhhyHFS3NGkHoRXq73tG2bq5sg4cHhuM+IQE4eSjMGRBWetW8WNu77pjy5Sa8PNqubSHPDS0U0gu7KfMgKRVD/hF102jiMguXsQAslVCDlEkSdeunrV5d82iARxDJeF4N7M4GGITDLEEgZREkDrXX/FrWQUMTkLZDC25T6QwkuFxEnTU+o71cuKZXu1Jy3GdST+kKXNs9bdgdzxH/LCpLuxvcvo7xw7ayigmTcbQswj0Gg95NdJva2ycRc2Qm2F+jcF8yIKBlGYjWVnQV7b3raOHMRxHuIgKOpLWyyuGBErDKRLQJKjqwl6PFtp+TvcmnGybE1u87LHCuAMyzqtzoSoiIYdfIrRql/xO3LCWhSwLC25SVMEB8cSQdIB6gj0NePvS2CBLsSXAwt3HnhlQ8YKZALAT0mR1BrWOMxmoxllbd1epWfc3xbUuG4gKFQ02bsS7BVCnCGJJAAEzV204ZQwmCARkpU691YAg+CK0julKUClKUClKUClKUClKUClKUHF+4EUs3RQSdJMDsPU+KrhLr+0eGv2Vgv8AvN0HuUe5q724Sg+8sf1UqYXASROoifEzH5Gg4sbOiTisExJ1LNH2mOrH3mpa54g9/uBP5U4g8/wn/aptdVA+xrJZCbbHUskCT3ZSCrHyQTXi3XVlW4AciQrrIBMEwymcdAdZIMekgGyHB0nXt6/Kqu2ODbkfo3LQ9faW6mnz0qot1T264CcCYUDO6e1tZMH9oiPcr1avXAis7eyoZj7lEn8qoXrJXZ7hb6x0drnvKwQPAHKPAFBesuSoLLixAJWZxJ9CfFQbFy5Wz+geX9hpK/LmX9yfWrZqjsl3Nw8RnZtMR1jViBPjI0F2lKUClKUGPb3CkkuwcMysV4aKjFczk6qILkvq0CcRpXTbit4lQWVCytCEpGN4XYUqQRqIkVk2do3qoE2kc465m2BkOKZ5LgwBPCEc8AnUkGfpdga4bSG6oW4VGar0DeoGp/M+89aCtY3UqBAHb6O5cuAk5MS9t0h2aS0C5oTrCqDNQ7JubC4Gzlcg7KFCKWVXCnBeXIlyzNpJRNNK1qUFAbuK4m25RgHBOIYMruXgg+oJ0M+pmajs7lRWDEuxASJdsckJYOyAhGfI5SV0MR0FadKDG2fcpR8leBzEBUVQtzFlVwgGORDvkfXl0EVy/wDh9WByuXMuYqynEI7Xmvlwo0niFTBn2FGsGdusDeFzbRcucFVYBgbYbDhsgtziecOLhuAidFAKkTDUFy5uosj2zcbhPnyQARmZIDjWASY9R3NRPuBYQKVCWuILaPbV0tq+BxUEiApTl7Ax0AqoNr3iWX6C0q8Tmhgx4Qu2xp9IObA3DMfojQE41euXdqycIiRL4llBEDLHUXFOsKOnqTPoAn2nYA4uSw+k4eQZFdTh6FW0IP8A+GrGx7Pw7aW8i2KgZN1Md6i2J7hLC4Bp0KiAeZxoJOmIQ9TqxHpVugUpWNv87YuDbGqPGXERionEq6gMx0yCtb8G4G/RoNmlfNJf3kHCm1bZFOJclBmM7QzKi5IOPEbSOoGOgm3Yv7ZgmdtOJwrXEAC4C59JmF+kHLomskgEcpk4htUrP2Vr+YFwJjzaqsCAXAmXbWBbP77D000KBSlKBSlKBSlKCvt45B95YPyuoa4aBeM9GtpGmko7ZE/xpXW8DFtz2Ab+Eg/2ptfK1t+z4H9m5ygfx4fKlWLKsD0M0rwoD1A+VecNew+QqA5HQ6+OprNSeCp6hrqMJ1MPtIYSZ7EVd2xyttsdGiF06MxxXT9oiuL1sKLSLoodAB4RWYfyCmjZvAHhvJERrp6SJ9e1N5lhZumRpbuHofRT5r3eP1N37tz8lJrvb1m3dHdHHzU00bSOSATI0n0P+9UN2qfQiFt7OnQ9VUt37OPlVjbbn0Nxv+W7f6CabuSEJ+0zme6g4of4FWmjare2S+S2N0LJeCcjobissDomKArpM9fWvdm2S6HDPc5QUOIZzoEZSNfQsUaDJ0bWIA0qVUKTShFBg7NsbByE2oHBrGSRkVCIFKNzSAwDHX1M+mu5mO9Zmyi0L1xVuTccnJNNDbVWaAANYuJJMmCuugrQ4Pmg7zHemY71xwfNOD5oO8x3pmO9ccHzTg+aDvMd6xt62i1wsu1LZJtYqrR1D5ZQSJ9AfEj101uD5rK3rYs5qbrkMAwUANByVlEwDLQXxH7UDrQWN6IHVF43DY3EKmcZOJGKjqTrIHWfdUu7RhaUF1c6nJZKnIluWSeXXQSYEamq289ktMitdZlQMG0LgyOaDHMFGIYgRGMmIqXdlq3wwtpiUUkCSxInmiW1iGBHgiNKC/mO9Mx3rjg+acHzQd5jvVLevCa1jddEQlZLkAaakAtEEqGE9R19KtcHzVXeC21SbjYpKzodYOUGJ0hTPiaDjYbaBH+ktujPcZsFASG0KsJYaDrBE9T1M19zbNbtuxt3kuAqoKqE5TpJBUnFSyuQvQFm+E+ybuti2yoxKEuGOR7YEaQIAUAaaACKr7os2VYi1cLMykwVjlW409FHR3Oh6TpAoNnMd6ZjvXHB804Pmg7zHemY71xwfNOD5oO8x3rpWnpUXB812iRQdUpSgr7x+qf9mm8TyDr9ZY6dfrUrzeX1VzwjH5Cf7V7tOty0v6zufIRSP5nQ/CgkUKexPnr8j0roovYfIUZl9SPiRXMp+r+FRpW24jEYnpcsTHsxxUmfQV3tUza6fWD1P2H8V3tS523VCMirY69GjlPzio7l0PwWHR3BHuNp3H5UkS03krGzdGmtq4Op9UPirDgkEaQQfXv8KXkyVl7qw+YioGvRs/E7Wsv9E0Nq95z/AOGXQcy2V6mYcqp9OxNWdhUi3bGmiWx/pHiuTbhrVv7ALHtCLgAfi4I/ZNe7Byqbf+WcR5SAU+SkLPdTQ2pX7m2B2CJbKTyEmJAIbm1kSpwGmjLJ0Ok+yG+WHEGK+sY68vTQk6N51rQpVQoTShFBQs27XEa4tsC5JVnjUx6T6jmPzq3xR2rNs7XaF57YTFy6qzcozYozA920TGe8j0MafCFB5xR2pxR2r3hCnCFB5xR2pxR2r3hCnCFB5xR2rM3m9kuvER2cK+BUkGCDnjDCDjJntMdq1OEKzN7XLSkLdtK4KkjLDHQyQS2g6CO5gUHlu5s9+3hj9GRbgHlzWPoyNZYEKYB9AZFRbLvSxaGKI6B2JMxBchSxZmb0BUdfUATU+6b1q4rNat4S7AjHEloBm5C6E+fz0qLYRZut9QoJVWkqhJ5bbCdPQXF/Gg1uKO1OKO1e8IU4QoPOKO1UN8X7Qt/TKTbkaAkawT1BHpOk69NZitDhCqG+blu3aL3bfEQHVcQ3QEzBHXSB5I6daCPYbuzlWFtFVc3UqABzYDLEDocI0Gvga1Bud9mLZWUYHBxkWLCM4YHmOuQ6+IB0IFvYrlvhs9u2VE3SVVRLMhIJOOksFESdQRVTc202Llxhbsi2wVgWCBZCMJEwCVlpHxJAkSGzxR2pxR2r3hCnCFB5xR2pxR2r3hCnCFB5xR2rtGmueEK6VYoPaUpQcX7QdGQ9GVlPuYR/eqNp82tORJNlmYT/AJhtnp0PsmtIVmbt9oDtbK/G3cdW/EUI0A4Hj3ggf7U4g7j511UNi4Wa4D+i4Ue7ho2vxY1F6dsQf0ST7o/E/wBqztkBiwkjltueh6oFt9+zmtSs7YDLAfZtuf8AqXGj+Q00baEHuPkf96zLYJsWUBHOLS6qeirmwOvqqMPiK1KzdmOtrXQNtSD9pXIH+lGpo2sIDxrmonh2fQ9Mrsevea8QHjPqJ4dmdDEZXY9evX8K7t/XXD/y7I+Ia4f7ivNlEtcbu5A9yKEj+IOfjTRtUu7FeZjF4BeaAA0ibhYSQwmFIXSOnrVvYLLpbC3HLsJ5iZJHdjAE+4AdhVmlVCjHSlKDDu72cXCnBBAuIobm1DTlcHLGKnQ69e2hOhsm2cS2rwBkoJGvKY1HvB0qpe2q+LjBbQKB0AbAmbeub+11UwMYk9RMwJd27RdckXrYQ4giFMTk4ILSR7IQxOmRGsGgucU+KcU+KlwHYUwHYUEXFPinFPipcB2FMB2FBFxT4qlt+8GtkcisuJJJy0juAD4PwNaWA7CqO3veU/RIjDFjzIx5h0EhhoZHp6HvoHCbextq4QZMLbEdRLEBhI6ka/Kot270e4zK1vDFbZnWCWUEjoDodNYmPlYt3LptKxthbhxJBXSMwCMcpDFNepg941h2HabrOFuWwLZVjlw2Q5ZsACGY48oU+sltOhgL/FPinFPipcB2FMB2FBFxT4qnvTb2t28xb4hBHL6nrEdyTAHvrRwHYVW24uqTbRWaRykdR2mRHprr7qCtu/eDXEJNvAhmUDquigzI9JJWe4NUrW+7maDghQ2AMZSskAAiBPWREwJJirWwbRea4wuWxgFJVhbKFyGAGjOcdNMTrpMgECvdpvX1chbaFMwB9GxJX6MnUNEwzwTAlBMUF/inxTinxU2I7CvMB2FBFxT4pxT4qXAdhTAdhQRcU+KkttIr3AdhXoFApSlAqlwQt9WBMOtyR6ZyhkdiQp06aT1JJu1V2/RRc/y2Dn9mCrz7kZj7wKC1VbZfbu/er/Rt1Zqtsvt3fvV/o26CwzACT0Gp9wqpurZ8LazObKheTJnEaeAOkf3JJ73hqmHrcIT4N7ceQgc/CrNAqlashuIpkY3MlIMFSyq0g/tM34g9SKu1WGl4/r2x87bGfnxB/DQSWLGE8xZmMszRJMAD2QANABoP71HsB5D97tH9a5Vmq+wiEP3l/wDG65oLFKUoFKUboZ6azQY1j/ENoqjPFtWcJz3EBtsbb3IvCZtvCQVPqw61JZ3yLoJtW2uBeISVZYIW49sYEmGLYMQOkRJEivN3WdlZhctXBdYYsH4zXDCrcReYsZUB7mnSSx61O+6rRkwwnPIrcuLmHdrhDYsMhk7kA9MjEAmggt76DuFRMlZgiNmoyZrIvDlOoXExOsH0jWuTvuBbL2yvENwKS6BeRlWC7QM2J5V9cT2q7b3baW5xFthbkzkND9WLcafo4qvL0lQYkTXF/dVt1CMGwhwVFxwrBzLB1DAMD2M6EjoaCrtG/AhuSkomRLB1BKocWxU+0wcOuP6vmpL++lXjRbdjaUssY/S4nF1tydSrwpmIJFWNn3ciYHEM6KFDsAW6li3YMWJJI71Am4dnWCtlFaGBdRDtmZbNxzPJhjkTJAPUUHL75BAa2hdSbKzkF1uMEUEESCG0IOog1Lse8xcuNbwxZMpDMuXK2M4TlieqtEEa6VKN22wXYJBe5bd4J1dCCrRMDVQTHXWepqC2NnS6W4oN3nWGvFiubrkqqzHGWC6AegFBpUqMX0MgMpIIU6jRjED38w+Yr0XVP6S9uo6yR+YI+FB3SuUcGYIMaGDMGAdfgQfiK6oFKVDtG2W7c5uiwATkwEAtiCZ7toPOlBNSvFcHoR8xXK3lIBDKQdQchBETp8DNB3SuUcHUEESRoZ1BII94II+FdUClKUClKUClKUCvLiBgVYSGBBHcHQ17XooK+wuTatltWNtCT3JUE/jXOy+3d+9X+jbpu76pB9lQp96cp/EU2X27v3q/0bdAu63bY7Ldb4gov5OfnVmqza3l/VtXJ/fdI/karNAqttumD/YdZ/ZfkM+BkG/cqzXF60HVkPRlZT7iIMUHdV9gPIfvL4+V1662O4Xtqze0QMvDDRh8GBFcIMbrD0dQ4H6ynFz8jb/Ggs0pSgV4ySCD0IIPx0r2hNB8eNx7A0IS/LKQWjEuXWF05CA7RjACz6TX1ey7Otu2ltBCIqoo7KogfgKyrDWbty4htWy1srlMNORJy6QDK950ExEVq8bxQS0qLjeKcbxQS0qLjeKcbxQS187vTdWycZ7lwXBddWYsgunl4ZtEgopGgMx6Ehu1bvG8Vk762tFgPazBRgSLhUqmSlvZ1wywkjuNDFBTP+GtjshHKvC8BUPO4HDdGtlgFPQovM3SSNMjOhY3ZYupkJdGLEZCATi1uRkoPsGO2k+pJ423edtLIutbJB4bQQQScc1yJHMRHmDExEifdF+3w/o0wQNcWMp9liszJkGJHiKC5suyLbyx6MxaPQaAQPGlT1FxvFON4oJax9/btsXFNy+rNCqsplIAbPQDz8+nrWnxvFUd7bwW1bzdMgGXTyvOD06yojzHQagMrdn+H9kRztC8TNH2ky0qednd1xUDJRxD3MgTJURc2DYdnupyguBOrAfpOSxBjWXQ66/KKsbNt1t0eEXANeU4wymJLkkCBJLTPUz16mrubfFu42FtMDgzHrJhyD1GurEyTMt060Gzs1gW1xBJEudf1mLf3ipai43inG8UEtKi43inG8UEtKi43iu0eaDqlKUClKUFbY9DcX7Nx/jxIufm5Hwpsvt3fvV/o26LpeP69tSPfbYhvwdPlTZPbu/er/RtUCxrcut24dv+Fc/+4flVmq27tUDfbZ3+DuWX/SQPhVmgUpSgrbJobq+guEj99VuH/UzUf65fFu5P7z24/kb5Ut/XP2Nu0fjk4P4BaWtbtw9ltL8Rm35OKCzSlKBSlGOlBmWdrc32tmyQgLRdkwwCrjGnUniAidAqn9LTSwHaqdjaXJcMCMWgcsArAgg+vr0qXiHvQT4DtTAdqg4h704h70E+A7UwHaoOIe9OIe9BPgO1Zm8dsZHVEslwykyATBAYiY9JA6T19wa5xD3rO3jtl9XUW0DJixYkTBAaOnnHzroD6BPtu14WuIlpmJCEKRB5tYOuhHrPr3rvdm0G4HLWzbxdlUGRksAzB6dSO+moHSq9/bLwsB1QcXG2cSJGRjJQAZ08mptg2m4ysbggh2AGOPKI11JnWYIPSPWRQaGA7UwHaoOIe9OIe9BPgO1Ut6XzaTNLZuGQMRPYn8wB8fUwDNxD3qpvPabqWybSh7k6KR10MDSI1jX0Emgl2e4xRma2MgbmIBIBw0E5aiSDBjpB9a53XtBuKS9vDtM6jJ1n44hvcwrjZ9quFHJHMGcLKldAOUsJJIJ7ehHrNV927btDvF22EXBiCB1OcCddCVg4+kHxQbWA7UwHaoOIe9OIe9BPgO1MB2qDiHvTiHvQT4DtXqrHSq/EPeprTSNaDqlKUClKUFbadHtt+syE9gyE/wAyoPjUL3Cq7Sy+0GOP7XAt4/jFS7ZzG3b9WdXPhbTK5P8AFgv71QuhYXwolhdRlHdktWmA8SRHxoL1q2EVUX2VCqPcogflXVc2rgdQy6qwDA+CJFdUClK4vXlQS7BR0EmJPYdz4oIm+tX7t5/iSP715svt3fvF/pW68sEtca5iQuKKmQgnVixxOoGqjWDodOk+7NpcujuyN8DbVfzQ0FmlKUClKN0oM5eOLpJE2i64gYSExYEt0Pt4nQ+zGkzOjWJc2DaDcLC7CG4jBcm0RZyt9P0jzZdV9kSBV7ZLdwW1FzVwoDEMSCQImSAdevSgu0qDA+aYHzQT0qDA+aYHzQT1l71XaCy8AwuL5QLZgwcYD9TkV9QIDdSRF3A+azN57FfdlNq5ioByBd1y6wOXoCSJPURpEmgubxF42zwoDysagjprlksABoJgEkAxBOnW7BdxPGMtkY9n2YH2dOuXwj3CC7st02gmWTgW5OTWyxWM+dZK5eBXm69lu20YXGzYuxDZM2hjrIGOswoEAR11NBqUqDA+aYHzQT1T3oL3DPAIFyRE4x69cp0mCfWAQIJkS4HzVfbdmd0hWKmRqGZdOh1XXofyPoKDvZ7dwIwdyzE3IY45KvRICoFJgZajQmNah2IXxcHEJKYGfq8cywIjEBhAkeoII9QSfNh2e6obiGZckczPy4gQCYx5gTGoE1W2Xd99Htk3SyKOcF3Yt9EFgT3fmk66CIk0G5SoMD5pgfNBPSoMD5pgfNBPSoMD5qW0DGtB1SlKBSlKCtdRhcDqAwxKkTBGsgrOmvr06Co7PEVrhNtTmwYRc6RbRIaVH2Z0nrV2lBFslsoiqeomY6SSTA8CYHgVLSlAqhY2Z7ZJwtu+v0jOwdgTMGVaPcDHYDpV+lBW4lz/ACl/6v8A9K92dWyZ3ABIRQAcoC5GSYGpLHTwKsUoFKUoFKUoMi9uhmdn4sS6PjiYGMjD2/YaZYerSfAm3bu5rRM3c1KgHJTlIZmByLHTnxiOiqJ010aUClKUClKUCqG8d3m6QQwU4kEFSwbXTIBlmNSNdDB99+lBQ3bsLWlKtcNyXZpKKCQQBDn9I+uWk+6o9h3Ubbq3EkKuJXEiThbUknIjqk9P0jrWnSgUpSgVBttjNQAQCCGBIkSO4kaEEg69CanpQZewbra22RuTyY6JiZhNRLMAowJCxALtHavNq3QXd2zUKwfQ25IZlUAzlBAK5YkQSdegjVpQeW0CgAdAAB7hoK9pSgUpSgUpSgUpSg//2Q==" alt="" /></div>}
              </li>
              <li onClick={() => setMaterialsOpened(!materialsOpened)} className={materialsOpened && 'OpenedDropDownList'}>
                <div className="dropDownList_Item_fstLine">
                  {ukrLoc ? <p>Матеріали</p> : <p>Materials</p> } <div className="arrow"></div>
                </div>
                {materialsOpened && <div className="dropDownList_Item_element"><p>100% CO</p></div>}
              </li>
            </ul>
          </div>
        </div> 
      </div>
    </div>
  );
}
