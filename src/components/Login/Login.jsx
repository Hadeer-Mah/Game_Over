import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import game from '../../imgs/gameO.jpg'
import Axios from 'axios';
import Joi from 'joi';
import { useNavigate } from 'react-router-dom';
export default function Login({saveUserData}) {
    const [user, setUser] = useState({
      'email':'',
      'password':''
    })
    const [errorMsg, seterrorMsg] = useState('');
    const [loadBtn, setloadBtn] = useState(false);
    const [errorList, setErrorList] = useState([])
    let navigate = useNavigate();
    let submitForm=(e)=>{
      e.preventDefault();   
      setloadBtn(true);
      let validation = validateForm();
      if (validation.error) {
        setErrorList(validation.error.details);
        setloadBtn(false);
        
      } else {
        setErrorList([]);
          apiCheck();
      }
    }
    let getValue=(e)=>{
      let myUser={...user};
      myUser[e.target.name] = e.target.value;
      setUser(myUser);
    }
    async function apiCheck() {
      let {data} = await Axios.post('https://route-egypt-api.herokuapp.com/signin', user);
      if (data.message === 'success') {
        localStorage.setItem("token",data.token);
        saveUserData();
        setloadBtn(false);
        seterrorMsg(null);
        navigate('/home');
        
      } else {
        setloadBtn(false);
        seterrorMsg(data.message);
      }
    }
    function validateForm() {
      let scheme = Joi.object({
        email:Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
        password:Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
      })
      return scheme.validate(user, {abortEarly:false});
    }
    return (
      <>
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="row w-75 mx-auto login">
          <div className="col-md-6 p-0">
          <img src={game} alt="gameOver" className='img-fluid h-100'/>
          </div>
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <form onSubmit={submitForm}>
            <div className="form-group w-100 text-center">
              <h4 className='pb-2'>Log in to GameOver</h4>
              {errorMsg? <div className="alert alert-danger">{errorMsg}</div>: ''}
              <div className="mb-2">
              <input type="email" className={errorList.filter((ele) => ele.context.label=='email')[0]? 'border border-danger form-control':'form-control'} placeholder='Email' name='email' onChange={getValue}/>
              {errorList.filter((ele) => ele.context.label=='email')[0]?.message}
              </div>
              <div className="mb-2">
              <input type="password" className={errorList.filter((ele) => ele.context.label=='password')[0]? 'border border-danger form-control':'form-control'} placeholder='Password' name='password' onChange={getValue}/>
              {errorList.filter((ele) => ele.context.label=='password')[0]?.message}
              </div>
              <button className='w-100 text-white border-0 py-2 rounded-2'> {loadBtn? <i className='fas fa-spinner fa-spin'></i>: 'Login'}</button>
              <hr/>
              <Link to='/register' style={{color:"#ef074b"}}>Forgot Password?</Link>
            <p>Not a member yet? <Link to="/register" style={{color:"#ef074b"}}>Create account.</Link></p>
            </div>
            </form>
            
          </div>
        </div>
      </div>
      </>
    )
}
{/* <Link to='/register' style={{color:"#ef074b"}}>Forgot Password?</Link>
            <p>Not a member yet? <Link to="/register" style={{color:"#ef074b"}}>Create account.</Link></p> */}