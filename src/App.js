import './App.css';
import { Route, Switch} from 'react-router-dom';
import MainHeader from './components/Header/MainHeader';
import SignUp from './components/SignUp/SignUp';
import Login from './components/SignUp/Login';
import Error from './components/Error';
import Header from './components/SuperAdmin/Header';
import Dashboard from './components/SuperAdmin/Content';
import Menu from './components/SuperAdmin/Menu';
import Footer from './components/SuperAdmin/Footer';

function App() {
  return (
    <div className="App">
    	{/*<Switch>
    		<Route path='/' exact='true'>
    			<MainHeader />
    		</Route>
    		<Route path='/login' component={Login}/>
    		<Route path='/signup' component={SignUp}/>
    		<Route component={Error} />
    	</Switch> */}
      <Header />
      <Menu />
      <Dashboard />
      <Footer />
    </div>
  );
}

export default App;
