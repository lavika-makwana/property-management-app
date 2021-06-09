import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../../../actions/';
import cuid from 'cuid';

const AddUser = (props) => {
	const [userAdd, setUserDetails] = useState({
    userName: '',
    userContact: '',
    userPassword: '',
    userEmail: ''
  });
	// const [users, setUsers] = useState('');

	const dispatch = useDispatch();

	const changeHandler = e => {
		const name = e.target.name;
    const value = e.target.value;
	  setUserDetails({...userAdd, [e.target.name]: e.target.value})
	}

	const handleSubmit = (e) => {
	    e.preventDefault();
	    setUserDetails(dispatch(addUser({user: userAdd, id: cuid()})))
  	};
	return(
		<div className="card card-info">
	    <div className="card-header">
	      <h3 className="card-title">Horizontal Form</h3>
	    </div>
	    {/* /.card-header */}
	    {/* form start */}
	    <form className='form-horizontal col-8' onSubmit={handleSubmit}>
	      <div className="card-body">
	      	<div className="form-group row">
	          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Name</label>
	          <div className="col-sm-10">
	            <input 
		            type='name' 
		            name='userName'
		            value={userAdd.userName}
		            className='form-control' 
		            onChange={changeHandler}
		            id='input' 
		            placeholder='Name'
		          />
	          </div>
	        </div>
	        <div className="form-group row">
	          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Contact</label>
	          <div className="col-sm-10">
	            <input 
	            	type='contact'
	            	name='userContact'
	            	value={userAdd.userContact} 
	            	className='form-control' 
	            	onChange={changeHandler}
	            	id='inputContact' 
	            	placeholder='Contact' 
	            />
	          </div>
	        </div>
	        <div className="form-group row">
	          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
	          <div className="col-sm-10">
	            <input 
	            	type='email'
	            	name='userEmail' 
	            	value={userAdd.userEmail}
	            	className='form-control' 
	            	onChange={changeHandler}
	            	id='inputEmail' 
	            	placeholder='Email' 
	            />
	          </div>
	        </div>
	        <div className="form-group row">
	          <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
	          <div className="col-sm-10">
	            <input 
	            	type='password' 
	            	name='userPassword'
	            	value={userAdd.userPassword}
	            	className='form-control' 
	            	onChange={changeHandler}
	            	id='inputPassword3' placeholder='Password' />
	          </div>
	        </div>
	      </div>
	      {/* /.card-body */}
	      <div className="card-footer">
	        <button type="submit" className="btn btn-info">Sign in</button>
	        <button type="submit" className="btn btn-default float-right">Cancel</button>
	      </div>
	    </form>
	  </div>
	);
};

export default AddUser;