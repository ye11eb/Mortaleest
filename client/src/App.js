import { useEffect, useState, React } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { Main } from './components/Main';

import { Navbar } from './components/Navbar';
import 'react-toastify/dist/ReactToastify.css';

// import { Register } from './components/Register';
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
  // const [isOverlayed, setIsOverlayed] = useState(false)
  const [sortedCollections, setSortedCollections] = useState();
  const [sortedClothes, setSortedClothes] = useState();
  const [titleAnim, setTitleAnim] = useState(false);
  // const sortedClothes = [];
  // const sortedCollections = [];
  // const sortedClothes = [];
  const [itemForEdit, setItemForEdit] = useState('');
  const [pickedSortOption, setPickedSortOption] = useState({
    eng: 'all manufactures',
    ukr: 'всі вироби',
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
      // document.body.style.paddingRight = '5px';
    } else if (isMainOverlayed === false) {
      document.body.style.overflow = 'visible';
      // document.body.style.paddingRight = '0px';
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
      <ToastContainer position="bottom-right" />
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

        {/* <Route path='register' element={<Register />} /> */}

        <Route
          path="cart"
          element={(
            <Cart
              setCartItems={setCartItems}
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
