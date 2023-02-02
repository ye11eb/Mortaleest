import React, { useEffect, useState } from 'react'




export const PrePage = ({manufactures, setLoadedManufactures}) => {
  const [stage, setStage] = useState(false);

  setTimeout(() => {
    if (manufactures?.length) {
      setStage(true)
      setTimeout(() => {
        setLoadedManufactures(false)
      }, 1290);
    }
  }, 1290);
      
  return (
    <div className={stage == true ? 'PrePageSecond' : 'PrePage'}><p>Mortaleest</p></div>
  )
}
