import './App.css';
import { Route, Switch} from 'react-router-dom';
import MainHeader from './components/Header/MainHeader';
import SignUp from './components/SignUp/SignUp';
import Login from './components/SignUp/Login';
import Error from './components/Error';
import SuperAdmin from './components/SuperAdmin/SuperAdmin';
import UserNav from './components/SuperAdmin/Users/NavBar';
import AddUser from './components/SuperAdmin/Users/AddUser';

function App() {
  return (
    <div className="App">
    	<Switch>
    		<Route path='/' exact='true'>
    			<MainHeader />
    		</Route>
        <Route path= '/superadmin' component={SuperAdmin}/>
        <Route path='/users' component={UserNav}/>
        <Route path='/add-user' component={AddUser}/>        
    		<Route path='/login' component={Login}/>
    		<Route path='/signup' component={SignUp}/>
    		<Route component={Error} /> 
    	</Switch>
    </div>
  );
}

export default App;
