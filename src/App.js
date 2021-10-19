import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './Pages/Login/Login';
import Home from './Pages/Home/Home';
import Donepage from './Pages/Donepage/Donepage';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/">
          <Login></Login>
        </Route>
        <Route exact path="/home">
          <Home></Home>
        </Route>
        <Route exact path="/donepage">
          <Donepage></Donepage>
        </Route>
      </div>
    </Router>
  );
}

export default App;
