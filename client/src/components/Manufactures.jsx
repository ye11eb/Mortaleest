import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Manufactures({ manufacture, setOpenedItem, ukrLoc }) {
  const [title, setTitle] = useState(
    ukrLoc ? manufacture?.title : manufacture?.titleEng,
  );
  const [price, setPrice] = useState(
    ukrLoc ? manufacture?.price : manufacture?.priceEng,
  );
  const [priceValue, setPriceValue] = useState(
    ukrLoc ? manufacture?.priceValue : manufacture?.priceValueEng,
  );

  useEffect(() => {
    setTitle(ukrLoc ? manufacture?.title : manufacture?.titleEng);
    setPrice(ukrLoc ? manufacture?.price : manufacture?.priceEng);
    setPriceValue(
      ukrLoc ? manufacture?.priceValue : manufacture?.priceValueEng,
    );
  }, [ukrLoc]);

  return (
    <Link to={`/item:${title}`} onClick={() => setOpenedItem(manufacture)}>
      <div className="manufacture">
        <div className="manufacture_img">
          {' '}
          <img src={manufacture?.imgUrl[0]} alt="img" />
        </div>
        <p className="manufacture_title">{title}</p>
        <span className="manufacture_price">
          {price}
          {' '}
          <p>{priceValue}</p>
        </span>
      </div>
    </Link>
  );
}

export default Manufactures;
