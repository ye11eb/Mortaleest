import React, { useState } from 'react';

export function PrePage({ setLoadedManufactures }) {
  const [stage, setStage] = useState(false);

  setTimeout(() => {
    setStage(true);
    setTimeout(() => {
      setLoadedManufactures(false);
    }, 1700);
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
