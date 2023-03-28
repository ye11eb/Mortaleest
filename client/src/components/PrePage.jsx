/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

export function PrePage({ manufactures, setLoadedManufactures }) {
  const [stage, setStage] = useState(false);
  const nigga = true;

  setTimeout(() => {
    if (nigga) {
      setStage(true);
      setTimeout(() => {
        setLoadedManufactures(false);
      }, 1500);
    }
  }, 1500);

  return (
    <div className={stage === true ? 'PrePageSecond' : 'PrePage'}>
      <img
        src="./img/logo_black.svg"
        alt=""
      />
    </div>
  );
}
