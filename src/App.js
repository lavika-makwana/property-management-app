import './App.css';
import { Route, Switch} from 'react-router-dom';
import { Link } from 'react-router-dom';
import Header from './components/Header/Header';
import SignUp from './components/SignUp/SignUp';
import Login from './components/SignUp/Login';
import Error from './components/Error';

function App() {
  return (
    <div className="App">
    	<Switch>
    		<Route path='/'>
    			<Header />
    		</Route>
    		<Route path='/login'>
    			<Login />
    		</Route>
    		<Route path='/signup'>
    			<SignUp />
    		</Route>
    		<Route component={Error} />
    	</Switch>
      <SignUp/>
    </div>
  );
}

export default App;
