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
  isUaLocation,
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

  useEffect(() => {
    setVisibleManufactures(manufactures);
  }, []);

  useEffect(() => {
    changeVisibleManufactures();
  }, [manufactures]);

  const manufacturesSortedBycollections = () => {
    const clothes = [];
    manufactures?.forEach((element) => {
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
    manufactures?.forEach((element) => {
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
    manufactures?.forEach((item) => {
      if (pickedSortOption.eng === 'all') {
        changedManufactures.push(item);
      } else if (
        item.colectionsEng === pickedSortOption.eng
                || item.clothesTypeEng === pickedSortOption.eng
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
                isUaLocation={isUaLocation}
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
          <h1>{ukrLoc ? 'FAQS' : 'FAQS'}</h1>
          <div className="faqs_links_pages">
            <div>
              <Link to="Terms">
                <p>{ukrLoc ? 'Правила та умови' : 'Terms & conditions'}</p>
              </Link>
            </div>
            <div>
              <Link to="Delivery">
                <p>{ukrLoc ? 'Доставка та повернення' : 'Delivery and return'}</p>
              </Link>
            </div>
            <div>
              <Link to="Policy">
                <p>{ukrLoc ? 'Політика конфіденційності' : 'Privacy Policy'}</p>
              </Link>
            </div>
          </div>
          <h1>{ukrLoc ? 'КОНТАКТИ' : 'CONTACTS'}</h1>
          <div className="faqs_links">
            <div>
              <p>
                <span>{ukrLoc ? 'Пошта:' : 'Mail:'}</span>
                {' '}
                <a href="hgfhf">mortaleest@gmail.com</a>
                <div className="mail" />
              </p>
            </div>
            <div>
              <p>
                <span>{ukrLoc ? 'Місцезнаходження:' : 'Location:'}</span>
                {' '}
                <a href="https://www.google.com/maps/place/%D0%A2%D0%B5%D1%80%D0%BD%D0%BE%D0%BF%D1%96%D0%BB%D1%8C,+%D0%A2%D0%B5%D1%80%D0%BD%D0%BE%D0%BF%D1%96%D0%BB%D1%8C%D1%81%D1%8C%D0%BA%D0%B0+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+46003/@49.5483334,25.5276294,12z/data=!3m1!4b1!4m6!3m5!1s0x473036ad4b82ce75:0xc484a447edb154e8!8m2!3d49.553517!4d25.594767!16zL20vMDJrNnYz">Ternopil, Ukraine</a>
                <div className="mail" />
              </p>
            </div>
            <div>
              <p>
                <span>{ukrLoc ? 'Слідкуй за нами:' : 'Follow us:'}</span>
                {' '}
                <a href="https://www.instagram.com/mortaleest/" type="_blank">@mortaleest</a>
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
