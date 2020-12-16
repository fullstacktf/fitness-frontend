import React from 'react';
import './App.css';
import { Landing } from './components/layout/landing/Landing';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Login } from './components/layout/login/Login';
import { Register } from './components/layout/register/Register';

function App(): JSX.Element {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
