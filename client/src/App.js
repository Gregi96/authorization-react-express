import './App.css';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import Secret from './components/Secret/Secret.jsx';
import LoginPage from './components/LoginPage/LoginPage';
import LogoutPage from './components/LogoutPage/LogoutPage';

import Navigation from './components/Navigation/Navigation';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <hr />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/secret" component={Secret} />
          <Route path="/login" component={LoginPage} />
          <Route path="/logout" component={LogoutPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
