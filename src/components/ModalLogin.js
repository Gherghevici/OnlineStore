import React, { useContext, useState, useRef, useEffect } from 'react';
import { globalContext } from '../context/Ctx';
import ReactModal from 'react-modal';
import '../styles/Modal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const customStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
  },
  content: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '16px',
    background: '#fff',
    padding: '15px',
    
  },
};
function ModalLogin() {
  const { modal,usersArr,uName } = useContext(globalContext);
  const [mState, setMState] = modal;
  const [connectOrRegister, setConnectOrRegister] = useState('connect');
  const [userArr,setUserArr] = usersArr
  const [emailBool,setEmailBool] = useState(false);
  const [passBool,setPassBool] =useState(false);
  const [name,setName] = uName;
  const user = useRef();
  const login = useRef();

  const getData = (e)=>{
    let tempUser = {};
    tempUser[user.current[0].name] = user.current[0].value; 
    tempUser[user.current[1].name] = user.current[1].value; 
    tempUser[user.current[2].name] = user.current[2].value; 
    tempUser.loggedIn = false;
    checkForValidUser(tempUser)
    if(!emailBool&&!passBool&&user.current[0].value.length>0 &&user.current[1].value.length>0&&user.current[2].value.length>0){
      return [tempUser]
    }
  }
  const checkForValidUser = (u) =>{
    const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const regexPass = /(?=.*[A-Z])/g
    console.log()
    if(regexEmail.test(u.emailReg)){
      setEmailBool((prevValue)=>prevValue=false);
    }else{
      setEmailBool((prevValue)=>prevValue=true);
    }
    if(regexPass.test(u.passReg) && u.passReg.length > 0){
      setPassBool((prevValue)=>prevValue=false);
    }else{
      setPassBool((prevValue)=>prevValue=true);
    }
  }  
  const sendUserHandler = (e)=>{
    e.preventDefault();
    setUserArr(prevValue=>[...prevValue,...getData()||[]])
    user.current[0].value = "";
    user.current[1].value = "";
    user.current[2].value = "";
  }
  const loginHandler =  (e)=>{
    e.preventDefault();
   
   setName(userArr.filter(value=>{
      if(value.emailReg ===login.current[0].value &&value.passReg === login.current[1].value){
        value.loggedIn = true;
        return value;
      }
    }))
    login.current[0].value = "";
    login.current[1].value = "";
    
  }
  useEffect(()=>{
    if(name.length>0){
      
      return setMState(false) ;
    }
    
  },[name])

  return (
    <>
      <div>
        <ReactModal
          isOpen={mState}
          onRequestClose={() => setMState(false)}
          style={customStyles}
          ariaHideApp={false}

        >
          <div className="modal-login-container">
            <div className='modal-photo-container'>
              <img src={require('../images/logo.png')} alt="#"></img>
              <button onClick={() => setMState(false)}>
                <FontAwesomeIcon icon={faXmark} size="2x" />
              </button>
            </div>
          </div>
          <div className="type-of-form">
            <div
              onClick={() => setConnectOrRegister('connect')}
              className={connectOrRegister == 'connect' ? 'active' : ''}
            >
              Login
            </div>
            <div
              onClick={() => setConnectOrRegister('register')}
              className={connectOrRegister == 'register' ? 'active' : ''}
            >
              Register
            </div>
          </div>
          {connectOrRegister === 'connect' ? (
            <form className="form-login-container" ref={login}>
              <label htmlFor="">Email*</label>
              <input type="text" id="email"  />
              <label htmlFor="pass">Password*</label>
              <input type="password" id="pass"  />
              <div>
                <div>
                  <input type="checkbox" id="rememberMe" />
                  <label htmlFor="rememberMe">Remember Me</label>
                </div>
                <p>Password lost?</p>
              </div>
              <button onClick={loginHandler}>Login</button>
            </form>
          ) : (
            <form className="form-login-container" ref={user}>
              <label htmlFor="fName">First Name*</label>
              <input onChange={getData} name = "fName" type="text" id="fName" />
              <label htmlFor="emailRegister">Email*</label>
              <input onChange={getData} name = "emailReg" type="text" id="emailRegister" />
              {emailBool&&<span className='invalid-modal'>Invalid Email</span>}
              <label htmlFor="passRegister">Password*</label>
              <input onChange={getData} name ="passReg" type="password" id="passRegister"  />
              {passBool&&<span className='invalid-modal'>Invalid Pass</span>}
              <button onClick={sendUserHandler}>Register</button>
            </form>
          )}
        </ReactModal>
      </div>
    </>
  );
}
export default ModalLogin;
