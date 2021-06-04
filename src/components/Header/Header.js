import React, { Fragment } from 'react';
import HeaderLogin from './HeaderLogin';
import { Link } from 'react-router-dom';
// import classes from './Header.module.css';

const Header = () => {
	return(
		<>
			<header className=''>
				<HeaderLogin/>
			</ header>
			<div className=''>
				
			</div>
		</>
	);
};

export default Header;