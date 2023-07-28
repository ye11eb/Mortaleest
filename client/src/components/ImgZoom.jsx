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
        <div />
      </div>
      <TransformWrapper
        onClick={() => closeZoom()}
        centerOnInit
      >
        <TransformComponent>
          <img src={`http://localhost:5000/${zoommedImg}`} alt="test" />
        </TransformComponent>
      </TransformWrapper>
    </div>
  );
}

export default ImgZoom;
