import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { changeEmail } from '../../../redux/features/auth/authSlice';


const EditEmailPass = ({userInfo, setEnterEmail, password, setNewEmail, setIsHidenPass}) => {
  const [email, setEmail] = useState(userInfo.email)
  const {status} = useSelector(state => state.auth)
  const [isHidenEmail, setIsHidenEmail] = useState(false)

  const navigateToPrev = () => {
    setEnterEmail(false)
  }

  const hiDeOverlay = (func) => {
    setIsHidenEmail(true)
    setTimeout(() => {func()}, 500)
  }

  const navigateToProfile = () => {
    setNewEmail(false)
  }


  const dispatch = useDispatch()

  const handleSubmit = () => {
    try{
      dispatch(changeEmail({email, password}))      
      setIsHidenPass(true)
      setTimeout(() => {navigateToProfile()}, 500)
    }catch (error){
      console.log(error);
    }
  }


  return (
    <div className={isHidenEmail ? "register hideRegister" : "register showRegister"} >
      <span className='arrow_auth' onClick={() => hiDeOverlay(navigateToPrev)}><img src="../../public/img/other/arrow_register.svg" alt="" /></span>
      <form className='Register_Container'  onSubmit={e => e.preventDefault()}>
      <h1 className='headerOverlay'>CHANGE MAIL</h1>
      <h4> Enter your new email </h4>

      <div className='auth_container Container_email'>
        <div className='inputContainer'>
          <div className="field">
            <label for="first-name" className="ha-screen-reader">First name</label>
            <input id="first-name" className="field__input" 
              onChange={e => setEmail(e.target.value)}
              value={email} 
              placeholder="gdsfgfdgd"/>
            <span className="field__label-wrap" aria-hidden="true">
              <span className="field__label">Email</span>
            </span>
          </div>
        </div> 
      </div>
          
        <div className='auth_submit' onClick={() => handleSubmit()}><p>Next</p></div>
      </form>
        
    </div>
  );
}

export default EditEmailPass;
