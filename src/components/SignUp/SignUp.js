import React, { useState } from 'react';
import './SignUp.css';
import SideImage from './PropertyImage';

const SignUp = (props) => {

  const [userSignUp, setuserDetails] = useState({
    user_name: '',
    contact: '',
    password: '',
    email: ''
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setuserDetails({...userSignUp, [name]: value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRecord = {...userSignUp, id: new Date().getTime().toString()}
    setRecords([...signupRecords, newRecord ])
    console.log(newRecord);
  };

  const [signupRecords, setRecords] = useState([]);

  return(
    <section className='contact-form'>
      <div className='row'>
        <div className="col-md-6 col-xs-12 col-sm-6">
          <div className='property-image'><SideImage /> </div>
        </div>
        <div className='col-md-6 col-xs-12 col-sm-6 singup-div'>
          <h4 className='login-heading'>Create Account</h4>
            <form onSubmit={handleSubmit}>
              <div className='form-group row'>
                <label for='colFormLabel' className='col-sm-2 col-form-label'>Name</label>
                <div className="col-sm-10">
                  <input 
                    type="name" 
                    className="form-control signup-input" 
                    value={userSignUp.user_name}
                    onChange={handleInput}
                    name='user_name' 
                    id="signup_name" 
                    placeholder=""/>
                </div>
              </div>
              <div className="form-group row">
                <label for="colFormLabel" className="col-sm-2 col-form-label">contact</label>
                <div className="col-sm-10">
                  <input 
                    type="contact" 
                    className="form-control signup-input" 
                    value={userSignUp.contact}
                    onChange={handleInput}
                    name='contact' 
                    id="signup_contact" 
                    placeholder=""/>
                </div>
              </div>
              <div className="form-group row">
                <label for="colFormLabel" className="col-sm-2 col-form-label">Password</label>
                <div className="col-sm-10">
                  <input
                    type="password"
                    className="form-control signup-input" 
                    value={userSignUp.password}
                    onChange={handleInput}
                    name='password' 
                    id="signup_password" 
                    placeholder=""/>
                </div>
              </div>
              <div className="form-group row">
                <label for="colFormLabel" className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-10">
                  <input 
                    type="email" 
                    className="form-control signup-input" 
                    value={userSignUp.email}
                    onChange={handleInput}
                    name='email' 
                    id="signup_email"emaillaceholder=""/>
                </div>
              </div>
              <div className="form-group row">
                <div className="col-sm-10">
                  <button type="submit" className="btn btn-outline-secondary">SIGN UP</button>
                </div>
              </div>
              <div className="form-group row">
                <div className="col-sm-10">
                  <h4 className="text-center model-login-footer-txt">Already a member?Login Here</h4>
                </div>
              </div>
            </form>
        </div>
      </div>
    </section>
  );
};

export default SignUp;