import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Manufactures({
  manufacture, setOpenedItem, ukrLoc, isUaLocation,
}) {
  const [title, setTitle] = useState(
    ukrLoc ? manufacture?.title : manufacture?.titleEng,
  );
  const price = isUaLocation ? manufacture?.price : manufacture?.priceEng;

  const priceValue = isUaLocation ? manufacture?.priceValue : manufacture?.priceValueEng;

  useEffect(() => {
    setTitle(ukrLoc ? manufacture?.title : manufacture?.titleEng);
  }, [ukrLoc]);


  return (
    <Link to={`/item:${manufacture?._id}`} onClick={() => setOpenedItem(manufacture)}>
      <div className="manufacture">
        <div className="manufacture_img">
          {' '}
          <img src={`http://localhost:5000/${manufacture?.imgUrl?.[0]}`} alt="img" />
        </div>
        <p className="manufacture_title">{title}</p>
        <span className="manufacture_price">
          {price}
          {' '}
          <p>{priceValue}</p>
        </span>
        {manufacture.outOfStock === true && (<div className="outOfStock"><p>OUT OF STOCK</p></div>)}
        {manufacture.preOrder === true && (<div className="preOrder"><p>PRE ORDER</p></div>)}
      </div>
    </Link>
  );
}

export default Manufactures;
