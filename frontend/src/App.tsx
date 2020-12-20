import React from 'react';
import './App.css';
import { Landing } from './components/layout/landing/Landing';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Login } from './components/layout/login/Login';
import { Register } from './components/layout/register/Register';
import { Profile } from './components/layout/profile/Profile';
import { UserCrud } from './components/layout/user-crud/UserCrud';
import { ExercisePage } from './components/layout/exercise-page/ExercisePage';
import { RoutinePage } from './components/layout/routine-page/RoutinePage';
import { ExerciseItem } from './components/layout/exercise-item/ExerciseItem';
import { RoutineItem } from './components/layout/routine-item/RoutineItem';

function App(): JSX.Element {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/userCrud" component={UserCrud} />
          <Route exact path="/exercises" component={ExercisePage} />
          <Route exact path="/exercise/:id" component={ExerciseItem} />
          <Route exact path="/routines" component={RoutinePage} />
          <Route exact path="/routine/:id" component={RoutineItem} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
