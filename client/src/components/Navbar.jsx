import { React, useEffect, useState } from 'react'
import { useNavigate} from 'react-router-dom'


export const Navbar = ({ukrLoc, setUkrLoc, sortedCollections,sortedClothes, setPickedSortOption, pickedSortOption, setMainTitle, mainTitle}) => {
  const isAuth = window.localStorage.getItem('token')
  const isStaff = window.localStorage.getItem('isStaff')
  const navigate = useNavigate()


  const [collections, setCollections] = useState(false)
  const [collectionsClosed, setCollectionsClosed ] = useState(false)
  const [sort, setSort] = useState(false)
  const [sortClosed, setsortClosed ] = useState(false)
  // const [mainTitle, setMainTitle] = useState('Mortaleest')
  const [titleSize, setTitleSize] = useState(0)

  const unlogin = () => {
    window.localStorage.removeItem('token')
    window.localStorage.removeItem('isStaff')
  } 

    //SCROLL 
    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        const windowsize = window.innerWidth
        setScrollPosition(position);
        if (windowsize<600) {
          if (position>=62) {
            changeBar('higer')
            setTitleSize('S')
          }else if(position<62){
            changeBar('lover')
            setTitleSize(false)
          }
        } else if(windowsize=>600) {
          if (position>=200) {
            changeBar('higer')
            setTitleSize('L')
          }else if (position<200) {
            changeBar('lover')
            setTitleSize(false)
          }
        }
        console.log(position);
        console.log(windowsize);
    };
  
    const changeBar = (pos) => {
      if (pos == 'lover') {
        setMainTitle('Mortaleest')
      }else if (pos == 'higer') {
        setMainTitle(ukrLoc ? pickedSortOption['ukr'] : pickedSortOption['eng'])
      }
      
    }
  
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
  
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


  // useEffect(() => {
  //   setCollectionsFunc()
  // }, [ukrLoc]);

  const setCollectionsFunc = () => {
    setSort(false)
    setCollections(!collections)
  }
  const setSortFunc = () => {
    setCollections(false)
    setSort(!sort)
  } 

  const whenCartClicked = () => {
    if(!isAuth) {
      navigate('/login')
    }else if(isAuth){
      navigate('/cart')
    }
  }


  const whenAccClicked = () => {
    if(!isAuth) {
      navigate('/login')
    }else if(isAuth){
      navigate('/profile')
    }
  }

  const changePickedOption = (option) => {
    setPickedSortOption(option)
  }

  const changeLang = (lang) => {
    setUkrLoc(lang)
  }
  


  return (
    <div className='navbar-container filter'>
      <div className='navbar container'>
        <div className="navbar_item categories_navbar">
          <div onClick={() =>  setCollectionsFunc()} className="category_container collections-category">
            <div className="category">
            
            {ukrLoc ? <p>????????????????</p> : <p>Collections</p>}
              <div className={collections ? "arrow rotated" : "arrow"}>
              </div>
            </div>

            {collections&&          
            <div className="categories_list">
              <div className="category_list" onClick={() => changePickedOption({'eng' : 'all manufactures', 'ukr' : '?????? ????????????'})}>{ukrLoc  ?  <p>??????</p> : <p>all</p>}</div>
              <div className="outline"></div>
              {sortedCollections.map((item) => (
                <div key={item.eng}>
                  <div className="category_list"
                    onClick={() => changePickedOption(item)}
                  >{ukrLoc ? (<p>{item.ukr}</p>) : (<p>{item.eng}</p>)}</div>
                  <div className="outline"></div>
                </div>
                ))
              }
            </div>}
          </div>


          <div onClick={() =>  setSortFunc()} className="category_container sort-category">
            <div className="category">
            {ukrLoc ? <p>??????????????????</p> : <p>Sort</p>}
              <div className={sort ? "arrow rotated" : "arrow"}>
              </div>
            </div>
      
            {sort&&<div className='categories_list' >
              <div className="category_list" onClick={() => changePickedOption({'eng' : 'all manufactures', 'ukr' : '?????? ????????????'})}>{ukrLoc ? <p>??????</p> : <p>all</p>}</div>
              <div className="outline"></div>
              {sortedClothes?.map((item) => (
                <div key={item.eng}>
                  <div className="category_list" onClick={() => changePickedOption(item)}>{ukrLoc ? <p>{item.ukr}</p> : <p>{item.eng}</p>}</div>
                  <div className="outline"></div>
                </div>
                ))}
            </div>}
          </div>
        </div>


        <div className="logo_navbar"><p className={mainTitle == 'Mortaleest'? ''  : `mainFont${titleSize}`}>{mainTitle}</p></div>
          <div className="navbar_item login_navbar">
              <div className='lang_navbar_container'>
                <div className='lang_navbar'>
                  <p onClick={() => changeLang(false)}>ENG</p>
                  <span>|</span>
                  <p onClick={() => changeLang(true)}>UKR</p>
                </div>
                <div className={ukrLoc ? 'langUnderline pickedUkr' :'langUnderline pickedEng'}></div>
              </div>
              <div className='navbar_items'>
              <div className='account_navbar' onClick={whenAccClicked}></div>
              <div className='cart_navbar' onClick={whenCartClicked}></div>
            </div>
          </div>
        </div>

        {/* <div className="unlogin" onClick={() => unlogin()}>Rozloginutus</div> */}

      </div>
  )
}
