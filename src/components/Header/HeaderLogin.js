import './HeaderLogin.css';
import { Link } from  'react-router-dom';
const HeaderLogin = () => {
	return(
		<nav className="navbar navbar-inverse">
		  <div className="container-fluid">
		    <div className="navbar-header">
		      <h3 className="navbar-brand">Property Management</h3>
		    </div>
		    <ul className="nav navbar-nav navbar-right">
		      <Link to='signup'><span className="glyphicon glyphicon-user"></span> Sign Up</Link>
		      <Link to='login'><span className="glyphicon glyphicon-log-in"></span> Login</Link>
		    </ul>
		  </div>
		</nav>
	);
};

export default HeaderLogin;