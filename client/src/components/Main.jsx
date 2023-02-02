import {React, useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllManufactures } from '../redux/features/Manufactures/manuSlice';
import Manufactures from './Manufactures';
import {PrePage} from './PrePage'

export const Main = ({setOpenedItem, ukrLoc ,sortedCollections, pickedSortOption, sortedClothes, mainTitle}) => {
  const dispatch = useDispatch()
  const manufactures = useSelector((state) => state.manufactures.manufactures)
  const [visibleManufactures, setVisibleManufactures] = useState(manufactures)
  var changedManufactures = []
  const [loadedManufactures, setLoadedManufactures] = useState(true)
  const [visibleTitle, setVisibleTitle] = useState()




  useEffect(() => {
    setVisibleManufactures(manufactures)
    manufacturesSortedByClothes()
    manufacturesSortedBycollections()  
  }, [manufactures]);

  useEffect(() => {
    dispatch(getAllManufactures())
    // manufacturesSortedByClothes()
  }, []);

  useEffect(() => {
    mainTitle !== 'Mortaleest' ? setVisibleTitle('') : setVisibleTitle(ukrLoc ? pickedSortOption['ukr'] : pickedSortOption['eng'])
    // manufacturesSortedByClothes()
  }, [mainTitle]);

  useEffect(() => {
    changeVisibleManufactures() 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
  }, [pickedSortOption]);
  
  // useEffect(() => {
  //   manufacturesSortedByClothes()
  // }, [ukrLoc]);



  const manufacturesSortedBycollections = () => {
    manufactures.forEach(element => {
      if (!sortedCollections.some((item) => item.eng == element['colectionsEng'])) {
        sortedCollections.push({'eng':element['colectionsEng'],'ukr':element['colections']})
      }
    })
  }

  const manufacturesSortedByClothes = () => {
    manufactures.forEach(element => {
      if (!sortedClothes.some((item) => item.eng == element['colothesTypeEng'])) {
        sortedClothes.push({'eng':element['clothesTypeEng'],'ukr':element['clothesType']})
      }
    })
  }



  const changeVisibleManufactures = () => {
    manufactures.forEach((item) => {
      if (pickedSortOption['eng'] == 'all manufactures') {
        changedManufactures.push(item)
      }else if(item['colectionsEng'].includes(pickedSortOption['eng']) || item['clothesTypeEng'].includes(pickedSortOption['eng'])) {
        changedManufactures.push(item)
      }

    })
    setVisibleManufactures(changedManufactures)
  }

  return (
<>
  {loadedManufactures && (<PrePage manufactures={manufactures} setLoadedManufactures={setLoadedManufactures}/>)}
  <div className='main_container'>  
    <div className="collection container">
      <div className="pickedOptionTitle">
        <h1>{visibleTitle}</h1>
      </div>
      <div className='manufactures'>
        {visibleManufactures?.map((manufacture, idx) => (
          <Manufactures key={idx} manufacture={manufacture} setOpenedItem={setOpenedItem} ukrLoc={ukrLoc}/>
        ))}
      </div>
    </div>

  </div>
  <div className="main_container">
    <div className="faqs container">
      <h1>FAQS</h1>
      <div className="faqs_links_pages">
        <div><Link to='Terms'><p>Terms & conditions</p></Link></div>
        <div><Link to='Delivery'><p>Delivery and return</p></Link></div>
        <div><p>Privacy Policy </p></div>
      </div>
      <h1>CONTACTS</h1>
      <div className="faqs_links">
        <div><p><span> Mail:</span> <a>mortaleest@gmail.com</a><div className='mail'></div></p></div>
        <div><p><span>Location:</span> <a>Ternopil, Ukraine</a><div className='mail'></div></p></div>
        <div><p><span>Follow us:</span> <a>@mortaleest</a><div className='mail'></div></p></div>
      </div>
      <p className='faqs_sign'>© 2022, Mortaleest</p>
    </div>
  </div>
</>
  )
}
