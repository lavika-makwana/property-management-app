import React from 'react';
import './SignUp.css';
import SideImage from './PropertyImage';

const SignUp = (props) => {
  return(
    <div>
      <section className='contact-form'>
        <div className="row">
          <div className="col-md-6 col-xs-12 col-sm-6">
            <div className='property-image'><SideImage /> </div>
          </div>
          <div className="col-md-6 col-xs-12 col-sm-6">
            <h4 className="login-heading">Create Account</h4>
              <form>
                <div className="form-group row">
                  <label for="colFormLabel" className="col-sm-2 col-form-label">Name</label>
                  <div className="col-sm-10">
                    <input type="name" className="form-control signup-input" id="colFormLabel" placeholder=""/>
                  </div>
                </div>
                <div className="form-group row">
                  <label for="colFormLabel" className="col-sm-2 col-form-label">contact</label>
                  <div className="col-sm-10">
                    <input type="contact" className="form-control signup-input" id="colFormLabel" placeholder=""/>
                  </div>
                </div>
                <div className="form-group row">
                  <label for="colFormLabel" className="col-sm-2 col-form-label">Password</label>
                  <div className="col-sm-10">
                    <input type="password" className="form-control signup-input" id="colFormLabel" placeholder=""/>
                  </div>
                </div>
                <div className="form-group row">
                  <label for="colFormLabel" className="col-sm-2 col-form-label">Email</label>
                  <div className="col-sm-10">
                    <input type="email" className="form-control signup-input" id="colFormLabel" placeholder=""/>
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-sm-10">
                    <button type="button" className="btn btn-outline-secondary">SIGN UP</button>
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
    </div>
  );
};

export default SignUp;