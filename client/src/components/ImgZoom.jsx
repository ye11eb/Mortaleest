import React, { useState } from 'react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

function ImgZoom({ zoommedImg, setZoommedImg }) {
  const [isZoomed, setIsZoomed] = useState(true);
  const closeZoom = () => {
    setIsZoomed(false);
    setTimeout(() => {
      setZoommedImg('');
    }, 300);
  };
  return (
    <div className={isZoomed ? 'transformImg' : 'transformImg transformImgHovered'}>
      <div
        className="crossHair_close"
        onClick={() => closeZoom()}
      >
        <p className="close">+</p>
      </div>
      <TransformWrapper
        // initialPositionX={window.innerWidth / 2.5}
        centerOnInit
        // centerZoomedOut
      >
        <TransformComponent>
          <img src={zoommedImg} alt="test" />
        </TransformComponent>
      </TransformWrapper>
    </div>
  );
}

export default ImgZoom;
