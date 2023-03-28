import React, { useEffect, useState } from 'react';

function BurgerMenu({
  closeBurger,
  setCloseBurger,
  whenAccClicked,
  changeLang,
  ukrLoc,
  changePickedOption,
  sortedCollections,
  sortedClothes,
}) {
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  useEffect(() => {
    handleTouchEnd();
  }, [touchEnd]);

  function handleTouchStart(e) {
    setTouchStart(e.changedTouches[0].screenX);
  }

  function handleTouchMove(e) {
    setTouchEnd(e.changedTouches[0].screenX);
  }

  function handleTouchEnd() {
    if (touchStart - touchEnd > 0) {
      setCloseBurger(true);
    }
  }

  return (
    <div className={closeBurger ? 'navbar_burger_menu navbar_burger_closed' : 'navbar_burger_opened navbar_burger_menu'} onTouchStart={(e) => handleTouchStart(e)} onTouchEnd={(e) => handleTouchMove(e)}>
      <div className="burger_opened_top">
        <div className="navbar_item login_navbar">
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
          <div className="navbar_items burgerMenuNavbarItems">
            <p>Account</p>
            <div
              className="account_navbar"
              onClick={whenAccClicked}
            />
          </div>
        </div>
      </div>
      <div className="burger_categoriesList">
        <div className="burger_categoryList">

          <div className="category">
            {ukrLoc ? <p>Колекції</p> : <p>Collections</p>}
          </div>

          <div className="categories_list_burger">
            <div
              className="category_list"
              onClick={() => changePickedOption({
                eng: 'all manufactures',
                ukr: 'всі вироби',
              })}
            >
              {ukrLoc ? <p>все</p> : <p>all</p>}
            </div>
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
              </div>
            ))}
          </div>
        </div>
        <div className="outline" />
        <div className="burger_categoryList">

          <div className="category">
            {ukrLoc ? <p>Категорії</p> : <p>Sort</p>}
          </div>

          <div className="categories_list_burger">
            <div
              className="category_list"
              onClick={() => changePickedOption({
                eng: 'all manufactures',
                ukr: 'всі вироби',
              })}
            >
              {ukrLoc ? <p>все</p> : <p>all</p>}
            </div>
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
              </div>
            ))}
          </div>
        </div>
        <div className="outline" />
      </div>
    </div>
  );
}

export default BurgerMenu;
