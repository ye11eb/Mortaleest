import { React, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BurgerMenu from './BurgerMenu';

export function Navbar({
  ukrLoc,
  setUkrLoc,
  sortedCollections,
  sortedClothes,
  setPickedSortOption,
  pickedSortOption,
  setMainTitle,
  mainTitle,
  setTitleAnim,
  cartItems,
}) {
  const isAuth = window.localStorage.getItem('token');
  const navigate = useNavigate();

  const [collections, setCollections] = useState(false);
  const [collectionsClosed, setCollectionsClosed] = useState(false);
  const [sort, setSort] = useState(false);
  const [sortClosed, setsortClosed] = useState(false);
  const [headerAnim, setHeaderAnim] = useState(false);
  const [headerLogo, setHeaderLogo] = useState(true);
  const [isBurgerShowed, setIsBurgerShowed] = useState(true);
  const [closeBurger, setCloseBurger] = useState(true);

  const windowsize = window.innerWidth;
  const handleScroll = () => {
    const position = window.pageYOffset;
    const windowsize = window.innerWidth;
    if (windowsize < 600) {
      if (position >= 20) {
        setHeaderAnim(true);
        setTitleAnim(true);
        if (position >= 55) {
          changeBar('higer');
          setHeaderLogo(false);
        }
      } else if (position < 62) {
        setHeaderAnim(false);
        setTitleAnim(false);
        if (position < 40) {
          setHeaderLogo(true);
          changeBar('lover');
        }
      }
    } else if ((windowsize >= 600)) {
      if (position >= 60) {
        setHeaderAnim(true);
        setTitleAnim(true);
        if (position >= 198) {
          changeBar('higer');
          setHeaderLogo(false);
        }
      } else if (position < 120) {
        setHeaderAnim(false);
        setTitleAnim(false);
        if (position < 200) {
          setHeaderLogo(true);
          changeBar('lover');
        }
      }
    }
  };

  const changeBar = (pos) => {
    if (pos === 'lover') {
      setMainTitle('');
    } else if (pos === 'higer') {
      setMainTitle(
        ukrLoc ? pickedSortOption.ukr : pickedSortOption.eng,
      );
    }
  };

  const updateBar = () => {
    if (mainTitle !== '') {
      setMainTitle(
        ukrLoc ? pickedSortOption.ukr : pickedSortOption.eng,
      );
    }
  };

  useEffect(() => {
    setCloseBurgerHandler();
  }, [closeBurger]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pickedSortOption, ukrLoc]);

  useEffect(() => {
    updateBar();
  }, [ukrLoc]);

  const setCollectionsFunc = () => {
    setSort(false);
    if (!collections) {
      setCollectionsClosed(true);
      setCollections(true);
    } else {
      setCollectionsClosed(false);
      setTimeout(() => {
        setCollections(false);
      }, 200);
    }
  };
  const setSortFunc = () => {
    setCollections(false);
    if (!sort) {
      setsortClosed(true);
      setSort(true);
    } else {
      setsortClosed(false);
      setTimeout(() => {
        setSort(false);
      }, 200);
    }
  };

  const whenCartClicked = () => {
    if (!isAuth) {
      navigate('/login');
    } else if (isAuth) {
      navigate('/cart');
    }
  };

  const whenAccClicked = () => {
    if (!isAuth) {
      navigate('/login');
    } else if (isAuth) {
      navigate('/profile');
    }
  };

  const changePickedOption = (option) => {
    setPickedSortOption(option);
  };

  const changeLang = (lang) => {
    setUkrLoc(lang);
  };

  const setCloseBurgerHandler = () => {
    if (!closeBurger) {
      setIsBurgerShowed(true);
    } else {
      setTimeout(() => {
        setIsBurgerShowed(false);
      }, 300);
    }
  };

  return (
    <>
      <div className="navbar-container filter">
        <div className="navbar container">
          <div className="navbar_item categories_navbar">
            {windowsize <= 800 && (
            <div className={closeBurger ? 'navbar_burger_container' : 'navbar_burger_container navbar_burger_container_rev'} onClick={() => setCloseBurger(!closeBurger)}>
              <div className="navbar_burger_line" />
              <div className="navbar_burger_line" />
            </div>
            )}
            {windowsize > 800 && (
            <>
              <div
                onClick={() => setCollectionsFunc()}
                className="category_container collections-category"
              >
                <div className="category">
                  {ukrLoc ? <p>КОЛЕКЦІЇ</p> : <p>COLLECTIONS</p>}
                  <div
                    className={collections ? 'arrow rotated' : 'arrow'}
                  />
                </div>

                {collections && (
                <div className={collectionsClosed ? 'categories_list'
                  : 'categories_list categories_list_closed'}
                >
                  <div
                    className="category_list"
                    onClick={() => changePickedOption({
                      eng: 'all',
                      ukr: 'усе',
                    })}
                  >
                    {ukrLoc ? <p>усе</p> : <p>all</p>}
                  </div>
                  <div className="outline" />
                  {sortedCollections?.map((item) => (
                    <div key={item.eng}>
                      <div
                        className="category_list"
                        onClick={() => changePickedOption(item)}
                      >
                        {ukrLoc ? (
                          <p>{item.ukr}</p>
                        ) : (
                          <p>{item.eng}</p>
                        )}
                      </div>
                      {sortedCollections && (sortedCollections.indexOf(item)
                      !== sortedCollections.length - 1
                        ? (<div className="outline" />) : (<div />))}
                    </div>
                  ))}
                </div>
                )}
              </div>
              <div
                onClick={() => setSortFunc()}
                className="category_container sort-category"
              >
                <div className="category">
                  {ukrLoc ? <p>КАТЕГОРІЇ</p> : <p>SORT</p>}
                  <div
                    className={sort ? 'arrow rotated' : 'arrow'}
                  />
                </div>

                {sort && (
                <div className={sortClosed ? 'categories_list'
                  : 'categories_list categories_list_closed'}
                >
                  <div
                    className="category_list"
                    onClick={() => changePickedOption({
                      eng: 'all',
                      ukr: 'усе',
                    })}
                  >
                    {ukrLoc ? <p>усе</p> : <p>all</p>}
                  </div>
                  <div className="outline" />
                  {sortedClothes?.map((item) => (
                    <div key={item.eng}>
                      <div
                        className="category_list"
                        onClick={() => changePickedOption(item)}
                      >
                        {ukrLoc ? (
                          <p>{item.ukr}</p>
                        ) : (
                          <p>{item.eng}</p>
                        )}
                      </div>
                      {sortedClothes && (sortedClothes.indexOf(item) !== sortedClothes.length - 1
                        ? (<div className="outline" />) : (<div />))}
                    </div>
                  ))}
                </div>
                )}
              </div>
            </>
            )}
          </div>

          <div className="logo_navbar">
            {headerLogo && (
              <a href="https://www.instagram.com/mortaleest/" type="_blank">
                <img
                  src="./img/logo_black.svg"
                  alt=""
                  className={headerAnim ? 'mortaleestAnim'
                    : 'headerMortaleest'}
                />
              </a>
            )}
            {headerLogo === false ? (
              <p
                className={headerAnim ? 'HeaderTitle'
                  : 'HeaderTitle'}
              >
                {mainTitle}
              </p>
            ) : (<p />)}
          </div>
          <div className="navbar_item login_navbar">
            {windowsize > 800 && (
            <div className="lang_navbar_container">
              <div className="lang_navbar">
                <p onClick={() => changeLang(false)}>ENG</p>
                <span>|</span>
                <p onClick={() => changeLang(true)}>UKR</p>
              </div>
              <div
                className={
                ukrLoc
                  ? 'langUnderline pickedUkr'
                  : 'langUnderline pickedEng'
                }
              />
            </div>
            )}
            <div className="navbar_items">
              {windowsize > 800 && (
              <div
                className="account_navbar"
                onClick={whenAccClicked}
              />
              )}
              <div
                className="cart_navbar"
                onClick={whenCartClicked}
              >
                {cartItems?.length > 0
                && (
                <div className="num_in_cart_wraper">
                  <p>{cartItems?.length}</p>
                </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {isBurgerShowed && (
      <BurgerMenu
        closeBurger={closeBurger}
        setCloseBurger={setCloseBurger}
        whenAccClicked={whenAccClicked}
        changeLang={changeLang}
        ukrLoc={ukrLoc}
        collections={collections}
        changePickedOption={changePickedOption}
        sortedCollections={sortedCollections}
        sortedClothes={sortedClothes}
      />
      )}
    </>
  );
}
