import './HeaderLogin.css';

const HeaderLogin = () => {
	return(
		<nav className="navbar navbar-inverse">
		  <div className="container-fluid">
		    <div className="navbar-header">
		      <h3 className="navbar-brand">Property Management</h3>
		    </div>
		    <ul className="nav navbar-nav navbar-right">
		      <li><span className="glyphicon glyphicon-user"></span> Sign Up</li>
		      <li><span className="glyphicon glyphicon-log-in"></span> Login</li>
		    </ul>
		  </div>
		</nav>
	);
};

export default HeaderLogin;