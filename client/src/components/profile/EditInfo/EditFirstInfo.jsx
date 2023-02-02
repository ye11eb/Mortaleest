import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import EditSecondInfo from './EditSecondInfo';


const EditFirstInfo = ({SetAddShippingAddress, fetchUserInfo, userInfo}) => {
  const [firstName, setFirstName] = useState(userInfo.firstName)
  const [secondName, setSecondName] = useState(userInfo.secondName)
  const [number, setNumber] = useState(userInfo.number)
  const {status} = useSelector(state => state.auth)
  const [secondInfo, setSecondInfo] = useState(false)
  const [isHidenFirst, setIsHidenFirst] = useState(false)
  
  useEffect(() => {
    if(status){
      toast(status)
    }
  }, [status]);

  const navigateToProfile = () => {
    SetAddShippingAddress(false)
  }

  const hiDeOverlay = (func) => {
    setIsHidenFirst(true)
    setTimeout(() => {func()}, 500)
  }

  const dispatch = useDispatch()

  return (
    <div className={isHidenFirst ? "register hideRegister" : "register showRegister"} >
      <span className='arrow_auth' onClick={() => hiDeOverlay(navigateToProfile)}><img src="../../public/img/other/arrow_register.svg" alt="" /></span>
      <form className='Register_Container'  onSubmit={e => e.preventDefault()}>
      <h1 className='headerOverlay'>ADD SHIPPING INFO</h1>
      <h4> Enter your personal information </h4>
      <div className='auth_container Container_email'>
        <div className='inputContainer'>
          <div className="field">
            <label for="first-name" className="ha-screen-reader">First name</label>
            <input id="first-name" className="field__input" 
              onChange={e => setFirstName(e.target.value)}
              value={firstName} 
              placeholder="gdsfgfdgd"/>
            <span className="field__label-wrap" aria-hidden="true">
              <span className="field__label">First name</span>
            </span>
          </div>
        </div> 
      </div>

      <div className='auth_container Container_email'>
        <div className='inputContainer'>
          <div className="field">
            <label for="first-name" className="ha-screen-reader">First name</label>
            <input id="first-name" className="field__input" 
              onChange={e => setSecondName(e.target.value)}
              value={secondName} 
              placeholder="gdsfgfdgd"/>
            <span className="field__label-wrap" aria-hidden="true">
              <span className="field__label">Second name</span>
            </span>
          </div>
        </div> 
      </div>
     
      <div className='auth_container Container_email'>
        <div className='inputContainer'>
          <div className="field">
            <label for="first-name" className="ha-screen-reader">First name</label>
            <input id="first-name" className="field__input" 
            type='email'
            onChange={e => setNumber(e.target.value)}
            value={number} 
            placeholder="gdsfgfdgd"/>
            <span className="field__label-wrap" aria-hidden="true">
              <span className="field__label">Number</span>
            </span>
          </div>
        </div>  
      </div>
          
        <div className='auth_submit' onClick={() => setSecondInfo(true)}><p>Next</p></div>
      </form>
        {secondInfo && <EditSecondInfo 
          userInfo={userInfo}
          fetchUserInfo={fetchUserInfo}
          setIsHidenFirst={setIsHidenFirst}
          SetAddShippingAddress={SetAddShippingAddress}
          setSecondInfo={setSecondInfo} 
          firstName={firstName} 
          setFirstName={setFirstName}
          secondName={secondName} 
          setSecondName={setSecondName}
          number={number}
          setNumber={setNumber}
          />
        }
    </div>
  );
}

export default EditFirstInfo;

