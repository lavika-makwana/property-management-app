import './App.css';
import { Route, Switch} from 'react-router-dom';
import Header from './components/Header/Header';
import SuperAdmin from './components/SuperAdmin/SuperAdmin';
import SignUp from './components/SignUp/SignUp';
import Login from './components/SignUp/Login';
import Error from './components/Error';

function App() {
  return (
    <div className="App">
    	<Switch>
    		<Route path='/' exact='true'>
    			<Header />
    		</Route>
    		<Route path='/login' component={Login}/>
    		<Route path='/signup' component={SignUp}/>
    		<Route component={Error} />
    	</Switch>
      
    </div>
  );
}

export default App;
