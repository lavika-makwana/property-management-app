import React from 'react';
import { Link } from 'react-router-dom';
import SideImage from './PropertyImage';
import './SignUp.css';

const Login = (props) => {
  return(
    <div>
      <section className='login-form'>
        <div className="row">
          <div className="col-md-6 col-xs-12 col-sm-6">
            <div className='property-image'><SideImage /> </div>
          </div>
          <div className="col-md-6 col-xs-12 col-sm-6">
            <h4 className="login-heading">User Login </h4>
              <form>
                <div className="form-group row">
                  <label for="colFormLabel" className="col-sm-2 col-form-label">Email</label>
                  <div className="col-sm-10">
                    <input type="email" className="form-control signup-input" id="colFormLabel" placeholder=""/>
                  </div>
                </div>
                <div className="form-group row">
                  <label for="colFormLabel" className="col-sm-2 col-form-label">Password</label>
                  <div className="col-sm-10">
                    <input type="password" className="form-control signup-input" id="colFormLabel" placeholder=""/>
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-sm-10">
                    <button type="button" className="btn btn-outline-secondary">LOGIN</button>
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-sm-10">
                    <h4 className="text-center model-login-footer-txt">Not a member?
                    <Link to='/signup'>Create Account</Link></h4>
                  </div>
                </div>
              </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;