import { useEffect, useState, React } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Main } from './components/Main';
import { Navbar } from './components/Navbar';
import { ItemOverlay } from './components/ItemOverlay';
import { Login } from './components/Login';
import { getMe } from './redux/features/auth/authSlice';
import Profile from './components/profile/Profile';
import EditInfo from './components/profile/EditInfo/EditFirstInfo';
import Terms from './components/faqs_pages/Terms';
import Cart from './components/Cart';
import Delivery from './components/faqs_pages/Delivery';
import ForMainRoute from './components/ForMainRoute';
import Policy from './components/faqs_pages/Policy';

function App() {
  const dispatch = useDispatch();
  const isStaff = window.localStorage.getItem('isStaff');
  const [openedItem, setOpenedItem] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [sortedCollections, setSortedCollections] = useState();
  const [sortedClothes, setSortedClothes] = useState();
  const [titleAnim, setTitleAnim] = useState(false);
  const [itemForEdit, setItemForEdit] = useState('');
  const [pickedSortOption, setPickedSortOption] = useState({
    eng: 'all',
    ukr: 'усе',
  });
  const [mainTitle, setMainTitle] = useState('');
  const [isMainOverlayed, setIsMainOverlayed] = useState(false);

  useEffect(() => {
    dispatch(getMe());
    setCartItems(JSON.parse(localStorage.getItem('cart')));
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const hideBodyScroll = () => {
    if (isMainOverlayed === true) {
      document.body.style.overflow = 'hidden';
    } else if (isMainOverlayed === false) {
      document.body.style.overflow = 'visible';
    }
  };

  useEffect(() => {
    hideBodyScroll();
  }, [isMainOverlayed]);

  const [ukrLoc, setUkrLoc] = useState(false);

  return (
    <div>
      <Navbar
        ukrLoc={ukrLoc}
        setUkrLoc={setUkrLoc}
        isStaff={isStaff}
        sortedCollections={sortedCollections}
        sortedClothes={sortedClothes}
        setPickedSortOption={setPickedSortOption}
        pickedSortOption={pickedSortOption}
        mainTitle={mainTitle}
        setMainTitle={setMainTitle}
        setTitleAnim={setTitleAnim}
        cartItems={cartItems}
      />
      <Main
        setOpenedItem={setOpenedItem}
        pickedSortOption={pickedSortOption}
        setPickedSortOption={setPickedSortOption}
        openedItem={openedItem}
        ukrLoc={ukrLoc}
        sortedCollections={sortedCollections}
        sortedClothes={sortedClothes}
        mainTitle={mainTitle}
        setSortedCollections={setSortedCollections}
        setSortedClothes={setSortedClothes}
        titleAnim={titleAnim}
      />
      <Routes>
        <Route path="/" element={<ForMainRoute />} />

        {openedItem && (
        <Route
          path="item:id"
          element={(
            <ItemOverlay
              isStaff={isStaff}
              itemForEdit={itemForEdit}
              setItemForEdit={setItemForEdit}
              setOpenedItem={setOpenedItem}
              openedItem={openedItem}
              ukrLoc={ukrLoc}
              setCartItems={setCartItems}
              cartItems={cartItems}
              setIsMainOverlayed={setIsMainOverlayed}
            />
          )}
        />
        )}
        <Route
          path="cart"
          element={(
            <Cart
              ukrLoc={ukrLoc}
              setCartItems={setCartItems}
              isStaff={isStaff}
              cartItems={cartItems}
              setIsMainOverlayed={setIsMainOverlayed}
            />
          )}
        />

        <Route path="login" element={<Login />} />

        <Route
          path="profile"
          element={(
            <Profile
              ukrLoc={ukrLoc}
              isStaff={isStaff}
              itemForEdit={itemForEdit}
              setIsMainOverlayed={setIsMainOverlayed}
            />
          )}
        />

        <Route path="editAddres" element={<EditInfo />} />

        <Route path="Terms" element={<Terms setIsMainOverlayed={setIsMainOverlayed} />} />

        <Route path="Delivery" element={<Delivery setIsMainOverlayed={setIsMainOverlayed} />} />

        <Route path="Policy" element={<Policy setIsMainOverlayed={setIsMainOverlayed} />} />
      </Routes>
    </div>
  );
}

export default App;
