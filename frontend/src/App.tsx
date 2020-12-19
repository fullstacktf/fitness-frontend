import React from 'react';
import './App.css';
import { Landing } from './components/layout/landing/Landing';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Login } from './components/layout/login/Login';
import { Register } from './components/layout/register/Register';
import { Profile } from './components/layout/profile/Profile';

function App(): JSX.Element {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/profile" component={Profile} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
