import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Main } from './components/Main.jsx';
import { Navbar } from './components/Navbar.jsx';
import 'react-toastify/dist/ReactToastify.css';

import { Register } from './components/Register.jsx';
import { ItemOverlay } from './components/ItemOverlay.jsx';
import { Login } from './components/Login.jsx';
import { useDispatch } from 'react-redux';
import { getMe } from './redux/features/auth/authSlice.js';
import Profile from './components/profile/Profile.jsx';
import EditInfo from './components/profile/EditInfo/EditFirstInfo.jsx';
import Terms from './components/faqs_pages/Terms.jsx';
import { Cart } from './components/Cart.jsx';
import Delivery from './components/faqs_pages/Delivery.jsx';

function App() {
  const dispatch = useDispatch();
  const isStaff = window.localStorage.getItem('isStaff');
  const [openedItem, setOpenedItem] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  // const [isOverlayed, setIsOverlayed] = useState(false)
  const [sortedCollections, setSortedCollections] = useState([]);
  const [sortedClothes, setSortedClothes] = useState([]);
  const [itemForEdit, setItemForEdit] = useState('');
  const [pickedSortOption, setPickedSortOption] = useState({
    eng: 'all manufactures',
    ukr: 'всі вироби',
  });
  const [mainTitle, setMainTitle] = useState('Mortaleest');

  useEffect(() => {
    dispatch(getMe());
  }, []);

  const [ukrLoc, setUkrLoc] = useState(false);

  return (
    <>
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
      />
      <ToastContainer position="bottom-right" />
      <Routes>
        {/* <Route path='/' element={<Cart />} /> */}

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
            />
                      )}
        />

        <Route path="login" element={<Login />} />

        <Route
          path="profile"
          element={
            <Profile isStaff={isStaff} itemForEdit={itemForEdit} />
                    }
        />

        <Route path="editAddres" element={<EditInfo />} />

        <Route path="Terms" element={<Terms />} />

        <Route path="Delivery" element={<Delivery />} />
      </Routes>
    </>
  );
}

export default App;
