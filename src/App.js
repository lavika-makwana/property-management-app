import './App.css';
// import { Glyphicon } from 'react-bootstrap'; 
import Header from './components/Header/Header';
import SignUp from './components/SignUp/SignUp';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <SignUp/>
    </div>
  );
}

export default App;
