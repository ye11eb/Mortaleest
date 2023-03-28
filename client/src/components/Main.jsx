import { React, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllManufactures } from '../redux/features/Manufactures/manuSlice';
import Cookies from './Cookies';
import Manufactures from './Manufactures';
import { PrePage } from './PrePage';

export function Main({
  setOpenedItem,
  ukrLoc,
  pickedSortOption,
  mainTitle,
  setSortedClothes,
  setSortedCollections,
  titleAnim,
}) {
  const isAuth = window.localStorage.getItem('token');
  const dispatch = useDispatch();
  const manufactures = useSelector(
    (state) => state.manufactures.manufactures,
  );
  const [visibleManufactures, setVisibleManufactures] = useState(manufactures);
  const changedManufactures = [];
  const [loadedManufactures, setLoadedManufactures] = useState(true);
  const [visibleTitle, setVisibleTitle] = useState();

  useEffect(() => {
    setVisibleManufactures(manufactures);
    manufacturesSortedByClothes();
    manufacturesSortedBycollections();
  }, [manufactures]);

  useEffect(() => {
    dispatch(getAllManufactures());
  }, [dispatch]);

  useEffect(() => {
    mainTitle !== ''
      ? setVisibleTitle('')
      : setVisibleTitle(
        ukrLoc ? pickedSortOption.ukr : pickedSortOption.eng,
      );
  }, [pickedSortOption, mainTitle, ukrLoc]);

  useEffect(() => {
    changeVisibleManufactures();
  }, [pickedSortOption]);

  const manufacturesSortedBycollections = () => {
    const clothes = [];
    manufactures.forEach((element) => {
      if (
        !clothes.some(
          (item) => item.eng === element.colectionsEng,
        )
      ) {
        clothes.push({
          eng: element.colectionsEng,
          ukr: element.colections,
        });
      }
      setSortedCollections(clothes);
    });
  };

  const manufacturesSortedByClothes = () => {
    const clothes = [];
    manufactures.forEach((element) => {
      if (
        !clothes.some(
          (item) => item.eng === element.clothesTypeEng,
        )
      ) {
        clothes.push({
          eng: element.clothesTypeEng,
          ukr: element.clothesType,
        });
      }
    });
    setSortedClothes(clothes);
  };

  const changeVisibleManufactures = () => {
    manufactures.forEach((item) => {
      if (pickedSortOption.eng === 'all') {
        changedManufactures.push(item);
      } else if (
        item.colectionsEng.includes(pickedSortOption.eng)
                || item.clothesTypeEng.includes(pickedSortOption.eng)
      ) {
        changedManufactures.push(item);
      }
    });
    setVisibleManufactures(changedManufactures);
  };

  return (
    <>
      {loadedManufactures ? (
        <PrePage
          manufactures={manufactures}
          setLoadedManufactures={setLoadedManufactures}
        />
      )
        : !isAuth && (<Cookies ukrLoc={ukrLoc} />)}
      <div className="main_container">
        <div className="collection container">
          <div className="pickedOptionTitle">
            <h1 className={titleAnim ? 'titleAnim' : 'titleDeafault'}>{visibleTitle}</h1>
          </div>
          <div className="manufactures">
            {visibleManufactures?.map((manufacture) => (
              <Manufactures
                key={manufacture.priceEng + manufacture.titleEng}
                manufacture={manufacture}
                setOpenedItem={setOpenedItem}
                ukrLoc={ukrLoc}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="main_container">
        <div className="faqs container">
          <h1>FAQS</h1>
          <div className="faqs_links_pages">
            <div>
              <Link to="Terms">
                <p>Terms & conditions</p>
              </Link>
            </div>
            <div>
              <Link to="Delivery">
                <p>Delivery and return</p>
              </Link>
            </div>
            <div>
              <Link to="Policy">
                <p>Privacy Policy </p>
              </Link>
            </div>
          </div>
          <h1>CONTACTS</h1>
          <div className="faqs_links">
            <div>
              <p>
                <span> Mail:</span>
                {' '}
                <a href="hgfhf">mortaleest@gmail.com</a>
                <div className="mail" />
              </p>
            </div>
            <div>
              <p>
                <span>Location:</span>
                {' '}
                <a href="hgfhf">Ternopil, Ukraine</a>
                <div className="mail" />
              </p>
            </div>
            <div>
              <p>
                <span>Follow us:</span>
                {' '}
                <a href="hgfhf">@mortaleest</a>
                <div className="mail" />
              </p>
            </div>
          </div>
          <p className="faqs_sign">© 2022, Mortaleest</p>
        </div>
      </div>
    </>
  );
}
